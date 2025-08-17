import Header from "@/components/landing/Header";
import Box from "@/components/landing/UI/Box";
import FeatureCard from "@/components/landing/UI/FeatureCard";
import PricingCard from "@/components/landing/UI/PricingCard";
import Home from "@/components/landing/Home";
import Price from "./Price";
import Features from "./Feature";
import About from "./About";
import Contact from "./Contact";


export default function LandingPage() {


  return (
    <main className="scroll-smooth bg-[#b2a5ff]">

      {/* logo */}
      <Header />
      <Home />
      
      {/* Pricing Section */}
      <Price />

      {/* Feature Section */}
      <Features />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
