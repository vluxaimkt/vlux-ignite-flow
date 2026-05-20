import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Problem } from "@/components/landing/problem";
import { Solution } from "@/components/landing/solution";
import { BeforeAfter } from "@/components/landing/before-after";
import { UseCases } from "@/components/landing/use-cases";
import { Demos } from "@/components/landing/demos";
import { Process } from "@/components/landing/process";
import { Trust } from "@/components/landing/trust";
import { FinalCTA } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { StickyMobileCTA } from "@/components/landing/sticky-mobile-cta";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VLUX · Convierte procesos manuales en sistemas inteligentes" },
      {
        name: "description",
        content:
          "VLUX automatiza operaciones, conecta herramientas y aplica IA para que tu empresa opere con más control, visibilidad y velocidad.",
      },
      { property: "og:title", content: "VLUX · AI Transformation Partner" },
      {
        property: "og:description",
        content:
          "Automatización, software a la medida, dashboards e IA aplicada para empresas que operan con Excel, WhatsApp y sistemas desconectados.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="bg-[#030712] relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_18%_12%,rgba(0,224,255,0.14),transparent_32rem),radial-gradient(circle_at_82%_46%,rgba(0,255,195,0.08),transparent_34rem),linear-gradient(145deg,rgba(1,4,9,0.96),rgba(3,16,25,0.98))]" />

      <Header />
      <Hero />
      <Problem />
      <Solution />
      <BeforeAfter />
      <UseCases />
      <Demos />
      <Process />
      <Trust />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
