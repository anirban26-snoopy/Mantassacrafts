"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useCart } from "@/context/CartContext";

export default function Customizer({ product }: { product: Product }) {
  const opts = product.customizer;
  const [color, setColor] = useState(opts?.colors[0]?.label ?? "");
  const [motif, setMotif] = useState(opts?.motifs[0] ?? "");
  const [script, setScript] = useState(opts?.scripts?.[0] ?? "English");
  const [personalText, setPersonalText] = useState("");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  function handleAddToCart() {
    addItem({
      slug: product.slug,
      name: product.name,
      price: product.price,
      qty,
      color: opts?.colors.length ? color : undefined,
      motif: opts?.motifs.length ? motif : undefined,
      personalizedText: opts?.allowsPersonalizedText ? personalText : undefined,
      script: opts?.allowsPersonalizedText ? script : undefined,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  }

  if (!opts) {
    return (
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleAddToCart}
          className="rounded-full bg-terracotta px-6 py-3 text-sm font-semibold transition hover:bg-terracotta-dark"
        >
          <span className={added ? "text-white" : "shimmer-gold"}>
            {added ? "Added to cart ✓" : "Add to Cart"}
          </span>
        </button>
        <a
          href={buildWhatsAppLink(
            `Hi Mantassa Crafts! I'd like to know more about ${product.name}.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-terracotta px-6 py-3 text-sm font-semibold text-terracotta transition hover:bg-terracotta/10"
        >
          Enquire on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border-soft bg-surface p-5">
      <h3 className="font-display text-lg text-foreground">Make it yours</h3>

      {opts.colors.length > 0 && (
        <div className="mt-4">
          <p className="text-sm font-medium text-foreground">Color</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {opts.colors.map((c) => (
              <button
                key={c.label}
                type="button"
                onClick={() => setColor(c.label)}
                className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition ${
                  color === c.label
                    ? "border-terracotta bg-terracotta/10 text-terracotta-dark"
                    : "border-border-soft text-ink-soft hover:border-terracotta/50"
                }`}
              >
                <span
                  className="h-3.5 w-3.5 rounded-full border border-black/10"
                  style={{ background: c.hex }}
                />
                {c.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {opts.motifs.length > 0 && (
        <div className="mt-4">
          <p className="text-sm font-medium text-foreground">Motif</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {opts.motifs.map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMotif(m)}
                className={`rounded-full border px-3 py-1.5 text-sm transition ${
                  motif === m
                    ? "border-terracotta bg-terracotta/10 text-terracotta-dark"
                    : "border-border-soft text-ink-soft hover:border-terracotta/50"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      )}

      {opts.allowsPersonalizedText && (
        <div className="mt-4">
          <p className="text-sm font-medium text-foreground">Personalize</p>
          {opts.scripts && opts.scripts.length > 1 && (
            <div className="mt-2 flex gap-2">
              {opts.scripts.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setScript(s)}
                  className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                    script === s
                      ? "border-terracotta bg-terracotta/10 text-terracotta-dark"
                      : "border-border-soft text-ink-soft"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          )}
          <input
            type="text"
            value={personalText}
            onChange={(e) => setPersonalText(e.target.value)}
            placeholder={
              script === "Bengali" ? "যেমন: প্রিয়া" : "e.g. Priya"
            }
            className={`mt-2 w-full rounded-lg border border-border-soft bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-terracotta ${
              script === "Bengali" ? "font-bn" : ""
            }`}
            maxLength={20}
          />
          <p className="mt-1 text-xs text-ink-soft">
            Up to 20 characters. We&apos;ll confirm the final layout with you
            over WhatsApp before making it.
          </p>
        </div>
      )}

      <div className="mt-4 flex items-center gap-3">
        <p className="text-sm font-medium text-foreground">Quantity</p>
        <div className="flex items-center rounded-full border border-border-soft">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="px-3 py-1 text-ink-soft"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-6 text-center text-sm">{qty}</span>
          <button
            type="button"
            onClick={() => setQty((q) => q + 1)}
            className="px-3 py-1 text-ink-soft"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={handleAddToCart}
        className="mt-5 block w-full rounded-full bg-terracotta px-6 py-3 text-center text-sm font-semibold transition hover:bg-terracotta-dark"
      >
        <span className={added ? "text-white" : "shimmer-gold"}>
          {added ? "Added to cart ✓" : "Add to Cart"}
        </span>
      </button>
      <Link
        href="/cart"
        className="mt-2 block text-center text-xs font-medium text-terracotta hover:underline"
      >
        View cart &amp; checkout on WhatsApp →
      </Link>
      <p className="mt-2 text-center text-xs text-ink-soft">
        No payment now. We&apos;ll confirm design &amp; price with you first.
      </p>
    </div>
  );
}
