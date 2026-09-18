import Image from "next/image";
import { site } from "@/content/site";
import DotGrid from "./DotGrid";

/**
 * Moldura + grid de pontos. Enquanto site.photo.src for null mostra um
 * placeholder com a mesma proporcao, entao o layout nao muda quando a
 * foto real entrar.
 */
export default function Portrait({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <DotGrid
        cols={7}
        rows={6}
        className="absolute -top-6 -right-4 text-line"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-5 -left-5 h-28 w-28 border border-accent/40"
      />

      <div className="relative aspect-4/5 w-full border border-line bg-surface">
        {site.photo.src ? (
          <Image
            src={site.photo.src}
            alt={site.photo.alt}
            fill
            // sem `priority`: a foto vive no #sobre, abaixo da dobra
            loading="lazy"
            sizes="(max-width: 1024px) 70vw, 420px"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-mono text-xs text-muted">
              {/* TODO: trocar por public/gustavo.jpg */}
              [ foto ]
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
