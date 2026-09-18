import Link from "next/link";
import Image from "next/image";
import {
  WHATSAPP_DISPLAY,
  buildWhatsAppLink,
  GENERAL_INQUIRY_MESSAGE,
  WHATSAPP_COMMUNITY_LINK,
} from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="border-t border-border-soft/70 bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-4">
        <div>
          <Image
            src="/images/brand/mantassa-logo.png"
            alt="Mantassa Crafts, মানতাসা ক্রাফটস"
            width={1744}
            height={901}
            quality={100}
            sizes="200px"
            className="h-20 w-auto"
          />
          <p className="font-bn mt-3 text-sm font-medium text-terracotta-dark">
            নারীর সৌন্দর্যে, নারীর সৃষ্টির ছোঁয়া
          </p>
          <p className="mt-2 text-sm text-ink-soft">
            Handmade jewelry &amp; gifts, personalized for you. Kolkata-made,
            women-owned.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Shop</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>
              <Link href="/shop/personalized-earrings" className="hover:text-terracotta">
                Personalized Earrings
              </Link>
            </li>
            <li>
              <Link href="/shop/fine-jewelry" className="hover:text-terracotta">
                Fine Jewelry
              </Link>
            </li>
            <li>
              <Link href="/shop/watches-accessories" className="hover:text-terracotta">
                Watches &amp; Accessories
              </Link>
            </li>
            <li>
              <Link href="/shop/home-gifting" className="hover:text-terracotta">
                Home &amp; Gifting
              </Link>
            </li>
            <li>
              <Link href="/shop/oxidised-jewellery" className="hover:text-terracotta">
                Oxidised Junk Jewellery
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>
              <Link href="/about" className="hover:text-terracotta">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/customize" className="hover:text-terracotta">
                How Customizing Works
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-terracotta">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Reach us</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>
              <a
                href={buildWhatsAppLink(GENERAL_INQUIRY_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-terracotta"
              >
                WhatsApp: {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_COMMUNITY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-terracotta hover:text-terracotta-dark"
              >
                Join our WhatsApp Community →
              </a>
            </li>
            <li>Sukanta Nagar, Sector IV, Bidhannagar, Kolkata, West Bengal 700107</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border-soft/70 py-4 text-center text-xs text-ink-soft">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <Link href="/shipping-policy" className="hover:text-terracotta">
            Shipping Policy
          </Link>
          <Link href="/returns-policy" className="hover:text-terracotta">
            Return, Refund &amp; Cancellation Policy
          </Link>
          <Link href="/terms-conditions" className="hover:text-terracotta">
            Terms &amp; Conditions
          </Link>
        </div>
        <p className="mt-2">
          © {new Date().getFullYear()} Mantassa Crafts. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
