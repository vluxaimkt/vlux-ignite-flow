import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Problem } from "@/components/landing/problem";
import { Solution } from "@/components/landing/solution";
import { UseCases } from "@/components/landing/use-cases";
import { Demos } from "@/components/landing/demos";
import { Process } from "@/components/landing/process";
import { FinalCTA } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { StickyMobileCTA } from "@/components/landing/sticky-mobile-cta";
import { useLandingAnimations } from "@/hooks/use-landing-animations";
import { useRef } from "react";

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
  const pageRef = useRef<HTMLElement | null>(null);
  useLandingAnimations(pageRef);

  return (
    <main ref={pageRef} className="bg-[#030712] relative min-h-screen overflow-x-hidden">
      <div
        data-page-aurora
        className="fixed inset-0 pointer-events-none [background-size:140%_140%] bg-[radial-gradient(circle_at_16%_12%,rgba(0,224,255,0.22),transparent_34rem),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.16),transparent_36rem),radial-gradient(circle_at_84%_62%,rgba(0,255,195,0.12),transparent_36rem),linear-gradient(145deg,rgba(4,18,28,0.88),rgba(6,26,40,0.86))]"
      />

      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Process />
      <UseCases />
      <Demos />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
