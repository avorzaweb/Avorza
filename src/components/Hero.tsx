import { motion } from "framer-motion";
import logoLockup from "../assets/avorza-logo-lockup.png";
import FacetMark from "./ui/FacetMark";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="absolute inset-0 bg-grid mask-fade-b" />
      <div className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 opacity-[0.07] lg:-right-20">
        <FacetMark className="h-[560px] w-[560px] text-blue-cyan animate-drift" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void via-transparent to-void" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(30,155,215,0.16),transparent_65%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-3 border border-surface-line bg-surface/60 px-4 py-1.5 facet-btn"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-cyan shadow-glow-sm" />
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-silver-dim">
              Estúdio de tecnologia digital
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[2.1rem] font-semibold uppercase leading-[1.1] tracking-tight text-silver sm:text-6xl lg:text-[3.6rem]"
          >
            Transformamos ideias em{" "}
            <span className="text-blue-cyan text-glow">experiências digitais</span> de alto impacto
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl font-body text-lg leading-relaxed text-silver-dim"
          >
            A Avorza é um estúdio de tecnologia que projeta e constrói presença
            digital sólida: landing pages que convertem, sites e sistemas web
            sob medida, e interfaces desenhadas para funcionar tão bem quanto
            parecem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contato"
              className="facet-btn group relative inline-flex items-center gap-2 bg-blue-electric px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.15em] text-void transition-all duration-300 hover:bg-blue-cyan hover:shadow-glow-md"
            >
              Solicitar orçamento
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#servicos"
              className="facet-btn inline-flex items-center gap-2 border border-silver-faint/50 px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.15em] text-silver transition-all duration-300 hover:border-blue-cyan hover:text-blue-cyan"
            >
              Ver serviços
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto hidden w-full max-w-md lg:block"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-blue-electric/20 blur-[100px]" />
          <img
            src={logoLockup}
            alt="Avorza Soluções Digitais"
            className="w-full drop-shadow-[0_0_45px_rgba(30,155,215,0.35)]"
          />
        </motion.div>
      </div>

      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-silver-faint transition-colors hover:text-blue-cyan sm:flex"
        aria-label="Rolar para a seção Sobre"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Rolar</span>
        <span className="h-8 w-px animate-pulse bg-gradient-to-b from-blue-cyan to-transparent" />
      </motion.a>
    </section>
  );
}
