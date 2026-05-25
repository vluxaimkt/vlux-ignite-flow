import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";
import { vluxAssets } from "@/config/vluxAssets";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`vlux-site-header max-w-7xl mx-auto rounded-3xl transition-all duration-300 ${
        scrolled
          ? "vlux-glass-card vlux-neon-border shadow-2xl shadow-black/40"
          : "border border-[color:var(--cyan-glow)]/10 bg-black/10 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-18 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <img
            src={vluxAssets.logos.navbar}
            alt="VLUX"
            className="vlux-logo-mark"
            loading="eager"
            decoding="async"
          />
          <span className="font-display font-bold text-xl tracking-tight">{site.brand}</span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.18em] text-white/60 ml-1">
            {site.tagline}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {site.nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <a href={site.bookingUrl} className="vlux-premium-button px-6 py-2.5">
              Agendar diagnóstico
            </a>
          </div>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden glass-button rounded-full bg-white/10 border border-white/20 text-white !p-2 hover:bg-white/20 hover:scale-[1.03] transition-all duration-300"
            aria-label="Menú"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mt-2 relative vlux-glass-card vlux-neon-border shadow-2xl shadow-black/40 rounded-3xl overflow-hidden">
          <div className="px-5 py-4 flex flex-col gap-1">
            {site.nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-white border-b border-white/10"
              >
                {n.label}
              </a>
            ))}
            <a
              href={site.bookingUrl}
              className="vlux-premium-button mt-4 w-full"
              onClick={() => setOpen(false)}
            >
              Agendar diagnóstico
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

