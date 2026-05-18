import { Workflow, BarChart3, Brain, Plug, ArrowRight } from "lucide-react";
import { site } from "@/config/site";
import { DashboardMockup } from "./dashboard-mockup";

const capabilities = [
  { icon: Workflow, label: "Automatización", desc: "Tareas repetitivas a flujos auto-ejecutados." },
  { icon: BarChart3, label: "Dashboards", desc: "Visibilidad en tiempo real para dirección." },
  { icon: Brain, label: "IA aplicada", desc: "Modelos que asisten decisiones operativas." },
  { icon: Plug, label: "Integraciones", desc: "Conecta Excel, ERPs, CRMs y APIs." },
];

export function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden noise">
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="reveal">
            <span className="chip">
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--cyan-glow)] pulse-dot" />
              {site.tagline}
            </span>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.05]">
              Convierte procesos manuales en{" "}
              <span className="text-gradient-cyan">sistemas inteligentes.</span>
            </h1>

            <p className="mt-5 text-base md:text-lg text-[color:var(--muted-foreground)] max-w-xl leading-relaxed">
              Automatizamos operaciones, conectamos tus herramientas y aplicamos IA
              para que tu empresa opere con más control, visibilidad y velocidad.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href={site.bookingUrl} className="btn-primary">
                Agendar diagnóstico <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#demos" className="btn-ghost">Ver demos</a>
            </div>

            <div className="mt-8 flex items-center gap-5 text-xs text-[color:var(--muted-foreground)]">
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
            <DashboardMockup />
          </div>
        </div>

        {/* capabilities strip */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 reveal">
          {capabilities.map((c) => (
            <div key={c.label} className="surface-card surface-card-hover p-4 md:p-5">
              <div className="w-10 h-10 rounded-lg bg-[color:var(--surface-3)] border border-[color:var(--hairline)] flex items-center justify-center mb-3">
                <c.icon className="w-5 h-5 text-[color:var(--cyan-glow)]" />
              </div>
              <div className="font-display font-semibold">{c.label}</div>
              <div className="text-xs text-[color:var(--muted-foreground)] mt-1 leading-relaxed">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
