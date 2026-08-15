import { useState, type FormEvent } from "react";
import Reveal from "./ui/Reveal";
import FacetMark from "./ui/FacetMark";
import { submitContactForm } from "../lib/contact";

type SubmitStatus = "idle" | "loading" | "sent" | "error";

const initialForm = { name: "", email: "", message: "" };

export default function FinalCta() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState(initialForm);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      await submitContactForm(form);
      setStatus("sent");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Não foi possível enviar sua mensagem."
      );
    }
  }

  const whatsappHref = `https://wa.me/5562992743475?text=${encodeURIComponent(
    "Olá! Gostaria de solicitar um orçamento com a Avorza Soluções Digitais."
  )}`;

  return (
    <section id="contato" className="relative overflow-hidden border-t border-surface-line bg-surface/50 py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute -left-24 -top-24 opacity-[0.06]">
        <FacetMark className="h-[420px] w-[420px] text-blue-cyan" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(ellipse_at_bottom,rgba(30,155,215,0.14),transparent_70%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">
        <Reveal>
          <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-blue-cyan">
            Vamos construir
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-silver sm:text-4xl">
            Pronto para elevar sua <span className="text-blue-cyan">presença digital?</span>
          </h2>
          <p className="mt-5 max-w-md font-body text-base leading-relaxed text-silver-dim">
            Conte um pouco sobre o seu projeto e retornamos com os próximos
            passos. Se preferir, fale com a gente agora mesmo pelo WhatsApp.
          </p>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="facet-btn mt-8 inline-flex items-center gap-3 border border-blue-electric/50 bg-blue-electric/10 px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.15em] text-blue-cyan transition-all duration-300 hover:border-blue-cyan hover:bg-blue-electric/20 hover:shadow-glow-sm"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.14c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.12.11-1.8-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.13-4.9-4.32-.14-.19-1.17-1.56-1.17-2.98s.73-2.11 1-2.4c.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.15.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.35 1.46.29.15.46.13.63-.08.17-.21.72-.84.91-1.13.19-.29.38-.24.64-.15.26.1 1.66.78 1.94.93.29.14.48.21.55.33.07.12.07.7-.17 1.38Z" />
            </svg>
            Falar pelo WhatsApp
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          {status === "sent" ? (
            <div className="facet-card-lg flex h-full min-h-[380px] flex-col items-center justify-center border border-blue-electric/40 bg-void/60 p-10 text-center">
              <div className="flex h-14 w-14 items-center justify-center border border-blue-cyan/50 facet-btn">
                <svg viewBox="0 0 24 24" className="h-7 w-7 stroke-blue-cyan" fill="none" strokeWidth="2">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold uppercase tracking-wide text-silver">
                Mensagem enviada
              </h3>
              <p className="mt-2 max-w-xs font-body text-sm text-silver-dim">
                Recebemos seu contato. Nossa equipe retorna em até um dia útil
                com os próximos passos.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="facet-card-lg border border-surface-line bg-void/60 p-8 sm:p-10">
              <div className="grid gap-5">
                <div>
                  <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver-dim">
                    Nome
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Como podemos te chamar?"
                    className="mt-2 w-full border border-surface-line bg-surface/70 px-4 py-3 font-body text-sm text-silver placeholder:text-silver-faint focus:border-blue-cyan focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver-dim">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Qual o melhor email para entrarmos em contato?"
                    className="mt-2 w-full border border-surface-line bg-surface/70 px-4 py-3 font-body text-sm text-silver placeholder:text-silver-faint focus:border-blue-cyan focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver-dim">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Conte um pouco sobre o seu projeto"
                    className="mt-2 w-full resize-none border border-surface-line bg-surface/70 px-4 py-3 font-body text-sm text-silver placeholder:text-silver-faint focus:border-blue-cyan focus:outline-none"
                  />
                </div>

                {status === "error" && (
                  <p className="font-body text-sm text-red-400">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="facet-btn mt-2 bg-blue-electric px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.15em] text-void transition-all duration-300 hover:bg-blue-cyan hover:shadow-glow-md disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? "Enviando..." : "Enviar mensagem"}
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
