// components/About.tsx
import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-[40vh] flex items-center justify-center px-6">
      <div className="relative w-full max-w-4xl">

        {/* Black offset layer */}
        <div className="absolute inset-0 translate-x-[10px] translate-y-[10px] bg-black rounded-2xl" />

        {/* Gradient top card */}
        <div className="relative rounded-2xl border-2 border-black overflow-hidden bg-gradient-to-r from-[#a487d4] to-purple-600 p-8 shadow-xl text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">About Us</h2>
          <p className="text-lg text-gray-100 leading-relaxed">
            We aim to provide the best services by combining modern design and
            technology. Our team focuses on delivering value and creating
            innovative solutions that make a difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
