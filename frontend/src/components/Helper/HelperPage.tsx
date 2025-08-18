"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BiChevronDown } from "react-icons/bi";
import Sidebar from "@/components/Helper/ui/Sidebar";
import HelperCompanyCard from "@/components/Helper/ui/HelperCompanyCard";
import HelperInterviewerCard from "@/components/Helper/ui/HelperInterviewerCard";
import HelperQuote from "@/components/Helper/ui/HelperQuote";
import HelperInputBar from "@/components/Helper/ui/HelperInputBar";

export default function HelperPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleArrowClick = () => {
    router.push("/user/helper/chat");
  };

  const handleSend = (msg: string) => {
    if (msg.trim()) {
      router.push("/user/helper/chat");
    }
  };

  return (
    <div className="flex h-screen bg-[#b2a5ff]">
      {/* Sidebar - show toggle button on mobile */}
      <div className="hidden md:flex">
        <Sidebar />
      </div>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          className="p-2 bg-white rounded shadow-md"
          aria-label="Toggle sidebar"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>
      </div>
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setSidebarOpen(false)}></div>
      )}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 z-50 transform md:hidden transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1 gap-8 px-6 overflow-y-auto">
        {/* Bouncing arrow pointing downwards above the cards */}
        <button
          onClick={handleArrowClick}
          aria-label="Go to chat"
          className="mb-6 text-black bg-white rounded-full border-4 border-[#9468ef] shadow-lg flex items-center justify-center"
          style={{
            fontSize: "5rem",
            width: "80px",
            height: "80px",
            animation: "bounce 1.2s infinite",
          }}
        >
          <BiChevronDown />
        </button>

        {/* Two Company/Interviewer Cards side by side - stack on small */}
        <div className="flex flex-col sm:flex-row gap-12 mb-8 w-full max-w-4xl px-2">
          <div className="bg-white rounded-[2rem] shadow-[0_4px_16px_rgba(0,0,0,0.12)] border-2 border-[#9468ef] p-8 flex-1 flex flex-col items-center text-center min-w-[250px]">
            <h3 className="font-extrabold text-xl mb-2 text-black">Company Insights</h3>
            <p className="text-base text-[#3c3070]">
              Get insights about the company before your interview.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] shadow-[0_4px_16px_rgba(0,0,0,0.12)] border-2 border-[#9468ef] p-8 flex-1 flex flex-col items-center text-center min-w-[250px]">
            <h3 className="font-extrabold text-xl mb-2 text-black">Interviewer Insights</h3>
            <p className="text-base text-[#3c3070]">
              Understand your interviewer better.
            </p>
          </div>
        </div>

        {/* Quote below cards */}
        <div className="max-w-xl text-center mx-auto italic text-[#4b3fae] text-lg mb-6">
          “Preparation builds confidence. Enter your interview ready to shine.”
        </div>

        {/* Input bar at the bottom */}
        <div className="w-full max-w-2xl mt-6 px-4">
          <HelperInputBar onSend={handleSend} />
        </div>
      </main>
    </div>
  );
}
