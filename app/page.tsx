const essentialCheckout =
  "https://lastlink.com/p/C9E42D93C/checkout-payment/?utm_source=organic";
const completeCheckout =
  "https://lastlink.com/p/C2D975DAB/checkout-payment/?utm_source=organic";

const subjects = [
  { icon: "🩺", title: "Sistema Único de Saúde (SUS)", text: "Memorize os principais conceitos do SUS através de músicas criadas com base nos conteúdos mais cobrados em concursos.", topics: ["Princípios e Diretrizes", "Leis 8.080 e 8.142", "Organização do SUS", "Redes de Atenção à Saúde", "Participação Social"] },
  { icon: "⚖️", title: "Ética em Enfermagem", text: "Revise os principais conteúdos de Ética e Legislação de forma simples e repetitiva.", topics: ["Código de Ética", "Direitos e deveres", "Responsabilidade profissional", "Infrações éticas", "Exercício da profissão"] },
  { icon: "🌎", title: "Saúde Coletiva", text: "Aprenda os conceitos fundamentais cobrados nas provas de Saúde Coletiva.", topics: ["Promoção da Saúde", "Vigilância em Saúde", "Epidemiologia", "Atenção Primária", "Políticas Públicas"] },
  { icon: "💊", title: "Farmacologia", text: "Reforce os principais medicamentos e conceitos cobrados nos concursos.", topics: ["Classes de medicamentos", "Administração", "Efeitos adversos", "Interações medicamentosas", "Cuidados de Enfermagem"] },
  { icon: "🚑", title: "Urgência e Emergência", text: "Revise protocolos e condutas essenciais para provas de concursos.", topics: ["PCR", "SBV", "Atendimento inicial", "Trauma", "Urgências clínicas"] },
  { icon: "🦺", title: "Biossegurança", text: "Memorize as principais normas de segurança cobradas nas provas.", topics: ["EPIs", "Precauções padrão", "Isolamentos", "Controle de infecção", "Segurança do paciente"] },
  { icon: "🤰", title: "Saúde da Mulher", text: "Reforce os conteúdos mais cobrados sobre assistência à saúde da mulher.", topics: ["Pré-natal", "Puerpério", "Planejamento familiar", "Ginecologia", "Obstetrícia"] },
  { icon: "👶", title: "Saúde da Criança", text: "Aprenda os principais temas de Pediatria e Saúde da Criança.", topics: ["Crescimento e desenvolvimento", "Imunização", "Aleitamento materno", "Principais doenças", "Assistência de Enfermagem"] },
  { icon: "📋", title: "Processo de Enfermagem", text: "Memorize todas as etapas do Processo de Enfermagem.", topics: ["SAE", "Diagnósticos", "Planejamento", "Implementação", "Avaliação"] },
  { icon: "💉", title: "Administração de Medicamentos", text: "Revise os principais conceitos para evitar erros e acertar questões.", topics: ["Vias de administração", "Cálculo de medicamentos", "Diluições", "Segurança do paciente", "Administração segura"] },
  { icon: "📜", title: "Legislação em Enfermagem", text: "Memorize as principais leis e normas da profissão.", topics: ["Lei do Exercício Profissional", "COFEN", "COREN", "Responsabilidades legais", "Direitos do profissional"] },
  { icon: "🎧", title: "Outros temas dos principais editais", status: "Playlist em constante atualização", text: "Além dos temas principais, você terá acesso a novas playlists adicionadas conforme os editais forem sendo publicados.", topics: ["Saúde do Idoso", "Saúde Mental", "Centro Cirúrgico", "CME", "Hemoterapia", "Oncologia", "Outros conteúdos recorrentes dos concursos"] },
];

const audios = [
  {
    number: "01",
    title: "Atenção Primária",
    description: "Fundamentos da Atenção Primária transformados em revisão musical.",
    src: "/media/atencao-primaria.mp3",
  },
  {
    number: "02",
    title: "Os Três Pilares da Saúde",
    description: "Conceitos essenciais reforçados de uma forma mais leve.",
    src: "/media/tres-pilares-saude.mp3",
  },
  {
    number: "03",
    title: "SUS em Ação",
    description: "Uma amostra musical sobre o Sistema Único de Saúde.",
    src: "/media/sus-em-acao.mp3",
  },
];

const genreSamples = [
  {
    number: "01",
    genre: "Sertanejo",
    title: "Pressão Alta, Atenção",
    description: "Uma revisão musical sobre hipertensão em ritmo sertanejo.",
    src: "/media/pressao-alta-atencao.mp3",
  },
  {
    number: "02",
    genre: "MPB",
    title: "Pressão na Medida Certa",
    description: "Conceitos importantes sobre pressão arterial em uma faixa de MPB.",
    src: "/media/pressao-medida-certa.mp3",
  },
  {
    number: "03",
    genre: "Pagode",
    title: "Números do Diabetes",
    description: "Valores e conceitos sobre diabetes apresentados em ritmo de pagode.",
    src: "/media/numeros-diabetes.mp3",
  },
];

const sampleGroups = [
  { id: "sus", label: "Saúde Pública e SUS", footer: "3 faixas disponíveis nesta trilha", tracks: audios },
  { id: "estilos", label: "Outros estilos", footer: "Sertanejo, MPB e pagode", tracks: genreSamples },
];

const bonuses = [
  {
    number: "01",
    title: "Checklist dos assuntos mais cobrados",
    text: "Saiba o que priorizar e acompanhe sua evolução pelos temas com maior incidência.",
    image: "/media/bonus-checklist.webp",
  },
  {
    number: "02",
    title: "Banco de questões comentadas",
    text: "Pratique após cada revisão com questões organizadas por disciplina.",
    image: "/media/bonus-questoes.webp",
  },
  {
    number: "03",
    title: "Comunidade exclusiva de alunos",
    text: "Troque experiências, tire dúvidas e acompanhe as novidades do método.",
    image: "/media/bonus-comunidade.webp",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <nav className="nav wrap">
          <a className="brand" href="#inicio" aria-label="Memória Musical — início">
            <span className="brand-mark">♪</span>
            <span>MEMÓRIA MUSICAL</span>
          </a>
          <a className="nav-link" href="#oferta">Ver planos</a>
        </nav>

        <div className="hero-grid wrap">
          <div className="hero-copy">
            <span className="eyebrow light">Para concursos de enfermagem</span>
            <h1>
              Aprenda a memorizar os assuntos mais cobrados dos concursos de
              Enfermagem em apenas <em>20 minutos por dia</em>, sem depender apenas
              de PDFs e videoaulas.
            </h1>
            <div
              className="hero-video"
              aria-label="Vídeo de apresentação do Método da Memória Musical"
              dangerouslySetInnerHTML={{
                __html:
                  '<vturb-smartplayer id="vid-6a7f903d9b544b5366ba4beb" style="display:block;margin:0 auto;width:100%;max-width:400px"><div class="vturb-player-placeholder" style="position:relative;width:100%;padding:177.77777777777777% 0 0;z-index:0;background-color:black"></div></vturb-smartplayer>',
              }}
            />
            <p className="lead">
              Reforce os assuntos mais cobrados com músicas criadas para acompanhar
              seus plantões, deslocamentos e os poucos minutos livres do dia.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="?ir=precos#oferta">
                <span aria-hidden="true">▶</span> Quero memorizar ouvindo música · Acesso imediato
              </a>
              <span className="microcopy">Sem cadastro · Dê o play agora</span>
            </div>
            <div className="hero-proof">
              <span>✓ Acesso imediato</span>
              <span>✓ Celular e computador</span>
              <span>✓ Garantia de 30 dias</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <img
              src="/media/oferta-memoria-musical.webp"
              alt="Método da Memória Musical no celular com comunidade, questões e checklist"
            />
            <div className="floating-card">
              <span className="sound-bars"><i /><i /><i /><i /><i /></span>
              <div>
                <small>Agora tocando</small>
                <strong>Revisão de SUS</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="problem section">
        <div className="wrap narrow">
          <span className="eyebrow">A frustração é conhecida</span>
          <h2>Você estudou. Mas, na prova, a resposta simplesmente não veio.</h2>
          <p className="section-intro">
            PDFs longos e horas de videoaula podem ensinar o conteúdo. O problema
            aparece depois: encontrar tempo e energia para reencontrar a matéria
            vezes suficientes para ela permanecer acessível.
          </p>
          <div className="memory-test">
            <div>
              <span className="test-label">Complete mentalmente:</span>
              <blockquote>“Parabéns pra…”</blockquote>
              <strong>Fácil, não é?</strong>
            </div>
            <div className="divider-arrow">→</div>
            <div>
              <span className="test-label">Agora tente lembrar:</span>
              <blockquote>O 5º tópico do último PDF</blockquote>
              <strong>Percebe a diferença?</strong>
            </div>
          </div>
          <p className="insight">
            O problema não é falta de capacidade. <strong>É a forma como a revisão
            cabe — ou não cabe — na sua rotina.</strong>
          </p>
        </div>
      </section>

      <section className="mechanism section dark">
        <div className="wrap mechanism-grid">
          <div>
            <span className="eyebrow light">O mecanismo</span>
            <h2>Você não precisa encontrar mais horas. Precisa reencontrar a matéria mais vezes.</h2>
          </div>
          <div className="mechanism-copy">
            <p>
              O Método da Memória Musical transforma conteúdos recorrentes dos
              concursos de enfermagem em faixas organizadas por disciplina.
            </p>
            <p>
              Assim, sua revisão pode continuar no trânsito, no intervalo do
              plantão, caminhando ou cuidando da casa — sem substituir seu estudo
              principal.
            </p>
          </div>
          <div className="routine-strip">
            {["Estude", "Dê o play", "Reencontre", "Reconheça"].map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="listen section" id="experimente">
        <div className="wrap narrow">
          <div className="section-heading center listen-heading">
            <span className="eyebrow light">Amostras gratuitas</span>
            <h2>Ouça agora. Sem cadastro, sem compromisso.</h2>
            <p>Estas são faixas reais do método. Escolha uma matéria e comprove você mesmo.</p>
          </div>

          <div className="sample-player">
            <div className="player-window-bar"><i /><i /><i /><span>Memória Musical · Player</span></div>
            {sampleGroups.map((group, index) => (
              <input key={group.id} type="radio" name="sample-tab" id={`sample-${group.id}`} defaultChecked={index === 0} />
            ))}
            <div className="sample-tabs" role="tablist" aria-label="Disciplinas disponíveis">
              {sampleGroups.map((group) => <label key={group.id} htmlFor={`sample-${group.id}`}>{group.label}</label>)}
            </div>
            <div className="sample-panels">
              {sampleGroups.map((group) => (
                <div className={`sample-panel panel-${group.id}`} key={group.id}>
                  {group.tracks.map((track) => (
                    <article className="sample-track" key={track.title}>
                      <div className="track-meta">
                        <div><strong>{track.title}</strong><small>{"genre" in track ? track.genre : track.description}</small></div>
                      </div>
                      <audio controls controlsList="nodownload noplaybackrate" disablePictureInPicture preload="none" aria-label={`Ouvir ${track.title}`}><source src={track.src} type="audio/mpeg" /></audio>
                    </article>
                  ))}
                  <p className="player-footer">{group.footer} · faixas completas disponíveis na plataforma</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="fit section">
        <div className="wrap fit-grid">
          <div className="fit-visual">
            <img src="/media/fernanda-virada.webp" alt="Fones de ouvido sobre materiais de estudo" loading="lazy" decoding="async" />
            <div className="time-badge"><strong>20</strong><span>minutos<br />por dia</span></div>
          </div>
          <div>
            <span className="eyebrow">Feito para a rotina real</span>
            <h2>Revise até quando você não está “sentada para estudar”.</h2>
            <div className="use-list">
              {[
                ["No trânsito", "Transforme o deslocamento em revisão."],
                ["No plantão", "Use uma pausa curta para reencontrar um tema."],
                ["Nas tarefas", "Continue ouvindo enquanto cuida da rotina."],
                ["Na caminhada", "Movimente o corpo sem abandonar o conteúdo."],
              ].map(([title, text], index) => (
                <div key={title}>
                  <span>0{index + 1}</span>
                  <p><strong>{title}</strong>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contents section" id="conteudos">
        <div className="wrap">
          <div className="section-heading center">
            <span className="eyebrow">Dentro da plataforma</span>
            <h2>Os temas que mais aparecem nos editais, prontos para acompanhar você.</h2>
          </div>
          <div className="subject-grid">
            {subjects.map((subject, index) => (
              <details key={subject.title} className="subject-card">
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{subject.title}</strong>
                  <small>Ver o que você vai revisar <b>+</b></small>
                </summary>
                <div className="subject-details">
                  <div className="subject-copy">
                    <strong className="playlist-status">{subject.status || "Playlist disponível"}</strong>
                    <p>{subject.text}</p>
                    <h4>{index === 11 ? "Você recebe atualizações com assuntos como:" : "Você vai revisar:"}</h4>
                    <ul>{subject.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
                    <div className="subject-value">Este é apenas um dos módulos disponíveis. No Plano Completo você libera acesso a todas as playlists e às futuras atualizações dos editais.</div>
                  </div>
                </div>
              </details>
            ))}
          </div>
          <div className="center-cta">
            <a className="button dark-button" href="#oferta">Quero escolher meu acesso <span>↓</span></a>
          </div>
        </div>
      </section>

      <section className="comparison section dark">
        <div className="wrap">
          <div className="section-heading center light-heading">
            <span className="eyebrow light">Menos atrito, mais frequência</span>
            <h2>Qual revisão tem mais chance de caber no seu dia?</h2>
          </div>
          <div className="compare-grid">
            <article className="compare-old">
              <span className="compare-label">Revisão tradicional</span>
              <h3>Depende de parar tudo.</h3>
              <ul>
                <li>× PDFs extensos para reler</li>
                <li>× Mais tempo diante da tela</li>
                <li>× Difícil manter todos os dias</li>
                <li>× Revisões deixadas para depois</li>
              </ul>
            </article>
            <article className="compare-new">
              <span className="compare-label">Memória Musical</span>
              <h3>Acompanha o que você já faz.</h3>
              <ul>
                <li>✓ Faixas rápidas por disciplina</li>
                <li>✓ Ouça pelo celular</li>
                <li>✓ Mais contato com os conteúdos</li>
                <li>✓ Fácil de repetir na rotina</li>
              </ul>
            </article>
          </div>
          <p className="disclaimer-inline">
            O método é complementar: não substitui aulas, leitura ou resolução de questões.
          </p>
        </div>
      </section>

      <section className="bonuses section">
        <div className="wrap">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">No plano completo</span>
              <h2>Três recursos para transformar revisão em preparação.</h2>
            </div>
            <p>Ouça, priorize o que estudar, pratique e mantenha o ritmo com outros alunos.</p>
          </div>
          <div className="bonus-grid">
            {bonuses.map((bonus) => (
              <article key={bonus.title}>
                <img src={bonus.image} alt={`Capa: ${bonus.title}`} loading="lazy" decoding="async" />
                <div className="bonus-copy">
                  <span>Bônus {bonus.number}</span>
                  <h3>{bonus.title}</h3>
                  <p>{bonus.text}</p>
                  <strong>Incluído no Plano Completo</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials section soft">
        <div className="wrap">
          <div className="section-heading center">
            <span className="eyebrow">Experiência de alunas</span>
            <h2>Veja os relatos de quem incluiu as músicas na rotina.</h2>
          </div>
          <div className="testimonial-grid">
            {[
              ["depoimento-juliana.webp", "Depoimento de Juliana Rocha"],
              ["depoimento-camila.webp", "Depoimento de Camila Santos"],
              ["depoimento-amanda.webp", "Depoimento de Amanda Ferreira"],
            ].map(([image, alt]) => (
              <figure key={image}><img src={`/media/${image}`} alt={alt} loading="lazy" decoding="async" /></figure>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing section" id="oferta">
        <div className="wrap">
          <div className="section-heading center">
            <span className="eyebrow">Escolha seu acesso</span>
            <h2>Comece hoje a estudar com músicas.</h2>
            <p>Os dois planos têm acesso imediato e garantia de 30 dias.</p>
          </div>

          <div className="price-grid">
            <article className="price-card essential-plan">
              <span className="price-ribbon essential-ribbon">Para começar</span>
              <span className="plan-tag">Plano Essencial</span>
              <h3>Acesso ao Método da Memória Musical</h3>
              <div className="single-price"><small>R$</small><strong>67</strong><small>,00</small><span className="price-period">/mês</span></div>
              <p className="cash-price light-copy">cobrança mensal recorrente</p>
              <ul>
                <li>✓ Mais de 1.000 músicas</li>
                <li>✓ Músicas baseadas nos editais de Enfermagem</li>
                <li>✓ Biblioteca completa de músicas</li>
                <li>✓ Playlists organizadas por disciplina</li>
                <li>✓ Acesso pelo celular e computador</li>
                <li>✓ Atualizações das músicas</li>
              </ul>
              <a
                className="button price-button essential-button"
                href={essentialCheckout}
                data-goatcounter-click="checkout-plano-essencial-67"
                data-goatcounter-title="Clique no checkout — Plano Essencial R$ 67"
                data-goatcounter-no-session="1"
              >
                Assinar mensal por R$ 67 <span>→</span>
              </a>
            </article>

            <article className="price-card featured">
              <span className="price-ribbon complete-ribbon">Melhor escolha</span>
              <span className="plan-tag">Anual · Plano Completo</span>
              <h3>Todo o método e todos os bônus</h3>
              <div className="annual-price"><small>R$</small><strong>19,99</strong><span>/mês</span></div>
              <p className="annual-payment">12x de R$ 19,99 no cartão · ou R$ 197 à vista</p>
              <span className="value-badge">70% mais barato que o mensal</span>
              <ul>
                <li>✓ Tudo do Plano Essencial</li>
                <li>✓ Checklist dos assuntos mais cobrados</li>
                <li>✓ Banco de questões comentadas</li>
                <li>✓ Comunidade exclusiva de alunos</li>
                <li>✓ Novas disciplinas e atualizações</li>
                <li>✓ Suporte prioritário</li>
              </ul>
              <a
                className="button primary price-button"
                href={completeCheckout}
                data-goatcounter-click="checkout-plano-completo-197"
                data-goatcounter-title="Clique no checkout — Plano Completo R$ 197"
                data-goatcounter-no-session="1"
              >
                Quero o Plano Completo <span>→</span>
              </a>
            </article>
          </div>
          <p className="secure-note">🔒 Compra segura · Liberação imediata · Garantia de 30 dias</p>
        </div>
      </section>

      <section className="guarantee section dark">
        <div className="wrap guarantee-grid">
          <div className="guarantee-seal"><strong>30</strong><span>DIAS</span></div>
          <div>
            <span className="eyebrow light">Risco reduzido</span>
            <h2>Ouça, explore e veja se o método cabe na sua rotina.</h2>
            <p>
              Você tem 30 dias para experimentar. Se perceber que o Método da
              Memória Musical não faz sentido para você, basta solicitar o reembolso.
            </p>
            <strong>O risco fica do nosso lado.</strong>
          </div>
        </div>
      </section>

      <section className="faq section">
        <div className="wrap narrow">
          <div className="section-heading">
            <span className="eyebrow">Perguntas frequentes</span>
            <h2>Antes de dar o play, tire suas dúvidas.</h2>
          </div>
          <div className="faq-list">
            {[
              [
                "1. O que é o Método da Memória Musical®?",
                "O Método da Memória Musical® é uma forma diferente de complementar seus estudos para concursos de Enfermagem. Em vez de depender apenas de PDFs e videoaulas, você também revisa os conteúdos por meio de músicas criadas com base nos principais assuntos cobrados nos editais.",
              ],
              [
                "2. O Método da Memória Musical® substitui PDFs, videoaulas ou cursos?",
                "Não.\n\nEle foi desenvolvido para complementar sua preparação. Você continua estudando pelos materiais tradicionais e utiliza as músicas para reforçar e revisar os conteúdos de forma prática durante a rotina.",
              ],
              [
                "3. Como estudar ouvindo música pode ajudar?",
                "As músicas permitem que você mantenha contato frequente com os conteúdos já estudados, aproveitando momentos em que normalmente não estaria revisando, como no carro, caminhando, fazendo tarefas de casa ou nos intervalos do trabalho.",
              ],
              [
                "4. Funciona mesmo para quem trabalha em plantão?",
                "Sim.\n\nO método foi pensado justamente para quem tem pouco tempo disponível. Como as músicas podem ser ouvidas em diferentes momentos do dia, fica mais fácil incluir revisões na rotina sem precisar passar horas extras sentado estudando.",
              ],
              [
                "5. Nunca consegui decorar nada com música. Mesmo assim vale a pena?",
                "Sim.\n\nVocê não precisa cantar nem ter facilidade musical. As músicas funcionam como uma ferramenta complementar de revisão. Muitas pessoas percebem que a combinação entre ritmo e repetição torna o contato com o conteúdo mais frequente e agradável.",
              ],
              [
                "6. As músicas são baseadas no edital?",
                "Sim.\n\nAs músicas são desenvolvidas com base nos assuntos presentes nos editais de concursos de Enfermagem, com prioridade para os conteúdos mais recorrentes nas provas. Como cada concurso pode apresentar temas e exigências específicas, o Método da Memória Musical deve ser utilizado como complemento ao estudo direcionado pelo edital do concurso que você pretende prestar.",
              ],
              [
                "7. Para quais concursos o método serve?",
                "O Método da Memória Musical® foi desenvolvido para concursos da área da Enfermagem. Como cada edital possui suas particularidades, ele deve ser utilizado como complemento à preparação específica para o concurso que você pretende prestar.",
              ],
              [
                "8. Sou iniciante. Esse método é para mim?",
                "Sim.\n\nSe você está começando agora, as músicas ajudam a reforçar o conteúdo desde o início dos estudos. E, se já estuda há algum tempo, elas podem complementar sua rotina de revisões.",
              ],
              [
                "9. Tenho pouco tempo para estudar. Ainda vale a pena?",
                "Sim.\n\nUma das maiores vantagens do método é justamente permitir que você aproveite momentos do dia que normalmente seriam improdutivos para reforçar os conteúdos já estudados.",
              ],
              [
                "10. Posso acessar pelo celular?",
                "Sim.\n\nVocê poderá acessar a plataforma pelo celular, tablet ou computador, estudando de onde estiver.",
              ],
              [
                "11. O acesso é imediato?",
                "Sim.\n\nApós a confirmação do pagamento, seu acesso é liberado e você já pode começar a utilizar a plataforma.",
              ],
              [
                "12. Vou receber atualizações?",
                "Sempre que novos conteúdos forem adicionados dentro do período de acesso do seu plano, eles ficarão disponíveis na plataforma conforme as condições da oferta.",
              ],
              [
                "13. E se eu não gostar?",
                "Você conta com uma garantia de 7 dias.\n\nAssim, poderá conhecer a plataforma e decidir com tranquilidade se o Método da Memória Musical® faz sentido para a sua preparação.",
              ],
              [
                "14. Preciso estudar todos os dias ouvindo música?",
                "Não.\n\nAs músicas são uma ferramenta para complementar suas revisões. Você pode utilizá-las nos momentos que fizerem sentido para a sua rotina de estudos.",
              ],
              [
                "15. Em quanto tempo vou perceber resultados?",
                "Cada pessoa possui uma rotina e um ritmo de aprendizado diferentes.\n\nO Método da Memória Musical® foi criado para facilitar suas revisões e complementar sua preparação, mas o desempenho em concursos depende de diversos fatores, como constância, planejamento e dedicação aos estudos.",
              ],
              [
                "16. Como começo depois da compra?",
                "É simples.\n\n1. Finalize sua compra.\n2. Receba o acesso imediatamente.\n3. Entre na plataforma.\n4. Escolha a playlist do assunto que deseja revisar.\n5. Comece a estudar utilizando o Método da Memória Musical®.",
              ],
            ].map(([question, answer]) => (
              <details key={question}>
                <summary>{question}<span>+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="wrap narrow">
          <span className="eyebrow light">Sua próxima revisão pode começar agora</span>
          <h2>Deixe a matéria acompanhar você — e não o contrário.</h2>
          <p>Escolha o plano que combina com sua preparação e receba o acesso imediatamente.</p>
          <a className="button primary" href="#oferta">Quero começar agora <span>↑</span></a>
        </div>
      </section>

      <section className="whatsapp-support" aria-labelledby="whatsapp-support-title">
        <div className="wrap narrow whatsapp-support-inner">
          <span className="eyebrow">Atendimento</span>
          <h2 id="whatsapp-support-title">Ainda ficou com alguma dúvida?</h2>
          <p>Chame nosso suporte no WhatsApp. Estamos disponíveis para ajudar você antes de começar.</p>
          <a
            className="button whatsapp-button"
            href="https://wa.me/5516992344060?text=Ol%C3%A1%21%20Ainda%20tenho%20algumas%20d%C3%BAvidas%20sobre%20o%20M%C3%A9todo%20da%20Mem%C3%B3ria%20Musical."
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com o suporte no WhatsApp <span>→</span>
          </a>
        </div>
      </section>

      <footer>
        <div className="wrap footer-inner">
          <a className="brand" href="#inicio"><span className="brand-mark">♪</span><span>MEMÓRIA MUSICAL</span></a>
          <p>© 2026 Método da Memória Musical. Todos os direitos reservados.</p>
          <p className="legal">Este produto é um recurso complementar de revisão e não garante aprovação. Resultados variam conforme dedicação, rotina de estudos e outros fatores individuais.</p>
        </div>
      </footer>
    </main>
  );
}
