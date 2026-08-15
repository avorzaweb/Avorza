import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";

const STEPS = [
  {
    n: "01",
    title: "Descoberta",
    desc: "Entendemos seu negócio, seu público e o objetivo real por trás do projeto antes de desenhar qualquer tela.",
  },
  {
    n: "02",
    title: "Design",
    desc: "Wireframes, identidade visual e protótipos navegáveis, validamos a experiência antes de escrever código.",
  },
  {
    n: "03",
    title: "Desenvolvimento",
    desc: "Construção com código limpo, testes e checkpoints frequentes para você acompanhar cada etapa da entrega.",
  },
  {
    n: "04",
    title: "Entrega & Suporte",
    desc: "Publicação, treinamento se necessário, e acompanhamento contínuo para o produto evoluir com o seu negócio.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="relative border-t border-surface-line bg-void py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow>Como trabalhamos</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-silver sm:text-4xl">
            Um processo <span className="text-blue-cyan">claro, do briefing ao ar</span>
          </h2>
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-blue-electric/50 to-transparent lg:block" />
          <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.1}>
                <div className="relative flex gap-5 lg:block lg:gap-0">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center border border-blue-electric bg-void font-mono text-sm font-semibold text-blue-cyan shadow-glow-sm facet-btn lg:mb-6">
                    {step.n}
                  </div>
                  <div className="lg:pr-4">
                    <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-silver">
                      {step.title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-silver-dim">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
