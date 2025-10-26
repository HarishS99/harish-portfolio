"use client";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.section
      id="about"
      className="max-w-3xl mx-auto mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
    <section id="about" className="max-w-3xl mx-auto mt-16 mb-16">
      <h2 className="text-2xl font-semibold mb-2">About Me</h2>
      <p className="opacity-80 mb-4">
        Tech Evangelist with 5+ years experience in IT Infrastructure, Data Protection, Cyber Security and Enterprise Backup. Currently at Commvault designing top notch enterprise grade solutions while also delivering demos,
        and Proof of Values to the business stakeholders. Pursuing my MBA in Business Analytics and AI from IIM Ahmedabad to sharpen my strategic and analytical decision-making.
      </p>
    </section>
      </motion.section>
  );
}
