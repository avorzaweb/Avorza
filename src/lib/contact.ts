import emailjs from "@emailjs/browser";

export interface ContactFormPayload {
  name: string;
  email: string;
  message: string;
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export async function submitContactForm(payload: ContactFormPayload): Promise<void> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error(
      "Formulário não configurado. Defina as variáveis do EmailJS no arquivo .env."
    );
  }

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: payload.name,
        email: payload.email,
        message: payload.message,
        time: new Date().toLocaleString("pt-BR"),
      },
      { publicKey: PUBLIC_KEY }
    );
  } catch (error) {
    throw new Error("Não foi possível enviar sua mensagem. Tente novamente.");
  }
}