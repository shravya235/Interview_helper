"use client";
import Header from "@/components/landing/Header";
import Box from "@/components/landing/Box";
import FeatureCard from "@/components/landing/FeatureCard";
import PricingCard from "@/components/landing/PricingCard";

// ✅ Data moved to arrays
const hero = {
  title: "🚀 Ace Your Interviews with Confidence!",
  subtitle:
    "Our AI-powered platform creates a custom interview plan just for you! Answer a few questions and get personalized tips, practice questions, and strategies 💡✨",
  tagline: "Be prepared, stay confident, and land your dream job faster! 🎯",
  cta: "Explore Now",
};

const pricingPlans = [
  {
    plan: "Free",
    price: "$0",
    features: [
      "Basic AI interview plan",
      "Limited practice questions",
      "Email support",
    ],
    buttonText: "Get Started",
  },
  {
    plan: "Pro",
    price: "$29",
    features: [
      "Personalized AI interview plan",
      "Unlimited practice questions",
      "Priority support",
    ],
    buttonText: "Choose Plan",
  },
  {
    plan: "Premium",
    price: "$49",
    features: [
      "All Pro features",
      "1-on-1 AI consultation",
      "Interview simulation & feedback",
    ],
    buttonText: "Choose Plan",
  },
];

const features = [
  {
    title: "Personalized Plans",
    description: "Tailored AI interview preparation based on your skills and goals.",
  },
  {
    title: "Practice Questions",
    description: "Access a wide variety of questions to practice and improve.",
  },
  {
    title: "1-on-1 Consultation",
    description: "Get direct feedback and tips through personalized sessions.",
  },
];

export default function LandingPage() {
  return (
    <main className="scroll-smooth bg-[#b2a5ff]">
      {/* Logo/Header */}
      <Header />

      {/* Hero Section */}
      <section id="home" className="min-h-[70vh] flex items-center justify-center px-4 mt-12 sm:mt-16">
        <Box>
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
              {hero.title}
            </h2>
            <p className="text-base sm:text-lg font-semibold">
              {hero.subtitle.split("custom interview plan").map((part, i) =>
                i === 1 ? (
                  <span key={i} className="text-pink-500 font-bold">
                    custom interview plan
                  </span>
                ) : (
                  part
                )
              )}
            </p>
            <p className="text-sm sm:text-md text-gray-600">{hero.tagline}</p>
            <button className="mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition text-sm sm:text-base">
              {hero.cta}
            </button>
          </div>
        </Box>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-20 flex flex-col items-center px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">- Pricing Plans -</h2>
          <p className="mt-3 text-base sm:text-lg text-gray-700 max-w-xl mx-auto">
            Pick the plan that works best for you and get personalized AI-powered interview preparation.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 w-full">
          {pricingPlans.map((plan, idx) => (
            <PricingCard key={idx} {...plan} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-20 flex flex-col items-center px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">- Features -</h2>
          <p className="mt-3 text-base sm:text-lg text-gray-700 max-w-xl mx-auto">
            Explore the key features that make our AI-powered interview platform effective and easy to use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-5xl">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 flex items-center justify-center px-4">
        <div className="relative w-full max-w-4xl">
          <div className="absolute inset-0 translate-x-[8px] translate-y-[8px] bg-black rounded-2xl" />
          <div className="relative rounded-2xl border-2 border-black bg-gradient-to-r from-[#a487d4] to-purple-600 p-6 sm:p-8 shadow-xl text-center">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">About Us</h2>
            <p className="text-base sm:text-lg text-gray-100 leading-relaxed">
              We aim to provide the best services by combining modern design and technology. Our team focuses on delivering value and creating innovative solutions that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 flex items-center justify-center px-4">
        <div className="relative max-w-2xl w-full">
          <div className="absolute inset-0 translate-x-[8px] translate-y-[8px] bg-black rounded-2xl" />
          <div className="relative rounded-2xl border-2 border-black bg-white p-6 sm:p-8 shadow-xl text-center">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-black mb-6">Contact Us</h2>
            <form className="space-y-4 text-left">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-lg border border-gray-900 focus:outline-none focus:ring-2 focus:ring-black" />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-lg border border-gray-900 focus:outline-none focus:ring-2 focus:ring-black" />
              <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-900 focus:outline-none focus:ring-2 focus:ring-black"></textarea>
              <button type="submit" className="w-full py-3 rounded-lg bg-black text-white font-semibold hover:bg-white hover:text-black border-2 border-black transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
