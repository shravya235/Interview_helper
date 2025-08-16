import React from "react";

export default function ProfileCard() {
  return (
    <div className="bg-white border-2 border-black shadow-[4px_4px_0px_black] p-4 rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="https://via.placeholder.com/80"
            alt="Profile"
            className="w-16 h-16 rounded-full border"
          />
          <div>
            <h2 className="text-xl font-bold">We did it guys</h2>
            <p className="text-gray-600 text-sm">
              interviewwhatsappOfficial@gmail.com
            </p>
          </div>
        </div>
        <button className="border border-black px-2 py-1 text-sm bg-white hover:bg-gray-100">
          View
        </button>
      </div>

      <div className="mt-3">
        <div className="flex gap-4 text-blue-600 text-sm">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>
        <p className="mt-3 text-gray-700 text-sm">
          I'm planning to do work in the same company but I don’t have the CGPA
          to attend the placement 🙇‍♂️
        </p>
      </div>
    </div>
  );
}
