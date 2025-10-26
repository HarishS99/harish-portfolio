export default function ProjectsImpact() {
  return (
    <section id="projects-impact" className="max-w-5xl mx-auto mb-16 -mt-4">
      <h2 className="text-2xl font-semibold mb-6">Projects & Impact</h2>

      <div className="space-y-8">

        {/* --- PROJECT CARD --- */}
        <div className="p-6 rounded-2xl border border-white/10 dark:border-white/20 bg-white/5 dark:bg-white/5 backdrop-blur-md">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold">Network Analysis</h3>
            <a href="https://github.com/HarishS99" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 text-xl">
              ↗
            </a>
          </div>

          <p className="opacity-90 mt-2">
            Performed analysis on the OSM Network X dataset to identify the centrality measures for the city of Bangalore, to identify the potential choke points leading to Bangalore traffic.
          </p>

          <p className="text-sm mt-3 opacity-80 font-medium">Key Skills:</p>
          <div className="mt-2 flex flex-wrap gap-2 text-sm">
            <span className="px-3 py-1 rounded-full border opacity-80">Python</span>
            <span className="px-3 py-1 rounded-full border opacity-80">OSM NetworkX</span>
            <span className="px-3 py-1 rounded-full border opacity-80">Pandas</span>
            <span className="px-3 py-1 rounded-full border opacity-80">Network Analytics</span>
          </div>
        </div>
{/* --- PROJECT CARD --- */}
        <div className="p-6 rounded-2xl border border-white/10 dark:border-white/20 bg-white/5 dark:bg-white/5 backdrop-blur-md">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold">Sentiment Analyzer (NLP)</h3>
            <a href="https://github.com/HarishS99" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 text-xl">
              ↗
            </a>
          </div>

          <p className="opacity-90 mt-2">
            Led development of a tool to analyze feedback and generate sentiment scores; used for project feedback looping systems.
          </p>

          <p className="text-sm mt-3 opacity-80 font-medium">Key Skills:</p>
          <div className="mt-2 flex flex-wrap gap-2 text-sm">
            <span className="px-3 py-1 rounded-full border opacity-80">Python</span>
            <span className="px-3 py-1 rounded-full border opacity-80">NLTK</span>
            <span className="px-3 py-1 rounded-full border opacity-80">Django</span>
            <span className="px-3 py-1 rounded-full border opacity-80">Node.js</span>
          </div>
        </div>
        {/* --- PROJECT CARD --- */}
        <div className="p-6 rounded-2xl border border-white/10 dark:border-white/20 bg-white/5 dark:bg-white/5 backdrop-blur-md">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold">Text Summarizer (NLP)</h3>
            <a href="https://github.com/HarishS99" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 text-xl">
              ↗
            </a>
          </div>

          <p className="opacity-90 mt-2">
            Developed a keyword-based summarizer for live Twitter feeds on COVID-19 using Python, NLTK, and Twitter API
          </p>

          <p className="text-sm mt-3 opacity-80 font-medium">Key Skills:</p>
          <div className="mt-2 flex flex-wrap gap-2 text-sm">
            <span className="px-3 py-1 rounded-full border opacity-80">Python</span>
            <span className="px-3 py-1 rounded-full border opacity-80">NLTK</span>
            <span className="px-3 py-1 rounded-full border opacity-80">Twitter API</span>
          </div>
        </div>
      </div>
    </section>
  );
}


