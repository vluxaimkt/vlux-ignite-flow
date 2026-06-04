import {
  TrendingUp,
  Package,
  AlertTriangle,
  Zap,
  ArrowUpRight,
  CheckCircle2,
  Clock,
} from "lucide-react";

export function DashboardMockup() {
  return (
    <div className="relative w-full max-w-full min-w-0">
      {/* glow */}
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-white/6 via-transparent to-[color:var(--cyan-glow)]/6 blur-3xl" />

      <div className="liquid-neon relative w-full max-w-full min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl shadow-black/30">
        {/* window chrome */}
        <div className="flex min-w-0 items-center justify-between gap-3 border-b border-white/10 bg-black/35 px-4 py-3 backdrop-blur-md">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--danger)]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--warn)]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--positive)]/70" />
          </div>
          <div className="text-xs font-mono text-white/60 truncate">vlux.app / operación</div>
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-[color:var(--positive)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--positive)] pulse-dot" />
            Demo
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3 p-4 min-w-0">
          {/* KPIs */}
          {[
            { label: "Ventas hoy", value: "$184,520", delta: "+12.4%", icon: TrendingUp },
            { label: "Órdenes activas", value: "247", delta: "+8", icon: Package },
            { label: "Tiempo ahorrado", value: "62h", delta: "esta semana", icon: Clock },
          ].map((k) => (
            <div
              key={k.label}
              className="col-span-12 min-w-0 rounded-xl border border-white/10 bg-black/30 p-3 transition-colors hover:border-white/20 sm:col-span-4"
            >
              <div className="flex items-center justify-between gap-2 text-white/60 text-[10px] uppercase tracking-wider">
                {k.label}
                <k.icon className="w-3.5 h-3.5 text-[color:var(--cyan-glow)]" />
              </div>
              <div className="text-base md:text-lg font-display font-semibold mt-1">{k.value}</div>
              <div className="text-[10px] text-[color:var(--positive)] mt-0.5">{k.delta}</div>
            </div>
          ))}

          {/* Chart */}
          <div className="group relative col-span-12 overflow-hidden rounded-xl border border-white/10 bg-black/30 p-3 md:col-span-7">
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent group-hover:animate-[liquid-shine_2s_ease-in-out]" />
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs font-medium">Ventas · últimos 14 días</div>
              <div className="text-[10px] text-white/60 font-mono">+22% MoM</div>
            </div>
            <SparkChart />
          </div>

          {/* Orders by status */}
          <div className="col-span-12 rounded-xl border border-white/10 bg-black/30 p-3 md:col-span-5">
            <div className="text-xs font-medium mb-2">Órdenes por estatus</div>
            <div className="space-y-2">
              {[
                { label: "En producción", val: 64, color: "var(--cyan-glow)" },
                { label: "Listas para envío", val: 38, color: "var(--mint)" },
                { label: "En revisión", val: 22, color: "var(--warn)" },
                { label: "Retrasadas", val: 7, color: "var(--danger)" },
              ].map((r) => (
                <div key={r.label}>
                  <div className="flex justify-between text-[10px] text-white/60 mb-1">
                    <span>{r.label}</span>
                    <span className="font-mono text-[color:var(--foreground)]">{r.val}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[color:var(--surface-3)] overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${r.val}%`,
                        background: `linear-gradient(90deg, ${r.color}, color-mix(in oklch, ${r.color} 60%, transparent))`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Automation feed */}
          <div className="col-span-12 rounded-xl border border-white/10 bg-black/30 p-3 md:col-span-7">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs font-medium flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[color:var(--cyan-glow)]" />
                Automatizaciones ejecutadas
              </div>
              <span className="text-[10px] font-mono text-white/60">hoy · 184</span>
            </div>
            <ul className="space-y-1.5 text-[11px]">
              {[
                "Orden #4821 → factura emitida automáticamente",
                "WhatsApp cliente → ticket creado en CRM",
                "Excel inventario → sincronizado con sistema",
                "Alerta: stock bajo en SKU-204",
              ].map((t, i) => (
                <li key={i} className="flex items-center gap-2 text-white/70">
                  <CheckCircle2 className="w-3 h-3 text-[color:var(--positive)] shrink-0" />
                  <span className="truncate">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Alerts */}
          <div className="col-span-12 rounded-xl border border-[color:var(--warn)]/25 bg-[color:var(--warn)]/[0.06] p-3 md:col-span-5">
            <div className="flex items-center gap-1.5 text-xs font-medium mb-2 text-[color:var(--warn)]">
              <AlertTriangle className="w-3.5 h-3.5" />
              Alertas de operación
            </div>
            <div className="space-y-2 text-[11px]">
              <div className="text-[color:var(--foreground)]">3 órdenes con retraso &gt; 48h</div>
              <div className="text-white/70">Revisar empaque antes del corte de envío</div>
              <button className="mt-1 text-[10px] inline-flex items-center gap-1 text-[color:var(--cyan-glow)] hover:underline">
                Ver detalle <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SparkChart() {
  const points = [22, 28, 24, 35, 31, 42, 38, 48, 52, 47, 61, 58, 72, 80];
  const max = Math.max(...points);
  const w = 280,
    h = 80,
    step = w / (points.length - 1);
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * h}`)
    .join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-20" preserveAspectRatio="none">
      <defs>
        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.84 0.18 195)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="oklch(0.84 0.18 195)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#g)" />
      <path d={path} fill="none" stroke="oklch(0.84 0.18 195)" strokeWidth="1.5" />
      {points.map((p, i) => (
        <circle key={i} cx={i * step} cy={h - (p / max) * h} r="1.5" fill="oklch(0.84 0.18 195)" />
      ))}
    </svg>
  );
}
