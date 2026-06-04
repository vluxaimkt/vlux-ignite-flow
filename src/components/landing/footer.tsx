import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/config/site";
import { vluxAssets } from "@/config/vluxAssets";

const footerGroups = [
  {
    title: "Módulos",
    links: [
      { label: "Excel a sistema", href: "#modulos" },
      { label: "WhatsApp operativo", href: "#modulos" },
      { label: "Reportes automáticos", href: "#modulos" },
    ],
  },
  {
    title: "Página",
    links: [
      { label: "Problema", href: "#problema" },
      { label: "Proceso", href: "#proceso" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-6 overflow-hidden border-t border-[color:var(--hairline)]">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.75fr_0.75fr_1fr]">
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
              <span className="font-display text-xl font-bold">{site.brand}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Convertimos procesos manuales en módulos operativos claros, medibles y fáciles de
              adoptar.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <div className="mb-4 text-xs font-mono uppercase tracking-wider text-white/50">
                {group.title}
              </div>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="mb-4 text-xs font-mono uppercase tracking-wider text-white/50">
              Contacto
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5 text-white/70">
                <Mail className="h-4 w-4 text-[color:var(--cyan-glow)]" />
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-white/70">
                <Phone className="h-4 w-4 text-[color:var(--cyan-glow)]" />
                {site.phone}
              </li>
              <li className="flex items-center gap-2.5 text-white/70">
                <MapPin className="h-4 w-4 text-[color:var(--cyan-glow)]" />
                {site.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-[color:var(--hairline)] pt-6 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} {site.brand}. Todos los derechos reservados.
          </div>
          <div className="font-mono">Operación digital a la medida · MX</div>
        </div>
      </div>
    </footer>
  );
}
