import { motion } from "framer-motion";
export default function Certifications() {
  return (
    <section id="certifications" className="max-w-3xl mx-auto mb-16">
      <h2 className="text-2xl font-semibold mb-4">Certifications & Credentials</h2>

      <div className="space-y-4 opacity-90">

        <div className="flex items-start gap-4">
          <img src="/microsoft-logo.png" className="w-8 h-8 object-contain opacity-80" alt="Microsoft" />
          <p><strong>Microsoft</strong> — AZ-900, AZ-104, DP-605</p>
        </div>

        <div className="flex items-start gap-4">
          <img src="/isc2-logo.png" className="w-8 h-8 object-contain opacity-80" alt="ISC2" />
          <p><strong>ISC2</strong> — Certified Cloud Cybersecurity</p>
        </div>

        <div className="flex items-start gap-4">
          <img src="/google-logo.png" className="w-8 h-8 object-contain opacity-80" alt="Google" />
          <p><strong>Google</strong> — Foundations of Cyber Security</p>
        </div>

        <div className="flex items-start gap-4">
          <img src="/oracle-logo.png" className="w-8 h-8 object-contain opacity-80" alt="Oracle" />
          <p><strong>Oracle</strong> — AOCI-24, OCI-AI-2024</p>
        </div>

        <div className="flex items-start gap-4">
          <img src="/commvault-logo.png" className="w-8 h-8 object-contain opacity-80" alt="Commvault" />
          <p><strong>Commvault</strong> — Certified Professional, Solution Architect, Engineer (2023–Present)</p>
        </div>

        <div className="flex items-start gap-4">
          <img src="/dell-logo.png" className="w-8 h-8 object-contain opacity-80" alt="Dell" />
          <p><strong>Dell Technologies</strong> — ISMv4, DPMv1, Cyber Recovery, Cloud Architect, Implementation Engineer</p>
        </div>

      </div>
    </section>
  );
}
