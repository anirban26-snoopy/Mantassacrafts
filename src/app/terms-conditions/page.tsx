import { Metadata } from "next";
import { buildWhatsAppLink, GENERAL_INQUIRY_MESSAGE, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Terms and Conditions | Mantassa Crafts",
  description: "The terms that apply to using the Mantassa Crafts website and placing an order.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <p className="text-sm font-semibold uppercase tracking-widest text-terracotta">
        Policies
      </p>
      <h1 className="mt-2 font-display text-3xl text-foreground">
        Terms and Conditions
      </h1>
      <p className="mt-2 text-sm text-ink-soft">Last updated 2026.</p>

      <div className="prose prose-neutral mt-8 max-w-none text-ink-soft">
        <p>
          Mantassa Crafts (মানতাসা ক্রাফটস) is a handmade jewelry studio run
          by Sreshta Ghosh, based in Bidhannagar, Kolkata, West Bengal. By
          browsing this website or placing an order with us, you agree to
          the terms below.
        </p>

        <h2>How ordering works</h2>
        <p>
          This website is a catalog and customizer, not a live checkout. We
          do not accept online payments here. When you add an item to your
          cart and send it on WhatsApp, that starts a conversation, it is not
          a confirmed order. An order is only confirmed once we have agreed
          with you on the final design, personalization, price, and delivery
          charge over WhatsApp.
        </p>

        <h2>Payment</h2>
        <p>
          Once your design and final price are confirmed on WhatsApp, orders
          are prepared in two payments. 60% of the total is due upfront
          before we start making your piece, please send us a screenshot of
          this payment after you place your order so we can begin
          production. The remaining 40% is due before your order is shipped,
          once your piece is ready. We will send your shipping and tracking
          details after the second payment is received.
        </p>

        <h2>Handmade products</h2>
        <p>
          Every piece is hand painted, hand sculpted, or hand assembled.
          Small variations in color, size, texture, and finish between the
          photo and the piece you receive are part of the handmade process,
          not a defect.
        </p>

        <h2>Personalization</h2>
        <p>
          When you request a name or phrase to be added to a piece, you are
          responsible for giving us the correct spelling. We will confirm
          the wording and script (Bengali or English) with you on WhatsApp
          before we start making it.
        </p>

        <h2>Pricing</h2>
        <p>
          Prices shown on the website are starting prices for the base
          design. The final price, including any personalization and
          delivery charge, is confirmed with you on WhatsApp before you pay.
        </p>

        <h2>Shipping and returns</h2>
        <p>
          Shipping timelines and charges are set out in our{" "}
          <a href="/shipping-policy">Shipping Policy</a>. Cancellations,
          returns, and refunds are set out in our{" "}
          <a href="/returns-policy">
            Return, Refund and Cancellation Policy
          </a>
          .
        </p>

        <h2>Content and photos</h2>
        <p>
          The photos, product descriptions, and designs on this website
          belong to Mantassa Crafts. Please do not copy, reuse, or
          redistribute them without our permission.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          We take care in how we make and package every order, but we are
          not responsible for delays or issues caused by courier partners
          once a package has left our hands, beyond helping you raise and
          resolve a claim.
        </p>

        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of India, and any dispute
          will be subject to the courts of Kolkata, West Bengal.
        </p>

        <h2>Questions</h2>
        <p>
          For anything unclear here, message us on WhatsApp at{" "}
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
