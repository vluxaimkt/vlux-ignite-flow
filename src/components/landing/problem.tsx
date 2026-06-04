import { vluxAssets } from "@/config/vluxAssets";

const problems = [
  {
    asset: vluxAssets.problem.tableAlert,
    title: "Excel dejó de alcanzar",
    desc: "Hay duplicados, fórmulas frágiles y versiones distintas del mismo archivo.",
    cost: "El equipo pierde tiempo validando datos antes de poder decidir.",
  },
  {
    asset: vluxAssets.problem.whatsapp,
    title: "WhatsApp carga la operación",
    desc: "Pedidos, autorizaciones y pendientes viven entre chats, audios y capturas.",
    cost: "El seguimiento depende de memoria, no de un flujo visible.",
  },
  {
    asset: vluxAssets.problem.report,
    title: "Los reportes llegan tarde",
    desc: "La información se junta a mano y dirección ve el problema cuando ya pasó.",
    cost: "Las decisiones llegan después del costo, no antes.",
  },
];

export function Problem() {
  return (
    <section id="problema" className="relative py-16 md:py-24" data-section>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <span className="chip">El problema</span>
          <h2 className="section-title" data-section-heading>
            La operación crece, pero las herramientas se quedan cortas.
          </h2>
          <p className="section-copy" data-section-copy>
            No es falta de esfuerzo. Es que los procesos importantes están repartidos entre hojas,
            mensajes y reportes que nadie puede ver completos.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3" data-stagger>
          {problems.map((problem) => (
            <div key={problem.title} className="vlux-glass-card rounded-2xl p-5" data-stagger-item>
              <div className="flex items-start gap-4">
                <span className="problem-asset-icon" aria-hidden="true">
                  <img
                    src={problem.asset}
                    alt=""
                    className="problem-asset-icon-img"
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{problem.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{problem.desc}</p>
                </div>
              </div>
              <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-relaxed text-white/70">
                {problem.cost}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
