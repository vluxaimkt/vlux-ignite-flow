import type { CSSProperties, PointerEvent } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type LiquidGlassIconTone = "cyan" | "mint" | "positive" | "warn" | "danger";
export type LiquidGlassIconSize = "sm" | "md" | "lg" | "xl";

type LiquidGlassIconVars = CSSProperties & {
  "--liquid-icon-accent": string;
  "--liquid-icon-accent-2": string;
  "--liquid-x"?: string;
  "--liquid-y"?: string;
  "--liquid-rotate-x"?: string;
  "--liquid-rotate-y"?: string;
};

const toneVars: Record<LiquidGlassIconTone, LiquidGlassIconVars> = {
  cyan: {
    "--liquid-icon-accent": "var(--cyan-glow)",
    "--liquid-icon-accent-2": "var(--mint)",
  },
  mint: {
    "--liquid-icon-accent": "var(--mint)",
    "--liquid-icon-accent-2": "var(--cyan-glow)",
  },
  positive: {
    "--liquid-icon-accent": "var(--positive)",
    "--liquid-icon-accent-2": "var(--cyan-glow)",
  },
  warn: {
    "--liquid-icon-accent": "var(--warn)",
    "--liquid-icon-accent-2": "var(--cyan-glow)",
  },
  danger: {
    "--liquid-icon-accent": "var(--danger)",
    "--liquid-icon-accent-2": "var(--warn)",
  },
};

function handlePointerMove(event: PointerEvent<HTMLSpanElement>) {
  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  const rotateY = ((x - 50) / 50) * 8;
  const rotateX = ((50 - y) / 50) * 8;

  target.style.setProperty("--liquid-x", `${x.toFixed(1)}%`);
  target.style.setProperty("--liquid-y", `${y.toFixed(1)}%`);
  target.style.setProperty("--liquid-rotate-x", `${rotateX.toFixed(2)}deg`);
  target.style.setProperty("--liquid-rotate-y", `${rotateY.toFixed(2)}deg`);
}

function handlePointerLeave(event: PointerEvent<HTMLSpanElement>) {
  const target = event.currentTarget;

  target.style.setProperty("--liquid-x", "50%");
  target.style.setProperty("--liquid-y", "42%");
  target.style.setProperty("--liquid-rotate-x", "0deg");
  target.style.setProperty("--liquid-rotate-y", "0deg");
}

interface LiquidGlassIconProps {
  icon: LucideIcon;
  tone?: LiquidGlassIconTone;
  size?: LiquidGlassIconSize;
  label?: string;
  className?: string;
  iconClassName?: string;
}

export function LiquidGlassIcon({
  icon: Icon,
  tone = "cyan",
  size = "md",
  label,
  className,
  iconClassName,
}: LiquidGlassIconProps) {
  const style: LiquidGlassIconVars = {
    ...toneVars[tone],
    "--liquid-x": "50%",
    "--liquid-y": "42%",
    "--liquid-rotate-x": "0deg",
    "--liquid-rotate-y": "0deg",
  };

  return (
    <span
      className={cn("liquid-glass-icon", `liquid-glass-icon-${size}`, className)}
      style={style}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <Icon className={cn("liquid-glass-icon-svg", iconClassName)} strokeWidth={1.85} />
    </span>
  );
}
