export interface ContactFormPayload {
  name: string;
  email: string;
  message: string;
}

const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID;
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;

export async function submitContactForm(payload: ContactFormPayload): Promise<void> {
  if (!FORMSPREE_FORM_ID) {
    throw new Error(
      "Formulário não configurado. Defina VITE_FORMSPREE_FORM_ID no arquivo .env."
    );
  }

  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Não foi possível enviar sua mensagem. Tente novamente.");
  }
}
