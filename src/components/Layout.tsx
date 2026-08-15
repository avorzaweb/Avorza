import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import QuoteModal from "./QuoteModal";
import ScrollProgress from "./ui/ScrollProgress";
import BackToTop from "./ui/BackToTop";

export default function Layout({ children }: { children: ReactNode }) {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return (
    <div className="min-h-screen bg-void text-silver">
      <ScrollProgress />
      <Header onOpenQuote={() => setQuoteOpen(true)} />
      <main>{children}</main>
      <Footer />
      <BackToTop />
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
