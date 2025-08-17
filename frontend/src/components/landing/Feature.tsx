// components/Features.tsx
import React from "react";
import FeatureCard from "@/components/landing/UI/FeatureCard";

const Features = () => {
  return (
    <section
      id="features"
      className="py-20 flex flex-col items-center justify-center gap-6 px-4 sm:px-6"
    >
      {/* Heading */}
      <div className="text-center mb-12 max-w-xl">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-800">
          - Features -
        </h2>
        <p className="mt-3 text-sm sm:text-lg md:text-lg text-gray-700">
          Explore the key features that make our AI-powered interview platform effective and easy to use.
        </p>
      </div>

      {/* Feature Items */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 w-full">
        <FeatureCard
          title="Personalized Plans"
          description="Tailored AI interview preparation based on your skills and goals."
        />
        <FeatureCard
          title="Practice Questions"
          description="Access a wide variety of questions to practice and improve."
        />
        <FeatureCard
          title="1-on-1 Consultation"
          description="Get direct feedback and tips through personalized sessions."
        />
      </div>
    </section>
  );
};

export default Features;
