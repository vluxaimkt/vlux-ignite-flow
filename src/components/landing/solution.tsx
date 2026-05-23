import { ArrowRight } from "lucide-react";
import { VluxAssetIcon } from "@/components/VluxAssetIcon";
import { vluxAssets } from "@/config/vluxAssets";

const services = [
  {
    asset: vluxAssets.icons.processAutomation,
    title: "Automatización de procesos",
    desc: "Convertimos pasos manuales en flujos con reglas, alertas, aprobaciones y notificaciones.",
    tags: ["Flujos", "Triggers", "Operación"],
  },
  {
    asset: vluxAssets.icons.dashboardBars,
    title: "Dashboards empresariales",
    desc: "KPIs en tiempo real para dirección, ventas, producción y administración.",
    tags: ["KPIs", "Roles", "Tiempo real"],
  },
  {
    asset: vluxAssets.icons.aiBrain,
    title: "IA para atención al cliente",
    desc: "Asistentes que responden, clasifican solicitudes, resumen conversaciones y crean tickets.",
    tags: ["WhatsApp", "RAG", "Agentes"],
  },
  {
    asset: vluxAssets.integrations.excel,
    title: "Excel a software",
    desc: "Migramos hojas críticas a apps web con permisos, auditoría y datos confiables.",
    tags: ["Excel", "Web app", "Control"],
  },
  {
    asset: vluxAssets.integrations.whatsapp,
    title: "Automatización con WhatsApp",
    desc: "Bots, cotizaciones, seguimiento y reportes conectados a tus sistemas internos.",
    tags: ["Bot", "CRM", "Alertas"],
  },
  {
    asset: vluxAssets.icons.users,
    title: "CRM / ERP ligero",
    desc: "Clientes, órdenes, inventario y tareas operativas sin implementar un sistema pesado.",
    tags: ["Clientes", "Órdenes", "Permisos"],
  },
  {
    asset: vluxAssets.icons.api,
    title: "Integración con APIs",
    desc: "Conectamos ERP, CRM, e-commerce, contabilidad y servicios externos.",
    tags: ["REST", "Webhooks", "Datos"],
  },
  {
    asset: vluxAssets.icons.network,
    title: "Sistemas internos",
    desc: "Paneles, bases de datos y herramientas a medida para operar con una sola fuente de verdad.",
    tags: ["Paneles", "BD", "Equipos"],
  },
];

const integrations = [
  { name: "WhatsApp", asset: vluxAssets.integrations.whatsapp },
  { name: "Excel", asset: vluxAssets.integrations.excel },
  { name: "SolidWorks", asset: vluxAssets.integrations.solidworks },
  { name: "Global Shop", asset: vluxAssets.integrations.globalShop },
  { name: "API", asset: vluxAssets.integrations.api },
  { name: "Base de datos", asset: vluxAssets.integrations.database },
];

export function Solution() {
  return (
    <section id="servicios" className="py-20 md:py-28 relative" data-section>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--cyan-glow)]/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl">
          <span className="chip">La solución</span>
          <h2 className="section-title" data-section-heading>
            VLUX transforma tu operación en un{" "}
            <span className="text-gradient-cyan">sistema medible.</span>
          </h2>
          <p className="section-copy" data-section-copy>
            Definimos el flujo ideal de tu negocio y lo aterrizamos en software, datos conectados e
            IA útil para operar y decidir mejor, todos los días.
          </p>
        </div>

        <div
          className="mt-12 vlux-glass-card vlux-neon-border p-5 md:p-7 rounded-3xl shadow-xl shadow-black/35"
          data-stagger
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-5 items-center">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-[color:var(--danger)] font-mono mb-3">
                Input operativo
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-white/70">
                {[
                  "Excel disperso",
                  "WhatsApp informal",
                  "Reportes manuales",
                  "Sistemas aislados",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/10 bg-black/30 px-3 py-2"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <ArrowRight className="hidden md:block w-5 h-5 text-[color:var(--cyan-glow)]" />

            <div className="text-center">
              <VluxAssetIcon
                src={vluxAssets.icons.aiBrain}
                alt="Capa de inteligencia artificial VLUX"
                size="xl"
                className="mx-auto"
              />
              <div className="mt-3 font-display font-semibold">Capa VLUX</div>
              <div className="text-[11px] text-white/60 mt-1">Diseño · Software · Datos · IA</div>
            </div>

            <ArrowRight className="hidden md:block w-5 h-5 text-[color:var(--cyan-glow)]" />

            <div>
              <div className="text-[10px] uppercase tracking-wider text-[color:var(--cyan-glow)] font-mono mb-3">
                Output inteligente
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  "Flujo automatizado",
                  "Información centralizada",
                  "KPIs en tiempo real",
                  "Alertas inteligentes",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-[color:var(--cyan-glow)]/25 bg-[color:var(--cyan-glow)]/5 px-3 py-2 text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" data-stagger>
          {services.map((service) => (
            <div
              key={service.title}
              className="group surface-card-hover"
              data-stagger-item
            >
              <div className="vlux-glass-card vlux-neon-border rounded-3xl p-5 shadow-xl shadow-black/30 md:p-6">
                <VluxAssetIcon
                  src={service.asset}
                  alt={`${service.title} VLUX`}
                  size="lg"
                  className="mb-5"
                />
                <h3 className="font-display text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{service.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-mono text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="chip">Integraciones</span>
              <h3 className="mt-4 text-2xl md:text-4xl font-display font-bold" data-section-heading>
                Tus herramientas conectadas en una sola operación.
              </h3>
            </div>
            <p className="max-w-xl text-sm md:text-base text-white/70" data-section-copy>
              Conectamos los canales, hojas de cálculo, APIs y sistemas que ya usa tu equipo para
              reducir capturas dobles y errores operativos.
            </p>
          </div>

          <div
            className="mt-8 mx-auto grid w-full max-w-5xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
            data-stagger
          >
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="group surface-card-hover"
                data-stagger-item
              >
                <div className="vlux-glass-card vlux-neon-border rounded-2xl p-4 text-center">
                  <VluxAssetIcon
                    src={integration.asset}
                    alt={`${integration.name} integrado con VLUX`}
                    size="md"
                    className="mx-auto"
                  />
                  <div className="mt-3 text-xs font-mono text-white/70">{integration.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
