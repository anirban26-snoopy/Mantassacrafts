import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { products, getProduct } from "@/data/products";
import { getCategory } from "@/data/categories";
import ProductGallery from "@/components/ProductGallery";
import Customizer from "@/components/Customizer";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} | Mantassa Crafts`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      {category && (
        <Link
          href={`/shop/${category.slug}`}
          className="text-sm font-medium text-ink-soft hover:text-terracotta"
        >
          ← {category.name}
        </Link>
      )}

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <ProductGallery images={product.images} swatch={product.swatch} name={product.name} />

        <div>
          <h1 className="font-display text-5xl font-semibold text-foreground">
            {product.name}
          </h1>
          {product.nameBn && (
            <p className="shimmer-text font-bn text-lg">{product.nameBn}</p>
          )}
          {product.originalPrice ? (
            <p className="mt-2 flex items-baseline gap-3">
              <span className="text-lg text-ink-soft line-through">
                ₹{product.originalPrice}
              </span>
              <span className="shimmer-text text-2xl font-semibold">
                ₹{product.price}
              </span>
              <span className="rounded-full bg-terracotta/10 px-2 py-0.5 text-xs font-medium text-terracotta-dark">
                {Math.round(
                  ((product.originalPrice - product.price) /
                    product.originalPrice) *
                    100
                )}
                % off
              </span>
            </p>
          ) : (
            <p className="shimmer-text mt-2 text-xl font-semibold">
              From ₹{product.price}
            </p>
          )}
          <p className="mt-4 text-ink-soft">{product.description}</p>

          <div className="mt-6">
            <Customizer product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
