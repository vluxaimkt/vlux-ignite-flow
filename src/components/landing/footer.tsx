import { Sparkles, Mail, Phone, MapPin } from "lucide-react";
import { site } from "@/config/site";

export function Footer() {
  const cols = [
    {
      title: "Servicios",
      links: ["Automatización", "Software a la medida", "Dashboards", "IA aplicada", "Integraciones"],
    },
    {
      title: "Casos de uso",
      links: ["Manufactura", "Administración", "Ventas", "Atención al cliente", "Recursos Humanos"],
    },
    {
      title: "Empresa",
      links: ["Proceso", "Demos", "Recursos", "Contacto"],
    },
  ];

  return (
    <footer className="relative border-t border-[color:var(--hairline)] mt-10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid lg:grid-cols-[1.4fr_repeat(3,1fr)_1.2fr] gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="relative inline-flex w-9 h-9 rounded-lg items-center justify-center bg-gradient-to-br from-[color:var(--cyan-glow)] to-[color:var(--mint)] glow-cyan-sm">
                <Sparkles className="w-4 h-4 text-[color:var(--primary-foreground)]" />
              </span>
              <span className="font-display font-bold text-xl">{site.brand}</span>
            </div>
            <p className="mt-4 text-sm text-[color:var(--muted-foreground)] max-w-xs leading-relaxed">
              Convertimos procesos manuales en sistemas inteligentes. Automatización,
              dashboards e IA para empresas que quieren operar mejor.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs font-mono uppercase tracking-wider text-[color:var(--cyan-glow)] mb-4">
                {c.title}
              </div>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)] transition-colors">
                      {l}
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
              <li className="flex items-center gap-2.5 text-[color:var(--muted-foreground)]">
                <Mail className="w-4 h-4 text-[color:var(--cyan-glow)]" />
                <a href={`mailto:${site.email}`} className="hover:text-[color:var(--foreground)]">{site.email}</a>
              </li>
              <li className="flex items-center gap-2.5 text-[color:var(--muted-foreground)]">
                <Phone className="w-4 h-4 text-[color:var(--cyan-glow)]" />
                {site.phone}
              </li>
              <li className="flex items-center gap-2.5 text-[color:var(--muted-foreground)]">
                <MapPin className="w-4 h-4 text-[color:var(--cyan-glow)]" />
                {site.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[color:var(--hairline)] flex flex-wrap items-center justify-between gap-3 text-xs text-[color:var(--muted-foreground)]">
          <div>© {new Date().getFullYear()} {site.brand}. Todos los derechos reservados.</div>
          <div className="font-mono">AI Transformation Partner · MX</div>
        </div>
      </div>
    </footer>
  );
}
