import { Mail, Phone, MapPin } from "lucide-react";
import { site } from "@/config/site";
import { vluxAssets } from "@/config/vluxAssets";

export function Footer() {
  const cols = [
    {
      title: "Servicios",
      links: [
        { label: "Automatización", href: "#servicios" },
        { label: "Software a la medida", href: "#servicios" },
        { label: "Dashboards", href: "#servicios" },
        { label: "IA aplicada", href: "#servicios" },
        { label: "Integraciones", href: "#servicios" },
      ],
    },
    {
      title: "Casos de uso",
      links: [
        { label: "Manufactura", href: "#casos" },
        { label: "Administración", href: "#casos" },
        { label: "Ventas", href: "#casos" },
        { label: "Atención al cliente", href: "#casos" },
        { label: "Recursos Humanos", href: "#casos" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { label: "Proceso", href: "#proceso" },
        { label: "Demos", href: "#demos" },
        { label: "Contacto", href: "#agendar" },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-[color:var(--hairline)] mt-10 overflow-hidden">
      <img
        src={vluxAssets.backgrounds.watermark}
        alt=""
        aria-hidden="true"
        className="vlux-watermark left-[-1.5rem] top-8 w-[24rem]"
        loading="lazy"
        decoding="async"
      />
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid lg:grid-cols-[1.4fr_repeat(3,1fr)_1.2fr] gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="footer-logo-mark" aria-hidden="true">
                <img
                  src={vluxAssets.logos.footerMark}
                  alt=""
                  className="footer-logo-mark-img"
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="font-display font-bold text-xl">{site.brand}</span>
            </div>
            <p className="mt-4 text-sm text-white/70 max-w-xs leading-relaxed">
              Convertimos procesos manuales en sistemas inteligentes. Automatización, dashboards e
              IA para empresas que quieren operar mejor.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs font-mono uppercase tracking-wider text-[color:var(--cyan-glow)] mb-4">
                {c.title}
              </div>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[color:var(--cyan-glow)] mb-4">
              Contacto
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5 text-white/70">
                <Mail className="w-4 h-4 text-[color:var(--cyan-glow)]" />
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-white/70">
                <Phone className="w-4 h-4 text-[color:var(--cyan-glow)]" />
                {site.phone}
              </li>
              <li className="flex items-center gap-2.5 text-white/70">
                <MapPin className="w-4 h-4 text-[color:var(--cyan-glow)]" />
                {site.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[color:var(--hairline)] flex flex-wrap items-center justify-between gap-3 text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} {site.brand}. Todos los derechos reservados.
          </div>
          <div className="font-mono">AI Transformation Partner · MX</div>
        </div>
      </div>
    </footer>
  );
}
