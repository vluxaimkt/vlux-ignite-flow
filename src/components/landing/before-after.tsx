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
  const cells = Array.from({ length: 32 }).map((_, i) => {
    const lightness = 0.34 + ((i * 7) % 6) * 0.03;
    const hue = 28 + ((i * 11) % 20);
    const alpha = 0.38 + ((i * 5) % 4) * 0.12;
    return `oklch(${lightness.toFixed(2)} 0.05 ${hue} / ${alpha.toFixed(2)})`;
  });

  return (
    <section className="py-20 md:py-28 relative" data-section>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl">
          <span className="chip">Transformación</span>
          <h2 className="section-title" data-section-heading>
            Antes vs. Después.
          </h2>
          <p className="section-copy" data-section-copy>
            Claridad operativa para dirección y ejecución diaria para el equipo. Menos fricción, más
            control.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5 relative" data-stagger>
          <ArrowRight className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-[color:var(--cyan-glow)] glow-cyan-sm rounded-full bg-[color:var(--background)] p-2 z-10" />

          <div
            className="relative vlux-glass-card vlux-neon-border rounded-3xl p-6 md:p-7 shadow-xl shadow-black/30 surface-card-hover"
            data-stagger-item
          >
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
              {cells.map((tone, i) => (
                <div key={i} className="rounded-sm" style={{ background: tone }} />
              ))}
            </div>
          </div>

          <div
            className="relative vlux-glass-card vlux-neon-border rounded-3xl p-6 md:p-7 shadow-xl shadow-black/30 surface-card-hover"
            data-stagger-item
          >
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
