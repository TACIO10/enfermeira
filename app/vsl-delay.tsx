"use client";

import { useEffect } from "react";

// Segundos do VIDEO (nao da pagina) em que cada parte aparece.
const TEMPO_CONTEUDO = 63; // 1:03 - quando a VSL manda escolher o plano
const TEMPO_BARRA = 75; // 1:15 - a barra com o preco entra depois

// Se o video nao andar, o 1:03 nunca chega e a pagina fica trancada. O caso
// mais comum nao e autoplay bloqueado: e quem JA assistiu. O player mostra
// "Voce ja assistiu a este video" e nao toca nada, entao o tempo fica em 0
// para sempre. Depois deste tempo de PAGINA sem o video sair do lugar,
// libera tudo.
const VIGIA_MS = 20 * 1000;

// E se o video comecar mas travar no meio, libera depois deste tempo.
const SOCORRO_MS = 3 * 60 * 1000;

// Quanto esperar o script do player aparecer. Se passou disso, ele foi
// bloqueado (adblock, CDN fora) e o video nao vai tocar nunca - nao faz
// sentido segurar a pagina esperando um pitch que nao vem.
const ESPERA_PLAYER_MS = 10 * 1000;

const TRAVA_CONTEUDO = "vsl-travado";
const TRAVA_BARRA = "vsl-barra-travada";

type Player = HTMLElement & {
  currentTime?: number;
  displayHiddenElements?: (
    segundos: number,
    seletores: string[],
    opcoes?: { persist?: boolean; display?: string; callback?: () => void },
  ) => void;
};

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

export function VslDelay() {
  useEffect(() => {
    let socorro: number | undefined;
    let vigia: number | undefined;

    const ligar = () => {
      const player = document.querySelector<Player>("vturb-smartplayer");

      if (!player?.displayHiddenElements) {
        // Player nao carregou. Sem video nao existe pitch para esperar:
        // melhor mostrar tudo do que nao mostrar nada.
        soltarTudo();
        return;
      }

      // A lista de seletores vai vazia de proposito: quem esconde e mostra e
      // a classe no <html>, entao aqui o player serve so de relogio do video.
      // `persist` faz ele lembrar que esta pessoa ja liberou: quem volta
      // amanha nao precisa assistir de novo para ver a oferta.
      player.displayHiddenElements(TEMPO_CONTEUDO, [], {
        persist: true,
        callback: soltarConteudo,
      });
      player.displayHiddenElements(TEMPO_BARRA, [], {
        persist: true,
        callback: soltarBarra,
      });

      // O video nem comecou depois de VIGIA_MS? Entao nao vai comecar:
      // ou a pessoa ja assistiu, ou o autoplay foi barrado. Libera.
      vigia = window.setTimeout(() => {
        if (!player.currentTime) soltarTudo();
      }, VIGIA_MS);

      socorro = window.setTimeout(soltarTudo, SOCORRO_MS);
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
      requestAnimationFrame(() => {
        document
          .getElementById("oferta")
          ?.scrollIntoView({ behavior: "auto", block: "start" });
      });
    };

    document.addEventListener("click", aoClicar);
    return () => {
      document.removeEventListener("click", aoClicar);
      if (socorro) window.clearTimeout(socorro);
      if (vigia) window.clearTimeout(vigia);
    };
  }, []);

  return null;
}
