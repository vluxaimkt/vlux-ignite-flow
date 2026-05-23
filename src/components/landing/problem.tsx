import { FileSpreadsheet, MessageCircle, FileText, Network, EyeOff } from "lucide-react";
import { LiquidGlassIcon } from "@/components/LiquidGlassIcon";

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
            className={`p-1.5 bg-black/30 backdrop-blur-md rounded-md ${
              i % 7 === 0 ? "text-[color:var(--danger)]" : "text-white/60"
            }`}
          >
            {i % 5 === 0 ? "#REF!" : ((i * 37 + 18) % 91) + 9}
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
              className={`text-[10px] px-2 py-1 rounded-lg max-w-[80%] backdrop-blur-md ${
                m.me ? "bg-white/10 text-white" : "bg-black/30 text-white/70"
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
        <div className="text-[10px] text-white/60 font-mono">retraso · 72h</div>
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
          [20, 15],
          [60, 10],
          [100, 18],
          [25, 50],
          [70, 48],
          [95, 45],
        ].map(([x, y], i) => (
          <g key={i}>
            <rect
              x={x - 8}
              y={y - 6}
              width="16"
              height="12"
              rx="2"
              fill="oklch(0.26 0.025 240)"
              stroke="oklch(0.32 0.025 230 / 0.7)"
            />
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
        <div className="absolute inset-0 backdrop-blur-md bg-black/40 flex items-center justify-center">
          <span className="text-[10px] font-mono text-white/60">datos no disponibles</span>
        </div>
      </div>
    ),
  },
];

export function Problem() {
  return (
    <section className="py-20 md:py-28 relative" data-section>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl">
          <span className="chip">El problema</span>
          <h2 className="section-title" data-section-heading>
            Así se pierde margen cuando la operación{" "}
            <span className="text-[color:var(--danger)]">vive dispersa.</span>
          </h2>
          <p className="section-copy" data-section-copy>
            No es un problema de actitud del equipo. Es un problema de procesos sin sistema:
            información fragmentada, decisiones lentas y errores que se repiten.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-stagger>
          {problems.map((p, i) => (
            <div
              key={p.title}
              className={`relative vlux-glass-card vlux-neon-border p-5 rounded-3xl shadow-xl shadow-black/30 surface-card-hover ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
              data-stagger-item
            >
              <div className="flex items-start gap-3 mb-4">
                <LiquidGlassIcon icon={p.icon} tone="danger" size="sm" />
                <div>
                  <div className="font-display font-semibold">{p.title}</div>
                  <div className="text-xs text-white/60 mt-1 leading-relaxed">{p.desc}</div>
                </div>
              </div>
              <div className="rounded-2xl bg-black/20 border border-white/5 p-3 backdrop-blur-md">
                {p.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
