import { useEffect, useState } from "react";
import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import { IconArrowRight } from "./ui/Icons";

export interface Project {
  id: string;
  title: string;
  description: string;
  repoUrl: string;
  liveUrl?: string;
  coverImage?: string;
  tags: string[];
  language?: string;
  stars?: number;
  featured?: boolean;
  order?: number;
}

const LANGUAGE_DOT: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F1E05A",
  Python: "#3572A5",
  HTML: "#E34C26",
  CSS: "#563D7C",
  Java: "#B07219",
  PHP: "#4F5D95",
  Go: "#00ADD8",
};

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current">
      <path d="M10 1.5l2.6 5.4 5.9.7-4.4 4 1.2 5.9L10 14.6l-5.3 2.9 1.2-5.9-4.4-4 5.9-.7L10 1.5z" />
    </svg>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <a
        href={project.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="facet-card group relative flex h-full flex-col overflow-hidden border border-surface-line bg-surface/40 transition-all duration-300 hover:border-blue-cyan/60 hover:bg-surface/70 hover:shadow-glow-sm"
      >
        {project.coverImage ? (
          <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-surface-line bg-void">
            <img
              src={project.coverImage}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
          </div>
        ) : (
          <div className="relative flex aspect-[16/9] w-full items-center justify-center border-b border-surface-line bg-grid bg-void">
            <span className="font-display text-3xl font-semibold uppercase tracking-[0.15em] text-silver-faint/40">
              {project.title.slice(0, 2)}
            </span>
          </div>
        )}

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg font-semibold text-silver transition-colors group-hover:text-blue-cyan">
              {project.title}
            </h3>
            {project.featured && (
              <span className="shrink-0 border border-blue-cyan/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-blue-cyan">
                Destaque
              </span>
            )}
          </div>

          <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-silver-dim">
            {project.description}
          </p>

          {project.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="border border-surface-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-silver-faint"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-5 flex items-center justify-between border-t border-surface-line pt-4">
            <div className="flex items-center gap-3 font-mono text-[11px] text-silver-faint">
              {project.language && (
                <span className="inline-flex items-center gap-1.5">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: LANGUAGE_DOT[project.language] ?? "#2AB6E8" }}
                  />
                  {project.language}
                </span>
              )}
              {typeof project.stars === "number" && (
                <span className="inline-flex items-center gap-1">
                  <StarIcon />
                  {project.stars}
                </span>
              )}
            </div>
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-blue-cyan opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Ver código
              <IconArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </a>
    </Reveal>
  );
}

function ProjectSkeleton() {
  return (
    <div className="facet-card h-full animate-pulse border border-surface-line bg-surface/30">
      <div className="aspect-[16/9] w-full border-b border-surface-line bg-surface-2" />
      <div className="space-y-3 p-6">
        <div className="h-4 w-2/3 bg-surface-2" />
        <div className="h-3 w-full bg-surface-2" />
        <div className="h-3 w-4/5 bg-surface-2" />
      </div>
    </div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    fetch("/projects.json", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error("failed");
        return res.json();
      })
      .then((data: Project[]) => {
        if (!active) return;
        const sorted = [...data].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
        setProjects(sorted);
      })
      .catch(() => {
        if (active) setError(true);
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="projetos" className="relative border-t border-surface-line bg-surface/40 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow>Portfólio</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold uppercase leading-tight text-silver sm:text-4xl">
            Projetos <span className="text-blue-cyan text-glow">realizados</span>
          </h2>
          <p className="mt-4 max-w-xl font-body text-silver-dim">
            Uma seleção de projetos construídos pela Avorza, direto do nosso
            GitHub, código real, em produção.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects === null &&
            !error &&
            Array.from({ length: 3 }).map((_, i) => <ProjectSkeleton key={i} />)}

          {error && (
            <div className="col-span-full border border-surface-line bg-surface/30 px-6 py-14 text-center">
              <p className="font-body text-sm text-silver-dim">
                Não foi possível carregar os projetos agora. Tente novamente em instantes.
              </p>
            </div>
          )}

          {projects !== null && projects.length === 0 && !error && (
            <div className="col-span-full border border-surface-line bg-surface/30 px-6 py-14 text-center">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-cyan/80">
                Em construção
              </p>
              <p className="mt-3 font-body text-sm text-silver-dim">
                Novos projetos estão a caminho. Volte em breve para conferir.
              </p>
            </div>
          )}

          {projects?.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
