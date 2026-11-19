"use client";

import { useEffect } from "react";

// Segundos do VIDEO (nao da pagina) em que cada parte aparece.
const TEMPO_CONTEUDO = 63; // 1:03 - quando a VSL manda escolher o plano
const TEMPO_BARRA = 75; // 1:15 - a barra com o preco entra depois

// De quanto em quanto tempo olhamos o relogio do video.
const INTERVALO_MS = 400;

// Se o video nao andar, o 1:03 nunca chega e a pagina fica trancada. O caso
// mais comum nao e autoplay bloqueado: e quem JA assistiu. O player mostra
// "Voce ja assistiu a este video" e nao toca nada, entao o tempo fica em 0
// para sempre. Depois deste tempo de PAGINA sem o video sair do lugar,
// libera tudo.
const VIGIA_MS = 20 * 1000;

// E se o video comecar mas travar no meio, libera depois deste tempo.
const SOCORRO_MS = 3 * 60 * 1000;

// Quanto esperar o player aparecer. Se passou disso, foi bloqueado (adblock,
// CDN fora) e o video nao vai tocar nunca - nao faz sentido segurar a pagina
// esperando um pitch que nao vem.
const ESPERA_PLAYER_MS = 10 * 1000;

const TRAVA_CONTEUDO = "vsl-travado";
const TRAVA_BARRA = "vsl-barra-travada";
const CHAVE_LIBERADO = "mm-vsl-liberado";

type Player = HTMLElement & { currentTime?: number };

// Liberar e tirar a classe do <html>: cada elemento volta com o display que
// ja era dele. Mexer no style de cada um exigiria saber quais sao flex.
const soltarConteudo = () =>
  document.documentElement.classList.remove(TRAVA_CONTEUDO);
const soltarBarra = () =>
  document.documentElement.classList.remove(TRAVA_BARRA);

function soltarTudo() {
  soltarConteudo();
  soltarBarra();
}

/** Quem ja liberou uma vez nao assiste de novo para ver a oferta. */
function marcarLiberado() {
  try {
    localStorage.setItem(CHAVE_LIBERADO, "1");
  } catch {
    // Navegacao anonima ou storage bloqueado: so perde o atalho.
  }
}

function jaLiberouAntes() {
  try {
    return localStorage.getItem(CHAVE_LIBERADO) === "1";
  } catch {
    return false;
  }
}

export function VslDelay() {
  useEffect(() => {
    if (jaLiberouAntes()) {
      soltarTudo();
      return;
    }

    let relogio: number | undefined;
    let socorro: number | undefined;
    let vigia: number | undefined;

    const limpar = () => {
      if (relogio) window.clearInterval(relogio);
      if (socorro) window.clearTimeout(socorro);
      if (vigia) window.clearTimeout(vigia);
    };

    const acabou = () => {
      marcarLiberado();
      limpar();
    };

    const ligar = () => {
      const player = document.querySelector<Player>("vturb-smartplayer");

      if (!player) {
        // Sem video nao existe pitch para esperar: melhor mostrar tudo do
        // que nao mostrar nada.
        soltarTudo();
        acabou();
        return;
      }

      // Lemos o relogio do video em vez de pedir ao player que avise.
      // O displayHiddenElements/onTime dele so vale se for registrado depois
      // que o player fica pronto; registrado antes, some sem erro nenhum - e
      // a pagina ficava trancada com o video rodando ate o fim.
      relogio = window.setInterval(() => {
        const t = player.currentTime ?? 0;
        if (t >= TEMPO_CONTEUDO) soltarConteudo();
        if (t >= TEMPO_BARRA) {
          soltarBarra();
          acabou();
        }
      }, INTERVALO_MS);

      // O video nem comecou depois de VIGIA_MS? Entao nao vai comecar:
      // ou a pessoa ja assistiu, ou o autoplay foi barrado. Libera.
      vigia = window.setTimeout(() => {
        if (!player.currentTime) {
          soltarTudo();
          acabou();
        }
      }, VIGIA_MS);

      socorro = window.setTimeout(() => {
        soltarTudo();
        acabou();
      }, SOCORRO_MS);
    };

    // O script do player entra depois da montagem; espera o custom element,
    // mas so ate ESPERA_PLAYER_MS - quem chegar primeiro decide.
    if (customElements.get("vturb-smartplayer")) {
      ligar();
    } else {
      let decidido = false;
      const espera = window.setTimeout(() => {
        if (decidido) return;
        decidido = true;
        soltarTudo();
        marcarLiberado();
      }, ESPERA_PLAYER_MS);

      customElements.whenDefined("vturb-smartplayer").then(() => {
        if (decidido) return;
        decidido = true;
        window.clearTimeout(espera);
        ligar();
      });
    }

    // Depois de liberada, o botao de compra rola ate os planos - era o que o
    // script inline do layout.tsx fazia. Aqui ele tambem destrava antes de
    // rolar, porque rolar ate um display:none nao sai do lugar. Vale para o
    // "Ver planos" do topo, que fica visivel o tempo todo no computador.
    const aoClicar = (evento: MouseEvent) => {
      const alvo = evento.target as HTMLElement | null;
      if (!alvo?.closest('[data-price-jump], a[href="#oferta"]')) return;
      soltarTudo();
      acabou();
      requestAnimationFrame(() => {
        document
          .getElementById("oferta")
          ?.scrollIntoView({ behavior: "auto", block: "start" });
      });
    };

    document.addEventListener("click", aoClicar);
    return () => {
      document.removeEventListener("click", aoClicar);
      limpar();
    };
  }, []);

  return null;
}
