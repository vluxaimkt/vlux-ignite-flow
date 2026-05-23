import { Factory, Briefcase, TrendingUp, Headphones, Calculator, Users } from "lucide-react";
import { LiquidGlassIcon } from "@/components/LiquidGlassIcon";

const cases = [
  {
    icon: Factory,
    area: "Manufactura",
    items: ["Control de producción en piso", "Trazabilidad de órdenes", "Checador 2.0 por área"],
  },
  {
    icon: Briefcase,
    area: "Administración",
    items: ["Facturación automatizada", "Aprobaciones digitales", "Expedientes centralizados"],
  },
  {
    icon: TrendingUp,
    area: "Ventas",
    items: ["CRM conectado a WhatsApp", "Cotizaciones automáticas", "Dashboard de pipeline"],
  },
  {
    icon: Headphones,
    area: "Atención al cliente",
    items: ["IA que responde 24/7", "Tickets desde WhatsApp", "Histórico unificado"],
  },
  {
    icon: Calculator,
    area: "Ingeniería y costos",
    items: ["Cotizador inteligente", "Costeo por proyecto", "Comparativo real vs. plan"],
  },
  {
    icon: Users,
    area: "Recursos Humanos",
    items: ["Checador con geolocalización", "Vacaciones y permisos", "Indicadores por colaborador"],
  },
];

export function UseCases() {
  const caseIconTones = ["warn", "cyan", "positive", "mint", "cyan", "mint"] as const;

  return (
    <section id="casos" className="py-20 md:py-28 relative" data-section>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div className="max-w-2xl">
            <span className="chip">Casos de uso</span>
            <h2 className="section-title" data-section-heading>
              Procesos que ya estamos resolviendo.
            </h2>
          </div>
          <p className="text-sm text-white/70 max-w-sm" data-section-copy>
            Cada implementación nace de un proceso real. Estas son las áreas donde más impacto
            generamos.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" data-stagger>
          {cases.map((c, i) => (
            <div
              key={c.area}
              className="relative vlux-glass-card vlux-neon-border rounded-3xl p-6 shadow-xl shadow-black/30 surface-card-hover group"
              data-stagger-item
            >
              <div className="flex items-center justify-between mb-5">
                <LiquidGlassIcon icon={c.icon} tone={caseIconTones[i]} />
                <span className="text-[10px] font-mono text-white/60 uppercase tracking-wider">
                  Área
                </span>
              </div>
              <h3 className="font-display font-semibold text-lg">{c.area}</h3>
              <ul className="mt-4 space-y-2">
                {c.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                    <span className="w-1 h-1 rounded-full bg-[color:var(--cyan-glow)] mt-2 shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
