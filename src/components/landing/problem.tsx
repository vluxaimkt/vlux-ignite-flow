import { FileSpreadsheet, MessageCircle, FileText, Network, EyeOff } from "lucide-react";

const problems = [
  {
    icon: FileSpreadsheet,
    title: "Excel desordenado",
    desc: "Versiones duplicadas, fórmulas rotas, archivos que nadie sabe cuál es el bueno.",
    visual: (
      <div className="grid grid-cols-6 gap-px bg-[color:var(--hairline)] text-[9px] font-mono rounded overflow-hidden">
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className={`p-1.5 bg-[color:var(--surface-2)] ${
              i % 7 === 0 ? "text-[color:var(--danger)]" : "text-[color:var(--muted-foreground)]"
            }`}
          >
            {i % 5 === 0 ? "#REF!" : (Math.random() * 100).toFixed(0)}
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: MessageCircle,
    title: "WhatsApp como sistema",
    desc: "Pedidos, autorizaciones y reportes perdidos entre cientos de mensajes.",
    visual: (
      <div className="space-y-1.5">
        {[
          { t: "¿alguien tiene el pedido 4823?", me: false },
          { t: "se lo pasé a Juan ayer", me: true },
          { t: "no me llegó nada", me: false },
        ].map((m, i) => (
          <div key={i} className={`flex ${m.me ? "justify-end" : "justify-start"}`}>
            <div
              className={`text-[10px] px-2 py-1 rounded-lg max-w-[80%] ${
                m.me
                  ? "bg-[color:var(--mint)]/15 text-[color:var(--mint)]"
                  : "bg-[color:var(--surface-3)] text-[color:var(--muted-foreground)]"
              }`}
            >
              {m.t}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: FileText,
    title: "Reportes manuales",
    desc: "Horas armando reportes que llegan tarde y con errores humanos.",
    visual: (
      <div className="space-y-1.5">
        {[80, 65, 45, 30].map((w, i) => (
          <div key={i} className="h-2 rounded-full bg-[color:var(--surface-3)] overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[color:var(--warn)] to-[color:var(--danger)] opacity-70"
              style={{ width: `${w}%` }}
            />
          </div>
        ))}
        <div className="text-[10px] text-[color:var(--muted-foreground)] font-mono">retraso · 72h</div>
      </div>
    ),
  },
  {
    icon: Network,
    title: "Sistemas desconectados",
    desc: "ERP, CRM, hojas de cálculo y correos que no se hablan entre sí.",
    visual: (
      <svg viewBox="0 0 120 60" className="w-full h-16">
        {[
          [20, 15], [60, 10], [100, 18], [25, 50], [70, 48], [95, 45],
        ].map(([x, y], i) => (
          <g key={i}>
            <rect x={x - 8} y={y - 6} width="16" height="12" rx="2" fill="oklch(0.26 0.025 240)" stroke="oklch(0.32 0.025 230 / 0.7)" />
          </g>
        ))}
        <path d="M 20 15 L 100 45" stroke="oklch(0.65 0.22 25 / 0.6)" strokeDasharray="2 2" />
        <path d="M 60 10 L 25 50" stroke="oklch(0.65 0.22 25 / 0.6)" strokeDasharray="2 2" />
        <path d="M 100 18 L 70 48" stroke="oklch(0.65 0.22 25 / 0.6)" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    icon: EyeOff,
    title: "Falta de visibilidad",
    desc: "Decisiones a ciegas porque los datos no están a la mano cuando se necesitan.",
    visual: (
      <div className="relative h-16 rounded bg-[color:var(--surface-3)] overflow-hidden">
        <div className="absolute inset-0 backdrop-blur-md bg-[color:var(--surface)]/60 flex items-center justify-center">
          <span className="text-[10px] font-mono text-[color:var(--muted-foreground)]">datos no disponibles</span>
        </div>
      </div>
    ),
  },
];

export function Problem() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl reveal">
          <span className="chip">El problema</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold leading-tight">
            Así se pierde control cuando la operación{" "}
            <span className="text-[color:var(--danger)]">vive dispersa.</span>
          </h2>
          <p className="mt-4 text-[color:var(--muted-foreground)]">
            La mayoría de las empresas no tienen un problema de personas: tienen un problema de sistemas.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className={`surface-card surface-card-hover p-5 reveal ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-[color:var(--danger)]/10 border border-[color:var(--danger)]/30 flex items-center justify-center shrink-0">
                  <p.icon className="w-4 h-4 text-[color:var(--danger)]" />
                </div>
                <div>
                  <div className="font-display font-semibold">{p.title}</div>
                  <div className="text-xs text-[color:var(--muted-foreground)] mt-1 leading-relaxed">
                    {p.desc}
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-[color:var(--surface)]/60 border border-[color:var(--hairline)] p-3">
                {p.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
