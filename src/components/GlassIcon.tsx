import React from "react";

interface GlassIconProps {
  children: React.ReactNode; // Aquí irá el SVG del ícono
  ariaLabel: string; // Para accesibilidad
  onClick?: () => void; // Por si el ícono funciona como botón ejecutable
  className?: string; // Por si quieres agregar clases extras (como márgenes)
}

export const GlassIcon: React.FC<GlassIconProps> = ({
  children,
  ariaLabel,
  onClick,
  className = "",
}) => {
  return (
    <button
      className={`gw-btn-icon gw-btn-icon-lg ${className}`}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
