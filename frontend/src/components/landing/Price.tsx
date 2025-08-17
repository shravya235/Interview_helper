// components/Price.tsx
import React from "react";
import PricingCard from "@/components/landing/UI/PricingCard"; // Make sure you have this component

const Price = () => {
  return (
    <section
      id="pricing"
      className="py-90 flex flex-col items-center justify-center gap-5 px-4 sm:px-6"
    >
      {/* Main Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-800">
          - Pricing Plans -
        </h2>
        <p className="mt-3 text-sm sm:text-lg md:text-lg text-gray-700 max-w-xl mx-auto">
          Pick the plan that works best for you and get personalized AI-powered interview preparation.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 w-full">
        <PricingCard
          plan="Free"
          price="$0"
          features={["Basic AI interview plan", "Limited practice questions", "Email support"]}
          buttonText="Get Started"
        />

        <PricingCard
          plan="Pro"
          price="$29"
          features={["Personalized AI interview plan", "Unlimited practice questions", "Priority support"]}
          buttonText="Choose Plan"
        />

        <PricingCard
          plan="Premium"
          price="$49"
          features={["All Pro features", "1-on-1 AI consultation", "Interview simulation & feedback"]}
          buttonText="Choose Plan"
        />
      </div>
    </section>
  );
};

export default Price;
