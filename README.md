# Avorza Soluções Digitais — Landing Page

Landing page institucional da Avorza Soluções Digitais, construída em React, TypeScript e Tailwind CSS.

## Stack

- React 19 + TypeScript
- React Router (páginas de Termos de Uso e Política de Privacidade)
- Vite
- Tailwind CSS 3
- Framer Motion

## Como rodar

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Formulário de contato

Os formulários ("Solicitar orçamento" e a seção de contato final) enviam os dados via [Formspree](https://formspree.io).

1. Crie uma conta gratuita em https://formspree.io e um novo formulário.
2. Copie o ID do formulário (encontrado na URL do endpoint, `https://formspree.io/f/SEU_ID`).
3. Defina a variável no `.env`:

```
VITE_FORMSPREE_FORM_ID=SEU_ID
```

4. Reinicie o servidor de desenvolvimento (`npm run dev`) para carregar a variável.

## Projetos realizados (portfólio)

A seção "Projetos" (`/#projetos`) lê a lista de projetos do arquivo público:

```
public/projects.json
```

Esse arquivo é um array de objetos assim:

```json
[
  {
    "id": "lfstudio",
    "title": "LFStudio",
    "description": "Marketplace full-stack para produtos 3D personalizados.",
    "repoUrl": "https://github.com/usuario/lfstudio",
    "liveUrl": "https://lfstudio.exemplo.com",
    "coverImage": "",
    "tags": ["nextjs", "typescript", "prisma"],
    "language": "TypeScript",
    "stars": 12,
    "featured": true,
    "order": 0
  }
]
```

Você **não precisa editar esse arquivo manualmente**: use o painel `avorza-admin`
(projeto separado) para colar o link de um repositório do GitHub e publicar
automaticamente. Veja o tutorial `TUTORIAL.md` para o passo a passo completo.

## Páginas legais

- `/termos` — Termos de Uso
- `/privacidade` — Política de Privacidade

O conteúdo vive em `src/pages/Termos.tsx` e `src/pages/Privacidade.tsx`,
dentro da constante `CONTENT` (Markdown simples, renderizado pelo componente
`src/components/LegalContent.tsx`).

## Estrutura

```
src/
  assets/
  components/
    ui/
    Header.tsx
    Hero.tsx
    About.tsx
    Services.tsx
    Projects.tsx      ← seção de portfólio (lê public/projects.json)
    Process.tsx
    Testimonials.tsx
    FinalCta.tsx
    Footer.tsx
    QuoteModal.tsx
    Layout.tsx         ← Header + Footer + modal + efeitos de scroll
    LegalContent.tsx    ← renderizador de markdown p/ páginas legais
  pages/
    Home.tsx
    Termos.tsx
    Privacidade.tsx
  lib/
    contact.ts
    navigation.ts
  App.tsx
  index.css
public/
  projects.json         ← dados do portfólio
  _redirects            ← regra do Netlify p/ rotas do React Router
tailwind.config.js
```

## Personalização

- Cores da marca: `tailwind.config.js` → `theme.extend.colors`.
- WhatsApp: `src/components/FinalCta.tsx` e `src/components/Footer.tsx`.
- Redes sociais e e-mail de contato: `src/components/Footer.tsx`.
- Formulário de contato: `src/lib/contact.ts`.

## Deploy (Netlify)

```bash
npm run build
```

Publique o conteúdo da pasta `dist/` e configure `VITE_FORMSPREE_FORM_ID` nas
variáveis de ambiente da plataforma de deploy. O arquivo `public/_redirects`
já garante que rotas como `/termos` funcionem em recarregamentos diretos.

---
© 2026 Avorza Soluções Digitais.
