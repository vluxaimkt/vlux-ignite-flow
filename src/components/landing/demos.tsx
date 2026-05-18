import { Fingerprint, Calculator, MessageSquare, LayoutDashboard, FileSpreadsheet, ArrowRight } from "lucide-react";
import { site } from "@/config/site";

const demos = [
  {
    icon: Fingerprint,
    title: "Checador 2.0",
    desc: "Asistencia con geolocalización, foto y dashboard en tiempo real.",
    mock: <CheckadorMock />,
  },
  {
    icon: Calculator,
    title: "Sistema de Costos",
    desc: "Costeo por proyecto, comparativo real vs. presupuesto y alertas.",
    mock: <CostosMock />,
  },
  {
    icon: MessageSquare,
    title: "WhatsApp + IA",
    desc: "Bot que responde con tu información, crea tickets y agenda citas.",
    mock: <WhatsappMock />,
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Ejecutivo",
    desc: "KPIs de operación, ventas y finanzas en una sola vista.",
    mock: <ExecMock />,
  },
  {
    icon: FileSpreadsheet,
    title: "Excel a Sistema",
    desc: "Migramos tus hojas críticas a una app web con permisos y auditoría.",
    mock: <ExcelMock />,
  },
];

export function Demos() {
  return (
    <section id="demos" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
        <div className="max-w-2xl reveal">
          <span className="chip">Demos / MVPs</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold leading-tight">
            Productos listos para{" "}
            <span className="text-gradient-cyan">probar hoy.</span>
          </h2>
          <p className="mt-4 text-[color:var(--muted-foreground)]">
            Bases listas que adaptamos a tu operación en semanas, no meses.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {demos.map((d, i) => (
            <div
              key={d.title}
              className={`surface-card surface-card-hover overflow-hidden flex flex-col reveal ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className={`p-4 border-b border-[color:var(--hairline)] bg-[color:var(--surface)]/40 ${i === 0 ? "min-h-[200px]" : "min-h-[160px]"}`}>
                {d.mock}
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-8 h-8 rounded-lg bg-[color:var(--surface-3)] border border-[color:var(--hairline)] flex items-center justify-center">
                    <d.icon className="w-4 h-4 text-[color:var(--cyan-glow)]" />
                  </span>
                  <h3 className="font-display font-semibold">{d.title}</h3>
                </div>
                <p className="text-sm text-[color:var(--muted-foreground)] flex-1">{d.desc}</p>
                <a href={site.bookingUrl} className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--cyan-glow)] hover:gap-2.5 transition-all">
                  Solicitar demo <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckadorMock() {
  return (
    <div className="grid grid-cols-3 gap-2 h-full">
      {[
        { n: "AR", name: "A. Reyes", time: "08:02", ok: true },
        { n: "MG", name: "M. González", time: "08:14", ok: true },
        { n: "JL", name: "J. López", time: "—", ok: false },
        { n: "SP", name: "S. Pérez", time: "08:05", ok: true },
        { n: "DR", name: "D. Ramírez", time: "08:31", ok: true },
        { n: "LV", name: "L. Vázquez", time: "—", ok: false },
      ].map((u) => (
        <div key={u.n} className="rounded-lg bg-[color:var(--surface-2)]/80 border border-[color:var(--hairline)] p-2 flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[color:var(--cyan-glow)]/30 to-[color:var(--mint)]/20 flex items-center justify-center text-[10px] font-mono">
            {u.n}
          </div>
          <div className="min-w-0">
            <div className="text-[10px] truncate">{u.name}</div>
            <div className={`text-[9px] font-mono ${u.ok ? "text-[color:var(--positive)]" : "text-[color:var(--danger)]"}`}>
              {u.ok ? "✓ " + u.time : "ausente"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function CostosMock() {
  return (
    <div className="space-y-2">
      <div className="text-[10px] font-mono text-[color:var(--muted-foreground)]">Proyecto · OBR-204</div>
      {[
        { l: "Material", r: 78, p: 60 },
        { l: "Mano de obra", r: 55, p: 65 },
        { l: "Equipo", r: 42, p: 50 },
      ].map((c) => (
        <div key={c.l}>
          <div className="flex justify-between text-[10px] mb-1">
            <span>{c.l}</span>
            <span className="font-mono text-[color:var(--muted-foreground)]">{c.r}% / {c.p}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-[color:var(--surface-3)] overflow-hidden relative">
            <div className="h-full bg-[color:var(--cyan-glow)]/60" style={{ width: `${c.p}%` }} />
            <div className={`absolute top-0 left-0 h-full w-px ${c.r > c.p ? "bg-[color:var(--danger)]" : "bg-[color:var(--positive)]"}`} style={{ left: `${c.r}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function WhatsappMock() {
  return (
    <div className="space-y-1.5">
      {[
        { t: "Hola, quiero cotizar 50 piezas", me: false },
        { t: "¡Claro! ¿De qué referencia y para qué fecha?", me: true, ai: true },
        { t: "SKU-A102, para el 30 de mayo", me: false },
        { t: "Listo: $48,200 + IVA. ¿Te envío PDF?", me: true, ai: true },
      ].map((m, i) => (
        <div key={i} className={`flex ${m.me ? "justify-end" : "justify-start"}`}>
          <div className={`text-[10px] px-2 py-1.5 rounded-lg max-w-[78%] ${
            m.me ? "bg-[color:var(--cyan-glow)]/15 border border-[color:var(--cyan-glow)]/30 text-[color:var(--foreground)]" : "bg-[color:var(--surface-3)] text-[color:var(--muted-foreground)]"
          }`}>
            {m.ai && <span className="block text-[8px] font-mono text-[color:var(--cyan-glow)] mb-0.5">VLUX IA</span>}
            {m.t}
          </div>
        </div>
      ))}
    </div>
  );
}

function ExecMock() {
  return (
    <div className="grid grid-cols-2 gap-2 h-full">
      {[
        { l: "Ingresos", v: "$1.2M" },
        { l: "Margen", v: "32%" },
        { l: "Órdenes", v: "847" },
        { l: "OTIF", v: "94%" },
      ].map((k) => (
        <div key={k.l} className="rounded-lg bg-[color:var(--surface-2)]/80 border border-[color:var(--hairline)] p-2">
          <div className="text-[9px] uppercase text-[color:var(--muted-foreground)]">{k.l}</div>
          <div className="font-display font-semibold">{k.v}</div>
        </div>
      ))}
    </div>
  );
}

function ExcelMock() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid grid-cols-3 gap-px bg-[color:var(--hairline)] text-[8px] font-mono rounded overflow-hidden flex-1">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="p-1 bg-[color:var(--surface-2)] text-[color:var(--muted-foreground)]">
            {(Math.random() * 100).toFixed(0)}
          </div>
        ))}
      </div>
      <ArrowRight className="w-4 h-4 text-[color:var(--cyan-glow)] shrink-0" />
      <div className="flex-1 rounded-md bg-[color:var(--surface-2)] border border-[color:var(--cyan-glow)]/30 p-2 glow-cyan-sm">
        <div className="h-1 rounded bg-[color:var(--cyan-glow)]/60 mb-1" />
        <div className="h-1 rounded bg-[color:var(--cyan-glow)]/40 mb-1 w-3/4" />
        <div className="h-1 rounded bg-[color:var(--cyan-glow)]/30 w-1/2" />
      </div>
    </div>
  );
}
