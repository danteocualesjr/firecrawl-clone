export default function Integrations() {
  const integrations = Array.from({ length: 12 }, (_, i) => ({
    name: `Integration ${i + 1}`,
    logo: `Logo ${i + 1}`,
  }));

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Use well-known tools</h2>
          <p className="text-gray-400 text-lg">
            Already fully integrated with the greatest existing tools and workflows.
          </p>
          <a href="#" className="inline-block text-blue-400 hover:text-blue-300 font-medium">
            See all integrations →
          </a>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 flex items-center justify-center h-24 hover:border-blue-500 transition-colors"
            >
              <span className="text-gray-500 text-sm">{integration.name}</span>
            </div>
          ))}
        </div>

        {/* GitHub Section */}
        <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              F
            </div>
            <div className="text-left">
              <div className="font-bold text-lg">mendableai/firecrawl</div>
              <div className="text-sm text-gray-400">Public</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 text-gray-400">
            <span>⭐ 69.7K</span>
            <span>•</span>
            <span>Open Source</span>
          </div>
          <div className="mt-6">
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              Check out our repo →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

