"use client";
import { motion } from "framer-motion";
export default function Publications() {
  return (
    <motion.section
      id="publications"
      className="max-w-3xl mx-auto mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
    <section id="publications" className="max-w-3xl mx-auto mb-16">
      <h2 className="text-2xl font-semibold mb-6">Featured Publications & Thought Leadership</h2>

      <div className="space-y-8">

        {/* === PUBLICATION CARD === */}
        <a
          href="https://learning.dell.com/content/dam/dell-emc/documents/en-us/2023KS_Narasimhan-A_Beginner%27s_Handbook_to_DevOps.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-4 rounded-xl border border-white/10 dark:border-white/20 bg-white/5 dark:bg-white/5 hover:scale-[1.01] hover:shadow-xl transition-transform duration-200"
        >
          <img
            src="/publication.png"  // ensure this matches your uploaded filename
            alt="Publication Cover"
            className="h-[150px] w-auto rounded-lg object-cover"
          />
          <div>
            <h3 className="text-lg font-medium">
              Beginner’s Handbook to DevOps — Dell Knowledge Sharing 2023
            </h3>
            <p className="text-sm opacity-80 mt-2">
              Published in Dell Knowledge Sharing Portal — Co-Authored by Aashikha Narasimhan, Roshan Sham and Harish Subramanian
            </p>
          </div>
        </a>

        {/* === To add more, duplicate the <a> block above and update content === */}

      </div>
    </section>
      </motion.section>
  );
}
