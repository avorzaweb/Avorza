interface EyebrowProps {
  children: string;
  align?: "left" | "center";
}

export default function Eyebrow({ children, align = "left" }: EyebrowProps) {
  if (align === "center") {
    return (
      <div className="flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-cyan/70" />
        <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-blue-cyan">
          {children}
        </span>
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-blue-cyan/70" />
      </div>
    );
  }
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-blue-cyan/70" />
      <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-blue-cyan">
        {children}
      </span>
    </div>
  );
}
