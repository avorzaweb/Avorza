import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import { IconLanding, IconWeb, IconPalette, IconUX, IconArrowRight } from "./ui/Icons";

const SERVICES = [
  {
    icon: IconLanding,
    tag: "01",
    title: "Landing Pages",
    desc: "Páginas de alta conversão para campanhas, lançamentos e captação, rápidas, objetivas e construídas para transformar visita em resultado.",
  },
  {
    icon: IconWeb,
    tag: "02",
    title: "Desenvolvimento Web",
    desc: "Sites institucionais, sistemas web e aplicações sob medida, com arquitetura pensada para crescer junto com a sua operação.",
  },
  {
    icon: IconPalette,
    tag: "03",
    title: "Web Design",
    desc: "Identidade visual e interfaces modernas que traduzem o posicionamento da sua marca em uma experiência coerente na web.",
  },
  {
    icon: IconUX,
    tag: "04",
    title: "Design UX/UI",
    desc: "Pesquisa de usuário, wireframes, protótipos e testes de usabilidade, decisões de design orientadas por dados, não por achismo.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative border-t border-surface-line bg-surface/40 py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow>O que fazemos</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-silver sm:text-4xl">
            Quatro frentes, <span className="text-blue-cyan">um único padrão de qualidade</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="facet-card-lg group relative h-full overflow-hidden border border-surface-line bg-void/60 p-8 transition-all duration-300 hover:border-blue-electric/60 hover:shadow-glow-sm">
                <span className="absolute right-6 top-6 font-mono text-4xl font-semibold text-surface-line transition-colors duration-300 group-hover:text-blue-electric/20">
                  {s.tag}
                </span>
                <div className="flex h-14 w-14 items-center justify-center border border-blue-electric/30 bg-blue-electric/5 facet-btn">
                  <s.icon className="h-7 w-7 text-blue-cyan" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold uppercase tracking-wide text-silver">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-md font-body text-sm leading-relaxed text-silver-dim">
                  {s.desc}
                </p>
                <a
                  href="#contato"
                  className="mt-5 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.15em] text-blue-cyan opacity-80 transition-all duration-300 hover:gap-3 hover:opacity-100"
                >
                  Solicitar proposta
                  <IconArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
