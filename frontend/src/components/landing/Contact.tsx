// components/Contact.tsx
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="relative max-w-2xl w-full">
        {/* Black offset layer */}
        <div className="absolute inset-0 translate-x-[10px] translate-y-[10px] bg-black rounded-2xl" />

        {/* Gradient top card */}
        <div className="relative rounded-2xl border-2 border-black overflow-hidden bg-white p-8 shadow-xl text-center">
          <h2 className="text-4xl font-extrabold text-black mb-6">Contact Us</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 text-black py-2 rounded-lg border border-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg border border-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-black text-white font-semibold hover:bg-white hover:text-black border-2 border-black transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
