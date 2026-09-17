import Link from "next/link";
import { Category } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import ProductMedia from "./ProductMedia";

export default function CategoryCard({ category }: { category: Category }) {
  const count = getProductsByCategory(category.slug).length;

  return (
    <Link
      href={`/shop/${category.slug}`}
      className="group overflow-hidden rounded-2xl border border-border-soft bg-surface transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative">
        <ProductMedia
          image={category.image}
          swatch={category.swatch}
          alt={category.name}
          className="h-48 w-full transition duration-500 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold text-foreground shadow-sm">
          {count} {count === 1 ? "item" : "items"}
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">
          {category.tagline}
        </p>
        <h3 className="mt-1 font-display text-lg text-foreground">
          {category.name}
        </h3>
        {category.nameBn && (
          <p className="shimmer-text font-bn text-sm">{category.nameBn}</p>
        )}
        <span className="mt-4 flex items-center justify-center gap-1.5 rounded-full bg-terracotta px-4 py-2.5 text-sm font-semibold text-white transition group-hover:bg-terracotta-dark">
          Shop Now
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
