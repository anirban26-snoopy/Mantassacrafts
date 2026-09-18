"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import ProductMedia from "@/components/ProductMedia";
import { getProduct } from "@/data/products";
import { buildWhatsAppLink, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export default function CartPage() {
  const { items, removeItem, updateQty, totalPrice, clearCart } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [agreedToPayment, setAgreedToPayment] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const canCheckout =
    items.length > 0 &&
    name.trim() &&
    phone.trim() &&
    address.trim() &&
    pincode.trim() &&
    agreedToPayment;

  const waLink = useMemo(() => {
    const lines = [
      "Hi Mantassa Crafts! I'd like to place an order:",
      "",
      ...items.map((i, idx) => {
        const parts = [`${idx + 1}. ${i.name} x${i.qty}, Rs ${i.price * i.qty}`];
        if (i.color) parts.push(`   Color: ${i.color}`);
        if (i.motif) parts.push(`   Motif: ${i.motif}`);
        if (i.personalizedText) parts.push(`   Personalization (${i.script}): ${i.personalizedText}`);
        return parts.join("\n");
      }),
      "",
      `Total: ₹${totalPrice}`,
      "",
      "Customer details:",
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : "",
      `Address: ${address}`,
      `Pincode: ${pincode}`,
      "",
      "I understand: 60% payment upfront (with screenshot) to start production, remaining 40% before shipping.",
    ].filter(Boolean);
    return buildWhatsAppLink(lines.join("\n"));
  }, [items, totalPrice, name, phone, email, address, pincode]);

  function handleCheckout(e: React.FormEvent) {
    e.preventDefault();
    if (!canCheckout) return;
    window.open(waLink, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-20 text-center">
        <h1 className="font-display text-2xl text-foreground">Your cart is empty</h1>
        <p className="mt-2 text-ink-soft">
          Browse the shop and add a few personalized pieces to get started.
        </p>
        <Link
          href="/shop"
          className="mt-6 inline-block rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white transition hover:bg-terracotta-dark"
        >
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <h1 className="font-display text-5xl font-semibold text-foreground">Your Cart</h1>

      <div className="mt-8 grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          {items.map((item) => {
            const product = getProduct(item.slug);
            return (
              <div
                key={item.id}
                className="flex gap-4 rounded-2xl border border-border-soft bg-surface p-4"
              >
                <ProductMedia
                  image={product?.images?.[0]}
                  swatch={product?.swatch ?? "#c1502e"}
                  alt={item.name}
                  className="h-20 w-20 flex-shrink-0 rounded-xl"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-display text-base text-foreground">
                        {item.name}
                      </p>
                      <p className="text-sm text-ink-soft">₹{item.price} each</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      aria-label="Remove item"
                      className="text-sm text-ink-soft hover:text-terracotta"
                    >
                      ✕
                    </button>
                  </div>

                  {(item.color || item.motif || item.personalizedText) && (
                    <div className="mt-1 flex flex-wrap gap-x-3 text-xs text-ink-soft">
                      {item.color && <span>Color: {item.color}</span>}
                      {item.motif && <span>Motif: {item.motif}</span>}
                      {item.personalizedText && (
                        <span>
                          Name ({item.script}): {item.personalizedText}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-border-soft">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="px-3 py-1 text-ink-soft"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="px-3 py-1 text-ink-soft"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-semibold text-foreground">
                      ₹{item.price * item.qty}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          <button
            onClick={clearCart}
            className="text-sm text-ink-soft hover:text-terracotta"
          >
            Clear cart
          </button>
        </div>

        <div className="h-fit rounded-2xl border border-border-soft bg-surface p-6">
          <div className="flex items-center justify-between border-b border-border-soft pb-4">
            <span className="font-semibold text-foreground">Total</span>
            <span className="shimmer-text font-display text-xl">
              ₹{totalPrice}
            </span>
          </div>

          <form onSubmit={handleCheckout} className="mt-4 space-y-3">
            <div>
              <label className="text-sm font-medium text-foreground">
                Full name*
              </label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-lg border border-border-soft bg-background px-3 py-2 text-sm outline-none focus:border-terracotta"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">
                Phone number*
              </label>
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 w-full rounded-lg border border-border-soft bg-background px-3 py-2 text-sm outline-none focus:border-terracotta"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">
                Email (optional)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-lg border border-border-soft bg-background px-3 py-2 text-sm outline-none focus:border-terracotta"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">
                Detailed address*
              </label>
              <textarea
                required
                rows={3}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1 w-full rounded-lg border border-border-soft bg-background px-3 py-2 text-sm outline-none focus:border-terracotta"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">
                Pincode*
              </label>
              <input
                required
                inputMode="numeric"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="mt-1 w-full rounded-lg border border-border-soft bg-background px-3 py-2 text-sm outline-none focus:border-terracotta"
              />
            </div>

            <div className="rounded-lg border border-border-soft bg-background p-3">
              <label className="flex items-start gap-2 text-xs text-ink-soft">
                <input
                  type="checkbox"
                  checked={agreedToPayment}
                  onChange={(e) => setAgreedToPayment(e.target.checked)}
                  className="mt-0.5"
                  required
                />
                <span>
                  I understand orders are prepared in two payments: 60% of
                  the total upfront, with a screenshot sent after placing the
                  order, before production starts, and the remaining 40%
                  before the order is shipped. Shipping and tracking details
                  are sent after the second payment. See our{" "}
                  <Link
                    href="/terms-conditions"
                    className="underline hover:text-terracotta"
                  >
                    Terms &amp; Conditions
                  </Link>
                  .
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={!canCheckout}
              className="mt-2 w-full rounded-full bg-terracotta px-6 py-3 text-sm font-semibold transition hover:bg-terracotta-dark disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span className={canCheckout ? "shimmer-gold" : "text-white"}>
                Send Order on WhatsApp
              </span>
            </button>
            {submitted && (
              <p className="text-center text-xs text-ink-soft">
                Opened WhatsApp with your order. Didn&apos;t open?{" "}
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="underline">
                  Click here
                </a>
                .
              </p>
            )}
            <p className="text-center text-xs text-ink-soft">
              This sends your cart &amp; details to {WHATSAPP_DISPLAY} on
              WhatsApp. No payment is taken on this site.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
