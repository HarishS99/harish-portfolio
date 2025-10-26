export default function Publications() {
  return (
    <section id="publications" className="max-w-3xl mx-auto mb-16 text-center">
      <h2 className="text-2xl font-semibold mb-6">Featured Publications</h2>

      <div className="space-y-10">

        {/* === PUBLICATION CARD === */}
        <a
          href="https://learning.dell.com/content/dam/dell-emc/documents/en-us/2023KS_Narasimhan-A_Beginner%27s_Handbook_to_DevOps.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-4 rounded-2xl border border-white/10 dark:border-white/20 bg-white/5 dark:bg-white/5 backdrop-blur-sm hover:scale-[1.01] hover:shadow-xl transition-transform duration-200"
        >
          <img
          src="/publication.png"
          alt="Publication Cover"
          className="w-full aspect-video max-h-[200px] rounded-xl mb-4 object-cover"
          />


          <h3 className="text-lg font-medium">Beginner’s Handbook to DevOps — Dell Knowledge Sharing 2022</h3>
          <p className="text-sm opacity-80 mt-2">
            Published in Dell Knowledge Sharing Portal — Co-Authored by Aashikha Narasimhan, Roshan Sham and Harish Subramanian
          </p>
        </a>

        {/* === DUPLICATE FROM HERE TO ADD MORE LATER === */}
        {/* Copy entire <a>...</a> block above and change title/link/image */}

      </div>
    </section>
  );
}

