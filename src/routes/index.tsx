import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
  Download,
  Wand2,
  BookOpen,
  ArrowRight,
  Twitter,
  Linkedin,
  Instagram,
  Menu,
  Plus,
} from "lucide-react";
import heroFlowers from "@/assets/hero-flowers.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bloom · Innovating the spirit of bloom AI" },
      {
        name: "description",
        content:
          "Bloom is an AI-powered plant and floral design platform — artistic galleries, AI generation, and 3D structures in one ecosystem.",
      },
      { property: "og:title", content: "Bloom · AI floral design platform" },
      {
        property: "og:description",
        content: "Innovating the spirit of bloom with AI generation, 3D structures, and an artistic gallery.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Source+Serif+4:ital,wght@1,400;1,500&display=swap",
      },
    ],
  }),
  component: BloomHero,
});

function BloomHero() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Background video */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 z-0 bg-black/30" />

      {/* Two-panel split */}
      <div className="relative z-10 flex min-h-screen w-full">
        {/* LEFT PANEL */}
        <section className="relative flex w-full lg:w-[52%] min-h-screen">
          <div className="absolute inset-4 lg:inset-6 rounded-3xl liquid-glass-strong" />

          <div className="relative z-10 flex h-full w-full flex-col p-8 lg:p-12">
            {/* Nav */}
            <nav className="flex items-center justify-between">
              <a href="#" className="flex items-center gap-2">
                <img src="/logo.svg" alt="Bloom" width={32} height={32} className="h-8 w-8" />
                <span className="text-2xl font-semibold tracking-tighter text-white">bloom</span>
              </a>
              <button className="liquid-glass flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white transition-transform hover:scale-105">
                <Menu className="h-4 w-4" />
                Menu
              </button>
            </nav>

            {/* Hero center */}
            <div className="flex flex-1 flex-col items-center justify-center text-center">
              <img
                src="/logo.svg"
                alt="Bloom mark"
                width={80}
                height={80}
                className="mb-8 h-20 w-20 opacity-90"
              />
              <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-[-0.05em] text-white leading-[1.02]">
                Innovating the
                <br />
                <em className="font-serif italic font-normal text-white/80">spirit of bloom</em>{" "}
                AI
              </h1>

              <button className="liquid-glass-strong mt-10 flex items-center gap-3 rounded-full pl-6 pr-2 py-2 text-sm text-white transition-transform hover:scale-105 active:scale-95">
                Explore Now
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                  <Download className="h-3.5 w-3.5 text-white" />
                </span>
              </button>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                {["Artistic Gallery", "AI Generation", "3D Structures"].map((p) => (
                  <span
                    key={p}
                    className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/80"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom quote */}
            <div className="mt-8 text-center">
              <div className="text-xs uppercase tracking-widest text-white/50">
                Visionary Design
              </div>
              <p className="mt-3 text-lg lg:text-xl text-white/90">
                <span className="font-display">"We imagined a</span>{" "}
                <span className="font-serif italic text-white/80">realm</span>{" "}
                <span className="font-display">with</span>{" "}
                <span className="font-serif italic text-white/80">no ending."</span>
              </p>
              <div className="mt-4 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-white/30" />
                <span className="text-xs tracking-[0.25em] text-white/60">MARCUS AURELIO</span>
                <span className="h-px w-10 bg-white/30" />
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT PANEL — desktop only */}
        <aside className="relative hidden lg:flex w-[48%] min-h-screen flex-col p-6">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <div className="liquid-glass flex items-center gap-3 rounded-full px-4 py-2">
              <a href="#" className="text-white transition-colors hover:text-white/80">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="text-white transition-colors hover:text-white/80">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="text-white transition-colors hover:text-white/80">
                <Instagram className="h-4 w-4" />
              </a>
              <span className="ml-1 flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                <ArrowRight className="h-3.5 w-3.5 text-white" />
              </span>
            </div>

            <button className="liquid-glass flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white transition-transform hover:scale-105">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                <Sparkles className="h-3.5 w-3.5 text-white" />
              </span>
              Account
            </button>
          </div>

          {/* Community card */}
          <div className="mt-6 ml-auto liquid-glass w-56 rounded-2xl p-4">
            <div className="text-sm font-medium text-white">Enter our ecosystem</div>
            <p className="mt-1 text-xs text-white/60 leading-relaxed">
              Join thousands of designers shaping the future of botanical art.
            </p>
          </div>

          {/* Bottom feature block */}
          <div className="mt-auto liquid-glass-strong rounded-[2.5rem] p-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="liquid-glass rounded-3xl p-5 transition-transform hover:scale-[1.02]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <Wand2 className="h-4 w-4 text-white" />
                </span>
                <div className="mt-4 text-sm font-medium text-white">Processing</div>
                <p className="mt-1 text-xs text-white/60 leading-relaxed">
                  Generate cinematic floral renders in seconds.
                </p>
              </div>
              <div className="liquid-glass rounded-3xl p-5 transition-transform hover:scale-[1.02]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <BookOpen className="h-4 w-4 text-white" />
                </span>
                <div className="mt-4 text-sm font-medium text-white">Growth Archive</div>
                <p className="mt-1 text-xs text-white/60 leading-relaxed">
                  A living library of every bloom you create.
                </p>
              </div>
            </div>

            <div className="liquid-glass mt-3 flex items-center gap-4 rounded-3xl p-3">
              <img
                src={heroFlowers}
                alt="Sculpted bloom"
                width={96}
                height={64}
                loading="lazy"
                className="h-16 w-24 rounded-2xl object-cover"
              />
              <div className="flex-1">
                <div className="text-sm font-medium text-white">Advanced Plant Sculpting</div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Shape petals, stems, and light with surgical control.
                </p>
              </div>
              <button
                aria-label="Open sculpting tool"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-transform hover:scale-105"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
