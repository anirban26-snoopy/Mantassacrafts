export type CategorySlug =
  | "personalized-earrings"
  | "fine-jewelry"
  | "watches-accessories"
  | "home-gifting";

export interface Category {
  slug: CategorySlug;
  name: string;
  nameBn?: string;
  tagline: string;
  description: string;
  swatch: string; // placeholder accent color until real photos are added
  image?: string;
}

export const categories: Category[] = [
  {
    slug: "personalized-earrings",
    name: "Personalized Jhumkas & Earrings",
    nameBn: "নিজের নামে জুমকা",
    tagline: "Our signature handmade craft",
    description:
      "Hand painted fabric and terracotta jhumkas, finished with your name in Bengali or English, pom poms, and silver bells. The line that started it all.",
    swatch: "#c1502e",
    image: "/images/products/name-jhumka-handheld-garden.jpg",
  },
  {
    slug: "fine-jewelry",
    name: "Fine Jewelry",
    nameBn: "শৌখিন গহনা",
    tagline: "Hand painted clay and terracotta jewelry",
    description:
      "Hand sculpted and hand painted clay pendants, chokers, and earrings drawing on Bengal's flowers, folklore, and festival motifs, from Durga to the humble shonkho.",
    swatch: "#e0a62f",
    image: "/images/products/jewelry/durga-trishul-necklace.jpg",
  },
  {
    slug: "watches-accessories",
    name: "Watches & Accessories",
    nameBn: "ঘড়ি ও সাজ",
    tagline: "New, everyday carry made personal",
    description:
      "Watches, bracelets, and bag charms that can be monogrammed or colour matched to complete your look.",
    swatch: "#2f3b63",
    image: "/images/products/watches/rajasthani-elephant-charm-watch.jpg",
  },
  {
    slug: "home-gifting",
    name: "Home & Gifting",
    nameBn: "ঘর ও উপহার",
    tagline: "Patachitra art and festive keepsakes",
    description:
      "Hand painted Patachitra plates, terracotta diyas, and personalized keepsakes for weddings, birthdays, and festive gifting.",
    swatch: "#7a8b5c",
    image: "/images/products/decor/patachitra-radha-krishna-winter.jpg",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
