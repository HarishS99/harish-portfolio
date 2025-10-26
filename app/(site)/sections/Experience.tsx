import { motion } from "framer-motion";
export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="max-w-3xl mx-auto mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
    <section id="experience" className="max-w-3xl mx-auto mb-16">
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>

      <div className="flex items-start gap-4 mb-6">
        <img
          src="/commvault-logo.png"
          alt="Commvault"
          className="w-10 h-10 object-contain opacity-80"
        />
        <div>
          <h3 className="font-medium">Inside Sales Engineer (ISE) · Commvault Systems Inc</h3>
          <p className="text-sm opacity-80">Sept’ 2023 – Present · Bangalore, India</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 opacity-90">
            <li>Designed & delivered 50+ enterprise backup solutions, driving $12M+ pipeline revenue.</li>
            <li>Led 20+ POCs, cutting cycle time by 20% through process improvements.</li>
            <li>Created CXO-ready presentations, contributing to 120% FY24 revenue attainment.</li>
            <li>Supported RFP/RFI responses, improving proposal win rate by 15%.</li>
          </ul>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <img
          src="/dell-logo.png"
          alt="Dell Technologies"
          className="w-10 h-10 object-contain opacity-80"
        />
        <div>
          <h3 className="font-medium">Solutions Architect · Dell Technologies</h3>
          <p className="text-sm opacity-80">May’ 2021 – Sept’ 2023 · Bangalore, India</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 opacity-90">
            <li>Supported 70+ enterprise accounts with solution design & configurations, influencing $5M+ revenue.</li>
            <li>Delivered 150+ technical demos & workshops, boosting deal closure rates.</li>
            <li>Aligned product solutions with customer needs, reducing rework by 30%.</li>
          </ul>
        </div>
      </div>

    </section>
  );
}
