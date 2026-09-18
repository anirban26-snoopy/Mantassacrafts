import Link from "next/link";
import { Category } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import ProductMedia from "./ProductMedia";

export default function CategoryCard({ category }: { category: Category }) {
  const count = getProductsByCategory(category.slug).length;

  return (
    <Link
      href={`/shop/${category.slug}`}
      className="group overflow-hidden border border-border-soft bg-surface transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative">
        <ProductMedia
          image={category.image}
          swatch={category.swatch}
          alt={category.name}
          className="h-52 w-full transition duration-500 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 bg-background/90 px-2.5 py-1 text-xs font-semibold text-foreground shadow-sm">
          {count} {count === 1 ? "item" : "items"}
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-terracotta">
          {category.tagline}
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">
          {category.name}
        </h3>
        {category.nameBn && (
          <p className="shimmer-text font-bn text-sm">{category.nameBn}</p>
        )}
        <span className="mt-5 flex items-center justify-center gap-1.5 bg-terracotta px-4 py-3 text-xs font-semibold uppercase tracking-wide text-white transition group-hover:bg-terracotta-dark">
          Shop Now
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
