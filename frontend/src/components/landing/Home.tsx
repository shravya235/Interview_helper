"use client";

import Box from "@/components/landing/UI/Box";
import Modal from "@/components/landing/Modal";
import Signup from "@/components/landing/Signup";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        className="h-[70vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center mt-10 px-4 sm:px-6"
      >
        <Box>
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl flex flex-col items-center gap-4 transform -translate-y-6 max-w-[95vw] sm:max-w-lg md:max-w-[900px]">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-extrabold text-center">
              🚀 Ace Your Interviews with Confidence!
            </h2>
            <p className="text-sm sm:text-lg md:text-lg font-semibold text-center">
              Our AI-powered platform creates a{" "}
              <span className="text-pink-500 font-bold">
                custom interview plan
              </span>{" "}
              just for you! Answer a few questions and get personalized tips,
              practice questions, and strategies 💡✨
            </p>
            <p className="text-xs sm:text-md md:text-md text-gray-600 text-center">
              Be prepared, stay confident, and land your dream job faster! 🎯
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition w-full sm:w-auto"
            >
              Explore Now
            </button>
          </div>
        </Box>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Signup />
      </Modal>
    </>
  );
}


