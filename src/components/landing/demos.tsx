import { ArrowRight } from "lucide-react";
import { site } from "@/config/site";
import { VluxAssetIcon } from "@/components/VluxAssetIcon";
import { vluxAssets } from "@/config/vluxAssets";

const demos = [
  {
    asset: vluxAssets.icons.mobileApp,
    title: "Checador 2.0",
    desc: "Asistencia con geolocalización, foto y dashboard en tiempo real.",
    mock: <CheckadorMock />,
  },
  {
    asset: vluxAssets.icons.target,
    title: "Sistema de Costos",
    desc: "Costeo por proyecto, comparativo real vs. presupuesto y alertas.",
    mock: <CostosMock />,
  },
  {
    asset: vluxAssets.integrations.whatsapp,
    title: "WhatsApp + IA",
    desc: "Bot que responde con tu información, crea tickets y agenda citas.",
    mock: <WhatsappMock />,
  },
  {
    asset: vluxAssets.icons.dashboardBars,
    title: "Dashboard Ejecutivo",
    desc: "KPIs de operación, ventas y finanzas en una sola vista.",
    mock: <ExecMock />,
  },
  {
    asset: vluxAssets.integrations.excel,
    title: "Excel a Sistema",
    desc: "Migramos tus hojas críticas a una app web con permisos y auditoría.",
    mock: <ExcelMock />,
  },
];

export function Demos() {
  return (
    <section id="demos" className="py-20 md:py-28 relative" data-section>
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
        <div className="max-w-2xl">
          <span className="chip">Demos / MVPs</span>
          <h2 className="section-title" data-section-heading>
            Productos listos para <span className="text-gradient-cyan">probar hoy.</span>
          </h2>
          <p className="section-copy" data-section-copy>
            Bases listas que adaptamos a tu operación en semanas, no meses.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-stagger>
          {demos.map((d, i) => (
            <div
              key={d.title}
              className={`group surface-card-hover ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
              data-stagger-item
            >
              <div className="vlux-glass-card vlux-neon-border flex h-full flex-col overflow-hidden rounded-3xl shadow-xl shadow-black/30">
                <div
                  className={`relative overflow-hidden border-b border-[color:var(--cyan-glow)]/30 bg-black/40 p-4 backdrop-blur-sm ${i === 0 ? "min-h-[200px]" : "min-h-[160px]"}`}
                >
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-[color:var(--cyan-glow)]/5 to-transparent" />
                  <div className="relative z-10">{d.mock}</div>
                </div>
                <div className="flex flex-1 flex-col bg-black/20 p-5">
                  <div className="mb-2 flex items-center gap-2.5">
                    <VluxAssetIcon src={d.asset} alt={`${d.title} VLUX`} size="sm" />
                    <h3 className="font-display font-semibold">{d.title}</h3>
                  </div>
                  <p className="flex-1 text-sm text-white/70">{d.desc}</p>
                  <a
                    href={site.bookingUrl}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--cyan-glow)] transition-all hover:gap-2.5"
                  >
                    Solicitar demo <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
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
        <div
          key={u.n}
          className="rounded-lg bg-black/40 border border-[color:var(--cyan-glow)]/30 p-2 flex items-center gap-2 shadow-[inset_0_0_10px_color-mix(in_oklch,var(--cyan-glow)_5%,transparent)] backdrop-blur-md"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[color:var(--cyan-glow)]/50 to-[color:var(--mint)]/30 flex items-center justify-center text-[10px] font-mono border border-[color:var(--cyan-glow)]/50 shadow-[0_0_8px_var(--cyan-glow)] text-white">
            {u.n}
          </div>
          <div className="min-w-0">
            <div className="text-[10px] truncate text-white">{u.name}</div>
            <div
              className={`text-[9px] font-mono ${u.ok ? "text-[color:var(--mint)] drop-shadow-[0_0_2px_var(--mint)]" : "text-[color:var(--danger)] drop-shadow-[0_0_2px_var(--danger)]"}`}
            >
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
      <div className="text-[10px] font-mono text-[color:var(--muted-foreground)]">
        Proyecto · OBR-204
      </div>
      {[
        { l: "Material", r: 78, p: 60 },
        { l: "Mano de obra", r: 55, p: 65 },
        { l: "Equipo", r: 42, p: 50 },
      ].map((c) => (
        <div key={c.l}>
          <div className="flex justify-between text-[10px] mb-1">
            <span>{c.l}</span>
            <span className="font-mono text-[color:var(--muted-foreground)]">
              {c.r}% / {c.p}%
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-[color:var(--surface-3)] overflow-hidden relative">
            <div className="h-full bg-[color:var(--cyan-glow)]/60" style={{ width: `${c.p}%` }} />
            <div
              className={`absolute top-0 left-0 h-full w-px ${c.r > c.p ? "bg-[color:var(--danger)]" : "bg-[color:var(--positive)]"}`}
              style={{ left: `${c.r}%` }}
            />
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
          <div
            className={`text-[10px] px-2.5 py-2 rounded-lg max-w-[78%] backdrop-blur-md shadow-[inset_0_0_10px_rgba(255,255,255,0.05)] ${
              m.me
                ? "bg-[color:var(--cyan-glow)]/20 border border-[color:var(--cyan-glow)]/50 text-white shadow-[0_0_10px_color-mix(in_oklch,var(--cyan-glow)_20%,transparent)]"
                : "bg-black/50 border border-white/10 text-[color:var(--muted-foreground)]"
            }`}
          >
            {m.ai && (
              <span className="block text-[8px] font-mono text-[color:var(--cyan-glow)] mb-0.5 drop-shadow-[0_0_4px_var(--cyan-glow)]">
                VLUX IA
              </span>
            )}
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
        <div
          key={k.l}
          className="rounded-lg bg-black/40 border border-[color:var(--cyan-glow)]/30 p-2 shadow-[inset_0_0_10px_color-mix(in_oklch,var(--cyan-glow)_10%,transparent)] backdrop-blur-md"
        >
          <div className="text-[9px] uppercase text-[color:var(--cyan-glow)] opacity-80">{k.l}</div>
          <div className="font-display font-semibold text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]">
            {k.v}
          </div>
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
          <div
            key={i}
            className="p-1 bg-[color:var(--surface-2)] text-[color:var(--muted-foreground)]"
          >
            {((i * 23 + 41) % 89) + 10}
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
