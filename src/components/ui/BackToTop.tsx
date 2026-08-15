import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Voltar ao topo"
          className="facet-btn group fixed bottom-7 right-6 z-50 flex h-11 w-11 items-center justify-center border border-surface-line bg-void/90 text-silver-dim backdrop-blur-md transition-all duration-300 hover:border-blue-cyan hover:text-blue-cyan hover:shadow-glow-sm lg:right-10"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 -translate-y-px stroke-current fill-none transition-transform duration-300 group-hover:-translate-y-1"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19 V5 M5 12 L12 5 L19 12" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
