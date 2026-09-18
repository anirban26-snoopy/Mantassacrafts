import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Story | Mantassa Crafts",
  description: "The story behind Mantassa Crafts, a women-owned handmade jewelry studio in Kolkata.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-14">
      <p className="text-sm font-semibold uppercase tracking-widest text-terracotta">
        Our Story
      </p>
      <h1 className="mt-2 font-display text-3xl text-foreground">
        A small Kolkata craft studio, made new
      </h1>

      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="relative col-span-2 h-72 overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/images/products/name-jhumka-handheld-garden.jpg"
            alt="Mantassa Crafts name jhumka earrings, handheld"
            fill
            sizes="(min-width: 768px) 60vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="relative h-72 overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/images/products/portrait-silhouette-red.jpg"
            alt="Portrait silhouette earrings with terracotta relief backdrop"
            fill
            sizes="30vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="prose prose-neutral mt-8 max-w-none text-ink-soft">
        <p>
          Mantassa Crafts (মানতাসা ক্রাফটস) is a women owned handmade jewelry
          studio tucked into Bidhannagar, Kolkata. It began as a small home
          studio, hand painting fabric and terracotta jhumkas, and has been
          run by Sreshta Ghosh ever since. Every piece started with a simple
          love for folk art and a wish to make something personal.
        </p>
        <p>
          Our signature earrings are still the heart of the studio. Each pair
          is hand painted with the customer&apos;s name in Bengali or English,
          finished with our pom pom trims and silver toned jhumka bells.
          Customers have given us a 4.8 out of 5 rating on Google, praising
          the quality, friendliness, and on time delivery, and most of our
          orders have come through word of mouth and repeat customers.
        </p>
        <p>
          We are now reviving the studio online, adding fine jewelry, watches
          and accessories, and home and gifting pieces alongside the original
          earrings. Every item is still handmade to order and confirmed with
          you over WhatsApp. We do not take online payments on this website.
        </p>
      </div>

      <div className="font-bn prose prose-neutral mt-6 max-w-none text-ink-soft">
        <p>
          মানতাসা ক্রাফটস একটি নারী পরিচালিত হাতে তৈরি গয়নার স্টুডিও, যার
          ঠিকানা বিধাননগর, কলকাতা। এটি শুরু হয়েছিল একটি ছোট হোম স্টুডিও
          হিসেবে, যেখানে কাপড় ও মাটির ঝুমকা হাতে আঁকা হত, এবং তখন থেকেই এটি
          চালাচ্ছেন শ্রেষ্ঠা ঘোষ। প্রতিটি গয়না শুরু হয়েছিল লোকশিল্পের প্রতি
          ভালোবাসা আর নিজের মতো কিছু তৈরির ইচ্ছা থেকে।
        </p>
        <p>
          আমাদের সিগনেচার ঝুমকা আজও স্টুডিওর প্রাণ। প্রতিটি জোড়া হাতে আঁকা
          হয় ক্রেতার নাম দিয়ে, বাংলা বা ইংরেজি হরফে, সঙ্গে থাকে পম পম বর্ডার
          আর রুপালি রঙের ঝুমকা ঘণ্টা। গুগলে আমাদের রেটিং ৪.৮, ক্রেতারা
          প্রশংসা করেছেন গুণমান, ব্যবহার এবং সময়মতো ডেলিভারির জন্য। আমাদের
          বেশিরভাগ অর্ডার এসেছে মুখে মুখে প্রচার আর পুরনো ক্রেতাদের ফিরে
          আসার মধ্য দিয়ে।
        </p>
        <p>
          এখন আমরা স্টুডিওটিকে নতুন করে অনলাইনে নিয়ে আসছি, পুরনো ঝুমকার
          পাশাপাশি যোগ হচ্ছে শৌখিন গয়না, ঘড়ি ও সাজ, এবং ঘর ও উপহারের জিনিস।
          প্রতিটি জিনিস আজও হাতে তৈরি হয়, অর্ডার অনুযায়ী, এবং হোয়াটসঅ্যাপে
          আপনার সঙ্গে কথা বলে নিশ্চিত করা হয়। এই ওয়েবসাইটে কোনো অনলাইন
          পেমেন্ট নেওয়া হয় না।
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          "/images/products/diya-set-circle.jpg",
          "/images/products/pom-pom-floral-drop.jpg",
          "/images/products/shell-necklace-set.jpg",
          "/images/products/name-jhumka-trio.jpg",
        ].map((src) => (
          <div key={src} className="relative h-32 overflow-hidden rounded-xl shadow-sm sm:h-36">
            <Image src={src} alt="" fill sizes="25vw" className="object-cover" />
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {[
          { label: "Handmade", desc: "Every piece is crafted by hand, to order." },
          { label: "Personal", desc: "Names, colors, and motifs chosen by you." },
          { label: "Kolkata-rooted", desc: "Proudly based in Bidhannagar, Kolkata." },
        ].map((v) => (
          <div key={v.label} className="rounded-2xl border border-border-soft bg-surface p-5">
            <p className="font-display text-lg text-terracotta">{v.label}</p>
            <p className="mt-1 text-sm text-ink-soft">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
