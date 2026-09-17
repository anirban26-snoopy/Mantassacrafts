import { Metadata } from "next";
import { buildWhatsAppLink, GENERAL_INQUIRY_MESSAGE, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Return, Refund and Cancellation Policy | Mantassa Crafts",
  description:
    "Our policy on cancellations, returns, and refunds for handmade and personalized orders from Mantassa Crafts.",
};

export default function ReturnsPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <p className="text-sm font-semibold uppercase tracking-widest text-terracotta">
        Policies
      </p>
      <h1 className="mt-2 font-display text-3xl text-foreground">
        Return, Refund and Cancellation Policy
      </h1>
      <p className="mt-2 text-sm text-ink-soft">Last updated 2026.</p>

      <div className="prose prose-neutral mt-8 max-w-none text-ink-soft">
        <p>
          Most pieces at Mantassa Crafts are handmade to order, and many carry
          a name or detail personalized just for you. This policy explains
          when an order can be changed or cancelled, and how returns and
          refunds work.
        </p>

        <h2>Before we start making your piece</h2>
        <p>
          After you send your order on WhatsApp, we confirm the final design
          and price with you before any production begins. You can change or
          cancel your order freely at this stage, simply message us on
          WhatsApp.
        </p>

        <h2>Once production has started</h2>
        <p>
          Once you have confirmed the design and we have started making your
          piece, personalized items (such as anything with a hand painted
          name) cannot be cancelled, returned, or exchanged, since they are
          made specifically for you and cannot be resold. Non personalized,
          ready made items may still be cancelled before they are shipped,
          please message us on WhatsApp as soon as possible.
        </p>

        <h2>Returns on non personalized items</h2>
        <p>
          If you receive a non personalized item and are not happy with it,
          message us on WhatsApp within 3 days of delivery. The item must be
          unused, in its original packaging, with any tags intact. Return
          shipping is the customer&apos;s responsibility unless the item
          arrived damaged or incorrect.
        </p>

        <h2>Damaged, defective, or incorrect items</h2>
        <p>
          If your order arrives damaged, defective, or different from what
          you ordered, message us on WhatsApp within 48 hours of delivery
          with clear photos or a video. We will arrange a replacement or a
          refund, whichever is appropriate.
        </p>

        <h2>Refunds</h2>
        <p>
          Since this website does not take online payments, all payments are
          made directly to us after your order is confirmed on WhatsApp. Any
          approved refund is sent back the same way, by UPI or bank transfer,
          usually within a few business days of approval.
        </p>

        <h2>Questions</h2>
        <p>
          If anything about your order does not feel right, please talk to us
          first. Message us on WhatsApp at {WHATSAPP_DISPLAY} and we will
          work it out with you directly.
        </p>
      </div>

      <a
        href={buildWhatsAppLink(GENERAL_INQUIRY_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white transition hover:bg-terracotta-dark"
      >
        Ask us on WhatsApp
      </a>
    </div>
  );
}
