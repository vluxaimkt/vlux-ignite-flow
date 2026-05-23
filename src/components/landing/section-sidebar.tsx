import { useEffect, useRef, useState } from "react";
import { site } from "@/config/site";

export function SectionSidebar() {
  const [visible, setVisible] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      if (!visible && currentY > 16 && currentY > lastY.current) {
        setVisible(true);
      }

      lastY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [visible]);

  return (
    <aside
      className={`hidden min-[1760px]:block fixed right-5 top-1/2 -translate-y-1/2 z-40 transition-all duration-500 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6 pointer-events-none"
      }`}
      aria-hidden={!visible}
    >
      <div className="vlux-glass-card vlux-neon-border rounded-2xl p-3 w-52">
        <div className="text-[10px] font-mono uppercase tracking-wider text-white/55 px-2 pb-2">
          Navegación
        </div>
        <nav className="space-y-1">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-lg px-2.5 py-2 text-sm text-white/72 hover:text-white hover:bg-white/6 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.bookingUrl}
            className="block rounded-lg px-2.5 py-2 text-sm text-[color:var(--cyan-glow)] hover:text-white hover:bg-[color:var(--cyan-glow)]/12 transition-colors"
          >
            Agendar diagnóstico
          </a>
        </nav>
      </div>
    </aside>
  );
}
