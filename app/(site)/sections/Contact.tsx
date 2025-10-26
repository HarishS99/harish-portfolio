"use client";
import { motion } from "framer-motion";
export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="max-w-3xl mx-auto mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
    <section id="contact" className="max-w-3xl mx-auto mb-24">
      <h2 className="text-2xl font-semibold mb-2">Contact</h2>
      <p className="opacity-80 mb-4">
        Let’s connect — open to collaborations and impactful tech roles.
      </p>
      <div className="space-y-1 opacity-80">
        <p>Phone: +91-9481579529</p>
        <p>Email: <a className="underline" href="mailto:99harishs99@gmail.com">99harishs99@gmail.com</a></p>
        <p><a className="underline" href="https://www.linkedin.com/in/harish-subramanian-a246a016b/" target="_blank">Connect on LinkedIn</a></p>
      </div>
    </section>
      </motion.section>
  );
}
