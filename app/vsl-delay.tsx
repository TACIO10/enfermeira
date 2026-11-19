"use client";

import { useEffect } from "react";

// Segundos do VIDEO (nao da pagina) em que cada parte aparece.
const TEMPO_CONTEUDO = 63; // 1:03 - quando a VSL manda escolher o plano
const TEMPO_BARRA = 75; // 1:15 - a barra com o preco entra depois

// Rede de seguranca: se o video nao tocar (autoplay bloqueado, a pessoa nunca
// deu play), o player nunca chega no 1:03 e a pagina ficaria so com o video,
// para sempre. Depois deste tempo de PAGINA tudo aparece de qualquer jeito.
const SOCORRO_MS = 3 * 60 * 1000;

// Quanto esperar o script do player aparecer. Se passou disso, ele foi
// bloqueado (adblock, CDN fora) e o video nao vai tocar nunca - nao faz
// sentido segurar a pagina esperando um pitch que nao vem.
const ESPERA_PLAYER_MS = 10 * 1000;

const SELETOR_CONTEUDO = ".vsl-oculto";
const SELETOR_BARRA = ".offer-bar";

type Player = HTMLElement & {
  displayHiddenElements?: (
    segundos: number,
    seletores: string[],
    opcoes?: { persist?: boolean; display?: string; callback?: () => void },
  ) => void;
};

/** A barra e fixa: o espaco dela no topo so vale enquanto ela esta na tela. */
function marcarBarraVisivel() {
  document.body.classList.add("barra-visivel");
}

/**
 * O player escreve `display: <valor> !important` no style do elemento, e o
 * padrao dele e `block`. A barra e flex: sem dizer isso aqui, ela voltaria
 * como block e os itens dela empilhariam.
 */
function revelar(seletor: string, display: string) {
  document.querySelectorAll<HTMLElement>(seletor).forEach((el) => {
    el.style.setProperty("display", display, "important");
  });
}

function revelarTudo() {
  revelar(SELETOR_CONTEUDO, "block");
  revelar(SELETOR_BARRA, "flex");
  marcarBarraVisivel();
}

export function VslDelay() {
  useEffect(() => {
    let socorro: number | undefined;

    const ligar = () => {
      const player = document.querySelector<Player>("vturb-smartplayer");

      // `persist` faz o player lembrar que esta pessoa ja liberou: quem volta
      // amanha nao precisa assistir de novo para ver a oferta.
      if (player?.displayHiddenElements) {
        player.displayHiddenElements(TEMPO_CONTEUDO, [SELETOR_CONTEUDO], {
          persist: true,
        });
        player.displayHiddenElements(TEMPO_BARRA, [SELETOR_BARRA], {
          persist: true,
          display: "flex",
          callback: marcarBarraVisivel,
        });
      } else {
        // Player nao carregou (CDN fora do ar, bloqueador). Sem isso a pagina
        // ficaria vazia: melhor mostrar tudo do que nao mostrar nada.
        revelarTudo();
        return;
      }

      socorro = window.setTimeout(revelarTudo, SOCORRO_MS);
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
        revelarTudo();
      }, ESPERA_PLAYER_MS);

      customElements.whenDefined("vturb-smartplayer").then(() => {
        if (decidido) return;
        decidido = true;
        window.clearTimeout(espera);
        ligar();
      });
    }

    // Quem ja chegou decidido clica no botao do topo e abre a pagina na hora,
    // sem esperar o video. O handler antigo so rolava ate #oferta, que estava
    // escondido - rolar para um display:none nao sai do lugar.
    const aoClicar = (evento: MouseEvent) => {
      const alvo = evento.target as HTMLElement | null;
      if (!alvo?.closest("[data-price-jump]")) return;
      revelarTudo();
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
    };
  }, []);

  return null;
}
