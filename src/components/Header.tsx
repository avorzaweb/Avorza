import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoIcon from "../assets/avorza-icon.png";
import { goToSection } from "../lib/navigation";

const NAV_LINKS = [
  { label: "Sobre", id: "sobre" },
  { label: "Serviços", id: "servicos" },
  { label: "Projetos", id: "projetos" },
  { label: "Processo", id: "processo" },
  { label: "Depoimentos", id: "depoimentos" },
];

interface HeaderProps {
  onOpenQuote: () => void;
}

export default function Header({ onOpenQuote }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const ids = NAV_LINKS.map((l) => l.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  const handleNavClick = (id: string) => {
    setOpen(false);
    goToSection(id, location.pathname, navigate);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-void/85 backdrop-blur-md border-b border-surface-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <button
          onClick={() => handleNavClick("top")}
          className="flex items-center gap-3 group"
        >
          <img
            src={logoIcon}
            alt="Avorza"
            className="h-9 w-auto drop-shadow-[0_0_10px_rgba(42,182,232,0.35)] transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-[0.2em] text-silver">
              AVORZA
            </span>
            <span className="font-mono text-[9px] tracking-[0.25em] text-blue-cyan/80">
              SOLUÇÕES DIGITAIS
            </span>
          </div>
        </button>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = isHome && active === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative font-body text-sm font-medium transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-blue-cyan after:transition-all after:duration-300 ${
                  isActive
                    ? "text-silver after:w-full"
                    : "text-silver-dim hover:text-silver after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        <button
          onClick={onOpenQuote}
          className="facet-btn hidden bg-blue-electric px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.15em] text-void transition-all duration-300 hover:bg-blue-cyan hover:shadow-glow-sm lg:inline-block"
        >
          Solicitar orçamento
        </button>

        <button
          onClick={() => setOpen((o) => !o)}
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <span className={`h-px w-6 bg-silver transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-silver transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-silver transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-surface-line bg-void/95 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="py-2.5 text-left font-body text-sm text-silver-dim transition-colors hover:text-silver"
              >
                {link.label}
              </button>
            ))}
            <Link
              to="/termos"
              onClick={() => setOpen(false)}
              className="py-2.5 text-left font-mono text-xs uppercase tracking-[0.15em] text-silver-faint transition-colors hover:text-blue-cyan"
            >
              Termos de Uso
            </Link>
            <Link
              to="/privacidade"
              onClick={() => setOpen(false)}
              className="py-2.5 text-left font-mono text-xs uppercase tracking-[0.15em] text-silver-faint transition-colors hover:text-blue-cyan"
            >
              Política de Privacidade
            </Link>
            <button
              onClick={() => {
                setOpen(false);
                onOpenQuote();
              }}
              className="facet-btn mt-2 bg-blue-electric px-5 py-3 text-center font-display text-xs font-semibold uppercase tracking-[0.15em] text-void"
            >
              Solicitar orçamento
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
