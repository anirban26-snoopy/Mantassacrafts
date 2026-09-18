import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { getProduct } from "@/data/products";
import {
  buildWhatsAppLink,
  GENERAL_INQUIRY_MESSAGE,
  WHATSAPP_COMMUNITY_LINK,
} from "@/lib/whatsapp";

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
      <section className="relative border-b border-border-soft/70">
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <span className="kicker">Handmade in Kolkata</span>
            <h1 className="mt-6 font-display text-6xl font-semibold leading-[1.05] text-foreground md:text-7xl">
              Jewelry &amp; gifts,
              <br /> made <span className="shimmer-text">personal</span>.
            </h1>
            <p className="shimmer-text font-bn mt-4 text-2xl font-medium">
              মানতাসা ক্রাফটস
            </p>
            <p className="font-bn mt-2 text-base font-medium text-terracotta-dark">
              নারীর সৌন্দর্যে, নারীর সৃষ্টির ছোঁয়া
            </p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
              From our signature hand-painted name jhumkas to fine jewelry,
              watches, and gifting pieces, every item can be made yours, with
              your name, your colors, your story.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="rounded-none bg-terracotta px-8 py-4 text-base font-bold uppercase tracking-wide shadow-lg shadow-terracotta/20 transition hover:-translate-y-0.5 hover:bg-terracotta-dark"
              >
                <span className="shimmer-gold">Shop the Collection</span>
              </Link>
              <Link
                href="/customize"
                className="rounded-none border border-foreground px-8 py-4 text-base font-bold uppercase tracking-wide text-foreground transition hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
              >
                Customize Your Own
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-4 text-sm text-ink-soft">
              <span className="flex items-center gap-1 font-semibold text-foreground">
                ★★★★★ 4.8
              </span>
              <span>Google reviews · Women-owned · Kolkata</span>
            </div>
          </div>

          <div className="border border-terracotta-dark/60 p-3 shadow-xl md:p-4">
            <div className="relative h-[400px] w-full overflow-hidden md:h-[460px]">
              <Image
                src="/images/products/name-jhumka-handheld-garden.jpg"
                alt="Hand-painted name jhumka earrings from Mantassa Crafts"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-px bg-border-soft px-5 pb-5 md:px-0 md:pb-0">
          <div className="relative h-32 overflow-hidden bg-background md:h-40">
            <Image
              src="/images/products/jewelry/durga-trishul-necklace.jpg"
              alt="Durga Trishul Necklace"
              fill
              sizes="33vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-32 overflow-hidden bg-background md:h-40">
            <Image
              src="/images/products/watches/rajasthani-elephant-charm-watch.jpg"
              alt="Rajasthani elephant charm watch"
              fill
              sizes="33vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-32 overflow-hidden bg-background md:h-40">
            <Image
              src="/images/products/diya-set-triangle.jpg"
              alt="Hand-painted terracotta diyas"
              fill
              sizes="33vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Shop by category */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-4xl font-semibold text-foreground md:text-5xl">
            Shop by Category
          </h2>
          <Link
            href="/shop"
            className="text-sm font-semibold uppercase tracking-wide text-terracotta hover:underline"
          >
            View all →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </section>

      {/* Best sellers, real shoppable products */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-end justify-between">
            <div>
              <span className="kicker">Best sellers</span>
              <h2 className="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">
                Shop our most loved pieces
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-sm font-semibold uppercase tracking-wide text-terracotta hover:underline"
            >
              View all →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:items-center">
          <div>
            <span className="kicker">Made to order</span>
            <h2 className="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">
              Personalize almost anything we make
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
              Pick a base color, a motif, and, on our signature pieces, add
              a name in Bengali or English. We confirm every design with you
              on WhatsApp before it&apos;s handmade.
            </p>
            <Link
              href="/customize"
              className="mt-6 inline-block rounded-none bg-terracotta px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-terracotta-dark"
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
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-display text-4xl font-semibold text-foreground md:text-5xl">
          Loved by our customers
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
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

      {/* WhatsApp community */}
      <section className="border-y border-border-soft/70 bg-surface py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
          <div>
            <span className="kicker">A community for women</span>
            <h2 className="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">
              Join our WhatsApp Community
            </h2>
            <p className="font-bn mt-2 text-base font-medium text-terracotta-dark">
              নারীর সৌন্দর্যে, নারীর সৃষ্টির ছোঁয়া
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
              A female-only WhatsApp group for early looks at new pieces,
              festive offers, and updates from the studio, straight from
              Mantassa Crafts. This is separate from our order and inquiry
              line, just for the community.
            </p>
            <a
              href={WHATSAPP_COMMUNITY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-terracotta px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-terracotta-dark"
            >
              Join the Community
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="border border-terracotta-dark/60 p-3 shadow-xl">
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src="/images/products/name-jhumka-handheld-garden.jpg"
                alt="Mantassa Crafts community"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="bg-indigo px-8 py-14 text-center text-white">
          <h2 className="font-display text-4xl font-semibold md:text-5xl">
            Have something in mind?
          </h2>
          <p className="mt-3 text-white/80">
            Tell us on WhatsApp and we&apos;ll help you design it.
          </p>
          <a
            href={buildWhatsAppLink(GENERAL_INQUIRY_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-none bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wide transition hover:bg-white/90"
          >
            <span className="shimmer-text">Chat with Mantassa Crafts</span>
          </a>
        </div>
      </section>
    </div>
  );
}
