import Link from "next/link";
import { Product } from "@/data/products";
import ProductMedia from "./ProductMedia";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group overflow-hidden rounded-2xl border border-border-soft bg-surface transition hover:-translate-y-1 hover:shadow-xl"
    >
      <ProductMedia
        image={product.images?.[0]}
        swatch={product.swatch}
        alt={product.name}
        className="h-56 w-full transition duration-500 group-hover:scale-105"
      />
      <div className="p-4">
        <h3 className="font-display text-base text-foreground">
          {product.name}
        </h3>
        {product.nameBn && (
          <p className="shimmer-text font-bn text-xs">{product.nameBn}</p>
        )}
        <p className="mt-1 text-sm text-ink-soft line-clamp-2">
          {product.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          {product.originalPrice ? (
            <span className="flex items-baseline gap-2">
              <span className="text-sm text-ink-soft line-through">
                ₹{product.originalPrice}
              </span>
              <span className="shimmer-text font-semibold">
                ₹{product.price}
              </span>
            </span>
          ) : (
            <span className="shimmer-text font-semibold">
              From ₹{product.price}
            </span>
          )}
          {product.originalPrice ? (
            <span className="rounded-full bg-terracotta/10 px-2 py-0.5 text-xs font-medium text-terracotta-dark">
              {Math.round(
                ((product.originalPrice - product.price) /
                  product.originalPrice) *
                  100
              )}
              % off
            </span>
          ) : (
            product.personalizable && (
              <span className="rounded-full bg-mustard/20 px-2 py-0.5 text-xs font-medium text-terracotta-dark">
                Personalizable
              </span>
            )
          )}
        </div>
      </div>
    </Link>
  );
}
