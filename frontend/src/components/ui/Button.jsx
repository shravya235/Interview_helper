import React from "react";

export function Button({ children, variant = "default", onClick }) {
  const styles = {
    default: "bg-black text-white border-2 border-black hover:bg-gray-800",
    outline:
      "bg-white border-2 border-black text-black hover:bg-gray-100 shadow-[2px_2px_0px_black]",
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 rounded-md font-medium ${styles[variant]}`}
    >
      {children}
    </button>
  );
}
