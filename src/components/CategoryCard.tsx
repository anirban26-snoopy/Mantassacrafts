import Link from "next/link";
import { Category } from "@/data/categories";
import ProductMedia from "./ProductMedia";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/shop/${category.slug}`}
      className="group overflow-hidden rounded-2xl border border-border-soft bg-surface transition hover:-translate-y-1 hover:shadow-xl"
    >
      <ProductMedia
        image={category.image}
        swatch={category.swatch}
        alt={category.name}
        className="h-48 w-full transition duration-500 group-hover:scale-105"
      />
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
        <p className="mt-2 text-sm text-ink-soft">{category.description}</p>
        <span className="mt-3 inline-block text-sm font-semibold text-terracotta group-hover:underline">
          Explore →
        </span>
      </div>
    </Link>
  );
}
