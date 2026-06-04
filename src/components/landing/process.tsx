import { vluxAssets } from "@/config/vluxAssets";

const steps = [
  {
    asset: vluxAssets.process.step01,
    tone: "warn",
    title: "Diagnóstico operativo",
    desc: "Revisamos dónde se pierde tiempo, control o información.",
  },
  {
    asset: vluxAssets.process.step02,
    tone: "cyan",
    title: "Mapa del primer módulo",
    desc: "Definimos alcance, pantallas, datos y responsables.",
  },
  {
    asset: vluxAssets.process.step04,
    tone: "positive",
    title: "Implementación por etapas",
    desc: "Lanzamos una versión funcional sin detener la operación.",
  },
  {
    asset: vluxAssets.process.step06,
    tone: "positive",
    title: "Medición y mejora",
    desc: "Ajustamos con uso real, no con supuestos.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="relative py-16 md:py-24" data-section>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <span className="chip">Proceso</span>
          <h2 className="section-title" data-section-heading>
            Del proceso manual al primer módulo funcionando.
          </h2>
          <p className="section-copy" data-section-copy>
            El objetivo es avanzar con foco: resolver un cuello de botella, validar adopción y
            crecer desde ahí.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-4" data-stagger>
          {steps.map((step, index) => (
            <div key={step.title} className="relative" data-stagger-item>
              <div className="vlux-glass-card h-full rounded-2xl p-5">
                <div className="flex items-start gap-4 md:block">
                  <span className={`process-asset-icon process-asset-icon-${step.tone}`}>
                    <img
                      src={step.asset}
                      alt={`Paso ${index + 1}: ${step.title}`}
                      className="process-asset-icon-img"
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  <div>
                    <div className="mb-2 text-xs font-mono text-white/45">0{index + 1}</div>
                    <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{step.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
