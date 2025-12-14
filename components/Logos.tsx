export default function Logos() {
  // Placeholder company logos - in a real implementation, these would be actual logo images
  const logos = Array.from({ length: 21 }, (_, i) => `Logo ${i + 1}`);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <p className="text-lg text-gray-400">
          Trusted by <span className="font-semibold text-white">5000+</span> companies of all sizes
        </p>
        <div className="grid grid-cols-4 md:grid-cols-7 lg:grid-cols-10 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-12 text-gray-500 text-xs font-medium bg-gray-900 rounded-lg border border-gray-800"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

