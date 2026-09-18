"use client";

import Link from "next/link";
import { useState } from "react";
import { Product } from "@/data/products";
import ProductMedia from "./ProductMedia";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleQuickAdd(e: React.MouseEvent) {
    e.preventDefault();
    addItem({
      slug: product.slug,
      name: product.name,
      price: product.price,
      qty: 1,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="group overflow-hidden border border-border-soft bg-surface transition hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/product/${product.slug}`} className="block">
        <ProductMedia
          image={product.images?.[0]}
          swatch={product.swatch}
          alt={product.name}
          className="h-60 w-full transition duration-500 group-hover:scale-105"
        />
        <div className="px-5 pt-5">
          <h3 className="font-display text-xl font-semibold text-foreground">
            {product.name}
          </h3>
          {product.nameBn && (
            <p className="shimmer-text font-bn text-sm">{product.nameBn}</p>
          )}
          <div className="mt-3 flex items-center justify-between">
            {product.originalPrice ? (
              <span className="flex items-baseline gap-2">
                <span className="text-sm text-ink-soft line-through">
                  ₹{product.originalPrice}
                </span>
                <span className="shimmer-text text-lg font-semibold">
                  ₹{product.price}
                </span>
              </span>
            ) : (
              <span className="shimmer-text text-lg font-semibold">
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

      <div className="flex gap-2 p-5 pt-4">
        <Link
          href={`/product/${product.slug}`}
          className="flex-1 border border-terracotta px-3 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-terracotta transition hover:bg-terracotta/10"
        >
          View Details
        </Link>
        {product.personalizable ? (
          <Link
            href={`/product/${product.slug}`}
            className="flex-1 bg-terracotta px-3 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-terracotta-dark"
          >
            Customize
          </Link>
        ) : (
          <button
            type="button"
            onClick={handleQuickAdd}
            className="flex-1 bg-terracotta px-3 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-terracotta-dark"
          >
            {added ? "Added ✓" : "Add to Cart"}
          </button>
        )}
      </div>
    </div>
  );
}
