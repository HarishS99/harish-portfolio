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
        <div>
          <p className="opacity-90 italic">
            Post Graduate Program in Advanced Business Analytics, IIM Ahmedabad (2025–2026)
          </p>
          <p className="opacity-80 mt-1 text-sm">
            <strong>Relevant Coursework:</strong> Statistics & Probability, Predictive Analytics, Machine Learning, Big Data Analytics, Optimization & Operations Research, Business Forecasting, Financial Analytics, Customer Analytics, Data Visualization                                                                                        
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <img
          src="/amrita-logo.jpeg"
          alt="Amrita Vishwa Vidyapeetham"
          className="w-10 h-10 object-contain opacity-80"
        />
        <div>
          <p className="opacity-90 italic">
            Bachelor of Technology in Computer Science & Engineering, Amrita Vishwa Vidyapeetham (2017–2021)
          </p>
          <p className="opacity-80 mt-1 text-sm">
            <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Database Management Systems, Operating Systems, Cloud Computing, Artificial Intelligence & Machine Learning, Cybersecurity, Web Development, NLP, Big Data Analytics
          </p>
        </div>
      </div>

    </section>
  );
}
