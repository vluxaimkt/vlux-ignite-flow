import type { CSSProperties, PointerEvent } from "react";
import { cn } from "@/lib/utils";

type VluxAssetIconSize = "sm" | "md" | "lg" | "xl" | "hero";

interface VluxAssetIconProps {
  src: string;
  alt: string;
  size?: VluxAssetIconSize;
  className?: string;
  imgClassName?: string;
  loading?: "eager" | "lazy";
}

type LiquidAssetVars = CSSProperties & {
  "--vlux-x"?: string;
  "--vlux-y"?: string;
  "--vlux-rotate-x"?: string;
  "--vlux-rotate-y"?: string;
};

function handlePointerMove(event: PointerEvent<HTMLSpanElement>) {
  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  const rotateY = ((x - 50) / 50) * 3.5;
  const rotateX = ((50 - y) / 50) * 3.5;

  target.style.setProperty("--vlux-x", `${x.toFixed(1)}%`);
  target.style.setProperty("--vlux-y", `${y.toFixed(1)}%`);
  target.style.setProperty("--vlux-rotate-x", `${rotateX.toFixed(2)}deg`);
  target.style.setProperty("--vlux-rotate-y", `${rotateY.toFixed(2)}deg`);
}

function handlePointerLeave(event: PointerEvent<HTMLSpanElement>) {
  const target = event.currentTarget;

  target.style.setProperty("--vlux-x", "50%");
  target.style.setProperty("--vlux-y", "42%");
  target.style.setProperty("--vlux-rotate-x", "0deg");
  target.style.setProperty("--vlux-rotate-y", "0deg");
}

export function VluxAssetIcon({
  src,
  alt,
  size = "md",
  className,
  imgClassName,
  loading = "lazy",
}: VluxAssetIconProps) {
  const vars: LiquidAssetVars = {
    "--vlux-x": "50%",
    "--vlux-y": "42%",
    "--vlux-rotate-x": "0deg",
    "--vlux-rotate-y": "0deg",
  };

  return (
    <span
      className={cn("vlux-asset-icon", `vlux-asset-icon-${size}`, className)}
      style={vars}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <img
        src={src}
        alt={alt}
        className={cn("vlux-asset-icon-img", imgClassName)}
        loading={loading}
        decoding="async"
      />
    </span>
  );
}
