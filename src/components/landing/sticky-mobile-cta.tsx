import { useEffect, useState } from "react";
import { Calendar, MessageCircle } from "lucide-react";
import { site } from "@/config/site";

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
      <div className="surface-card glow-cyan-sm flex items-center gap-2 p-2 backdrop-blur-xl">
        <a href={site.bookingUrl} className="btn-primary flex-1 !py-2.5 text-sm">
          <Calendar className="w-4 h-4" /> Agendar diagnóstico
        </a>
        <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn-ghost !p-2.5" aria-label="WhatsApp">
          <MessageCircle className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
