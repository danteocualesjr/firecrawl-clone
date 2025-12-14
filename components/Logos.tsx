export default function Logos() {
  // Placeholder company logos - in a real implementation, these would be actual logo images
  const logos = Array.from({ length: 21 }, (_, i) => `Logo ${i + 1}`);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] border-b border-gray-800">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <p className="text-lg text-gray-300">
          Trusted by <span className="font-semibold text-white">5000+</span>
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> </span>companies of all sizes
        </p>
        <div className="grid grid-cols-4 md:grid-cols-7 lg:grid-cols-10 gap-6 items-center opacity-40 hover:opacity-60 transition-opacity">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 text-gray-500 text-xs font-medium bg-gray-900/50 rounded-lg border border-gray-800/50 hover:border-gray-700 transition-colors"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
