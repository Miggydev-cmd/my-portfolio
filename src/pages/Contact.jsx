import React from "react";

export default function Contact() {
  return (
    <section className="relative min-h-screen px-6 py-20 bg-gradient-to-br from-black via-[#0f002f] to-[#190040] text-white overflow-hidden flex flex-col items-center justify-center">
      {/* 🔮 Background Blurs */}
      <div className="absolute top-[-120px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-tr from-fuchsia-600 via-purple-700 to-transparent rounded-full blur-[160px] opacity-30 z-0"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-gradient-to-tr from-purple-600 via-pink-600 to-transparent rounded-full blur-[180px] opacity-30 z-0"></div>

      {/* 🟣 Right Dot Grid */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 z-0">
        <div className="grid grid-cols-5 gap-4">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-purple-500/30 rounded-full" />
          ))}
        </div>
      </div>

      {/* 🌓 Left Arc Accent */}
      <div className="absolute top-32 left-0 w-[300px] h-[300px] z-0 overflow-hidden">
        <div className="w-full h-full rounded-full border-[50px] border-transparent border-l-fuchsia-600 border-t-purple-700 rotate-[-45deg]"></div>
      </div>

      {/* 💬 Contact Form Container */}
      <div className="relative z-10 w-full max-w-2xl bg-white/5 backdrop-blur-md rounded-2xl p-10 shadow-xl animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
          Contact <span className="text-purple-400">me</span>
        </h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Full name"
            className="w-full p-4 rounded-lg bg-white/10 text-white placeholder-white/50"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-lg bg-white/10 text-white placeholder-white/50"
          />
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full p-4 rounded-lg bg-white/10 text-white placeholder-white/50"
          />
          <button className="w-full bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-full text-white font-semibold transition">
            Send Message
          </button>
        </form>
      </div>

      {/* 🎯 Bottom Arrow */}
      <div className="absolute left-[15%] bottom-[15%] text-5xl text-pink-500 rotate-180 animate-bounce z-0">
        <span>&larr;</span>
      </div>
    </section>
  );
}
