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
import { PRODUCTS, FEATURES } from "@/lib/data";

const MARQUEE_TEXT =
  "Authentic Only ✦ Sizes UK 6–12 ✦ Inspected & Cleaned ✦ DM To Cop ✦ Free Local Delivery ✦ ";

export function StorefrontApp() {
  return (
    <ThemeProvider>
      <CartProvider products={PRODUCTS}>
        <div className="relative overflow-x-hidden">
          <DotGridBackground />
          <Navbar />
          <Hero />
          <MarqueeBar text={MARQUEE_TEXT} />
          <FeaturesSection features={FEATURES} />
          <ProductGrid products={PRODUCTS} />
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
