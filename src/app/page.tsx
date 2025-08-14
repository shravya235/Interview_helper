// src/app/page.tsx
import { HeroSection } from "@/components/landing/hero-section";
import { QuickLinksSection } from "@/components/landing/quicklinks-section";
import { FeaturedCompaniesSection } from "@/components/landing/featured-companies-section";

export default function LandingPage() {
  return (
    // Add the gradient background to the main container
    <div className="w-full bg-gradient-to-br from-[#020024] via-[#04045a] to-[#00393b]">
      <HeroSection />
      <QuickLinksSection />
      <FeaturedCompaniesSection />
    </div>
  );
}