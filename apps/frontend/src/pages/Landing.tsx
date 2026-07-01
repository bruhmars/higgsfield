import { Appbar } from "../components/Appbar";

const CARDS = [
  { id: 1, title: "GEMINI OMNI FLASH", subtitle: "Generate and edit video from any input" },
  { id: 2, title: "NANO BANANA 2 LITE", subtitle: "Rapid generation with sharp in-image text" },
  { id: 3, title: "SEED AUDIO 1.0", subtitle: "Multi-speaker scenes with spatial depth" },
  { id: 4, title: "FLUX KONTEXT MAX", subtitle: "Context-aware image transformation" },
  { id: 5, title: "RUNWAY GEN-4", subtitle: "Consistent characters across scenes" },
  { id: 6, title: "SORA TURBO", subtitle: "Long-form cinematic video generation" },
];

export function Landing() {       
  return (
    <div className="bg-black min-h-screen text-white">
      <Appbar />

      <div className="p-6">
        <h2 className="text-sm font-semibold mb-4 text-gray-400 uppercase tracking-widest">
          Featured Models
        </h2>

        {/* Horizontal scroll container */}
        <div className="flex gap-4 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-72 h-48 rounded-lg bg-neutral-900 border border-neutral-800 overflow-hidden cursor-pointer hover:border-neutral-600 transition-colors"
            >
              {/* Placeholder for video/image */}
              <div className="w-full h-28 bg-neutral-800" />

              <div className="p-3">
                <p className="text-xs font-black uppercase tracking-wide text-yellow-300">
                  {card.title}
                </p>
                <p className="text-xs text-neutral-500 mt-1">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}