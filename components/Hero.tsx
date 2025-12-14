import Playground from "./Playground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      {/* ASCII Art Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.03) 2px,
            rgba(255,255,255,0.03) 4px
          )`,
          fontFamily: 'monospace',
          fontSize: '8px',
          lineHeight: '8px',
          color: 'white',
          whiteSpace: 'pre',
        }}>
          {Array.from({ length: 1000 }).map((_, i) => (
            <span key={i} style={{ opacity: Math.random() * 0.5 }}>
              {Math.random() > 0.5 ? '.' : ':'}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full text-center space-y-8">
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Turn websites into
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              LLM-ready data
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Power your AI apps with clean web data from any website.
            <span className="block mt-2">It&apos;s also open source.</span>
          </p>
        </div>

        {/* Playground Component */}
        <div className="mt-12">
          <Playground />
        </div>
      </div>
    </section>
  );
}

