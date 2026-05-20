import { X, Check, ArrowRight } from "lucide-react";

const before = [
  "Datos duplicados en 5 archivos",
  "Seguimiento manual por WhatsApp",
  "Reportes que llegan días tarde",
  "Decisiones sin visibilidad real",
];

const after = [
  "Flujo automatizado de punta a punta",
  "Información centralizada en un panel",
  "Indicadores en tiempo real",
  "Alertas inteligentes anticipadas",
];

export function BeforeAfter() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl reveal">
          <span className="chip">Transformación</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold leading-tight glass-text-shimmer">
            Antes vs. Después.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5 relative">
          <ArrowRight className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-[color:var(--cyan-glow)] glow-cyan-sm rounded-full bg-[color:var(--background)] p-2 z-10" />

          <div className="relative glass-container glass-blur-2xl glass-edge-glow border border-white/20 bg-black/40 before:absolute before:inset-0 before:rounded-3xl before:border-t before:border-white/30 before:pointer-events-none rounded-3xl p-6 md:p-7 shadow-2xl shadow-black/40 hover:scale-[1.02] transition-all duration-300 reveal">
            <div className="flex items-center justify-between mb-5">
              <div className="text-xs font-mono uppercase tracking-wider text-[color:var(--danger)]">
                Antes
              </div>
              <span className="text-[10px] text-white/60 font-mono">operación dispersa</span>
            </div>
            <ul className="space-y-3">
              {before.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-md bg-[color:var(--danger)]/10 border border-[color:var(--danger)]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-[color:var(--danger)]" />
                  </span>
                  <span className="text-sm text-white/70">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 h-24 rounded-lg bg-[color:var(--surface-3)]/50 border border-[color:var(--hairline)] grid grid-cols-8 gap-0.5 p-2 overflow-hidden">
              {Array.from({ length: 32 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-sm"
                  style={{
                    background: `oklch(${0.3 + Math.random() * 0.2} 0.05 ${20 + Math.random() * 20})`,
                    opacity: 0.4 + Math.random() * 0.5,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="relative glass-container glass-blur-2xl glass-edge-glow border border-white/20 bg-black/40 before:absolute before:inset-0 before:rounded-3xl before:border-t before:border-white/30 before:pointer-events-none rounded-3xl p-6 md:p-7 shadow-2xl shadow-[0_0_30px_rgba(0,255,255,0.1)] hover:scale-[1.02] transition-all duration-300 reveal">
            <div className="flex items-center justify-between mb-5">
              <div className="text-xs font-mono uppercase tracking-wider text-[color:var(--cyan-glow)]">
                Después
              </div>
              <span className="text-[10px] text-[color:var(--mint)] font-mono">
                sistema medible
              </span>
            </div>
            <ul className="space-y-3">
              {after.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-md bg-[color:var(--cyan-glow)]/10 border border-[color:var(--cyan-glow)]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[color:var(--cyan-glow)]" />
                  </span>
                  <span className="text-sm text-[color:var(--foreground)]">{a}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 h-24 rounded-lg bg-[color:var(--surface)]/60 border border-[color:var(--cyan-glow)]/20 p-3 flex items-end gap-1">
              {[30, 45, 38, 60, 55, 72, 68, 85, 78, 92, 88, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-[color:var(--cyan-glow)]/30 to-[color:var(--cyan-glow)]"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
