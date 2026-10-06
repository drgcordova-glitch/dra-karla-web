"use client";
import { useRef } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

// Miniatura con zoom al tocar, usando <dialog> nativo del navegador: sin
// librerías externas, sin JS adicional cargado por adelantado.
export default function Lightbox({ src, alt, width, height, className }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button
        type="button"
        className="zoom-trigger"
        onClick={() => ref.current?.showModal()}
        aria-label={`Ampliar imagen: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{ width: "100%", height: "auto" }}
          className={className}
        />
      </button>
      <dialog
        ref={ref}
        className="lightbox-dialog"
        onClick={(e) => {
          if (e.target === ref.current) ref.current?.close();
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <button type="button" className="lightbox-close" aria-label="Cerrar" onClick={() => ref.current?.close()}>
          ×
        </button>
      </dialog>
    </>
  );
}
