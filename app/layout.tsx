import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://memoria-musical-enfermagem.taciojoga10.chatgpt.site"),
  title: "Memória Musical | Revisão para Concursos de Enfermagem",
  description:
    "Reforce os assuntos mais cobrados nos concursos de enfermagem com músicas que acompanham sua rotina.",
  openGraph: {
    title: "Memória Musical | Concursos de Enfermagem",
    description: "Faça a matéria voltar à memória.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Memória Musical | Concursos de Enfermagem",
    description: "Faça a matéria voltar à memória.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <script dangerouslySetInnerHTML={{ __html: 'window.pixelId="6a668772849ca51086a296f7";' }} />
        <script src="https://cdn.utmify.com.br/scripts/pixel/pixel.js" async defer />
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck=""
          data-utmify-prevent-subids=""
          async
          defer
        />
        <script
          data-goatcounter="https://enfermeiro.goatcounter.com/count"
          src="https://gc.zgo.at/count.js"
          async
        />
        <script
          src="https://scripts.converteai.net/f7f63c56-fc11-4d6b-889e-71d2f24f657c/players/6a7f903d9b544b5366ba4beb/v4/player.js"
          async
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html:
              '(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","xtqlk5gjp2");',
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
