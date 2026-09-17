import { Metadata } from "next";
import { categories } from "@/data/categories";
import CategoryCard from "@/components/CategoryCard";

export const metadata: Metadata = {
  title: "Shop | Mantassa Crafts",
  description: "Browse jewelry, watches, and gifting collections from Mantassa Crafts.",
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-sm font-semibold uppercase tracking-widest text-terracotta">
        Shop
      </p>
      <h1 className="mt-2 font-display text-3xl text-foreground">
        Every category, made personal
      </h1>
      <p className="mt-2 max-w-xl text-ink-soft">
        Choose a collection to browse, then personalize any piece before you
        send us your order on WhatsApp.
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c) => (
          <CategoryCard key={c.slug} category={c} />
        ))}
      </div>
    </div>
  );
}
