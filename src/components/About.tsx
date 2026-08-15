import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import { IconTarget, IconCode, IconBolt, IconSupport } from "./ui/Icons";

const DIFFERENTIALS = [
  {
    icon: IconTarget,
    title: "Design orientado a conversão",
    desc: "Cada elemento de tela é pensado para guiar a decisão do usuário, não apenas para parecer bonito.",
  },
  {
    icon: IconCode,
    title: "Código limpo e performático",
    desc: "Arquitetura sólida, boas práticas e performance real, sem gambiarras que custam caro depois.",
  },
  {
    icon: IconBolt,
    title: "Entrega ágil",
    desc: "Processo enxuto, comunicação direta e prazos que a gente cumpre, do briefing ao deploy.",
  },
  {
    icon: IconSupport,
    title: "Suporte contínuo",
    desc: "O trabalho não termina na entrega. Acompanhamos, ajustamos e evoluímos o que construímos juntos.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative border-t border-surface-line bg-void py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <Eyebrow>Sobre a Avorza</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-silver sm:text-4xl">
              Presença digital construída com{" "}
              <span className="text-blue-cyan">precisão de engenharia</span>
            </h2>
            <p className="mt-6 font-body text-base leading-relaxed text-silver-dim">
              Somos um estúdio de tecnologia focado em criar produtos digitais
              que sustentam negócios reais. Unimos estratégia, design e
              desenvolvimento em um único fluxo de trabalho, sem
              intermediários, sem retrabalho, para que sua marca tenha uma
              presença online tão sólida quanto sua operação.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-silver-dim">
              Do primeiro wireframe ao código em produção, cada decisão passa
              por um filtro simples: isso ajuda o usuário a agir e ajuda o
              negócio a crescer?
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {DIFFERENTIALS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="group facet-card h-full border border-surface-line bg-surface/60 p-6 transition-all duration-300 hover:border-blue-electric/50 hover:bg-surface-2">
                  <item.icon className="h-8 w-8 text-blue-cyan transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mt-4 font-display text-sm font-semibold uppercase tracking-wide text-silver">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-silver-dim">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
