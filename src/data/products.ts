import { CategorySlug } from "./categories";

export interface CustomizerOptions {
  colors: { label: string; hex: string }[];
  motifs: string[];
  allowsPersonalizedText: boolean;
  scripts?: ("English" | "Bengali")[];
}

export interface Product {
  slug: string;
  name: string;
  nameBn?: string;
  category: CategorySlug;
  price: number; // current price in INR
  originalPrice?: number; // struck-through reference price, if the item is on offer
  description: string;
  swatch: string; // fallback color block for products without a real photo yet
  images?: string[]; // real product photos, in /public
  personalizable: boolean;
  customizer?: CustomizerOptions;
}

export const products: Product[] = [
  // Personalized Jhumkas & Earrings, the original signature line
  {
    slug: "name-jhumka-earrings",
    name: "Name Jhumka Earrings",
    nameBn: "নিজের নামে জুমকা",
    category: "personalized-earrings",
    price: 349,
    description:
      "Our best loved piece. A hand painted fabric disc bearing your name in Bengali or English script, edged with pom poms and finished with a silver jhumka bell.",
    swatch: "#c1502e",
    images: [
      "/images/products/name-jhumka-handheld-garden.jpg",
      "/images/products/name-jhumka-trio.jpg",
      "/images/products/name-jhumka-yellow-bird.jpg",
      "/images/products/name-jhumka-lotus-pot.jpg",
    ],
    personalizable: true,
    customizer: {
      colors: [
        { label: "Red", hex: "#b5382a" },
        { label: "Indigo", hex: "#2f3b63" },
        { label: "Mustard", hex: "#e0a62f" },
        { label: "Black", hex: "#1f1a17" },
      ],
      motifs: ["Lotus", "Floral vine", "Peacock", "Plain disc"],
      allowsPersonalizedText: true,
      scripts: ["Bengali", "English"],
    },
  },
  {
    slug: "moyurpakhi-name-jhumka",
    name: "Moyurpakhi Name Jhumka",
    nameBn: "ময়ূরপঙ্খী জুমকা",
    category: "personalized-earrings",
    price: 379,
    description:
      "A peacock feather hand painted alongside your name, on a mustard yellow disc with a deep blue pom pom border. A tribute to the moyurpakhi, the peacock feather boat of Bengal folklore.",
    swatch: "#2f3b63",
    images: ["/images/products/jewelry/moyurpakhi-name-jhumka.jpg"],
    personalizable: true,
    customizer: {
      colors: [
        { label: "Mustard and indigo", hex: "#e0a62f" },
        { label: "Red and black", hex: "#b5382a" },
      ],
      motifs: ["Peacock feather", "Plain disc"],
      allowsPersonalizedText: true,
      scripts: ["Bengali", "English"],
    },
  },
  {
    slug: "utsav-name-earrings",
    name: "Utsav Name Earrings",
    nameBn: "উৎসব জুমকা",
    category: "personalized-earrings",
    price: 329,
    description:
      "Diamond shaped white fabric earrings hand lettered with your name or a festive word like Utsav, trimmed in rani pink pom poms and finished with a jhumka bell.",
    swatch: "#b5382a",
    images: ["/images/products/jewelry/utsav-name-earrings.jpg"],
    personalizable: true,
    customizer: {
      colors: [
        { label: "White and pink", hex: "#e07a9c" },
        { label: "White and red", hex: "#b5382a" },
      ],
      motifs: ["Diamond", "Round"],
      allowsPersonalizedText: true,
      scripts: ["Bengali", "English"],
    },
  },
  {
    slug: "kodi-bengali-text-choker",
    name: "Kodi Bengali Text Choker",
    nameBn: "কড়ি লেখা চোকার",
    category: "personalized-earrings",
    price: 449,
    description:
      "A maroon fabric choker hand lettered with a Bengali phrase of your choice, trimmed with kodi cowrie shells, paired with matching drop earrings.",
    swatch: "#7a1f2b",
    images: ["/images/products/jewelry/kodi-bengali-text-choker.jpg"],
    personalizable: true,
    customizer: {
      colors: [
        { label: "Maroon", hex: "#7a1f2b" },
        { label: "Black", hex: "#1f1a17" },
      ],
      motifs: ["Kodi shell trail", "Plain trim"],
      allowsPersonalizedText: true,
      scripts: ["Bengali", "English"],
    },
  },
  {
    slug: "pom-pom-drop-earrings",
    name: "Pom Pom Drop Earrings",
    nameBn: "পম পম দুল",
    category: "personalized-earrings",
    price: 249,
    description:
      "Layered fabric flower drops in terracotta and mustard tones, finished with a delicate silver bell. A lighter everyday piece from the same handmade line.",
    swatch: "#e0a62f",
    images: ["/images/products/pom-pom-floral-drop.jpg"],
    personalizable: true,
    customizer: {
      colors: [
        { label: "Red", hex: "#b5382a" },
        { label: "Mustard", hex: "#e0a62f" },
        { label: "Blue", hex: "#2f3b63" },
      ],
      motifs: ["Floral", "Plain"],
      allowsPersonalizedText: false,
    },
  },
  {
    slug: "portrait-silhouette-earrings",
    name: "Portrait Silhouette Earrings",
    nameBn: "প্রতিকৃতি দুল",
    category: "personalized-earrings",
    price: 399,
    description:
      "Hand painted silhouette art on a fabric base, framed in a rich colour block and finished with a jhumka drop. A conversation piece, made to order.",
    swatch: "#2f3b63",
    images: [
      "/images/products/portrait-silhouette-blue.jpg",
      "/images/products/portrait-silhouette-red.jpg",
    ],
    personalizable: true,
    customizer: {
      colors: [
        { label: "Indigo", hex: "#2f3b63" },
        { label: "Red", hex: "#b5382a" },
        { label: "Forest", hex: "#3d4f36" },
      ],
      motifs: ["Silhouette portrait", "Floral overlay"],
      allowsPersonalizedText: false,
    },
  },
  {
    slug: "shell-pendant-necklace",
    name: "Shell Pendant Necklace",
    nameBn: "শাঁখ লকেট মালা",
    category: "personalized-earrings",
    price: 299,
    description:
      "A hand lettered pendant strung with natural cowrie shells on a black cord, with a matching earring pair. Personalize the pendant with a name or a short phrase.",
    swatch: "#3d4f36",
    images: ["/images/products/shell-necklace-set.jpg"],
    personalizable: true,
    customizer: {
      colors: [
        { label: "Black cord", hex: "#1f1a17" },
        { label: "Red cord", hex: "#b5382a" },
      ],
      motifs: ["Cowrie shell trail", "Plain pendant"],
      allowsPersonalizedText: true,
      scripts: ["Bengali", "English"],
    },
  },
  {
    slug: "owl-clay-necklace-set",
    name: "Owl Clay Necklace Set",
    nameBn: "প্যাঁচা মাটির গহনা",
    category: "personalized-earrings",
    price: 549,
    description:
      "A hand painted owl pendant and earring set on black cord, styled after Bengal's beloved Lokkhi pyanchar, the owl who rides beside the goddess of wealth.",
    swatch: "#c1502e",
    images: ["/images/products/jewelry/durga-silver-face-necklace.jpg"],
    personalizable: true,
    customizer: {
      colors: [
        { label: "As shown", hex: "#c1502e" },
        { label: "Blue tones", hex: "#2f3b63" },
      ],
      motifs: ["Owl", "Plain pendant"],
      allowsPersonalizedText: false,
    },
  },

  // Oxidised Junk Jewellery, ready-made stock line
  {
    slug: "oxidised-pearl-jhumka-1",
    name: "Oxidised Pearl Jhumka Earrings",
    nameBn: "অক্সিডাইজড মুক্তো জুমকা",
    category: "oxidised-jewellery",
    price: 187,
    description:
      "Classic oxidised silver-tone jhumka earrings with a pearl drop trail, ready to ship. A wardrobe staple for daily wear or festive dressing.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-pearl-jhumka-1.jpg"],
    personalizable: false,
  },
  {
    slug: "oxidised-pearl-jhumka-2",
    name: "Oxidised Pearl Jhumka Earrings, Layered",
    nameBn: "অক্সিডাইজড মুক্তো জুমকা",
    category: "oxidised-jewellery",
    price: 343,
    description:
      "A fuller, layered take on the oxidised jhumka with cascading pearl detailing, finished in a rich antique silver tone.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-pearl-jhumka-2.jpg"],
    personalizable: false,
  },
  {
    slug: "oxidised-pearl-jhumka-3",
    name: "Oxidised Pearl Jhumka Earrings, Statement",
    nameBn: "অক্সিডাইজড মুক্তো জুমকা",
    category: "oxidised-jewellery",
    price: 441,
    description:
      "A statement sized oxidised jhumka with dense pearl work, perfect for weddings and festive occasions.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-pearl-jhumka-3.jpg"],
    personalizable: false,
  },
  {
    slug: "oxidised-pearl-jhumka-4",
    name: "Oxidised Pearl Jhumka Earrings, Classic",
    nameBn: "অক্সিডাইজড মুক্তো জুমকা",
    category: "oxidised-jewellery",
    price: 363,
    description:
      "Traditional bell shaped oxidised jhumkas with pearl trims, a timeless pick for both daily wear and celebrations.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-pearl-jhumka-4.jpg"],
    personalizable: false,
  },
  {
    slug: "oxidised-pearl-jhumka-5",
    name: "Oxidised Pearl Jhumka Earrings, Petite",
    nameBn: "অক্সিডাইজড মুক্তো জুমকা",
    category: "oxidised-jewellery",
    price: 265,
    description:
      "A lighter, petite oxidised jhumka with delicate pearl detailing, easy to wear all day.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-pearl-jhumka-5.jpg"],
    personalizable: false,
  },
  {
    slug: "oxidised-potastone-pearl-jhumka",
    name: "Oxidised Pota Stone and Pearl Jhumka",
    nameBn: "অক্সিডাইজড পাথর জুমকা",
    category: "oxidised-jewellery",
    price: 218,
    description:
      "Oxidised jhumka earrings set with pota stones and pearl drops, a colourful traditional favourite.",
    swatch: "#5c5850",
    images: [
      "/images/products/jhumka-oxidised/oxidised-potastone-pearl-jhumka.jpg",
    ],
    personalizable: false,
  },
  {
    slug: "oxidised-pearl-jhumka-white",
    name: "Oxidised Pearl Jhumka Earrings, White Bead",
    nameBn: "অক্সিডাইজড মুক্তো জুমকা",
    category: "oxidised-jewellery",
    price: 195,
    description:
      "Oxidised jhumka earrings finished with white bead detailing for a clean, versatile look.",
    swatch: "#5c5850",
    images: [
      "/images/products/jhumka-oxidised/oxidised-pearl-jhumka-white.jpg",
    ],
    personalizable: false,
  },
  {
    slug: "oxidised-potastone-jhumka",
    name: "Oxidised Pota Stone Jhumka Earrings",
    nameBn: "অক্সিডাইজড পাথর জুমকা",
    category: "oxidised-jewellery",
    price: 225,
    description:
      "Oxidised jhumka earrings with pota stone accents, a rich traditional pick for festive wear.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-potastone-jhumka.jpg"],
    personalizable: false,
  },
  {
    slug: "oxidised-stud-1",
    name: "Oxidised Silver Stud Earrings",
    nameBn: "অক্সিডাইজড স্টাড দুল",
    category: "oxidised-jewellery",
    price: 196,
    description:
      "Everyday oxidised silver-tone stud earrings, lightweight and comfortable for all-day wear.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-stud-1.jpg"],
    personalizable: false,
  },
  {
    slug: "oxidised-stud-2",
    name: "Oxidised Silver Stud Earrings, Floral",
    nameBn: "অক্সিডাইজড স্টাড দুল",
    category: "oxidised-jewellery",
    price: 196,
    description:
      "Oxidised stud earrings with a floral motif, a versatile everyday accent piece.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-stud-2.jpg"],
    personalizable: false,
  },
  {
    slug: "oxidised-stud-3",
    name: "Oxidised Silver Stud Earrings, Petite",
    nameBn: "অক্সিডাইজড স্টাড দুল",
    category: "oxidised-jewellery",
    price: 196,
    description:
      "A petite oxidised stud, simple and easy to pair with any outfit.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-stud-3.jpg"],
    personalizable: false,
  },
  {
    slug: "oxidised-stud-4",
    name: "Oxidised Silver Stud Earrings, Mini",
    nameBn: "অক্সিডাইজড স্টাড দুল",
    category: "oxidised-jewellery",
    price: 167,
    description:
      "Our smallest oxidised stud, perfect for a subtle everyday accent.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-stud-4.jpg"],
    personalizable: false,
  },
  {
    slug: "oxidised-ghungroo-dangler-1",
    name: "Oxidised Ghungroo Dangler Earrings",
    nameBn: "অক্সিডাইজড ঘুংরু দুল",
    category: "oxidised-jewellery",
    price: 392,
    description:
      "Oxidised dangler earrings finished with tiny ghungroo bells that catch the light with every move.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-ghungroo-dangler-1.jpg"],
    personalizable: false,
  },
  {
    slug: "oxidised-ghungroo-dangler-2",
    name: "Oxidised Ghungroo Dangler Earrings, Bell Trail",
    nameBn: "অক্সিডাইজড ঘুংরু দুল",
    category: "oxidised-jewellery",
    price: 383,
    description:
      "A longer bell trail dangler in oxidised silver tone, festive and eye-catching.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-ghungroo-dangler-2.jpg"],
    personalizable: false,
  },
  {
    slug: "oxidised-ghungroo-dangler-3",
    name: "Oxidised Ghungroo Dangler Earrings, Classic",
    nameBn: "অক্সিডাইজড ঘুংরু দুল",
    category: "oxidised-jewellery",
    price: 187,
    description:
      "A classic, lightweight ghungroo dangler in oxidised silver tone for daily wear.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-ghungroo-dangler-3.jpg"],
    personalizable: false,
  },
  {
    slug: "oxidised-kashmiri-dangler-1",
    name: "Oxidised Kashmiri Dangler Earrings",
    nameBn: "অক্সিডাইজড কাশ্মীরি দুল",
    category: "oxidised-jewellery",
    price: 441,
    description:
      "Kashmiri style ghungroo dangler earrings in oxidised silver tone, richly detailed for festive occasions.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-kashmiri-dangler-1.jpg"],
    personalizable: false,
  },
  {
    slug: "oxidised-kashmiri-dangler-2",
    name: "Oxidised Kashmiri Dangler Earrings, Petite",
    nameBn: "অক্সিডাইজড কাশ্মীরি দুল",
    category: "oxidised-jewellery",
    price: 392,
    description:
      "A slightly smaller take on the Kashmiri style oxidised dangler, still full of detail.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-kashmiri-dangler-2.jpg"],
    personalizable: false,
  },
  {
    slug: "oxidised-dangler-1",
    name: "Oxidised Dangler Earrings",
    nameBn: "অক্সিডাইজড দুল",
    category: "oxidised-jewellery",
    price: 215,
    description:
      "A simple, elegant oxidised dangler for everyday styling.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-dangler-1.jpg"],
    personalizable: false,
  },
  {
    slug: "oxidised-pearl-dangler-1",
    name: "Oxidised Pearl Dangler Earrings",
    nameBn: "অক্সিডাইজড মুক্তো দুল",
    category: "oxidised-jewellery",
    price: 196,
    description:
      "Oxidised dangler earrings finished with a pearl drop for a soft festive touch.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-pearl-dangler-1.jpg"],
    personalizable: false,
  },
  {
    slug: "oxidised-pearl-dangler-2",
    name: "Oxidised Pearl Dangler Earrings, Slim",
    nameBn: "অক্সিডাইজড মুক্তো দুল",
    category: "oxidised-jewellery",
    price: 173,
    description:
      "A slim, lightweight pearl dangler in oxidised silver tone, easy for daily wear.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-pearl-dangler-2.jpg"],
    personalizable: false,
  },
  {
    slug: "oxidised-potastone-pearl-dangler-1",
    name: "Oxidised Pota Stone and Pearl Dangler Earrings",
    nameBn: "অক্সিডাইজড পাথর দুল",
    category: "oxidised-jewellery",
    price: 173,
    description:
      "Oxidised dangler earrings set with pota stones and finished with a pearl drop.",
    swatch: "#5c5850",
    images: [
      "/images/products/jhumka-oxidised/oxidised-potastone-pearl-dangler-1.jpg",
    ],
    personalizable: false,
  },
  {
    slug: "oxidised-potastone-pearl-dangler-2",
    name: "Oxidised Pota Stone and Pearl Dangler Earrings, Statement",
    nameBn: "অক্সিডাইজড পাথর দুল",
    category: "oxidised-jewellery",
    price: 413,
    description:
      "A statement sized pota stone and pearl dangler in oxidised silver tone, ideal for weddings and festive wear.",
    swatch: "#5c5850",
    images: [
      "/images/products/jhumka-oxidised/oxidised-potastone-pearl-dangler-2.jpg",
    ],
    personalizable: false,
  },
  {
    slug: "oxidised-potastone-pearl-kaanchain",
    name: "Oxidised Pota Stone and Pearl Kaanchain Earrings",
    nameBn: "অক্সিডাইজড কানচেইন দুল",
    category: "oxidised-jewellery",
    price: 315,
    description:
      "Designer kaanchain style earrings with pota stone and pearl detailing, connected by a delicate ear chain.",
    swatch: "#5c5850",
    images: [
      "/images/products/jhumka-oxidised/oxidised-potastone-pearl-kaanchain.jpg",
    ],
    personalizable: false,
  },
  {
    slug: "oxidised-pearl-jhumka-6",
    name: "Oxidised Pearl Jhumka Earrings, Round",
    nameBn: "অক্সিডাইজড মুক্তো জুমকা",
    category: "oxidised-jewellery",
    price: 285,
    description:
      "A rounded oxidised jhumka silhouette with pearl trims, a versatile festive pick.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-pearl-jhumka-6.jpg"],
    personalizable: false,
  },
  {
    slug: "oxidised-pearl-jhumka-7",
    name: "Oxidised Pearl Jhumka Earrings, Layered Bell",
    nameBn: "অক্সিডাইজড মুক্তো জুমকা",
    category: "oxidised-jewellery",
    price: 383,
    description:
      "A layered bell jhumka in oxidised silver tone with pearl detailing.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-pearl-jhumka-7.jpg"],
    personalizable: false,
  },
  {
    slug: "oxidised-pearl-jhumka-8",
    name: "Oxidised Pearl Jhumka Earrings, Wide",
    nameBn: "অক্সিডাইজড মুক্তো জুমকা",
    category: "oxidised-jewellery",
    price: 343,
    description:
      "A wider oxidised jhumka silhouette with pearl trims, for a fuller festive look.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-pearl-jhumka-8.jpg"],
    personalizable: false,
  },
  {
    slug: "oxidised-potastone-pearl-jhumka-2",
    name: "Oxidised Pota Stone and Pearl Jhumka Earrings, Large",
    nameBn: "অক্সিডাইজড পাথর জুমকা",
    category: "oxidised-jewellery",
    price: 330,
    description:
      "A larger pota stone and pearl jhumka in oxidised silver tone, richly detailed for festive occasions.",
    swatch: "#5c5850",
    images: [
      "/images/products/jhumka-oxidised/oxidised-potastone-pearl-jhumka-2.jpg",
    ],
    personalizable: false,
  },
  {
    slug: "oxidised-pearl-jhumka-medium",
    name: "Oxidised Pearl Jhumka Earrings, Medium",
    nameBn: "অক্সিডাইজড মুক্তো জুমকা",
    category: "oxidised-jewellery",
    price: 233,
    description:
      "A medium sized oxidised pearl jhumka, balanced for both daily wear and festive dressing.",
    swatch: "#5c5850",
    images: [
      "/images/products/jhumka-oxidised/oxidised-pearl-jhumka-medium.jpg",
    ],
    personalizable: false,
  },
  {
    slug: "oxidised-ear-cuff-fish",
    name: "Oxidised Ear Cuff Set, Fish Motif (Pack of 12)",
    nameBn: "অক্সিডাইজড কান কাফ",
    category: "oxidised-jewellery",
    price: 270,
    description:
      "A set of 12 oxidised ear cuffs with a fish motif, traditional fashion jewellery sold as a set.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-ear-cuff-fish.jpg"],
    personalizable: false,
  },
  {
    slug: "oxidised-ear-cuff-lotus",
    name: "Oxidised Ear Cuff Set, Lotus Motif (Pack of 12)",
    nameBn: "অক্সিডাইজড কান কাফ",
    category: "oxidised-jewellery",
    price: 270,
    description:
      "A set of 12 oxidised ear cuffs with a lotus motif, traditional fashion jewellery sold as a set.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-ear-cuff-lotus.jpg"],
    personalizable: false,
  },
  {
    slug: "oxidised-ear-cuff-peacock-elephant",
    name: "Oxidised Ear Cuff Set, Peacock and Elephant Motif (Pack of 12)",
    nameBn: "অক্সিডাইজড কান কাফ",
    category: "oxidised-jewellery",
    price: 270,
    description:
      "A set of 12 oxidised ear cuffs with peacock and elephant motifs, traditional fashion jewellery sold as a set.",
    swatch: "#5c5850",
    images: [
      "/images/products/jhumka-oxidised/oxidised-ear-cuff-peacock-elephant.jpg",
    ],
    personalizable: false,
  },
  {
    slug: "oxidised-ear-cuff-peacock-1",
    name: "Oxidised Ear Cuff Set, Peacock Motif (Pack of 12)",
    nameBn: "অক্সিডাইজড কান কাফ",
    category: "oxidised-jewellery",
    price: 270,
    description:
      "A set of 12 oxidised ear cuffs with a peacock motif, traditional fashion jewellery sold as a set.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-ear-cuff-peacock-1.jpg"],
    personalizable: false,
  },
  {
    slug: "oxidised-ear-cuff-butterfly-1",
    name: "Oxidised Ear Cuff Set, Butterfly Motif (Pack of 12)",
    nameBn: "অক্সিডাইজড কান কাফ",
    category: "oxidised-jewellery",
    price: 270,
    description:
      "A set of 12 oxidised ear cuffs with a butterfly motif, traditional fashion jewellery sold as a set.",
    swatch: "#5c5850",
    images: [
      "/images/products/jhumka-oxidised/oxidised-ear-cuff-butterfly-1.jpg",
    ],
    personalizable: false,
  },
  {
    slug: "oxidised-ear-cuff-plain",
    name: "Oxidised Ear Cuff Set (Pack of 12)",
    nameBn: "অক্সিডাইজড কান কাফ",
    category: "oxidised-jewellery",
    price: 252,
    description:
      "A set of 12 plain oxidised ear cuffs, traditional fashion jewellery sold as a set.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-ear-cuff-plain.jpg"],
    personalizable: false,
  },
  {
    slug: "oxidised-ear-cuff-floral-1",
    name: "Oxidised Ear Cuff Set, Floral Motif (Pack of 12)",
    nameBn: "অক্সিডাইজড কান কাফ",
    category: "oxidised-jewellery",
    price: 252,
    description:
      "A set of 12 oxidised ear cuffs with a floral motif, traditional fashion jewellery sold as a set.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-ear-cuff-floral-1.jpg"],
    personalizable: false,
  },
  {
    slug: "oxidised-ear-cuff-floral-2",
    name: "Oxidised Ear Cuff Set, Floral Motif Duo (Pack of 12)",
    nameBn: "অক্সিডাইজড কান কাফ",
    category: "oxidised-jewellery",
    price: 252,
    description:
      "A set of 12 oxidised ear cuffs with a paired floral motif, traditional fashion jewellery sold as a set.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-ear-cuff-floral-2.png"],
    personalizable: false,
  },
  {
    slug: "oxidised-ear-cuff-floral-3",
    name: "Oxidised Ear Cuff Set, Floral Motif Trio (Pack of 12)",
    nameBn: "অক্সিডাইজড কান কাফ",
    category: "oxidised-jewellery",
    price: 306,
    description:
      "A set of 12 oxidised ear cuffs with a layered floral motif, traditional fashion jewellery sold as a set.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-ear-cuff-floral-3.jpg"],
    personalizable: false,
  },
  {
    slug: "oxidised-ear-cuff-butterfly-2",
    name: "Oxidised Ear Cuff Set, Butterfly Motif Duo (Pack of 12)",
    nameBn: "অক্সিডাইজড কান কাফ",
    category: "oxidised-jewellery",
    price: 306,
    description:
      "A set of 12 oxidised ear cuffs with a paired butterfly motif, traditional fashion jewellery sold as a set.",
    swatch: "#5c5850",
    images: [
      "/images/products/jhumka-oxidised/oxidised-ear-cuff-butterfly-2.jpg",
    ],
    personalizable: false,
  },
  {
    slug: "oxidised-ear-cuff-peacock-2",
    name: "Oxidised Ear Cuff Set, Peacock Motif Duo (Pack of 12)",
    nameBn: "অক্সিডাইজড কান কাফ",
    category: "oxidised-jewellery",
    price: 270,
    description:
      "A set of 12 oxidised ear cuffs with a paired peacock motif, traditional fashion jewellery sold as a set.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-ear-cuff-peacock-2.jpg"],
    personalizable: false,
  },
  {
    slug: "oxidised-ear-cuff-floral-4",
    name: "Oxidised Ear Cuff Set, Floral Motif Quad (Pack of 12)",
    nameBn: "অক্সিডাইজড কান কাফ",
    category: "oxidised-jewellery",
    price: 306,
    description:
      "A set of 12 oxidised ear cuffs with a layered floral motif, traditional fashion jewellery sold as a set.",
    swatch: "#5c5850",
    images: ["/images/products/jhumka-oxidised/oxidised-ear-cuff-floral-4.jpg"],
    personalizable: false,
  },

  // Fine Jewelry, the expanding line
  {
    slug: "durga-face-jhumka",
    name: "Durga Face Jhumka",
    nameBn: "দুর্গা মুখ জুমকা",
    category: "fine-jewelry",
    price: 599,
    description:
      "A hand painted Durga face pendant framed in flame shaped petals, with a thread and bead drop and cowrie shell tassel. Made for the Pujo season and beyond.",
    swatch: "#b5382a",
    images: ["/images/products/jewelry/durga-face-jhumka-leaf.jpg"],
    personalizable: true,
    customizer: {
      colors: [
        { label: "As shown", hex: "#b5382a" },
        { label: "Blue and silver", hex: "#2f3b63" },
      ],
      motifs: ["Durga face", "Plain frame"],
      allowsPersonalizedText: false,
    },
  },
  {
    slug: "durga-trishul-necklace",
    name: "Durga Trishul Necklace",
    nameBn: "দুর্গা ত্রিশূল মালা",
    category: "fine-jewelry",
    price: 649,
    description:
      "A festive necklace pairing a hand painted Durga face pendant with trishul shaped earrings, cowrie shells, and coral toned beads on a red thread cord.",
    swatch: "#7a1f2b",
    images: ["/images/products/jewelry/durga-trishul-necklace.jpg"],
    personalizable: false,
  },
  {
    slug: "conch-pendant-necklace",
    name: "Conch Pendant Necklace",
    nameBn: "শাঁখ লকেট মালা",
    category: "fine-jewelry",
    price: 549,
    description:
      "A hand painted conch shaped pendant in red and mustard, strung on a braided cord with matching drop earrings. Traditional shonkho motif, made modern.",
    swatch: "#e0a62f",
    images: ["/images/products/jewelry/conch-pendant-necklace.jpg"],
    personalizable: false,
  },
  {
    slug: "swan-lotus-necklace",
    name: "Swan and Lotus Necklace",
    nameBn: "রাজহাঁস পদ্ম মালা",
    category: "fine-jewelry",
    price: 499,
    description:
      "A hand painted clay pendant featuring a swan among lotus blooms, on a bright yellow braided cord with matching drop earrings.",
    swatch: "#e0a62f",
    images: ["/images/products/jewelry/swan-lotus-necklace.jpg"],
    personalizable: false,
  },
  {
    slug: "butterfly-garden-necklace",
    name: "Butterfly Garden Necklace",
    nameBn: "প্রজাপতি বাগান মালা",
    category: "fine-jewelry",
    price: 449,
    description:
      "A hand painted square pendant with layered butterflies and a hand sculpted flower, wrapped in a maroon cord necklace with matching studs.",
    swatch: "#7a1f2b",
    images: ["/images/products/jewelry/butterfly-garden-necklace.jpg"],
    personalizable: false,
  },
  {
    slug: "hibiscus-necklace",
    name: "Hibiscus Necklace",
    nameBn: "জবা ফুল মালা",
    category: "fine-jewelry",
    price: 499,
    description:
      "A hand sculpted hibiscus pendant in red and gold on a beaded thread necklace with matching flower studs. Jaba phool, a flower of everyday Bengali worship.",
    swatch: "#b5382a",
    images: ["/images/products/jewelry/hibiscus-necklace.jpg"],
    personalizable: false,
  },
  {
    slug: "tulip-pendant-necklace",
    name: "Tulip Pendant Necklace",
    nameBn: "টিউলিপ লকেট মালা",
    category: "fine-jewelry",
    price: 599,
    description:
      "Layered pearl strands finished with a rose shaped pendant, paired with tulip charm earrings. A softer, romantic piece for evening wear.",
    swatch: "#d9b8c4",
    images: [
      "/images/products/jewelry/tulip-pendant-necklace-pearl.jpg",
      "/images/products/jewelry/pearl-rose-necklace-1.jpg",
      "/images/products/jewelry/pearl-rose-necklace-2.jpg",
    ],
    personalizable: false,
  },
  {
    slug: "tulip-bouquet-necklace",
    name: "Tulip Bouquet Necklace",
    nameBn: "টিউলিপ তোড়া মালা",
    category: "fine-jewelry",
    price: 649,
    description:
      "A hand sculpted bouquet of clay tulips on a braided pink and green cord, with matching tulip stud earrings. A statement piece for festive wear.",
    swatch: "#e07a9c",
    images: ["/images/products/jewelry/tulip-earring-necklace-set.jpg"],
    personalizable: false,
  },
  {
    slug: "paisley-pendant-necklace",
    name: "Paisley Pendant Necklace",
    nameBn: "কলকা লকেট মালা",
    category: "fine-jewelry",
    price: 549,
    description:
      "A hand painted paisley pendant in a kalka motif, strung on colourful wooden beads with a matching earring pair.",
    swatch: "#c1502e",
    images: ["/images/products/jewelry/paisley-pendant-necklace.jpg"],
    personalizable: false,
  },
  {
    slug: "jagannath-bead-necklace",
    name: "Jagannath Bead Necklace",
    nameBn: "জগন্নাথ মালা",
    category: "fine-jewelry",
    price: 599,
    description:
      "A wooden bead necklace with a hand painted Jagannath pendant, mixing coral, black, and cream tones on a soft green cord.",
    swatch: "#3d4f36",
    images: ["/images/products/jewelry/jagannath-bead-necklace.jpg"],
    personalizable: false,
  },
  {
    slug: "red-bead-floral-necklace",
    name: "Red Bead Floral Necklace",
    nameBn: "লাল পুঁতির মালা",
    category: "fine-jewelry",
    price: 449,
    description:
      "A multi strand red beaded necklace with hand sculpted blue flowers, paired with matching floral studs. Bold enough for Pujo, simple enough for daily wear.",
    swatch: "#b5382a",
    images: ["/images/products/jewelry/red-bead-floral-necklace.jpg"],
    personalizable: false,
  },
  {
    slug: "leaf-feather-necklace",
    name: "Leaf and Feather Necklace",
    nameBn: "পাতা পালক মালা",
    category: "fine-jewelry",
    price: 599,
    description:
      "A multicolour wooden bead necklace finished with a hand painted silver toned pendant, paired with delicate leaf earrings.",
    swatch: "#7a8b5c",
    images: ["/images/products/jewelry/leaf-feather-necklace.jpg"],
    personalizable: false,
  },
  {
    slug: "sea-diary-earrings",
    name: "Sea Diary Earrings",
    nameBn: "সমুদ্র দুল",
    category: "fine-jewelry",
    price: 379,
    description:
      "A hand painted beach scene on circular fabric discs, finished with colourful beaded strands and pom poms. Two ways to wear the sea.",
    swatch: "#2f3b63",
    images: [
      "/images/products/jewelry/sea-beach-earrings-1.jpg",
      "/images/products/jewelry/sea-beach-earrings-2.jpg",
    ],
    personalizable: false,
  },
  {
    slug: "silver-charm-choker",
    name: "Silver Charm Choker",
    nameBn: "রূপালি চোকার",
    category: "fine-jewelry",
    price: 429,
    description:
      "A hand braided black thread choker finished with oxidised silver charms, paired with matching drop earrings. A modern take on a classic silhouette.",
    swatch: "#1f1a17",
    images: ["/images/products/jewelry/silver-charm-choker.jpg"],
    personalizable: false,
  },

  // Watches & Accessories, ready-made ethnic watch line
  {
    slug: "kashmiri-oxidised-tulip-watch",
    name: "Kashmiri Oxidised Tulip Watch",
    nameBn: "কাশ্মীরি রূপালি ঘড়ি",
    category: "watches-accessories",
    price: 600,
    originalPrice: 900,
    description:
      "An oxidised silver bracelet watch with a floral medallion dial framed in turquoise, red, and black stones, finished with tulip shaped charms on a woven rope strap.",
    swatch: "#8a8a8a",
    images: ["/images/products/watches/kashmiri-oxidised-tulip-watch.jpg"],
    personalizable: false,
  },
  {
    slug: "emerald-enamel-octagon-watch",
    name: "Emerald Enamel Octagon Watch",
    nameBn: "সবুজ এনামেল ঘড়ি",
    category: "watches-accessories",
    price: 600,
    originalPrice: 800,
    description:
      "An octagonal emerald green enamel dial framed in oxidised silver florals, finished with a delicate chain strap. A distinctive everyday accent piece.",
    swatch: "#2f6b4f",
    images: ["/images/products/watches/emerald-enamel-octagon-watch.jpg"],
    personalizable: false,
  },
  {
    slug: "marcasite-roman-dial-watch",
    name: "Marcasite Roman Dial Watch",
    nameBn: "মার্কাসাইট ঘড়ি",
    category: "watches-accessories",
    price: 600,
    originalPrice: 1000,
    description:
      "A 925 silver bracelet watch densely set with sparkling marcasite stones, with a classic white Roman numeral dial. Elegant enough for daily wear.",
    swatch: "#8a8a8a",
    images: ["/images/products/watches/marcasite-roman-dial-watch.jpg"],
    personalizable: false,
  },
  {
    slug: "ruby-temple-pendant-watch",
    name: "Ruby Temple Pendant Watch",
    nameBn: "রুবি মন্দির ঘড়ি",
    category: "watches-accessories",
    price: 600,
    originalPrice: 950,
    description:
      "An ornate silver pendant style watch in a South Indian temple jewelry motif, set with ruby toned stones, on a detailed engraved bracelet.",
    swatch: "#b5382a",
    images: ["/images/products/watches/ruby-temple-pendant-watch.jpg"],
    personalizable: false,
  },
  {
    slug: "pearl-bloom-bracelet-watch",
    name: "Pearl Bloom Bracelet Watch",
    nameBn: "মুক্তো ঘড়ি",
    category: "watches-accessories",
    price: 600,
    originalPrice: 850,
    description:
      "A rose gold round dial edged in crystals, strung on a beaded pearl bolo bracelet that adjusts to fit. Understated enough for daily wear.",
    swatch: "#e8ded0",
    images: ["/images/products/watches/pearl-bloom-bracelet-watch.jpg"],
    personalizable: false,
  },
  {
    slug: "pearl-link-dress-watch",
    name: "Pearl Link Dress Watch",
    nameBn: "মুক্তো ড্রেস ঘড়ি",
    category: "watches-accessories",
    price: 600,
    originalPrice: 800,
    description:
      "A square gold tone dial bordered in crystals, set on a double strand pearl and gold link bracelet. A dainty dress watch for everyday elegance.",
    swatch: "#d8b25c",
    images: ["/images/products/watches/pearl-link-dress-watch.jpg"],
    personalizable: false,
  },
  {
    slug: "rajasthani-elephant-charm-watch",
    name: "Rajasthani Elephant Charm Watch",
    nameBn: "রাজস্থানি হাতি ঘড়ি",
    category: "watches-accessories",
    price: 600,
    originalPrice: 900,
    description:
      "An oxidised silver bracelet watch with sculpted elephant charms and turquoise stone drops, framed by a crystal studded dial. Festive and eye catching.",
    swatch: "#8a8a8a",
    images: ["/images/products/watches/rajasthani-elephant-charm-watch.jpg"],
    personalizable: false,
  },
  {
    slug: "emerald-bell-tassel-watch",
    name: "Emerald Bell Tassel Watch",
    nameBn: "সবুজ ঘণ্টা ঘড়ি",
    category: "watches-accessories",
    price: 600,
    originalPrice: 850,
    description:
      "A gold tone watch framed by hand enamelled green teardrop charms and tiny hanging bells, finished with a bolo style adjustable chain and pearl drops.",
    swatch: "#2f6b4f",
    images: ["/images/products/watches/emerald-bell-tassel-watch.jpg"],
    personalizable: false,
  },
  {
    slug: "crimson-lotus-pearl-watch",
    name: "Crimson Lotus Pearl Watch",
    nameBn: "লাল পদ্ম মুক্তো ঘড়ি",
    category: "watches-accessories",
    price: 600,
    originalPrice: 800,
    description:
      "A gold tone dial flanked by hand enamelled red lotus charms, finished with cascading pearl drops on an adjustable chain.",
    swatch: "#7a1f2b",
    images: ["/images/products/watches/crimson-lotus-pearl-watch.jpg"],
    personalizable: false,
  },
  {
    slug: "emerald-kundan-floral-watch",
    name: "Emerald Kundan Floral Watch",
    nameBn: "পান্না কুন্দন ঘড়ি",
    category: "watches-accessories",
    price: 600,
    originalPrice: 950,
    description:
      "A crystal bordered dial flanked by kundan flower medallions in emerald green enamel, finished with tiny gold bell drops on both sides.",
    swatch: "#2f6b4f",
    images: ["/images/products/watches/emerald-kundan-floral-watch.jpg"],
    personalizable: false,
  },
  {
    slug: "golden-kundan-bell-watch",
    name: "Golden Kundan Bell Watch",
    nameBn: "সোনালি কুন্দন ঘড়ি",
    category: "watches-accessories",
    price: 600,
    originalPrice: 900,
    description:
      "A crystal bordered dial flanked by kundan flower medallions with ruby toned centres, finished with gold bell drops and a bolo adjustable chain.",
    swatch: "#d8b25c",
    images: ["/images/products/watches/golden-kundan-bell-watch.jpg"],
    personalizable: false,
  },
  {
    slug: "blush-kundan-tassel-watch",
    name: "Blush Kundan Tassel Watch",
    nameBn: "গোলাপি কুন্দন ঘড়ি",
    category: "watches-accessories",
    price: 600,
    originalPrice: 1000,
    description:
      "A kundan flower dial framed in soft pink enamel leaves, finished with beaded tassels on both sides. A bridal ready statement piece.",
    swatch: "#d9b8c4",
    images: ["/images/products/watches/blush-kundan-tassel-watch.jpg"],
    personalizable: false,
  },
  {
    slug: "peacock-feather-charm-watch",
    name: "Peacock Feather Charm Watch",
    nameBn: "ময়ূর পালক ঘড়ি",
    category: "watches-accessories",
    price: 600,
    originalPrice: 800,
    description:
      "A crystal bordered dial framed by hand enamelled peacock feather charms with tiny hanging bells and a delicate leaf drop, on an adjustable chain.",
    swatch: "#2f6b4f",
    images: ["/images/products/watches/peacock-feather-charm-watch.jpg"],
    personalizable: false,
  },
  {
    slug: "floral-medallion-gemstone-watch",
    name: "Floral Medallion Gemstone Watch",
    nameBn: "ফুলেল রত্ন ঘড়ি",
    category: "watches-accessories",
    price: 600,
    originalPrice: 950,
    description:
      "An antique gold watch set with ruby and emerald toned stones across engraved medallion links, in a South Indian temple jewelry style.",
    swatch: "#b5382a",
    images: ["/images/products/watches/floral-medallion-gemstone-watch.jpg"],
    personalizable: false,
  },
  {
    slug: "nazar-evil-eye-charm-watch",
    name: "Nazar Evil Eye Charm Watch",
    nameBn: "নজর ঘড়ি",
    category: "watches-accessories",
    price: 600,
    originalPrice: 750,
    description:
      "A crystal studded dial paired with hand painted evil eye charms and pearl drops, worn as a bracelet. A protective touch with everyday sparkle.",
    swatch: "#2f3b63",
    images: ["/images/products/watches/nazar-evil-eye-charm-watch.jpg"],
    personalizable: false,
  },
  {
    slug: "royal-gold-elephant-charm-watch",
    name: "Royal Gold Elephant Charm Watch",
    nameBn: "রাজকীয় সোনালি হাতি ঘড়ি",
    category: "watches-accessories",
    price: 600,
    originalPrice: 1000,
    description:
      "A crystal paved gold dial flanked by enamelled elephant charms and a delicate pearl drop chain. A statement piece for weddings and festive wear.",
    swatch: "#d8b25c",
    images: ["/images/products/watches/royal-gold-elephant-charm-watch.jpg"],
    personalizable: false,
  },

  // Home & Gifting, Patachitra art and the studio's own hand painted diyas
  {
    slug: "hand-painted-diya-set",
    name: "Hand Painted Terracotta Diya Set",
    nameBn: "মাটির প্রদীপ সেট",
    category: "home-gifting",
    price: 449,
    description:
      "A set of hand painted terracotta diyas, each finished with a different folk art motif, the same craft technique behind our earrings, brought to festive decor.",
    swatch: "#a9784f",
    images: [
      "/images/products/diya-set-triangle.jpg",
      "/images/products/diya-set-circle.jpg",
    ],
    personalizable: true,
    customizer: {
      colors: [
        { label: "Red and white", hex: "#b5382a" },
        { label: "Mustard and black", hex: "#e0a62f" },
        { label: "Natural terracotta", hex: "#a9784f" },
      ],
      motifs: ["Floral", "Geometric border", "Spiral", "Mixed set"],
      allowsPersonalizedText: false,
    },
  },
  {
    slug: "patachitra-radha-krishna-plate",
    name: "Patachitra Radha Krishna Plate",
    nameBn: "পটচিত্র রাধাকৃষ্ণ থালা",
    category: "home-gifting",
    price: 899,
    description:
      "A hand painted decorative plate in the Patachitra folk art style of Bengal, depicting Radha and Krishna, ready to hang on any wall.",
    swatch: "#2f3b63",
    images: [
      "/images/products/decor/patachitra-radha-krishna-winter.jpg",
      "/images/products/decor/patachitra-radha-krishna-blue-plate.jpg",
    ],
    personalizable: false,
  },
  {
    slug: "patachitra-fish-mandala-plate",
    name: "Patachitra Fish Mandala Plate",
    nameBn: "পটচিত্র মাছ থালা",
    category: "home-gifting",
    price: 799,
    description:
      "A circular hand painted plate with a mandala of fish, a motif rooted in Bengal's rivers and its everyday iconography of abundance.",
    swatch: "#2f3b63",
    images: ["/images/products/decor/patachitra-fish-mandala-plate.jpg"],
    personalizable: false,
  },
  {
    slug: "patachitra-jagannath-plate",
    name: "Patachitra Jagannath Face Plate",
    nameBn: "পটচিত্র জগন্নাথ থালা",
    category: "home-gifting",
    price: 799,
    description:
      "A bold, hand painted Jagannath face plate in the traditional red, white, and black palette, a striking piece for any wall of worship or decor.",
    swatch: "#b5382a",
    images: ["/images/products/decor/patachitra-jagannath-face-plate.jpg"],
    personalizable: false,
  },
  {
    slug: "patachitra-peacock-plate",
    name: "Patachitra Peacock Plate",
    nameBn: "পটচিত্র ময়ূর থালা",
    category: "home-gifting",
    price: 849,
    description:
      "A hand painted mandala plate centred on a peacock motif, richly bordered in the layered patterns typical of Patachitra art.",
    swatch: "#2f3b63",
    images: [
      "/images/products/decor/patachitra-peacock-mandala-plate.png",
      "/images/products/decor/patachitra-peacock-botanical-plate.png",
    ],
    personalizable: false,
  },
  {
    slug: "patachitra-shiva-parvati-plate",
    name: "Patachitra Shiva Parvati Plate",
    nameBn: "পটচিত্র শিব পার্বতী থালা",
    category: "home-gifting",
    price: 899,
    description:
      "A hand painted plate portraying Shiva and Parvati in bold blue and gold, a striking centrepiece for a puja room or living wall.",
    swatch: "#2f3b63",
    images: ["/images/products/decor/patachitra-shiva-parvati-duo.png"],
    personalizable: false,
  },
  {
    slug: "patachitra-owl-plate",
    name: "Patachitra Owl Plate",
    nameBn: "পটচিত্র প্যাঁচা থালা",
    category: "home-gifting",
    price: 799,
    description:
      "A whimsical hand painted plate filled with owls, styled after Lokkhi pyanchar, the owl that accompanies the goddess of wealth in Bengali folklore.",
    swatch: "#3d4f36",
    images: ["/images/products/decor/patachitra-owl-mandala-plate.png"],
    personalizable: false,
  },
  {
    slug: "patachitra-tree-of-life-plate",
    name: "Patachitra Tree of Life Plate",
    nameBn: "পটচিত্র জীবন বৃক্ষ থালা",
    category: "home-gifting",
    price: 849,
    description:
      "A hand painted tree of life plate filled with birds and blossoms, a timeless Patachitra motif for a warm, storytelling wall.",
    swatch: "#7a8b5c",
    images: ["/images/products/decor/patachitra-tree-of-life-plate.jpg"],
    personalizable: false,
  },
  {
    slug: "patachitra-portrait-plate",
    name: "Patachitra Portrait Plate",
    nameBn: "পটচিত্র প্রতিকৃতি থালা",
    category: "home-gifting",
    price: 799,
    description:
      "A hand painted portrait plate in warm, expressive tones, framed with a traditional Patachitra border. Available in a few styles.",
    swatch: "#a9784f",
    images: [
      "/images/products/decor/patachitra-woman-portrait-sepia.png",
      "/images/products/decor/patachitra-woman-portrait-green.png",
    ],
    personalizable: false,
  },
  {
    slug: "patachitra-kettle",
    name: "Patachitra Painted Kettle",
    nameBn: "পটচিত্র কেটলি",
    category: "home-gifting",
    price: 1299,
    description:
      "A metal kettle hand painted in the Patachitra style with an owl motif, equal parts kitchen curio and folk art collectible.",
    swatch: "#2f3b63",
    images: ["/images/products/decor/patachitra-owl-kettle.jpg"],
    personalizable: false,
  },
];

export function getProductsByCategory(category: CategorySlug): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
