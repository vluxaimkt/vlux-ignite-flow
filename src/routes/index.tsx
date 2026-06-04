import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Problem } from "@/components/landing/problem";
import { Solution } from "@/components/landing/solution";
import { Process } from "@/components/landing/process";
import { FinalCTA } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { StickyMobileCTA } from "@/components/landing/sticky-mobile-cta";
import { useLandingAnimations } from "@/hooks/use-landing-animations";
import { useRef } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VLUX · Automatiza procesos hechos en Excel y WhatsApp" },
      {
        name: "description",
        content:
          "VLUX convierte procesos manuales, hojas de cálculo y seguimiento por WhatsApp en sistemas operativos claros, medibles y fáciles de adoptar.",
      },
      { property: "og:title", content: "VLUX · Operación digital a la medida" },
      {
        property: "og:description",
        content:
          "Automatización, software a la medida y reportes para empresas que operan con Excel, WhatsApp y herramientas desconectadas.",
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
    <main ref={pageRef} className="bg-[#07111a] relative min-h-screen overflow-x-hidden">
      <div
        data-page-aurora
        className="fixed inset-0 pointer-events-none [background-size:140%_140%] bg-[radial-gradient(circle_at_14%_8%,rgba(0,166,180,0.12),transparent_28rem),radial-gradient(circle_at_78%_18%,rgba(18,116,136,0.08),transparent_34rem),linear-gradient(145deg,rgba(5,13,22,0.96),rgba(8,20,30,0.94))]"
      />

      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Process />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
