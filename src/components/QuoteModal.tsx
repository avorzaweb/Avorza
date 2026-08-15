import { useEffect, useState, type FormEvent } from "react";
import { submitContactForm } from "../lib/contact";

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
}

type SubmitStatus = "idle" | "loading" | "sent" | "error";

const initialForm = { name: "", email: "", message: "" };

export default function QuoteModal({ open, onClose }: QuoteModalProps) {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

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

  function handleClose() {
    setStatus("idle");
    setErrorMessage("");
    setForm(initialForm);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <button
        aria-label="Fechar"
        onClick={handleClose}
        className="absolute inset-0 bg-void/85 backdrop-blur-sm"
      />

      <div className="facet-card-lg relative w-full max-w-md border border-surface-line bg-surface p-8 shadow-glow-md sm:p-10">
        <button
          onClick={handleClose}
          aria-label="Fechar formulário"
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center text-silver-dim transition-colors hover:text-blue-cyan"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" strokeWidth="1.8">
            <path d="M6 6 L18 18 M18 6 L6 18" strokeLinecap="round" />
          </svg>
        </button>

        {status === "sent" ? (
          <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
            <div className="flex h-14 w-14 items-center justify-center border border-blue-cyan/50 facet-btn">
              <svg viewBox="0 0 24 24" className="h-7 w-7 stroke-blue-cyan" fill="none" strokeWidth="2">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold uppercase tracking-wide text-silver">
              Mensagem enviada
            </h3>
            <p className="mt-2 max-w-xs font-body text-sm text-silver-dim">
              Recebemos seu pedido de orçamento. Nossa equipe retorna em até
              um dia útil.
            </p>
          </div>
        ) : (
          <>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-blue-cyan">
              Solicitar orçamento
            </span>
            <h2 className="mt-3 font-display text-2xl font-semibold uppercase leading-tight tracking-tight text-silver">
              Conte sobre seu projeto
            </h2>

            <form onSubmit={handleSubmit} className="mt-7 grid gap-5">
              <div>
                <label htmlFor="quote-name" className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver-dim">
                  Nome
                </label>
                <input
                  id="quote-name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Como podemos te chamar?"
                  className="mt-2 w-full border border-surface-line bg-void/60 px-4 py-3 font-body text-sm text-silver placeholder:text-silver-faint focus:border-blue-cyan focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="quote-email" className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver-dim">
                  Email
                </label>
                <input
                  id="quote-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder=" Digite seu email"
                  className="mt-2 w-full border border-surface-line bg-void/60 px-4 py-3 font-body text-sm text-silver placeholder:text-silver-faint focus:border-blue-cyan focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="quote-message" className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver-dim">
                  Mensagem
                </label>
                <textarea
                  id="quote-message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Conte um pouco sobre o seu projeto"
                  className="mt-2 w-full resize-none border border-surface-line bg-void/60 px-4 py-3 font-body text-sm text-silver placeholder:text-silver-faint focus:border-blue-cyan focus:outline-none"
                />
              </div>

              {status === "error" && (
                <p className="font-body text-sm text-red-400">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="facet-btn mt-1 bg-blue-electric px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.15em] text-void transition-all duration-300 hover:bg-blue-cyan hover:shadow-glow-md disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? "Enviando..." : "Enviar mensagem"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
