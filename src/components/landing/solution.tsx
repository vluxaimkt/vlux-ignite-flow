import { CheckCircle2 } from "lucide-react";
import { VluxAssetIcon } from "@/components/VluxAssetIcon";
import { vluxAssets } from "@/config/vluxAssets";

const modules = [
  {
    asset: vluxAssets.integrations.excel,
    title: "Excel a sistema operativo",
    problem: "Cuando una hoja ya controla inventario, costos, pedidos o asistencia.",
    delivers: ["Aplicación web por roles", "Historial y permisos", "Base de datos centralizada"],
    result: "Una sola versión de la verdad, sin perseguir archivos.",
  },
  {
    asset: vluxAssets.integrations.whatsapp,
    title: "WhatsApp con seguimiento",
    problem: "Cuando las solicitudes se pierden entre chats y nadie sabe el estatus.",
    delivers: ["Registro de solicitudes", "Alertas y responsables", "Vista de pendientes"],
    result: "Cada conversación termina en una acción visible.",
  },
  {
    asset: vluxAssets.icons.dashboardBars,
    title: "Reportes y tableros claros",
    problem: "Cuando dirección necesita respuestas sin esperar el cierre del reporte.",
    delivers: ["KPIs por área", "Reportes automáticos", "Filtros para operación y dirección"],
    result: "Visibilidad semanal o diaria sin trabajo manual repetido.",
  },
];

const integrations = [
  { name: "Excel", asset: vluxAssets.integrations.excel },
  { name: "WhatsApp", asset: vluxAssets.integrations.whatsapp },
  { name: "Global Shops", asset: vluxAssets.integrations.globalShop },
  { name: "ERP / CRM", asset: vluxAssets.icons.network },
  { name: "Base de datos", asset: vluxAssets.integrations.database },
];

export function Solution() {
  return (
    <section id="modulos" className="relative py-16 md:py-24" data-section>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <span className="chip">Módulos</span>
          <h2 className="section-title" data-section-heading>
            Construimos solo el módulo que resuelve el cuello de botella.
          </h2>
          <p className="section-copy" data-section-copy>
            La mejora no empieza cambiando todo el negocio. Empieza con un proceso crítico, una
            entrega clara y una adopción que el equipo pueda sostener.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3" data-stagger>
          {modules.map((module) => (
            <article
              key={module.title}
              className="vlux-glass-card rounded-2xl p-5 md:p-6"
              data-stagger-item
            >
              <VluxAssetIcon
                src={module.asset}
                alt={`${module.title} VLUX`}
                size="lg"
                className="mb-5"
              />
              <h3 className="font-display text-xl font-semibold">{module.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{module.problem}</p>

              <div className="mt-5 space-y-2">
                {module.delivers.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-white/70">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--positive)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-[color:var(--cyan-glow)]/20 bg-[color:var(--cyan-glow)]/[0.04] p-4 text-sm font-medium leading-relaxed text-white">
                {module.result}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 rounded-2xl border border-white/10 bg-black/20 p-5 md:grid-cols-[0.8fr_1.2fr] md:p-6">
          <div>
            <span className="chip">Integraciones</span>
            <h3 className="mt-4 font-display text-2xl font-bold">
              Trabajamos con lo que ya usa tu equipo.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              La tecnología se usa como herramienta interna. La promesa principal es ordenar el
              proceso y volverlo medible.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5" data-stagger>
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="rounded-xl border border-white/10 bg-white/[0.025] p-3 text-center"
                data-stagger-item
              >
                <VluxAssetIcon
                  src={integration.asset}
                  alt={`${integration.name} integrado con VLUX`}
                  size="sm"
                  className="mx-auto"
                />
                <div className="mt-2 text-xs text-white/65">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
