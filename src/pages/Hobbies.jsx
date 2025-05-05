import React from "react";

export default function Hobbies() {
  return (
    <section
      id="hobbies"
      className="min-h-screen px-6 py-20 bg-gradient-to-r from-black via-[#0b0026] to-[#180034] text-white relative overflow-hidden flex items-center justify-center"
    >
      {/* 🔮 Floating Blobs */}
      <div className="absolute w-[200px] h-[200px] bg-purple-600 rounded-full blur-[120px] top-[10%] left-[5%] opacity-20 animate-ping"></div>
      <div className="absolute w-[150px] h-[150px] bg-pink-500 rounded-full blur-[100px] bottom-[15%] right-[10%] opacity-20 animate-bounce"></div>

      {/* 🌌 Twinkling Stars */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none z-0 animate-fade-in"></div>

      {/* ✨ Optional Neon Grid Overlay */}
      <div className="absolute inset-0 bg-[url('/images/layered-waves.svg')] opacity-[0.04] z-0 pointer-events-none"></div>

      {/* 🧠 Content */}
      <div className="max-w-4xl mx-auto space-y-8 relative z-10 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-center text-purple-500 mb-8">
          Hobbies
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/80 text-lg">
          <li className="bg-white/5 p-6 rounded-lg shadow hover:shadow-purple-500/30 transition duration-300">
            🎮 Playing video and mobile games (Counter Strike, strategy, League of Legends, Mobile Legends, and Clash of Clans)
          </li>
          <li className="bg-white/5 p-6 rounded-lg shadow hover:shadow-purple-500/30 transition duration-300">
            🎧 Listening to music
          </li>
          <li className="bg-white/5 p-6 rounded-lg shadow hover:shadow-purple-500/30 transition duration-300">
            🏀 Playing basketball
          </li>
          <li className="bg-white/5 p-6 rounded-lg shadow hover:shadow-purple-500/30 transition duration-300">
            🚗 Driving and taking trips or adventures
          </li>
        </ul>
      </div>
    </section>
  );
}
