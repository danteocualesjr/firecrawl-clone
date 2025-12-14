export default function Banner() {
  return (
    <div className="bg-red-600 text-white text-center py-2.5 px-4 text-sm font-medium">
      <div className="flex items-center justify-center gap-2 flex-wrap">
        <span>❄️ 🎁 Get free swag with any Firecrawl plan bought in December!</span>
        <a href="#" className="underline hover:no-underline font-semibold whitespace-nowrap">
          Learn more →
        </a>
      </div>
    </div>
  );
}

