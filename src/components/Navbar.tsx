"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { buildWhatsAppLink, GENERAL_INQUIRY_MESSAGE } from "@/lib/whatsapp";
import { useCart } from "@/context/CartContext";

const links = [
  { href: "/customize", label: "Customize" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

function ShopLink({ onClick, className = "" }: { onClick?: () => void; className?: string }) {
  return (
    <Link
      href="/shop"
      onClick={onClick}
      className={`flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-widest text-terracotta transition hover:text-terracotta-dark ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6 8h12l-1 12H7L6 8Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9 8V6a3 3 0 0 1 6 0v2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
      Shop
    </Link>
  );
}

function CartLink() {
  const { totalItems } = useCart();
  return (
    <Link
      href="/cart"
      aria-label="View cart"
      className="relative flex items-center text-foreground/80 transition hover:text-terracotta"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 4h2l2.4 12.4a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 8H6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="21" r="1.4" fill="currentColor" />
        <circle cx="18" cy="21" r="1.4" fill="currentColor" />
      </svg>
      {totalItems > 0 && (
        <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-terracotta text-[10px] font-semibold text-white">
          {totalItems}
        </span>
      )}
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border-soft/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2">
        <Link href="/" className="flex shrink-0 flex-col items-start">
          <Image
            src="/images/brand/mantassa-logo.png"
            alt="Mantassa Crafts, মানতাসা ক্রাফটস"
            width={1744}
            height={901}
            quality={100}
            priority
            sizes="(min-width: 1024px) 300px, (min-width: 640px) 220px, 160px"
            className="h-20 w-auto sm:h-24 md:h-28 lg:h-32"
          />
          <span className="font-bn -mt-1 text-[11px] font-medium text-terracotta-dark sm:text-xs">
            নারীর সৌন্দর্যে, নারীর সৃষ্টির ছোঁয়া
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <ShopLink />
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium uppercase tracking-widest text-foreground/80 transition hover:text-terracotta"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href={buildWhatsAppLink(GENERAL_INQUIRY_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-terracotta px-5 py-2.5 text-[13px] font-semibold uppercase tracking-wide transition hover:bg-terracotta-dark md:inline-block"
          >
            <span className="shimmer-gold">WhatsApp Us</span>
          </a>

          <CartLink />

          <button
            className="text-foreground md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border-soft/70 bg-surface px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <ShopLink onClick={() => setOpen(false)} className="text-base" />
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground/80"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={buildWhatsAppLink(GENERAL_INQUIRY_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 rounded-full bg-terracotta px-4 py-2 text-center text-sm font-semibold"
            >
              <span className="shimmer-gold">WhatsApp Us</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
