import { Factory, Briefcase, TrendingUp, Headphones, Calculator, Users } from "lucide-react";

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
  return (
    <section id="casos" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4 reveal">
          <div className="max-w-2xl">
            <span className="chip">Casos de uso</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold leading-tight">
              Procesos que ya estamos resolviendo.
            </h2>
          </div>
          <p className="text-sm text-[color:var(--muted-foreground)] max-w-sm">
            Cada implementación nace de un proceso real. Estas son las áreas donde más
            impacto generamos.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cases.map((c) => (
            <div key={c.area} className="surface-card surface-card-hover p-6 reveal group">
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-[color:var(--surface-3)] border border-[color:var(--hairline)] flex items-center justify-center group-hover:border-[color:var(--cyan-glow)]/50 transition-colors">
                  <c.icon className="w-5 h-5 text-[color:var(--cyan-glow)]" />
                </div>
                <span className="text-[10px] font-mono text-[color:var(--muted-foreground)] uppercase tracking-wider">Área</span>
              </div>
              <h3 className="font-display font-semibold text-lg">{c.area}</h3>
              <ul className="mt-4 space-y-2">
                {c.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[color:var(--muted-foreground)]">
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
