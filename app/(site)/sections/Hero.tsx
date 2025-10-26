"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const onContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center pt-4 md:pt-12">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-3">Harish Subramanian</h1>
        <p className="text-lg opacity-90 mb-6">
          Solutions Engineer at <span className="font-semibold">Commvault</span> — 
          blending Infrastructure, AI and Business Strategy to deliver real-world impact.
        </p>
        <div className="mb-4 opacity-80 text-sm">
          AI & Infra Strategist • Pre-Sales • Human-Centered Technology
        </div>

        <div className="flex items-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onContactClick}
            className="px-4 py-2 rounded-2xl border opacity-90 hover:opacity-100"
          >
            Contact / Hire Me
          </motion.button>
          <a
            href="/Harish_Subramanian_Resume.pdf"
            download
            className="ml-3 px-4 py-2 rounded-2xl border opacity-90 hover:opacity-100"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center md:justify-end"
      >
        <motion.img
          src="/harish.jpg"
          alt="Profile"
          className="w-48 h-48 rounded-full object-cover border border-white/10"
        />
      </motion.div>
    </section>
  );
}
