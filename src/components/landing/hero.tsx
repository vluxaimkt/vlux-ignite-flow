import { ArrowRight } from "lucide-react";
import { site } from "@/config/site";
import { vluxAssets } from "@/config/vluxAssets";
import { VluxAssetIcon } from "@/components/VluxAssetIcon";
import { DashboardMockup } from "./dashboard-mockup";

const capabilities = [
  {
    asset: vluxAssets.icons.processAutomation,
    label: "Automatización",
    desc: "Tareas repetitivas a flujos auto-ejecutados.",
  },
  {
    asset: vluxAssets.icons.dashboardBars,
    label: "Dashboards",
    desc: "Visibilidad en tiempo real para dirección.",
  },
  {
    asset: vluxAssets.icons.aiBrain,
    label: "IA aplicada",
    desc: "Modelos que asisten decisiones operativas.",
  },
  {
    asset: vluxAssets.icons.api,
    label: "Integraciones",
    desc: "Conecta Excel, ERPs, CRMs y APIs.",
  },
];

export function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden noise">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <img
        src={vluxAssets.backgrounds.watermark}
        alt=""
        aria-hidden="true"
        className="vlux-watermark right-[-8rem] top-16 w-[34rem] max-w-none rotate-[-8deg]"
        loading="eager"
        decoding="async"
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="reveal">
            <span className="chip">
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--cyan-glow)] pulse-dot" />
              {site.tagline}
            </span>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.05] glass-text-shimmer">
              Convierte procesos manuales en{" "}
              <span className="text-gradient-cyan block sm:inline">
                sistemas<span className="block sm:inline"> inteligentes.</span>
              </span>
            </h1>

            <p className="mt-5 text-base md:text-lg text-white/70 max-w-xl leading-relaxed">
              Automatizamos operaciones, conectamos tus herramientas y aplicamos IA para que tu
              empresa opere con más control, visibilidad y velocidad.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href={site.bookingUrl} className="vlux-premium-button w-full sm:w-auto">
                Agendar diagnóstico <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="#demos"
                className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center rounded-full border border-[color:var(--cyan-glow)]/30 bg-black/35 backdrop-blur-md text-white px-8 py-4 hover:bg-white/10 hover:border-[color:var(--cyan-glow)]/60 transition-all"
              >
                Ver demos
              </a>
            </div>

            <div className="mt-8 flex items-center gap-5 text-xs text-white/60">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--positive)]" />
                Diagnóstico sin costo
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--cyan-glow)]" />
                Implementación por etapas
              </div>
            </div>
          </div>

          <div className="reveal lg:scale-105">
            <div className="relative min-h-[430px]">
              <div className="vlux-glow left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2" />
              <span className="absolute left-1/2 top-0 z-20 -translate-x-1/2 sm:left-auto sm:right-2 sm:translate-x-0">
                <VluxAssetIcon
                  src={vluxAssets.icons.aiBrain}
                  alt="Cerebro de IA VLUX"
                  size="hero"
                  loading="eager"
                />
              </span>
              <span className="absolute left-0 top-10 z-20 hidden sm:block">
                <VluxAssetIcon src={vluxAssets.icons.rocket} alt="" size="lg" />
              </span>
              <span className="absolute bottom-8 right-0 z-20 hidden sm:block">
                <VluxAssetIcon src={vluxAssets.icons.api} alt="" size="lg" />
              </span>
              <span className="absolute bottom-2 left-8 z-20 hidden md:block">
                <VluxAssetIcon src={vluxAssets.icons.processAutomation} alt="" size="md" />
              </span>
              <div className="relative z-10 pt-24 sm:pt-28">
                <DashboardMockup />
              </div>
            </div>
          </div>
        </div>

        {/* capabilities strip */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 reveal">
          {capabilities.map((c, i) => (
            <div
              key={c.label}
              className="vlux-glass-card vlux-neon-border p-4 md:p-5 group rounded-3xl shadow-2xl shadow-black/40 hover:scale-[1.02] transition-all duration-300"
            >
              <VluxAssetIcon
                src={c.asset}
                alt={`${c.label} VLUX`}
                size={i === 2 ? "lg" : "md"}
                className="mb-4"
              />
              <div className="font-display font-semibold">{c.label}</div>
              <div className="text-xs text-white/60 mt-1 leading-relaxed">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
