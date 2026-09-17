import Image from "next/image";
import PlaceholderSwatch from "./PlaceholderSwatch";

export default function ProductMedia({
  image,
  swatch,
  alt,
  className = "",
  sizes,
  priority,
}: {
  image?: string;
  swatch: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (image) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={image}
          alt={alt}
          fill
          sizes={sizes ?? "(min-width: 768px) 33vw, 100vw"}
          className="object-cover"
          priority={priority}
        />
      </div>
    );
  }
  return <PlaceholderSwatch color={swatch} className={className} />;
}
