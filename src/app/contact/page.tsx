import { Metadata } from "next";
import { buildWhatsAppLink, GENERAL_INQUIRY_MESSAGE, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact | Mantassa Crafts",
  description: "Get in touch with Mantassa Crafts via WhatsApp or visit us in Kolkata.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <p className="text-sm font-semibold uppercase tracking-widest text-terracotta">
        Contact
      </p>
      <h1 className="mt-2 font-display text-5xl font-semibold text-foreground">
        Let&apos;s talk about your order
      </h1>
      <p className="mt-3 max-w-xl text-ink-soft">
        Mantassa Crafts is run by Sreshta Ghosh from Bidhannagar, Kolkata.
        WhatsApp is the fastest way to reach us, for questions, custom
        orders, or checking on an order already in progress. There is no
        online payment on this website. Once we have discussed your order
        over WhatsApp, we will confirm the design and share payment details
        directly with you.
      </p>
      <p className="font-bn mt-2 max-w-xl text-ink-soft">
        মানতাসা ক্রাফটস চালান শ্রেষ্ঠা ঘোষ, বিধাননগর, কলকাতা থেকে। আমাদের
        সঙ্গে যোগাযোগের সবচেয়ে দ্রুত উপায় হোয়াটসঅ্যাপ। এই ওয়েবসাইটে কোনো
        অনলাইন পেমেন্ট নেওয়া হয় না, হোয়াটসঅ্যাপে কথা বলার পরেই আমরা অর্ডার
        নিশ্চিত করে পেমেন্টের বিস্তারিত জানাই।
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-border-soft bg-surface p-6">
          <h2 className="font-display text-xl text-foreground">WhatsApp</h2>
          <p className="mt-2 text-ink-soft">
            The fastest way to reach us, for questions, custom orders, or
            checking on an existing order.
          </p>
          <a
            href={buildWhatsAppLink(GENERAL_INQUIRY_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Chat on WhatsApp · {WHATSAPP_DISPLAY}
          </a>

          <div className="mt-8">
            <h3 className="font-semibold text-foreground">Visit us</h3>
            <p className="mt-1 text-sm text-ink-soft">
              Sukanta Nagar, Sector IV, Bidhannagar, Kolkata, West
              Bengal 700107
            </p>
            <p className="mt-1 text-sm text-ink-soft">Open daily · Closes 9 PM</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border-soft">
          <iframe
            title="Mantassa Crafts location"
            src="https://www.google.com/maps?q=Mantassa+Crafts,+Sukanta+Nagar,+Sector+IV,+Bidhannagar,+Kolkata,+West+Bengal+700107&output=embed"
            className="h-full min-h-[320px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
