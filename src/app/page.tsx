import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { getProduct } from "@/data/products";
import { buildWhatsAppLink, GENERAL_INQUIRY_MESSAGE } from "@/lib/whatsapp";

const bestSellerSlugs = [
  "name-jhumka-earrings",
  "kodi-bengali-text-choker",
  "durga-trishul-necklace",
  "tulip-pendant-necklace",
  "kashmiri-oxidised-tulip-watch",
  "marcasite-roman-dial-watch",
  "hand-painted-diya-set",
  "patachitra-fish-mandala-plate",
];

const testimonials = [
  {
    quote:
      "It was a superb experience to shop from Mantassa Crafts. The earrings were just amazing.",
    name: "Taniya D.",
  },
  {
    quote:
      "Customer friendly, nice work done by her. Reasonable price, also received the product in time.",
    name: "Shreyashree D.",
  },
  {
    quote: "I bought two earrings... those are really pretty.",
    name: "Sneha M.",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative">
        <div
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-terracotta/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-16 top-40 h-64 w-64 rounded-full bg-mustard/25 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-terracotta">
              Handmade in Kolkata
            </p>
            <h1 className="mt-3 font-display text-4xl leading-tight text-foreground md:text-5xl">
              Jewelry &amp; gifts,
              <br /> made <span className="shimmer-text">personal</span>.
            </h1>
            <p className="shimmer-text font-bn mt-2 text-lg">
              মানতাসা ক্রাফটস
            </p>
            <p className="mt-4 max-w-md text-ink-soft">
              From our signature hand-painted name jhumkas to fine jewelry,
              watches, and gifting pieces, every item can be made yours, with
              your name, your colors, your story.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="rounded-full bg-terracotta px-6 py-3 text-sm font-semibold shadow-lg shadow-terracotta/20 transition hover:-translate-y-0.5 hover:bg-terracotta-dark"
              >
                <span className="shimmer-gold">Shop the Collection</span>
              </Link>
              <Link
                href="/customize"
                className="rounded-full border border-terracotta px-6 py-3 text-sm font-semibold text-terracotta transition hover:-translate-y-0.5 hover:bg-terracotta/10"
              >
                Customize Your Own
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-ink-soft">
              <span className="flex items-center gap-1 font-semibold text-foreground">
                ★★★★★ 4.8
              </span>
              <span>Google reviews · Women-owned · Kolkata</span>
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-4">
            <div className="col-span-2 relative h-56 overflow-hidden rounded-3xl shadow-xl md:h-64">
              <Image
                src="/images/products/name-jhumka-handheld-garden.jpg"
                alt="Hand-painted name jhumka earrings from Mantassa Crafts"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="relative h-36 overflow-hidden rounded-2xl shadow-lg md:h-44">
              <Image
                src="/images/products/portrait-silhouette-blue.jpg"
                alt="Portrait silhouette earrings"
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-36 overflow-hidden rounded-2xl shadow-lg md:h-44">
              <Image
                src="/images/products/diya-set-triangle.jpg"
                alt="Hand-painted terracotta diyas"
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shop by category */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-2xl text-foreground">
            Shop by Category
          </h2>
          <Link href="/shop" className="text-sm font-semibold text-terracotta hover:underline">
            View all →
          </Link>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </section>

      {/* Best sellers, real shoppable products */}
      <section className="bg-surface py-14">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-terracotta">
                Best sellers
              </p>
              <h2 className="mt-1 font-display text-2xl text-foreground">
                Shop our most loved pieces
              </h2>
            </div>
            <Link href="/shop" className="text-sm font-semibold text-terracotta hover:underline">
              View all →
            </Link>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {bestSellerSlugs
              .map((slug) => getProduct(slug))
              .filter((p) => p !== undefined)
              .map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
          </div>
        </div>
      </section>

      {/* Personalize banner */}
      <section className="py-14">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-2xl text-foreground">
              Personalize almost anything we make
            </h2>
            <p className="mt-3 max-w-md text-ink-soft">
              Pick a base color, a motif, and, on our signature pieces, add
              a name in Bengali or English. We confirm every design with you
              on WhatsApp before it&apos;s handmade.
            </p>
            <Link
              href="/customize"
              className="mt-5 inline-block rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-terracotta-dark"
            >
              See how it works
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative h-40 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/products/name-jhumka-yellow-bird.jpg"
                alt="Personalized name jhumka with bird charm"
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-40 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/products/name-jhumka-lotus-pot.jpg"
                alt="Personalized name jhumka with lotus motif"
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="font-display text-2xl text-foreground">
          Loved by our customers
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-border-soft bg-surface p-5 shadow-sm transition hover:shadow-md"
            >
              <p className="text-sm text-foreground">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-3 text-sm font-semibold text-terracotta">
                {t.name}, Google Review
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="rounded-3xl bg-indigo px-8 py-10 text-center text-white">
          <h2 className="font-display text-2xl">
            Have something in mind?
          </h2>
          <p className="mt-2 text-white/80">
            Tell us on WhatsApp and we&apos;ll help you design it.
          </p>
          <a
            href={buildWhatsAppLink(GENERAL_INQUIRY_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold transition hover:bg-white/90"
          >
            <span className="shimmer-text">Chat with Mantassa Crafts</span>
          </a>
        </div>
      </section>
    </div>
  );
}
