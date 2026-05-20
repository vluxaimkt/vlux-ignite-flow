import {
  TrendingUp,
  Package,
  AlertTriangle,
  Zap,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Clock,
} from "lucide-react";

export function DashboardMockup() {
  return (
    <div className="relative animate-slide-up w-full max-w-full min-w-0">
      {/* glow */}
      <div
        className="absolute -inset-4 bg-gradient-to-tr from-[color:var(--cyan-glow)]/30 via-[color:var(--mint)]/10 to-[color:var(--cyan-glow)]/20 blur-3xl rounded-[2rem] -z-10 animate-pulse"
        style={{ animationDuration: "4s" }}
      />

      <div className="relative glass-container glass-blur-2xl glass-edge-glow border border-white/20 bg-black/40 before:absolute before:inset-0 before:rounded-3xl before:border-t before:border-white/30 before:pointer-events-none overflow-hidden liquid-neon rounded-3xl shadow-2xl shadow-black/40 w-full max-w-full min-w-0">
        {/* window chrome */}
        <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-[color:var(--cyan-glow)]/30 bg-black/40 backdrop-blur-md min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--danger)]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--warn)]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--positive)]/70" />
          </div>
          <div className="text-xs font-mono text-white/60 truncate">vlux.app / dashboard</div>
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-[color:var(--positive)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--positive)] pulse-dot" />
            En vivo
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
              className="col-span-12 sm:col-span-4 min-w-0 rounded-xl bg-black/30 border border-[color:var(--cyan-glow)]/40 p-3 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),inset_0_0_10px_color-mix(in_oklch,var(--cyan-glow)_10%,transparent)] hover:border-[color:var(--cyan-glow)]/80 transition-colors"
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
          <div className="col-span-12 md:col-span-7 rounded-xl bg-black/30 border border-[color:var(--cyan-glow)]/40 p-3 shadow-[inset_0_0_10px_color-mix(in_oklch,var(--cyan-glow)_10%,transparent)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[color:var(--cyan-glow)]/10 to-transparent -translate-x-full group-hover:animate-[liquid-shine_2s_ease-in-out]" />
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs font-medium">Ventas · últimos 14 días</div>
              <div className="text-[10px] text-white/60 font-mono">+22% MoM</div>
            </div>
            <SparkChart />
          </div>

          {/* Orders by status */}
          <div className="col-span-12 md:col-span-5 rounded-xl bg-black/30 border border-[color:var(--cyan-glow)]/40 p-3 shadow-[inset_0_0_10px_color-mix(in_oklch,var(--cyan-glow)_10%,transparent)]">
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
          <div className="col-span-12 md:col-span-7 rounded-xl bg-black/30 border border-[color:var(--cyan-glow)]/40 p-3 shadow-[inset_0_0_10px_color-mix(in_oklch,var(--cyan-glow)_10%,transparent)]">
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
          <div className="col-span-12 md:col-span-5 rounded-xl bg-gradient-to-br from-[color:var(--warn)]/20 to-transparent border border-[color:var(--warn)]/50 p-3 shadow-[inset_0_0_15px_color-mix(in_oklch,var(--warn)_20%,transparent)]">
            <div className="flex items-center gap-1.5 text-xs font-medium mb-2 text-[color:var(--warn)]">
              <AlertTriangle className="w-3.5 h-3.5" />
              Alertas inteligentes
            </div>
            <div className="space-y-2 text-[11px]">
              <div className="text-[color:var(--foreground)]">3 órdenes con retraso &gt; 48h</div>
              <div className="text-white/70">Predicción IA: cuello de botella en empaque</div>
              <button className="mt-1 text-[10px] inline-flex items-center gap-1 text-[color:var(--cyan-glow)] hover:underline">
                Ver detalle <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* floating IA card */}
      <div className="hidden md:flex absolute -bottom-6 -left-6 liquid-neon rounded-xl px-3 py-2.5 items-center gap-2.5 float z-20">
        <span className="w-8 h-8 rounded-lg bg-black/50 border border-[color:var(--cyan-glow)] flex items-center justify-center shadow-[inset_0_0_10px_var(--cyan-glow)]">
          <Bot className="w-4 h-4 text-[color:var(--primary-foreground)]" />
        </span>
        <div>
          <div className="text-[10px] text-white/60 uppercase tracking-wider">VLUX IA</div>
          <div className="text-xs font-medium">Resumen ejecutivo listo</div>
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
