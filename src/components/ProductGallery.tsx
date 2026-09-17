"use client";

import { useState } from "react";
import Image from "next/image";
import PlaceholderSwatch from "./PlaceholderSwatch";

export default function ProductGallery({
  images,
  swatch,
  name,
}: {
  images?: string[];
  swatch: string;
  name: string;
}) {
  const [active, setActive] = useState(0);

  if (!images || images.length === 0) {
    return <PlaceholderSwatch color={swatch} className="h-96 w-full rounded-2xl" />;
  }

  return (
    <div>
      <div className="relative h-96 w-full overflow-hidden rounded-2xl bg-surface">
        <Image
          src={images[active]}
          alt={name}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
          priority
        />
      </div>
      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              className={`relative h-20 overflow-hidden rounded-xl border-2 transition ${
                active === i ? "border-terracotta" : "border-transparent opacity-80 hover:opacity-100"
              }`}
              aria-label={`Show image ${i + 1}`}
            >
              <Image src={src} alt="" fill sizes="100px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
