export default function Publications() {
  return (
    <section id="publications" className="max-w-3xl mx-auto mb-16">
      <h2 className="text-2xl font-semibold mb-4">Featured Publications & Thought Leadership</h2>

      <div className="space-y-4 opacity-90">

        <div>
          <p className="font-medium">
            A Beginner's Handbook to DevOps — Dell Knowledge Sharing 2022
          </p>
          <p className="text-sm opacity-80 mt-1">
            Published in Dell Knowledge Sharing Portal — Co-Authored by Aashikha Narasimhan, Roshan Sham and Harish Subramanian
          </p>
          {/* Optional future link slot */}
          {/* <a href="https://learning.dell.com/content/dam/dell-emc/documents/en-us/2023KS_Narasimhan-A_Beginner%27s_Handbook_to_DevOps.pdf" className="underline text-sm mt-2 inline-block">View Publication →</a> */}
        </div>

      </div>
    </section>
  );
}
