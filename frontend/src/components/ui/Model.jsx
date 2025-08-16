"use client";
import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="relative bg-white w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 
                      max-h-[90vh] overflow-y-auto p-6 rounded-md shadow-lg z-10">
        {children}
      </div>
    </div>
  );
}
