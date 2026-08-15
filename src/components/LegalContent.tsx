import { Fragment, type ReactElement } from "react";

interface LegalContentProps {
  markdown: string;
}

function renderInline(text: string, keyPrefix: string) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const boldRegex = /\*\*([^*]+)\*\*/g;

  const nodes: (string | ReactElement)[] = [];
  let remaining = text;
  let cursor = 0;
  let key = 0;

  const combined = new RegExp(`${linkRegex.source}|${boldRegex.source}`, "g");
  let match: RegExpExecArray | null;

  while ((match = combined.exec(remaining)) !== null) {
    if (match.index > cursor) {
      nodes.push(remaining.slice(cursor, match.index));
    }
    if (match[1] !== undefined) {
      const href = match[2];
      nodes.push(
        <a
          key={`${keyPrefix}-l-${key++}`}
          href={href}
          className="text-blue-cyan underline decoration-blue-cyan/40 underline-offset-2 transition-colors hover:text-blue-glow"
        >
          {match[1]}
        </a>
      );
    } else if (match[3] !== undefined) {
      nodes.push(
        <strong key={`${keyPrefix}-b-${key++}`} className="font-semibold text-silver">
          {match[3]}
        </strong>
      );
    }
    cursor = match.index + match[0].length;
  }
  if (cursor < remaining.length) {
    nodes.push(remaining.slice(cursor));
  }
  return nodes;
}

export default function LegalContent({ markdown }: LegalContentProps) {
  const lines = markdown.split("\n");
  const blocks: ReactElement[] = [];
  let listBuffer: string[] = [];
  let blockKey = 0;

  const flushList = () => {
    if (listBuffer.length === 0) return;
    blocks.push(
      <ul key={`ul-${blockKey++}`} className="mt-3 space-y-2 pl-1">
        {listBuffer.map((item, i) => (
          <li key={i} className="flex gap-3 font-body text-sm leading-relaxed text-silver-dim">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-cyan/70" />
            <span>{renderInline(item, `li-${blockKey}-${i}`)}</span>
          </li>
        ))}
      </ul>
    );
    listBuffer = [];
  };

  lines.forEach((raw, idx) => {
    const line = raw.trim();

    if (line.startsWith("# ")) {
      return;
    }

    if (line.startsWith("## ")) {
      flushList();
      blocks.push(
        <h2
          key={`h2-${blockKey++}`}
          className="mt-12 font-display text-xl font-semibold uppercase tracking-wide text-silver first:mt-0 sm:text-2xl"
        >
          {renderInline(line.replace(/^##\s*/, ""), `h2-${idx}`)}
        </h2>
      );
      return;
    }

    if (line.startsWith("* ")) {
      listBuffer.push(line.replace(/^\*\s*/, ""));
      return;
    }

    flushList();

    if (line.startsWith("**Última atualização")) {
      blocks.push(
        <p
          key={`meta-${blockKey++}`}
          className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-blue-cyan/80"
        >
          {renderInline(line.replace(/\*\*/g, ""), `meta-${idx}`)}
        </p>
      );
      return;
    }

    if (line.length === 0) {
      return;
    }

    blocks.push(
      <p key={`p-${blockKey++}`} className="mt-4 font-body text-sm leading-relaxed text-silver-dim">
        {renderInline(line, `p-${idx}`)}
      </p>
    );
  });

  flushList();

  return <Fragment>{blocks}</Fragment>;
}
