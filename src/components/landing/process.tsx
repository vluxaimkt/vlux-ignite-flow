import { vluxAssets } from "@/config/vluxAssets";

const steps = [
  {
    asset: vluxAssets.process.step01,
    tone: "warn",
    title: "Diagnóstico",
    desc: "Entendemos tu operación real, no la del organigrama.",
  },
  {
    asset: vluxAssets.process.step02,
    tone: "cyan",
    title: "Mapeo",
    desc: "Documentamos procesos, datos, herramientas y dolores.",
  },
  {
    asset: vluxAssets.process.step03,
    tone: "positive",
    title: "Prototipo",
    desc: "Construimos una versión funcional para validar contigo.",
  },
  {
    asset: vluxAssets.process.step04,
    tone: "positive",
    title: "Implementación",
    desc: "Lanzamos en producción con datos reales y por etapas.",
  },
  {
    asset: vluxAssets.process.step05,
    tone: "cyan",
    title: "Capacitación",
    desc: "Tu equipo lo adopta porque fue diseñado para ellos.",
  },
  {
    asset: vluxAssets.process.step06,
    tone: "positive",
    title: "Mejora continua",
    desc: "Iteramos con métricas reales del sistema.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="py-20 md:py-28 relative" data-section>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl">
          <span className="chip">Proceso</span>
          <h2 className="section-title" data-section-heading>
            De caos operativo a sistema, en <span className="text-gradient-cyan">6 pasos.</span>
          </h2>
          <p className="section-copy" data-section-copy>
            Metodología diseñada para avanzar rápido sin romper operación: diagnóstico, validación y
            despliegue por etapas.
          </p>
        </div>

        <div className="mt-14 relative" data-stagger>
          {/* desktop timeline */}
          <div className="hidden md:block absolute top-[2.55rem] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[color:var(--cyan-glow)]/50 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-7 md:gap-4 relative">
            {steps.map((s, i) => (
              <div key={s.title} data-stagger-item>
                <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-4">
                  <div className="relative shrink-0">
                    <span className={`process-asset-icon process-asset-icon-${s.tone}`}>
                      <img
                        src={s.asset}
                        alt={`Paso ${i + 1}: ${s.title}`}
                        className="process-asset-icon-img"
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold">{s.title}</h3>
                    <p className="text-xs text-white/60 mt-1 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
