import { ArrowRight } from "lucide-react";
import { site } from "@/config/site";
import { vluxAssets } from "@/config/vluxAssets";
import { VluxAssetIcon } from "@/components/VluxAssetIcon";
import { DashboardMockup } from "./dashboard-mockup";

const modules = [
  {
    asset: vluxAssets.integrations.excel,
    label: "Excel a sistema",
    desc: "Tus hojas críticas con permisos, historial y una sola versión confiable.",
  },
  {
    asset: vluxAssets.integrations.whatsapp,
    label: "WhatsApp operativo",
    desc: "Pedidos, solicitudes y seguimiento ordenados sin perder conversaciones.",
  },
  {
    asset: vluxAssets.icons.dashboardBars,
    label: "Reportes automáticos",
    desc: "Indicadores claros para decidir sin armar archivos cada semana.",
  },
];

export function Hero() {
  return (
    <section
      id="top"
      data-section
      className="relative overflow-hidden pb-14 pt-28 noise md:pb-20 md:pt-36"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <img
        src={vluxAssets.backgrounds.watermark}
        alt=""
        aria-hidden="true"
        className="vlux-watermark left-1/2 top-[16%] hidden w-[28rem] max-w-none -translate-x-1/2 -translate-y-1/2 md:block"
        loading="eager"
        decoding="async"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <span className="chip" data-hero-chip>
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--cyan-glow)]" />
              {site.tagline}
            </span>

            <h1
              className="mt-5 text-4xl font-display font-bold leading-[1.04] text-balance sm:text-5xl lg:text-6xl"
              data-hero-title
            >
              Convierte Excel, WhatsApp y reportes manuales en un{" "}
              <span className="text-gradient-cyan block sm:inline">
                sistema que tu equipo sí usa.
              </span>
            </h1>

            <p className="section-copy mt-5" data-hero-copy>
              Diseñamos módulos operativos a la medida para reducir errores, ordenar el seguimiento
              y dar visibilidad sin cambiar toda tu operación de golpe.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="vlux-premium-button w-full sm:w-auto"
                data-hero-cta
              >
                Agendar diagnóstico operativo <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-white/70">
              <div className="stat-pill" data-hero-stat>
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--positive)]" />
                Diagnóstico sin costo
              </div>
              <div className="stat-pill" data-hero-stat>
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--cyan-glow)]" />
                Mapa de prioridades
              </div>
              <div className="stat-pill" data-hero-stat>
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--mint)]" />
                Implementación por etapas
              </div>
            </div>
          </div>

          <div data-hero-visual>
            <div className="relative min-h-[390px]">
              <div className="vlux-glow left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2" />
              <div className="relative z-10 pt-4 sm:pt-8">
                <DashboardMockup />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3 md:mt-16" data-stagger>
          {modules.map((module) => (
            <div key={module.label} className="group surface-card-hover" data-stagger-item>
              <div className="vlux-glass-card rounded-2xl p-4 shadow-xl shadow-black/20 md:p-5">
                <VluxAssetIcon
                  src={module.asset}
                  alt={`${module.label} VLUX`}
                  size="md"
                  className="mb-4"
                />
                <div className="font-display font-semibold">{module.label}</div>
                <div className="mt-1 text-sm leading-relaxed text-white/65">{module.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
