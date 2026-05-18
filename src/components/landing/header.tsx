import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { site } from "@/config/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[color:var(--background)]/70 border-b border-[color:var(--hairline)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-18 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative inline-flex w-9 h-9 rounded-lg items-center justify-center bg-gradient-to-br from-[color:var(--cyan-glow)] to-[color:var(--mint)] glow-cyan-sm">
            <Sparkles className="w-4 h-4 text-[color:var(--primary-foreground)]" />
          </span>
          <span className="font-display font-bold text-xl tracking-tight">
            {site.brand}
          </span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.18em] text-[color:var(--muted-foreground)] ml-1">
            {site.tagline}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {site.nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)] transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={site.bookingUrl} className="hidden md:inline-flex btn-primary">
            Agendar diagnóstico
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden btn-ghost !p-2"
            aria-label="Menú"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[color:var(--hairline)] bg-[color:var(--background)]/95 backdrop-blur-xl">
          <div className="px-5 py-4 flex flex-col gap-1">
            {site.nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[color:var(--foreground)] border-b border-[color:var(--hairline)]"
              >
                {n.label}
              </a>
            ))}
            <a href={site.bookingUrl} className="btn-primary mt-4 w-full" onClick={() => setOpen(false)}>
              Agendar diagnóstico
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
