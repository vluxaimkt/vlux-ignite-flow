import { Mail } from "lucide-react";
import { site } from "@/config/site";
import { vluxAssets } from "@/config/vluxAssets";

export function FinalCTA() {
  return (
    <section id="contacto" className="relative py-16 md:py-24" data-section>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div
          className="vlux-glass-card relative overflow-hidden rounded-2xl p-7 md:p-10"
          data-cta-panel
        >
          <div className="absolute inset-0 grid-bg opacity-25" />
          <div className="relative grid gap-9 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <span className="chip">Diagnóstico sin costo</span>
              <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-[1.08] text-balance md:text-5xl">
                Empecemos por encontrar el proceso que más conviene ordenar primero.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                En una sesión revisamos tus herramientas actuales, el cuello de botella principal y
                el módulo mínimo para empezar sin frenar al equipo.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="vlux-premium-button w-full sm:w-auto"
                >
                  <img
                    src={vluxAssets.buttons.agendarDiagnosticoIcon}
                    alt=""
                    aria-hidden="true"
                    className="final-cta-button-icon"
                    loading="lazy"
                    decoding="async"
                  />
                  Agendar diagnóstico operativo
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-white transition-colors hover:bg-white/[0.08] sm:w-auto"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Escribir por correo
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <div className="text-[10px] font-mono uppercase tracking-wider text-white/50">
                Qué revisamos
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  "Dónde se duplica captura o seguimiento",
                  "Qué módulo tendría mayor impacto inicial",
                  "Qué datos, roles e integraciones hacen falta",
                ].map((item, index) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[color:var(--cyan-glow)]/35 bg-[color:var(--cyan-glow)]/10 text-[11px] font-mono text-[color:var(--cyan-glow)]">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
