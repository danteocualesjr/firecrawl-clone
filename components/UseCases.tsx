export default function UseCases() {
  const useCases = [
    {
      title: "Chat with context",
      subtitle: "Smarter AI chats",
      description: "Power your AI assistants with real-time, accurate web content.",
      cta: "View docs",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Know your leads",
      subtitle: "Lead enrichment",
      description: "Enhance your sales data with web information.",
      cta: "Check out Extract",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "MCPs",
      subtitle: "Add powerful scraping to your code editors.",
      description: "",
      cta: "Get started",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Build with context",
      subtitle: "AI platforms",
      description: "Let your customers build AI apps with web data.",
      cta: "Check out Map",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "No insight missed",
      subtitle: "Deep research",
      description: "Extract comprehensive information for in-depth research.",
      cta: "Build your own with Search",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 text-sm text-gray-400 mb-6">
            <span>·</span>
            <span>Use Cases</span>
            <span>·</span>
          </div>
          <div className="inline-flex items-center gap-2 text-sm text-gray-400 mb-8">
            <span>//</span>
            <span>Use cases</span>
            <span>//</span>
          </div>
        </div>

        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Transform web data into AI-powered solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover how Firecrawl customers are getting the most out of our API.
          </p>
          <a href="#" className="inline-block text-blue-400 hover:text-blue-300 font-medium mt-4">
            View all use cases →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 space-y-4 hover:border-blue-500 transition-colors"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${useCase.gradient} flex items-center justify-center text-white font-bold text-xl`}>
                {useCase.title[0]}
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">{useCase.subtitle}</div>
                <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                {useCase.description && (
                  <p className="text-gray-400 text-sm mb-4">{useCase.description}</p>
                )}
              </div>
              <a
                href="#"
                className="inline-block text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                {useCase.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
