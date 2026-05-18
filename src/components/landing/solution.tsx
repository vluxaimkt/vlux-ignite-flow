import { Workflow, Code2, BarChart3, Brain, Plug, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "Automatización de procesos",
    desc: "Reemplazamos pasos manuales por flujos que se ejecutan solos: facturación, asignaciones, validaciones, notificaciones.",
    tags: ["Zapier-grade", "Triggers", "Webhooks"],
  },
  {
    icon: Code2,
    title: "Software a la medida",
    desc: "Construimos el sistema que tu operación realmente necesita, no el que te quieren vender.",
    tags: ["Web apps", "Internos", "Móvil"],
  },
  {
    icon: BarChart3,
    title: "Dashboards inteligentes",
    desc: "Indicadores en tiempo real para dirección, operación y planta. Datos que ya tienes, ordenados para decidir.",
    tags: ["KPIs", "Tiempo real", "Roles"],
  },
  {
    icon: Brain,
    title: "IA aplicada al negocio",
    desc: "Modelos que clasifican tickets, resumen reportes, analizan ventas y responden por WhatsApp con tu información.",
    tags: ["LLMs", "RAG", "Agentes"],
  },
  {
    icon: Plug,
    title: "Integraciones y APIs",
    desc: "Conectamos ERP, CRM, e-commerce, contabilidad y Excel para que la información fluya en una sola dirección.",
    tags: ["REST", "ERP", "CRM"],
  },
];

export function Solution() {
  return (
    <section id="servicios" className="py-20 md:py-28 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--cyan-glow)]/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl reveal">
          <span className="chip">La solución</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold leading-tight">
            VLUX transforma tu operación en un{" "}
            <span className="text-gradient-cyan">sistema medible.</span>
          </h2>
          <p className="mt-4 text-[color:var(--muted-foreground)] md:text-lg">
            No vendemos licencias ni copiamos plantillas. Diseñamos cómo debería operar tu empresa
            y construimos el software, los dashboards y la IA para lograrlo.
          </p>
        </div>

        {/* visual transform diagram */}
        <div className="mt-12 surface-card p-5 md:p-7 reveal">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
            <div className="rounded-lg border border-[color:var(--danger)]/30 bg-[color:var(--danger)]/5 p-4">
              <div className="text-[10px] uppercase tracking-wider text-[color:var(--danger)] font-mono mb-2">Input</div>
              <div className="space-y-1.5 text-xs text-[color:var(--muted-foreground)]">
                <div className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[color:var(--danger)]" /> Excel disperso</div>
                <div className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[color:var(--danger)]" /> WhatsApp informal</div>
                <div className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[color:var(--danger)]" /> Reportes manuales</div>
                <div className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[color:var(--danger)]" /> Sistemas aislados</div>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[color:var(--cyan-glow)] to-[color:var(--mint)] flex items-center justify-center glow-cyan">
                <Brain className="w-7 h-7 text-[color:var(--primary-foreground)]" />
              </div>
              <div className="mt-3 font-display font-semibold">Capa VLUX</div>
              <div className="text-[11px] text-[color:var(--muted-foreground)] mt-1">
                Diseño · Software · Datos · IA
              </div>
              <ArrowRight className="hidden md:block w-5 h-5 text-[color:var(--cyan-glow)] mt-4 rotate-0 md:rotate-0" />
            </div>

            <div className="rounded-lg border border-[color:var(--cyan-glow)]/40 bg-[color:var(--cyan-glow)]/5 p-4 glow-cyan-sm">
              <div className="text-[10px] uppercase tracking-wider text-[color:var(--cyan-glow)] font-mono mb-2">Output</div>
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center gap-2 text-[color:var(--foreground)]"><span className="w-1 h-1 rounded-full bg-[color:var(--cyan-glow)]" /> Flujo automatizado</div>
                <div className="flex items-center gap-2 text-[color:var(--foreground)]"><span className="w-1 h-1 rounded-full bg-[color:var(--cyan-glow)]" /> Información centralizada</div>
                <div className="flex items-center gap-2 text-[color:var(--foreground)]"><span className="w-1 h-1 rounded-full bg-[color:var(--cyan-glow)]" /> KPIs en tiempo real</div>
                <div className="flex items-center gap-2 text-[color:var(--foreground)]"><span className="w-1 h-1 rounded-full bg-[color:var(--cyan-glow)]" /> Alertas inteligentes</div>
              </div>
            </div>
          </div>
        </div>

        {/* services grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`surface-card surface-card-hover p-6 reveal ${
                i === 0 ? "lg:row-span-2" : ""
              }`}
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[color:var(--surface-3)] to-[color:var(--surface-2)] border border-[color:var(--hairline)] flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-[color:var(--cyan-glow)]" />
              </div>
              <h3 className="font-display font-semibold text-lg">{s.title}</h3>
              <p className="text-sm text-[color:var(--muted-foreground)] mt-2 leading-relaxed">{s.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[color:var(--surface-3)] text-[color:var(--muted-foreground)] border border-[color:var(--hairline)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
