"use client";

import { ThemeProvider } from "../theme/ThemeProvider";
import { CartProvider } from "../cart/CartProvider";
import { DotGridBackground } from "../ui/DotGridBackground";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { MarqueeBar } from "./MarqueeBar";
import { FeaturesSection } from "./FeaturesSection";
import { ProductGrid } from "./ProductGrid";
import { StorySection } from "./StorySection";
import { CtaSection } from "./CtaSection";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";
import { CartDrawer } from "./CartDrawer";
import { FEATURES } from "@/lib/data";
import type { Product } from "@/lib/types";

const MARQUEE_TEXT =
  "Authentic Only ✦ Sizes EU 38–46 ✦ Inspected & Cleaned ✦ DM To Cop ✦ Free Local Delivery ✦ ";

export function StorefrontApp({ products }: { products: Product[] }) {
  return (
    <ThemeProvider>
      <CartProvider products={products}>
        <div className="relative overflow-x-hidden">
          <DotGridBackground />
          <Navbar />
          <Hero products={products} />
          <MarqueeBar text={MARQUEE_TEXT} />
          <FeaturesSection features={FEATURES} />
          <ProductGrid products={products} />
          <StorySection />
          <CtaSection />
          <Footer />
          <WhatsAppFab />
          <CartDrawer />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}
