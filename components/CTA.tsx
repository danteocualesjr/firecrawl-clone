export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold">
          The easiest way to extract data from the web
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Get Started
          </button>
          <button className="bg-[#1a1a1a] hover:bg-[#252525] text-white px-8 py-3 rounded-lg font-medium border border-gray-800 transition-colors">
            View Documentation
          </button>
        </div>
      </div>
    </section>
  );
}

