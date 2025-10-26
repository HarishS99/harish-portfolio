"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const onContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
    <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center pt-4 md:pt-12">
      <div>
        <h1 className="text-4xl font-bold mb-3">Harish Subramanian</h1>
        <p className="text-lg opacity-80 mb-8">
          Tech Evangelist with a business-oriented mindset to solve complex problems across Infrastructure, Data Protection and AI.
        </p>
        <div className="mb-4 opacity-80 text-sm">
          Engineer • Storyteller • Exploring Tech Strategy
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
      </div>
      <div className="flex justify-center md:justify-end">
        <motion.img
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          src="/harish.jpg"
          alt="Profile"
          className="w-48 h-48 rounded-full object-cover border border-white/10"
        />
      </div>
    </section>
    <section className="max-w-5xl mx-auto mt-6 mb-12">
     <h2 className="text-lg font-semibold mb-3">Capabilities</h2>
      <div className="flex flex-wrap gap-2 opacity-90 text-sm">
      {[
        "Azure",
        "Commvault",
        "Dell Cyber Recovery",
        "Python",
        "Machine Learning",
        "Power BI",
        "Data Protection",
        "NLP",
        "Virtualization",
        "Human Centered Designing",
        "Pre-Sales",
      ].map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 border rounded-full opacity-80 hover:opacity-100 transition"
        >
        {skill}
        </span>
      ))}
    </div>
  </section>
  </>
  );
}
