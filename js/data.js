/**
 * data.js
 * ---------------------------------------------------------------------------
 * MOCK DATA LAYER.
 *
 * This file stands in for your Postgres tables. Every shape here matches
 * what a real schema would look like (see /README.md for the Prisma schema)
 * so that swapping this file for real `fetch()` calls to a real API is a
 * mechanical change, not a rewrite. Nothing in the rest of the app talks to
 * these arrays directly — everything goes through js/backend.js, which is
 * the one file you replace when you plug in a real server.
 * ---------------------------------------------------------------------------
 */

// ---- categories -------------------------------------------------------
export const CATEGORIES = ["Apparel", "Equipment", "Footwear", "Accessories"];

// ---- products (table: products) ---------------------------------------
export const PRODUCTS = [
  {
    id: "p1",
    slug: "aeroshield-running-jacket",
    name: "AeroShield Running Jacket",
    category: "Apparel",
    basePrice: 4499,
    description:
      "A lightweight, water-resistant shell built for running in the rain. Taped seams, a 10,000mm waterproof rating, and vents that dump heat the moment you pick up pace.",
    tags: ["water-resistant", "running", "lightweight", "rain"],
    specs: { waterproof: "10,000mm", weight: "340g", fit: "Athletic" },
    images: ["jacket-1", "jacket-2", "jacket-3"],
    variantAxes: ["size", "color"],
  },
  {
    id: "p2",
    slug: "hexshield-dumbbells",
    name: "HexShield Polyurethane Dumbbells",
    category: "Equipment",
    basePrice: 1899,
    description:
      "Hex-profile dumbbells in a polyurethane shell — no floor damage, no roll, no rust. Knurled steel handle for a grip that holds under sweat.",
    tags: ["strength", "home-gym", "polyurethane"],
    specs: { material: "Polyurethane / Steel", grip: "Knurled" },
    images: ["dumbbell-1", "dumbbell-2"],
    variantAxes: ["weight", "finish"],
  },
  {
    id: "p3",
    slug: "trail-lite-backpack-28l",
    name: "TrailLite Backpack 28L",
    category: "Accessories",
    basePrice: 3299,
    description:
      "A 28-litre daypack with a ventilated back panel and a rain hood tucked into the base pocket. Built for long approach trails and short-notice weather.",
    tags: ["hiking", "storage", "rain"],
    specs: { capacity: "28L", weight: "620g" },
    images: ["backpack-1", "backpack-2"],
    variantAxes: ["color"],
  },
  {
    id: "p4",
    slug: "strideflex-trail-shoes",
    name: "StrideFlex Trail Shoes",
    category: "Footwear",
    basePrice: 5299,
    description:
      "Lugged outsole trail shoes with a rock plate underfoot and a quick-dry mesh upper. Built to run wet rock and loose gravel without hesitation.",
    tags: ["running", "trail", "grip"],
    specs: { outsole: "Lugged rubber", drop: "6mm" },
    images: ["shoe-1", "shoe-2"],
    variantAxes: ["size", "color"],
  },
  {
    id: "p5",
    slug: "summitpro-insulated-vest",
    name: "SummitPro Insulated Vest",
    category: "Apparel",
    basePrice: 3899,
    description:
      "Synthetic insulation that keeps its warmth even when it's damp, packed into a vest cut to layer under a shell without bulking up your stride.",
    tags: ["insulated", "layering", "cold"],
    specs: { insulation: "Synthetic 60g", packable: "Yes" },
    images: ["vest-1", "vest-2"],
    variantAxes: ["size", "color"],
  },
  {
    id: "p6",
    slug: "pulsecore-resistance-bands",
    name: "PulseCore Resistance Bands (Set of 5)",
    category: "Equipment",
    basePrice: 999,
    description:
      "Five resistance levels, colour-coded, with a door anchor and travel pouch. The whole home-gym in a bag that fits under an airline seat.",
    tags: ["strength", "travel", "home-gym"],
    specs: { levels: "5", material: "Natural latex" },
    images: ["band-1", "band-2"],
    variantAxes: ["finish"],
  },
];

// ---- product variants (table: product_variants) ------------------------
// Each variant is the actual sellable unit: it carries its own price
// (base + delta) and its own stock count. This is the table a checkout
// must re-read from before trusting any price the client sends.
export const VARIANTS = [
  // AeroShield Running Jacket
  v("p1", { size: "S", color: "Black" }, 0, 12),
  v("p1", { size: "M", color: "Black" }, 0, 18),
  v("p1", { size: "L", color: "Black" }, 0, 9),
  v("p1", { size: "XL", color: "Black" }, 200, 4),
  v("p1", { size: "S", color: "Slate Blue" }, 0, 6),
  v("p1", { size: "M", color: "Slate Blue" }, 0, 11),
  v("p1", { size: "L", color: "Slate Blue" }, 0, 0),
  v("p1", { size: "M", color: "Signal Orange" }, 0, 3),
  v("p1", { size: "L", color: "Signal Orange" }, 0, 5),

  // HexShield Dumbbells
  v("p2", { weight: "5KG", finish: "Matte Grey" }, 0, 24),
  v("p2", { weight: "10KG", finish: "Matte Grey" }, 400, 20),
  v("p2", { weight: "15KG", finish: "Matte Grey" }, 900, 14),
  v("p2", { weight: "20KG", finish: "Matte Grey" }, 1500, 7),
  v("p2", { weight: "5KG", finish: "Charcoal" }, 0, 10),
  v("p2", { weight: "10KG", finish: "Charcoal" }, 400, 8),
  v("p2", { weight: "20KG", finish: "Charcoal" }, 1500, 0),

  // TrailLite Backpack
  v("p3", { color: "Graphite" }, 0, 15),
  v("p3", { color: "Moss Green" }, 0, 8),
  v("p3", { color: "Signal Orange" }, 0, 2),

  // StrideFlex Trail Shoes
  v("p4", { size: "UK7", color: "Black/Grey" }, 0, 10),
  v("p4", { size: "UK8", color: "Black/Grey" }, 0, 13),
  v("p4", { size: "UK9", color: "Black/Grey" }, 0, 7),
  v("p4", { size: "UK8", color: "Slate Blue" }, 0, 5),
  v("p4", { size: "UK9", color: "Slate Blue" }, 0, 0),

  // SummitPro Vest
  v("p5", { size: "M", color: "Black" }, 0, 9),
  v("p5", { size: "L", color: "Black" }, 0, 6),
  v("p5", { size: "M", color: "Rust" }, 0, 4),

  // PulseCore Bands
  v("p6", { finish: "Standard Set" }, 0, 40),
];

function v(productId, attrs, priceDelta, stock) {
  const parts = Object.values(attrs);
  return {
    id: `${productId}-${parts.join("-").toLowerCase().replace(/\s+/g, "")}`,
    productId,
    attrs,
    priceDelta,
    stock,
    sku: `${productId.toUpperCase()}-${parts.join("").toUpperCase().slice(0, 8)}`,
  };
}

// ---- demo order, for the "Where is my package?" chatbot intent --------
export const ORDERS = [
  {
    id: "o1",
    orderNumber: "NX-98742",
    customerName: "Chandra",
    status: "SHIPPED",
    placedAt: daysAgo(3),
    items: [{ productId: "p2", variantId: "p2-20kg-mattegrey", qty: 1 }],
    tracking: [
      { status: "PENDING", at: daysAgo(3), note: "Order received." },
      { status: "PAID", at: daysAgo(3), note: "Payment confirmed." },
      { status: "SHIPPED", at: daysAgo(1), note: "Shipped, out for delivery today." },
    ],
  },
];

function daysAgo(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString();
}
