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
    <section id="recursos" className="py-20 md:py-28 relative" data-section>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl">
          <span className="chip">Por qué VLUX</span>
          <h2 className="section-title" data-section-heading>
            Construido para operaciones reales, no para{" "}
            <span className="text-gradient-cyan">presentaciones bonitas.</span>
          </h2>
          <p className="section-copy" data-section-copy>
            Somos un partner de ejecución. Diseñamos sistemas que se adoptan en el día a día y se
            miden por impacto operativo.
          </p>
          <div className="mt-5 flex flex-wrap gap-2" data-stagger>
            {[
              "Arquitectura documentada",
              "Implementación por etapas",
              "Acompañamiento de adopción",
            ].map((signal) => (
              <span key={signal} className="stat-pill" data-stagger-item>
                {signal}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-stagger>
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`relative vlux-glass-card vlux-neon-border p-6 rounded-3xl shadow-xl shadow-black/30 surface-card-hover ${
                i === 0 ? "lg:col-span-1" : ""
              }`}
              data-stagger-item
            >
              <div className="flex items-center gap-3">
                <LiquidGlassIcon icon={p.icon} tone={pillarIconTones[i]} size="sm" />
                <h3 className="font-display font-semibold">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">{p.desc}</p>
            </div>
          ))}

          {/* Resultados posibles a medir card */}
          <div
            className="relative vlux-glass-card vlux-neon-border p-6 rounded-3xl shadow-xl shadow-black/30 bg-gradient-to-br from-[color:var(--cyan-glow)]/8 to-transparent surface-card-hover"
            data-stagger-item
          >
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
