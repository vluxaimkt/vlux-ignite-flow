import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HERO_REVEAL_TARGETS =
  "[data-hero-chip], [data-hero-title], [data-hero-copy], [data-hero-cta], [data-hero-visual], [data-hero-stat]";

const SECTION_REVEAL_TARGETS =
  "[data-section-heading], [data-section-copy], [data-stagger-item], [data-cta-panel]";

export function useLandingAnimations(scopeRef: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          `${HERO_REVEAL_TARGETS}, ${SECTION_REVEAL_TARGETS}, [data-page-aurora], .grid-bg, .vlux-glow`,
          {
            clearProps: "all",
          },
        );
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (scopeRef.current) {
          gsap.set(scopeRef.current, { autoAlpha: 1 });
        }
        const snapPx = gsap.utils.snap(1);

        const heroTl = gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        heroTl
          .from("[data-page-aurora]", { autoAlpha: 0, duration: 1.1, ease: "power2.out" })
          .from("[data-hero-chip]", { y: 20, scale: 0.95, autoAlpha: 0, duration: 0.55 }, "-=0.2")
          .from("[data-hero-title]", { y: 26, autoAlpha: 0, duration: 0.7 }, "-=0.28")
          .from("[data-hero-copy]", { y: 20, autoAlpha: 0, duration: 0.6 }, "-=0.5")
          .from("[data-hero-cta]", { y: 18, autoAlpha: 0, stagger: 0.08, duration: 0.55 }, "-=0.35")
          .from(
            "[data-hero-stat]",
            { y: 14, autoAlpha: 0, stagger: 0.06, duration: 0.45 },
            "-=0.38",
          )
          .from(
            "[data-hero-visual]",
            {
              y: 26,
              autoAlpha: 0,
              duration: 0.92,
              ease: "power4.out",
            },
            "-=0.72",
          );

        gsap.utils
          .toArray<HTMLElement>("[data-hero-visual] .vlux-asset-icon")
          .forEach((icon, i) => {
            gsap.to(icon, {
              y: i % 2 === 0 ? -4 : 4,
              autoAlpha: i % 2 === 0 ? 1 : 0.96,
              duration: 4.2 + i * 0.4,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              snap: { y: 1 },
            });
          });

        gsap.utils.toArray<HTMLElement>(".vlux-glow").forEach((glow, i) => {
          gsap.to(glow, {
            yPercent: i % 2 === 0 ? -6 : 6,
            xPercent: i % 2 === 0 ? 4 : -4,
            scale: i % 2 === 0 ? 1.08 : 0.95,
            duration: 6.2 + i * 0.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });

        gsap.to("[data-page-aurora]", {
          backgroundPosition: "56% 45%, 40% 60%, 65% 35%, 50% 50%",
          duration: 22,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.utils.toArray<HTMLElement>("[data-section]").forEach((section) => {
          const heading = section.querySelector<HTMLElement>("[data-section-heading]");
          const copy = section.querySelector<HTMLElement>("[data-section-copy]");
          const gridBg = section.querySelector<HTMLElement>(".grid-bg");
          const watermark = section.querySelector<HTMLElement>(".vlux-watermark");

          if (heading) {
            gsap.from(heading, {
              y: 26,
              autoAlpha: 0,
              duration: 0.68,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 82%",
                once: true,
              },
            });
          }

          if (copy) {
            gsap.from(copy, {
              y: 16,
              autoAlpha: 0,
              duration: 0.56,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 79%",
                once: true,
              },
            });
          }

          if (gridBg) {
            gsap.fromTo(
              gridBg,
              { yPercent: -3 },
              {
                yPercent: 4,
                ease: "none",
                scrollTrigger: {
                  trigger: section,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.8,
                },
              },
            );
          }

          if (watermark) {
            gsap.fromTo(
              watermark,
              { yPercent: -5, rotation: 0 },
              {
                yPercent: 5,
                rotation: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: section,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.1,
                },
              },
            );
          }
        });

        gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
          const items = group.querySelectorAll<HTMLElement>("[data-stagger-item]");
          if (!items.length) return;

          gsap.from(items, {
            y: 24,
            autoAlpha: 0,
            duration: 0.66,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: group,
              start: "top 82%",
              once: true,
            },
          });
        });

        gsap.from("[data-cta-panel]", {
          y: 30,
          autoAlpha: 0,
          duration: 0.82,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-cta-panel]",
            start: "top 82%",
            once: true,
          },
        });
      });

      mm.add(
        "(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
        () => {
          const targets = gsap.utils.toArray<HTMLElement>(
            ".surface-card-hover, .vlux-premium-button, .stat-pill",
          );

          const cleanups: Array<() => void> = [];

          targets.forEach((el) => {
            const xTo = gsap.quickTo(el, "x", { duration: 0.34, ease: "power3.out" });
            const yTo = gsap.quickTo(el, "y", { duration: 0.34, ease: "power3.out" });

            const handleMove = (event: PointerEvent) => {
              const rect = el.getBoundingClientRect();
              const relX = (event.clientX - rect.left) / rect.width - 0.5;
              const relY = (event.clientY - rect.top) / rect.height - 0.5;
              const maxShift = el.classList.contains("vlux-premium-button") ? 4 : 6;

              xTo(snapPx(gsap.utils.clamp(-maxShift, maxShift, relX * maxShift * 2)));
              yTo(snapPx(gsap.utils.clamp(-maxShift, maxShift, relY * maxShift * 2)));
            };

            const handleLeave = () => {
              xTo(0);
              yTo(0);
            };

            el.addEventListener("pointermove", handleMove);
            el.addEventListener("pointerleave", handleLeave);

            cleanups.push(() => {
              el.removeEventListener("pointermove", handleMove);
              el.removeEventListener("pointerleave", handleLeave);
            });
          });

          return () => {
            cleanups.forEach((fn) => fn());
          };
        },
      );

      return () => {
        mm.revert();
      };
    },
    { scope: scopeRef },
  );
}
