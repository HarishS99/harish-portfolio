export default function ProjectsImpact() {
  return (
    <section id="projects-impact" className="max-w-3xl mx-auto mb-16">
      <h2 className="text-2xl font-semibold mb-2">Projects & Impact</h2>
      <div className="opacity-90 mb-6">
        <h3 className="font-medium">Network Analysis</h3>
        <p>Performed analysis on the OSM Network X dataset to identify the centrality measures for the city of Bangalore, to identify the potential choke points leading to Bangalore traffic.</p>
      </div>
      <div className="opacity-90 mb-6">
        <h3 className="font-medium">Sentiment Analyzer (NLP)</h3>
        <p>Led development of a tool to analyze feedback and generate sentiment scores using Python, NLTK, Django, Node.js.</p>
      </div>
      <div className="opacity-90 mb-6">
        <h3 className="font-medium">Text Summarizer (NLP)</h3>
        <p>Developed a keyword-based summarizer for live Twitter feeds on COVID-19 using Python, NLTK, and Twitter API.</p>
      </div>
    </section>
  );
}
