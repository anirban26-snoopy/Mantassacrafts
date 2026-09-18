import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "How Customizing Works | Mantassa Crafts",
  description: "How to personalize your jewelry, watches, or gift with Mantassa Crafts.",
};

const steps = [
  {
    title: "Pick a piece",
    body: "Browse the shop and choose any product marked 'Personalizable'.",
  },
  {
    title: "Choose color & motif",
    body: "Use the on-page customizer to pick a color and a motif from the available options.",
  },
  {
    title: "Add your name (optional)",
    body: "On our signature pieces, add a name or short phrase in Bengali or English script.",
  },
  {
    title: "Send it on WhatsApp",
    body: "One tap builds a message with your exact choices and sends it straight to us.",
  },
  {
    title: "We confirm design & price",
    body: "We'll reply with a mock-up or description and the final price before you commit.",
  },
  {
    title: "Handmade & shipped",
    body: "Once confirmed, your piece is handmade to order and shipped to you.",
  },
];

export default function CustomizePage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-14">
      <p className="text-sm font-semibold uppercase tracking-widest text-terracotta">
        Customize
      </p>
      <h1 className="mt-2 font-display text-5xl font-semibold text-foreground">
        How personalizing works
      </h1>
      <p className="mt-3 max-w-xl text-ink-soft">
        Start by browsing our shop for pieces marked Personalizable. When you
        find one you like, use the customizer on the product page to choose a
        color and a motif that suits you. You can also add a name or a short
        phrase in Bengali or English script, if the piece allows it.
      </p>
      <p className="mt-3 max-w-xl text-ink-soft">
        Once you are happy with the look, add it to your cart and send the
        order on WhatsApp with a single tap. We will reply with the final
        design, price, and payment details, since we do not take payments on
        the website itself. Once you confirm, we handcraft the piece just for
        you and ship it out.
      </p>
      <p className="font-bn mt-3 max-w-xl text-ink-soft">
        প্রথমে আমাদের শপে যান এবং যেসব পণ্যে Personalizable লেখা আছে সেগুলো
        দেখুন। পছন্দের জিনিস পেলে, পণ্যের পাতায় থাকা কাস্টমাইজার থেকে আপনার
        পছন্দের রং আর মোটিফ বেছে নিন। চাইলে বাংলা বা ইংরেজি হরফে নাম বা ছোট
        একটা কথাও যোগ করতে পারেন, যদি সেই পণ্যে তার সুযোগ থাকে। ডিজাইন পছন্দ
        হলে, কার্টে যোগ করুন আর এক ট্যাপেই হোয়াটসঅ্যাপে অর্ডার পাঠিয়ে দিন।
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="rounded-2xl border border-border-soft bg-surface p-5"
          >
            <span className="font-display text-2xl text-terracotta">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 font-semibold text-foreground">{s.title}</h3>
            <p className="mt-1 text-sm text-ink-soft">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 rounded-2xl border border-border-soft bg-surface p-6 sm:grid-cols-[auto_1fr] sm:items-center">
        <div className="relative h-32 w-32 overflow-hidden rounded-xl">
          <Image
            src="/images/products/name-jhumka-yellow-bird.jpg"
            alt="Personalized name jhumka earrings"
            fill
            sizes="128px"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-display text-xl text-foreground">
            Not sure what to choose?
          </h2>
          <p className="mt-1 text-ink-soft">
            Message us directly on WhatsApp, we are always happy to help you
            decide on colors, motifs, and layouts.
          </p>
          <p className="font-bn mt-1 text-ink-soft">
            কী বেছে নেবেন বুঝতে পারছেন না? সরাসরি হোয়াটসঅ্যাপে আমাদের লিখুন,
            আপনাকে সাহায্য করতে আমরা সবসময় খুশি হই।
          </p>
          <Link
            href="/shop"
            className="mt-4 inline-block rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white transition hover:bg-terracotta-dark"
          >
            Browse the Shop
          </Link>
        </div>
      </div>
    </div>
  );
}
