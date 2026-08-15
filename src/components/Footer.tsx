import { Link, useLocation, useNavigate } from "react-router-dom";
import logoIcon from "../assets/avorza-icon.png";
import { goToSection } from "../lib/navigation";

const LINKS = [
  { label: "Sobre", id: "sobre" },
  { label: "Serviços", id: "servicos" },
  { label: "Projetos", id: "projetos" },
  { label: "Processo", id: "processo" },
  { label: "Depoimentos", id: "depoimentos" },
  { label: "Contato", id: "contato" },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/avorzaweb/",
    external: true,
    path: "M12 2c2.7 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.42.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.42.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.7 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.45.53C6.09.28 6.82.11 7.88.06 8.94.01 9.3 0 12 0Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.2-8.4a1.17 1.17 0 1 0 0-2.33 1.17 1.17 0 0 0 0 2.33Z",
  },
  {
    label: "E-mail",
    href: "mailto:avorza.web@outlook.com",
    external: false,
    path: "M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Zm2.2.5 6.8 5.44L18.8 6H5.2Zm13.8 1.66-6.35 5.08a1 1 0 0 1-1.3 0L5 7.66V18.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V7.66Z",
  },
  {
    label: "GitHub",
    href: "https://github.com/avorzaweb",
    external: true,
    path: "M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.69.24 2.94.12 3.25.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z",
  },
];

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <footer className="border-t border-surface-line bg-void">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <button
              onClick={() => goToSection("top", location.pathname, navigate)}
              className="flex items-center gap-3"
            >
              <img src={logoIcon} alt="Avorza" className="h-9 w-auto" />
              <div className="flex flex-col leading-none">
                <span className="font-display text-lg font-semibold tracking-[0.2em] text-silver">
                  AVORZA
                </span>
                <span className="font-mono text-[9px] tracking-[0.25em] text-blue-cyan/80">
                  SOLUÇÕES DIGITAIS
                </span>
              </div>
            </button>
            <p className="mt-5 max-w-sm font-body text-sm leading-relaxed text-silver-dim">
              Estúdio de tecnologia especializado em landing pages,
              desenvolvimento web, web design e UX/UI para marcas que levam
              sua presença digital a sério.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-silver-faint">
              Navegação
            </h4>
            <ul className="mt-4 space-y-2.5">
              {LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => goToSection(link.id, location.pathname, navigate)}
                    className="font-body text-sm text-silver-dim transition-colors hover:text-blue-cyan"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-silver-faint">
              Contato
            </h4>
            <ul className="mt-4 space-y-2.5 font-body text-sm text-silver-dim">
              <li>
                <a href="mailto:avorza.web@outlook.com" className="transition-colors hover:text-blue-cyan">
                  avorza.web@outlook.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/5562992743475" className="transition-colors hover:text-blue-cyan">
                  +55 (62) 99274-3475
                </a>
              </li>
              <li className="text-silver-faint">Ceres, GO, Brasil</li>
            </ul>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center border border-surface-line text-silver-dim transition-all duration-300 hover:border-blue-cyan hover:text-blue-cyan facet-btn"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-surface-line pt-8 sm:flex-row">
          <p className="font-mono text-xs text-silver-faint">
            © 2026 Avorza Soluções Digitais. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 font-mono text-xs text-silver-faint">
            <Link to="/privacidade" className="transition-colors hover:text-blue-cyan">
              Política de Privacidade
            </Link>
            <Link to="/termos" className="transition-colors hover:text-blue-cyan">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
