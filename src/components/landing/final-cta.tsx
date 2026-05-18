import { Calendar, MessageCircle, Sparkles } from "lucide-react";
import { site } from "@/config/site";

export function FinalCTA() {
  return (
    <section id="agendar" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="relative surface-card overflow-hidden p-8 md:p-14 reveal">
          {/* glow background */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[color:var(--cyan-glow)]/15 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[color:var(--mint)]/10 blur-3xl" />
          <div className="absolute inset-0 grid-bg opacity-40" />

          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <span className="chip">
                <Sparkles className="w-3 h-3" />
                Diagnóstico sin costo
              </span>
              <h2 className="mt-5 text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.05]">
                ¿Listo para{" "}
                <span className="text-gradient-cyan">transformar tu empresa?</span>
              </h2>
              <p className="mt-5 text-[color:var(--muted-foreground)] md:text-lg max-w-xl">
                Agenda un diagnóstico gratuito y descubre qué procesos conviene
                automatizar primero. 45 minutos. Sin compromiso. Sin venta forzada.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={site.bookingUrl} className="btn-primary">
                  <Calendar className="w-4 h-4" />
                  Agendar diagnóstico
                </a>
                <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn-ghost">
                  <MessageCircle className="w-4 h-4" />
                  Escríbenos por WhatsApp
                </a>
              </div>
            </div>

            <div className="surface-card p-5 bg-[color:var(--surface)]/80">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[color:var(--muted-foreground)] mb-3">
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
    </section>
  );
}
