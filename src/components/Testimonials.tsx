import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import { IconQuote } from "./ui/Icons";

const TESTIMONIALS = [
  {
    quote:
      "A Avorza entregou nossa landing page em duas semanas e a conversão triplicou já no primeiro mês de campanha. Comunicação direta do início ao fim.",
    name: "Marina Costa",
    role: "Diretora de Marketing, Nortech Capital",
  },
  {
    quote:
      "Precisávamos de um sistema web sob medida e o time entendeu o problema antes mesmo de propor a solução. Código organizado e fácil de evoluir.",
    name: "Rafael Andrade",
    role: "CTO, Fluxo ERP",
  },
  {
    quote:
      "O processo de UX/UI mudou como pensamos o produto. Testaram, ajustaram e só então construíram, e o resultado se sente em cada tela.",
    name: "Bianca Ferreira",
    role: "Fundadora, Órbita Marketplace",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative border-t border-surface-line bg-void py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center">
          <Eyebrow align="center">Depoimentos</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-silver sm:text-4xl">
            Confiança que se <span className="text-blue-cyan">constrói em resultado</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="facet-card h-full border border-surface-line bg-surface/50 p-8">
                <IconQuote className="h-7 w-9 text-blue-electric/60" />
                <p className="mt-5 font-body text-[15px] leading-relaxed text-silver-dim">
                  “{t.quote}”
                </p>
                <div className="mt-6 border-t border-surface-line pt-4">
                  <p className="font-display text-sm font-semibold uppercase tracking-wide text-silver">
                    {t.name}
                  </p>
                  <p className="mt-0.5 font-body text-xs text-silver-faint">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
