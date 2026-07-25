import type { Feature, Product } from "./types";

export const PRODUCTS: Product[] = [
  { id: "p0", name: "Air Runner '02", size: "9", color: "Grey/Black", condition: "9/10", price: 3500, status: "Active", photoUrl: "/images/hero-sneakers.jpg" },
  { id: "p1", name: "Court Classic", size: "8", color: "White", condition: "Like New", price: 4200, status: "Active" },
  { id: "p2", name: "Trail Blazer Lo", size: "10", color: "Olive/Tan", condition: "8/10", price: 2800, status: "Active" },
  { id: "p3", name: "Retro Hi Top", size: "9", color: "Red/White", condition: "9/10", price: 3900, status: "Sold" },
  { id: "p4", name: "Street Runner", size: "7", color: "Black", condition: "Gently Worn", price: 2400, status: "Active" },
  { id: "p5", name: "Vintage Bball Hi", size: "11", color: "Navy/Cream", condition: "8/10", price: 3200, status: "Active" },
  { id: "p6", name: "Canvas Low", size: "8", color: "Off-White", condition: "9/10", price: 2100, status: "Sold" },
  { id: "p7", name: "Suede Trainer", size: "10", color: "Brown", condition: "Like New", price: 3600, status: "Active" },
];

export const FEATURES: Feature[] = [
  {
    num: "01",
    title: "Authenticity Checked",
    desc: "Every pair goes through a manual authenticity check before it ever gets listed.",
  },
  {
    num: "02",
    title: "Condition Rated",
    desc: "We grade wear honestly, from Gently Worn to Like New, so you know exactly what you’re getting.",
  },
  {
    num: "03",
    title: "Straight to WhatsApp",
    desc: "No cart, no checkout maze — just message us the pair you want and we sort the rest.",
  },
];

export const WHATSAPP_PHONE = "923294487266";
