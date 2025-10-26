export default function Education() {
  return (
    <section id="education" className="max-w-3xl mx-auto mb-16">
      <h2 className="text-2xl font-semibold mb-4">Education</h2>

      <div className="flex items-start gap-4 mb-6">
        <img
          src="/iim-logo.png"
          alt="IIM Ahmedabad"
          className="w-10 h-10 object-contain opacity-80"
        />
        <p className="opacity-90 italic">
          Post Graduate Program in Advanced Business Analytics, IIM Ahmedabad (2025–2026),
          specializing in Machine Learning, Business Strategy, Data Visualization, and Predictive Modelling.
        </p>
      </div>

      <div className="flex items-start gap-4">
        <img
          src="/amrita-logo.png"
          alt="Amrita Vishwa Vidyapeetham"
          className="w-10 h-10 object-contain opacity-80"
        />
        <p className="opacity-90 italic">
          Bachelor of Technology in Computer Science & Engineering, Amrita Vishwa Vidyapeetham (2017–2021),
          focused on Database Systems, Machine Learning, NLP, Cloud Computing, and Software Architecture.
        </p>
      </div>
    </section>
  );
}
