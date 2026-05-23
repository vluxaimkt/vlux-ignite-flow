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
    <section
      id="top"
      data-section
      className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden noise"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <img
        src={vluxAssets.backgrounds.watermark}
        alt=""
        aria-hidden="true"
        className="vlux-watermark left-1/2 top-[15%] w-[30rem] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-0 hidden md:block"
        loading="eager"
        decoding="async"
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <span className="chip" data-hero-chip>
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--cyan-glow)] pulse-dot" />
              {site.tagline}
            </span>

            <h1
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.04] text-balance"
              data-hero-title
            >
              Sistemas inteligentes que{" "}
              <span className="text-gradient-cyan block sm:inline">
                recortan fricción operativa.
              </span>
            </h1>

            <p className="section-copy mt-5" data-hero-copy>
              Diseñamos e implementamos automatización, software e IA aplicada para que tu empresa
              opere con menos errores, más trazabilidad y decisiones más rápidas.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={site.bookingUrl}
                className="vlux-premium-button w-full sm:w-auto"
                data-hero-cta
              >
                Agendar diagnóstico estratégico <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="#demos"
                className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center rounded-full border border-[color:var(--cyan-glow)]/30 bg-black/35 backdrop-blur-md text-white px-8 py-4 hover:bg-white/10 hover:border-[color:var(--cyan-glow)]/60 transition-all"
                data-hero-cta
              >
                Ver demos
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-white/70">
              <div className="stat-pill" data-hero-stat>
                <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--positive)]" />
                Diagnóstico sin costo
              </div>
              <div className="stat-pill" data-hero-stat>
                <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--cyan-glow)]" />
                Roadmap en 7 días hábiles
              </div>
              <div className="stat-pill" data-hero-stat>
                <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--mint)]" />
                Implementación por etapas
              </div>
            </div>
          </div>

          <div data-hero-visual>
            <div className="relative min-h-[430px]">
              <div className="vlux-glow left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2" />
              <span className="absolute left-1/2 -top-4 z-20 -translate-x-1/2 sm:left-auto sm:-right-2 sm:-top-6 sm:translate-x-0">
                <VluxAssetIcon
                  src={vluxAssets.icons.aiBrain}
                  alt="Cerebro de IA VLUX"
                  size="xl"
                  className="!rounded-2xl"
                  loading="eager"
                />
              </span>
              <span className="absolute -left-10 top-2 z-20 hidden sm:block">
                <VluxAssetIcon src={vluxAssets.icons.rocket} alt="" size="lg" />
              </span>
              <div className="relative z-10 pt-24 sm:pt-28">
                <DashboardMockup />
              </div>
            </div>
          </div>
        </div>

        {/* capabilities strip */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4" data-stagger>
          {capabilities.map((c) => (
            <div
              key={c.label}
              className="group surface-card-hover md:-translate-y-2"
              data-stagger-item
            >
              <div className="vlux-glass-card vlux-neon-border rounded-3xl p-4 shadow-xl shadow-black/30 md:p-5">
                <VluxAssetIcon
                  src={c.asset}
                  alt={`${c.label} VLUX`}
                  size="md"
                  className="mb-4"
                />
                <div className="font-display font-semibold">{c.label}</div>
                <div className="mt-1 text-xs leading-relaxed text-white/60">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
