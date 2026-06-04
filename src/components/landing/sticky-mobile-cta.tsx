import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { site } from "@/config/site";

export function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-3 bottom-3 z-40 transition-all duration-300 md:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-24 opacity-0"
      }`}
    >
      <a
        href={site.bookingUrl}
        target="_blank"
        rel="noreferrer"
        className="vlux-premium-button w-full px-4 py-3 text-sm"
      >
        <Calendar className="mr-2 h-4 w-4" />
        Agendar diagnóstico
      </a>
    </div>
  );
}
