import { Calendar } from "lucide-react";
import { site } from "@/config/site";
import { VluxAssetIcon } from "@/components/VluxAssetIcon";
import { vluxAssets } from "@/config/vluxAssets";

export function FinalCTA() {
  return (
    <section id="agendar" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="vlux-glass-card vlux-neon-border relative rounded-3xl overflow-hidden p-8 md:p-14 shadow-2xl shadow-black/40 reveal">
          <div className="vlux-glow -top-32 -right-32 w-96 h-96" />
          <div className="vlux-glow -bottom-32 -left-32 w-96 h-96 opacity-70" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <img
            src={vluxAssets.backgrounds.watermark}
            alt=""
            aria-hidden="true"
            className="vlux-watermark right-8 bottom-[-8rem] w-[26rem]"
            loading="lazy"
            decoding="async"
          />

          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <span className="chip">
                <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--cyan-glow)] pulse-dot" />
                Diagnóstico sin costo
              </span>
              <h2 className="mt-5 text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.05] glass-text-shimmer">
                ¿Listo para <span className="text-gradient-cyan">transformar tu empresa?</span>
              </h2>
              <p className="mt-5 text-white/70 md:text-lg max-w-xl">
                Agenda un diagnóstico gratuito y descubre qué procesos conviene automatizar primero.
                45 minutos. Sin compromiso. Sin venta forzada.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={site.bookingUrl} className="vlux-premium-button w-full sm:w-auto">
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar diagnóstico
                </a>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center rounded-full border border-[color:var(--cyan-glow)]/30 bg-white/5 backdrop-blur-md text-white px-8 py-4 hover:bg-white/10 hover:border-[color:var(--cyan-glow)]/60 transition-all"
                >
                  <img
                    src={vluxAssets.integrations.whatsapp}
                    alt=""
                    aria-hidden="true"
                    className="w-5 h-5 object-contain mr-2 drop-shadow-[0_0_8px_rgba(0,255,210,0.65)]"
                    loading="lazy"
                    decoding="async"
                  />
                  Escríbenos por WhatsApp
                </a>
              </div>
            </div>

            <div className="relative">
              <span className="absolute -top-20 right-0 hidden md:block">
                <VluxAssetIcon
                  src={vluxAssets.icons.target}
                  alt="Objetivo de transformación VLUX"
                  size="hero"
                />
              </span>
              <div className="vlux-glass-card vlux-neon-border rounded-3xl p-5 backdrop-blur-md">
                <div className="text-[10px] font-mono uppercase tracking-wider text-white/60 mb-3">
                  Qué incluye el diagnóstico
                </div>
                <ul className="space-y-3 text-sm">
                  {[
                    "Mapeo express de tus procesos clave",
                    "Detección de los 3 cuellos de botella prioritarios",
                    "Propuesta inicial de automatización e IA",
                    "Estimación de impacto en horas y errores",
                  ].map((i, idx) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-md bg-[color:var(--cyan-glow)]/15 border border-[color:var(--cyan-glow)]/30 flex items-center justify-center text-[11px] font-mono text-[color:var(--cyan-glow)] shrink-0">
                        {idx + 1}
                      </span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
