"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Modal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center 
                     bg-black/30 backdrop-blur-md "  // transparent + blur
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Box */}
          <motion.div
            className="relative bg-purple-200 rounded-2xl border-2 border-black 
                       w-auto max-w-full max-h-full overflow-hidden flex flex-col 
                       shadow-[10px_10px_0px_#000000]"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto rounded-2xl">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
