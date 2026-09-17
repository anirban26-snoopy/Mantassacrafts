import { notFound } from "next/navigation";
import { Metadata } from "next";
import { categories, getCategory } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductMedia from "@/components/ProductMedia";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: `${category.name} | Mantassa Crafts`,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = getProductsByCategory(category.slug);

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:items-center">
        <ProductMedia
          image={category.image}
          swatch={category.swatch}
          alt={category.name}
          className="h-48 rounded-2xl"
        />
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-terracotta">
            {category.tagline}
          </p>
          <h1 className="mt-2 font-display text-3xl text-foreground">
            {category.name}
          </h1>
          {category.nameBn && (
            <p className="shimmer-text font-bn text-lg">{category.nameBn}</p>
          )}
          <p className="mt-2 max-w-xl text-ink-soft">{category.description}</p>
        </div>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
      {items.length === 0 && (
        <p className="mt-6 text-ink-soft">
          New pieces in this collection are on the way. Message us on
          WhatsApp for early access.
        </p>
      )}
    </div>
  );
}
