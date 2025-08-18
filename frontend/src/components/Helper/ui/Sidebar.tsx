"use client";
import { useState } from "react";
import Link from "next/link";
import { FaRegFileAlt, FaCog, FaChartBar } from "react-icons/fa";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="fixed top-4 left-4 p-2 bg-[#8e5be7] text-black rounded shadow-lg font-bold z-50"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        ☰
      </button>

      {open && (
        <div className="fixed top-0 left-0 h-full w-72 bg-white p-8 z-50 flex flex-col shadow-xl">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-bold text-2xl text-[#5B4DA7] tracking-tight">Menu</h2>
            <button
              className="text-3xl text-[#7A5EEB] hover:text-[#3b237c] transition"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          <nav>
            <ul className="space-y-8 text-lg font-medium pl-2">
              <li>
                <Link
                  href="/user/history"
                  onClick={() => setOpen(false)}
                  className="flex gap-3 items-center text-[#5B4DA7] hover:text-[#7A5EEB] transition"
                >
                  <FaRegFileAlt className="text-[#9570F6] text-2xl" />
                  History
                </Link>
              </li>
              <li>
                <Link
                  href="/user/settings"
                  onClick={() => setOpen(false)}
                  className="flex gap-3 items-center text-[#5B4DA7] hover:text-[#7A5EEB] transition"
                >
                  <FaCog className="text-[#80CDCC] text-2xl" />
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  href="/user/dashboard"
                  onClick={() => setOpen(false)}
                  className="flex gap-3 items-center text-[#5B4DA7] hover:text-[#7A5EEB] transition"
                >
                  <FaChartBar className="text-[#8ACE9A] text-2xl" />
                  Dashboard
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
