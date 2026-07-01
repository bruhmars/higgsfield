import { Appbar } from "../components/Appbar";

const CARDS = [
  { id: 1, title: "GEMINI OMNI FLASH", subtitle: "Generate and edit video from any input" },
  { id: 2, title: "NANO BANANA 2 LITE", subtitle: "Rapid generation with sharp in-image text" },
  { id: 3, title: "SEED AUDIO 1.0", subtitle: "Multi-speaker scenes with spatial depth" },
  { id: 4, title: "FLUX KONTEXT MAX", subtitle: "Context-aware image transformation" },
  { id: 5, title: "RUNWAY GEN-4", subtitle: "Consistent characters across scenes" },
  { id: 6, title: "SORA TURBO", subtitle: "Long-form cinematic video generation" },
];

const GRID_CARDS = [
  { id: 1, title: "Nano Banana Pro", subtitle: "Generate high-quality visuals", icon: "G", tag: null, type: "Image" },
  { id: 2, title: "Seedance 2.0", subtitle: "Create high-quality videos in seconds", icon: "📊", tag: null, type: "Video" },
  { id: 3, title: "Nano Banana 2 Lite", subtitle: "Lightweight image generation at speed", icon: "🍌", tag: "NEW", type: null },
  { id: 4, title: "MCP & CLI", subtitle: "Turn Claude into a creative engine", icon: "✳", tag: "TRENDING", type: null },
  { id: 5, title: "Gemini Omni Flash", subtitle: "Generate and edit video from any input", icon: "✦", tag: "NEW", type: null },
  { id: 6, title: "Cinema Studio 3.5", subtitle: "Create cinematic scenes effortlessly", icon: "🎞", tag: null, type: null },
];

export function Landing() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Appbar />

      <div className="p-6">
        {/* Row 1 — horizontal scroll */}
        <h2 className="text-sm font-semibold mb-4 text-gray-400 uppercase tracking-widest">
          Featured Models
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="group flex-shrink-0 w-72 h-48 rounded-lg bg-neutral-900 border border-neutral-800 overflow-hidden cursor-pointer hover:border-neutral-600 transition-colors"
            >
              <div className="w-full h-28 bg-neutral-800" />
              <div className="p-3">
                <p className="text-xs font-black uppercase tracking-wide text-white group-hover:text-yellow-300 transition-colors">
                  {card.title}
                </p>
                <p className="text-xs text-neutral-500 mt-1">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 — promo banner + grid */}
        <div className="flex gap-4 mt-8">

          {/* Promo banner */}
          <div
            className="flex-shrink-0 w-72 rounded-xl overflow-hidden relative cursor-pointer"
            style={{ background: "linear-gradient(135deg, #0f4c5c 0%, #1a6b7a 50%, #0d3d4a 100%)", minHeight: 260 }}
          >
            <div className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
              ♦ EXTRA DISCOUNT
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
              <h3 className="text-xl font-black uppercase leading-tight">
                SIGN UP AND GET YOUR{" "}
                <span className="text-cyan-400">EXTRA DISCOUNT</span>
              </h3>
              <p className="text-xs text-gray-300 mt-1 mb-3">
                Create an account and unlock additional discount
              </p>
              <button className="bg-white text-black text-sm font-semibold px-4 py-2 rounded-lg w-full hover:bg-gray-100 transition-colors">
                Sign up and get your discount
              </button>
            </div>

            <div
              className="absolute inset-0 opacity-20"
              style={{ background: "radial-gradient(circle at 70% 40%, #ffffff22 0%, transparent 60%)" }}
            />
          </div>

          {/* 2x3 grid */}
          <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-3">
            {GRID_CARDS.map((card) => (
              <div
                key={card.id}
                className="group bg-neutral-900 border border-neutral-800 rounded-xl p-4 cursor-pointer hover:border-neutral-700 hover:bg-neutral-800 transition-all relative overflow-hidden"
              >
                {/* Tag badge */}
                {card.tag && (
                  <span className={`absolute top-3 right-3 text-xs font-black px-2 py-0.5 rounded z-10 ${card.tag === "NEW" ? "bg-yellow-300 text-black" : "bg-pink-600 text-white"
                    }`}>
                    {card.tag}
                  </span>
                )}

                {/* Type badge */}
                {card.type && (
                  <span className="absolute top-3 right-3 text-xs text-neutral-300 bg-neutral-700 px-2 py-1 rounded-lg flex items-center gap-1 z-10">
                    {card.type === "Image" ? "🖼" : "📹"} {card.type}
                  </span>
                )}

                {/* Icon */}
                <div className="text-2xl mb-8">{card.icon}</div>

                {/* Text */}
                <div className="mt-auto">
                  <p className="text-sm font-bold text-white">
                    {card.title}
                  </p>
                  <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Hero banner — Seedance 2.0 */}
      <div
        className="mt-8 rounded-2xl overflow-hidden relative cursor-pointer"
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)",
          border: "6px solid #2a2a2a",
          boxShadow: "inset 0 0 40px rgba(0,0,0,0.8)",
          minHeight: 340,
        }}
      >
        {/* Fake screen bg */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, #0a1628 0%, #1a0a2e 40%, #0d1a0d 100%)" }}
        />

        {/* 4K badge */}
        <div className="absolute top-4 right-4 border-2 border-yellow-300 text-yellow-300 text-xs font-black px-2 py-1 tracking-widest z-10">
          ║ 4K
        </div>

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-6">
          <h2
            className="font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(48px, 8vw, 96px)", color: "#c8ff00", textShadow: "0 0 40px rgba(200,255,0,0.4)" }}
          >
            SEEDANCE 2.0
          </h2>

          <div className="mt-3 bg-black/60 backdrop-blur-sm border border-white/20 text-white font-bold text-sm px-6 py-2 rounded-full tracking-widest">
            NOW IN 4K
          </div>

          <p className="mt-3 text-yellow-300 font-black text-xs tracking-widest uppercase">
            ALREADY AVAILABLE IN HIGGSFIELD
          </p>

          <button className="mt-4 bg-yellow-300 text-black font-bold text-sm px-8 py-2.5 rounded-lg hover:bg-yellow-200 transition-colors">
            Try now
          </button>
        </div>

        {/* Vignette overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ boxShadow: "inset 0 0 80px rgba(0,0,0,0.7)", borderRadius: "inherit" }}
        />
      </div>

      {/* Viral Presets Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-black uppercase text-yellow-300 tracking-tight">
          HIGGSFIELD VIRAL PRESETS
        </h2>
        <p className="text-sm text-neutral-400 mt-1 mb-6">
          Big-budget visual effects, from explosions to surreal transformations.
        </p>

        {/* Filter chips with scroll arrows */}
        <div className="relative flex items-center gap-2 mb-6">
          <button className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white hover:bg-neutral-700 transition-colors">
            ‹
          </button>

          <div className="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {["BASEBALL GAME", "DRIFT RACING", "CGI BREAKDOWN", "FOOTBALL INVADER", "SUMMER HAZE", "KUNG FU HIT", "FINAL SERVE", "ANDROID ASSEMBLE", "3D RENDER", "STORM CHASER"].map((tag) => (
              <button
                key={tag}
                className="flex-shrink-0 text-xs font-bold border border-neutral-600 text-white px-4 py-2 rounded-full hover:border-white hover:bg-neutral-800 transition-colors tracking-widest whitespace-nowrap"
              >
                {tag}
              </button>
            ))}
          </div>

          <button className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white hover:bg-neutral-700 transition-colors">
            ›
          </button>
        </div>

        {/* 4-column image grid */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { id: 1, tall: true, bg: "linear-gradient(135deg, #1a1a2e 0%, #2d1b4a 100%)" },
            { id: 2, tall: true, bg: "linear-gradient(135deg, #1a1000 0%, #2a2000 100%)" },
            { id: 3, tall: true, bg: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)" },
            { id: 4, tall: true, bg: "linear-gradient(135deg, #0a2a0a 0%, #1a4a1a 100%)" },
            { id: 5, tall: false, bg: "linear-gradient(135deg, #2a1a0a 0%, #1a0a0a 100%)" },
            { id: 6, tall: false, bg: "linear-gradient(135deg, #0a1a2a 0%, #0a0a1a 100%)" },
            { id: 7, tall: false, bg: "linear-gradient(135deg, #1a0a1a 0%, #2a0a2a 100%)" },
            { id: 8, tall: false, bg: "linear-gradient(135deg, #1a2a0a 0%, #0a1a0a 100%)" },
          ].map((item) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
              style={{ height: item.tall ? 380 : 200, background: item.bg }}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}