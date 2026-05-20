import { Target, Plug, BarChart3, BookOpen, Layers } from "lucide-react";
import { LiquidGlassIcon } from "@/components/LiquidGlassIcon";

const pillars = [
  {
    icon: Target,
    title: "Sistemas adaptados al proceso real",
    desc: "Software que respeta cómo trabaja tu equipo, no al revés.",
  },
  {
    icon: Plug,
    title: "Integraciones con herramientas existentes",
    desc: "ERP, CRM, Excel y APIs: que la información fluya.",
  },
  {
    icon: BarChart3,
    title: "Dashboards para dirección y operación",
    desc: "Cada rol ve lo que necesita, en tiempo real.",
  },
  {
    icon: BookOpen,
    title: "Documentación y capacitación",
    desc: "Manuales vivos, videos y soporte para tu equipo.",
  },
  {
    icon: Layers,
    title: "Escalabilidad por etapas",
    desc: "Empezamos por el proceso de más impacto y crecemos contigo.",
  },
];

export function Trust() {
  const pillarIconTones = ["cyan", "mint", "positive", "cyan", "mint"] as const;

  return (
    <section id="recursos" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl reveal">
          <span className="chip">Por qué VLUX</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold leading-tight glass-text-shimmer">
            Construido para operaciones reales, no para{" "}
            <span className="text-gradient-cyan">presentaciones bonitas.</span>
          </h2>
          <p className="mt-4 text-white/70 md:text-lg">
            No vendemos hype. Diseñamos sistemas que se usan todos los días y que generan resultados
            medibles.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`relative glass-container glass-blur-2xl glass-edge-glow border border-white/20 bg-black/40 before:absolute before:inset-0 before:rounded-3xl before:border-t before:border-white/30 before:pointer-events-none p-6 rounded-3xl shadow-2xl shadow-black/40 hover:scale-[1.02] transition-all duration-300 reveal ${
                i === 0 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <LiquidGlassIcon icon={p.icon} tone={pillarIconTones[i]} size="sm" />
                <h3 className="font-display font-semibold">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">{p.desc}</p>
            </div>
          ))}

          {/* Resultados posibles a medir card */}
          <div className="relative glass-container glass-blur-2xl glass-edge-glow border border-white/20 bg-black/40 before:absolute before:inset-0 before:rounded-3xl before:border-t before:border-white/30 before:pointer-events-none p-6 rounded-3xl shadow-2xl shadow-[0_0_30px_rgba(0,255,255,0.1)] hover:scale-[1.02] transition-all duration-300 reveal bg-gradient-to-br from-[color:var(--cyan-glow)]/8 to-transparent">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[color:var(--cyan-glow)] mb-3">
              Resultados posibles a medir
            </div>
            <ul className="space-y-2 text-sm">
              {[
                "Horas-hombre liberadas por semana",
                "Tiempo de respuesta a cliente",
                "Errores operativos detectados",
                "Cumplimiento OTIF / SLA",
              ].map((m) => (
                <li key={m} className="flex items-center gap-2 text-[color:var(--foreground)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--cyan-glow)]" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
