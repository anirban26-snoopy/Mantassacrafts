import { Metadata } from "next";
import { buildWhatsAppLink, GENERAL_INQUIRY_MESSAGE, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Shipping Policy | Mantassa Crafts",
  description: "How Mantassa Crafts ships orders across India, and how delivery charges work.",
};

export default function ShippingPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <p className="text-sm font-semibold uppercase tracking-widest text-terracotta">
        Policies
      </p>
      <h1 className="mt-2 font-display text-3xl text-foreground">
        Shipping Policy
      </h1>
      <p className="mt-2 text-sm text-ink-soft">Last updated 2026.</p>

      <div className="prose prose-neutral mt-8 max-w-none text-ink-soft">
        <p>
          Every piece at Mantassa Crafts is handmade to order in Kolkata. This
          policy explains how we process, price, and ship your order once it
          is confirmed with you over WhatsApp.
        </p>

        <h2>Where we ship</h2>
        <p>
          We currently ship only within India. We do not offer international
          delivery at this time.
        </p>

        <h2>Order processing time</h2>
        <p>
          Because each item is made or personalized to order, please allow a
          few business days for your piece to be handcrafted before it is
          dispatched. We will confirm the expected timeline with you on
          WhatsApp when we confirm your order, since it can vary by product
          and by how many orders are in the queue.
        </p>

        <h2>Delivery charges</h2>
        <p>
          Delivery charges are separate from the price of the product and are
          applicable over and above it. Since this website does not have a
          live checkout, we calculate the delivery charge based on your
          location and the weight of your order, and share the total,
          including delivery, with you on WhatsApp before you confirm and
          pay.
        </p>

        <h2>Delivery estimates</h2>
        <p>
          Once your order is dispatched, delivery typically takes a few
          business days depending on your location and the courier serving
          your area. Delays can occasionally happen due to weather, courier
          disruptions, or festive season rush. If we expect a significant
          delay, we will let you know on WhatsApp.
        </p>

        <h2>Order tracking</h2>
        <p>
          Once your order is shipped, we will share the courier name and
          tracking details with you directly on WhatsApp.
        </p>

        <h2>Damaged or lost in transit</h2>
        <p>
          If your order arrives damaged, please keep the original packaging
          and message us on WhatsApp with photos or a video within 48 hours of
          delivery, so we can help you with a replacement or refund. Our full
          process for this is covered in our{" "}
          <a href="/returns-policy">Return, Refund and Cancellation Policy</a>
          .
        </p>

        <h2>Questions</h2>
        <p>
          For anything not covered here, message us on WhatsApp at{" "}
          {WHATSAPP_DISPLAY}.
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
