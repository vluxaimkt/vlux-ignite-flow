import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { site } from "@/config/site";
import { vluxAssets } from "@/config/vluxAssets";

export function StickyMobileCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-3 inset-x-3 z-40 transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"
      }`}
    >
      <div className="vlux-glass-card vlux-neon-border relative rounded-3xl shadow-2xl shadow-[0_0_30px_rgba(0,255,255,0.2)] flex items-center gap-2 p-2 backdrop-blur-xl">
        <a href={site.bookingUrl} className="vlux-premium-button flex-1 px-4 py-2.5 text-sm">
          <Calendar className="w-4 h-4 mr-2" /> Agendar diagnóstico
        </a>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[color:var(--cyan-glow)]/35 bg-white/5 backdrop-blur-md text-white p-3 hover:bg-white/10 transition-all"
          aria-label="WhatsApp"
        >
          <img
            src={vluxAssets.integrations.whatsapp}
            alt=""
            aria-hidden="true"
            className="w-5 h-5 object-contain drop-shadow-[0_0_8px_rgba(0,255,210,0.65)]"
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>
    </div>
  );
}
