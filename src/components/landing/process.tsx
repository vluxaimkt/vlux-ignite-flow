import { Search, Map, Layers, Rocket, GraduationCap, RefreshCw } from "lucide-react";
import { LiquidGlassIcon } from "@/components/LiquidGlassIcon";

const steps = [
  {
    icon: Search,
    title: "Diagnóstico",
    desc: "Entendemos tu operación real, no la del organigrama.",
  },
  { icon: Map, title: "Mapeo", desc: "Documentamos procesos, datos, herramientas y dolores." },
  {
    icon: Layers,
    title: "Prototipo",
    desc: "Construimos una versión funcional para validar contigo.",
  },
  {
    icon: Rocket,
    title: "Implementación",
    desc: "Lanzamos en producción con datos reales y por etapas.",
  },
  {
    icon: GraduationCap,
    title: "Capacitación",
    desc: "Tu equipo lo adopta porque fue diseñado para ellos.",
  },
  { icon: RefreshCw, title: "Mejora continua", desc: "Iteramos con métricas reales del sistema." },
];

export function Process() {
  const stepIconTones = ["warn", "cyan", "mint", "positive", "cyan", "mint"] as const;

  return (
    <section id="proceso" className="py-20 md:py-28 relative" data-section>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl">
          <span className="chip">Proceso</span>
          <h2 className="section-title" data-section-heading>
            De caos operativo a sistema, en <span className="text-gradient-cyan">6 pasos.</span>
          </h2>
          <p className="section-copy" data-section-copy>
            Metodología diseñada para avanzar rápido sin romper operación: diagnóstico, validación y
            despliegue por etapas.
          </p>
        </div>

        <div className="mt-14 relative" data-stagger>
          {/* desktop timeline */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[color:var(--cyan-glow)]/50 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4 relative">
            {steps.map((s, i) => (
              <div key={s.title} data-stagger-item>
                <div className="flex md:flex-col md:items-start gap-4 md:gap-3">
                  <div className="relative shrink-0">
                    <LiquidGlassIcon icon={s.icon} tone={stepIconTones[i]} size="xl" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[color:var(--cyan-glow)] text-[color:var(--primary-foreground)] text-[11px] font-mono font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <div className="md:mt-3">
                    <h3 className="font-display font-semibold">{s.title}</h3>
                    <p className="text-xs text-white/60 mt-1 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
