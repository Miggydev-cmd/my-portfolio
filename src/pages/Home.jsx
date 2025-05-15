import React from "react";
import { FaDownload, FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-black via-[#0f002f] to-[#190040] text-white font-sans relative overflow-hidden"
    >
      {/* ✨ Background Stars */}
      <div className="absolute inset-0 bg-[url('/twinkle.svg')] bg-repeat opacity-5 z-0 animate-slow-move pointer-events-none" />

      {/* 🔥 Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-28 md:py-36 grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
        {/* 📝 Text Block */}
        <div className="space-y-6 animate-slide-in-left">
          <h3 className="text-sm uppercase text-gray-400 tracking-wider">
            Computer Engineering Student
          </h3>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent animate-text-glow">
              Joshua Miguel Gutierrez
            </span>
          </h1>
          <p className="text-white/80 text-lg max-w-xl animate-fade-in-up">
            I'm a Computer Engineering student at PHINMA University of Pangasinan, passionate about full-stack development, UI/UX, and real-time responsive web apps.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/CV-Joshua.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:scale-105 transition shadow-lg"
            >
              <FaDownload className="animate-pulse" />
              Download CV
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* 👤 Profile Avatar with 2 Ditto Blobs */}
        <div className="relative flex justify-center items-center animate-fade-in-up group">
          {/* Blob 1 */}
          <div className="absolute -top-16 -left-20 w-[540px] h-[540px] z-0 transition-transform duration-500 group-hover:scale-105">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <radialGradient id="blobGradient1" cx="50%" cy="50%" r="75%">
                  <stop offset="0%" stopColor="#00C2FF" />
                  <stop offset="50%" stopColor="#C500F9" />
                  <stop offset="100%" stopColor="#FF007A" />
                </radialGradient>
              </defs>
              <path
                fill="url(#blobGradient1)"
                d="M44.8,-61.6C58.3,-55.5,69.3,-43.2,73.8,-29.4C78.3,-15.5,76.3,-0.1,69.1,13.6C61.9,27.3,49.4,39.3,35.3,47.6C21.2,56,5.6,60.8,-10.6,64C-26.8,67.2,-43.7,68.7,-55.3,60C-66.8,51.2,-73.1,32.2,-75.4,13.3C-77.6,-5.6,-75.7,-24.4,-66.5,-36.7C-57.4,-49,-41.2,-54.9,-25.8,-60.4C-10.4,-65.9,4.2,-71.1,19.6,-69.5C35.1,-67.9,52.2,-59.7,44.8,-61.6Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          {/* Blob 2 */}
          <div className="absolute -bottom-10 -right-20 w-[520px] h-[520px] z-0 transition-transform duration-500 group-hover:scale-105">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <radialGradient id="blobGradient2" cx="50%" cy="50%" r="75%">
                  <stop offset="0%" stopColor="#FF007A" />
                  <stop offset="50%" stopColor="#C500F9" />
                  <stop offset="100%" stopColor="#00C2FF" />
                </radialGradient>
              </defs>
              <path
                fill="url(#blobGradient2)"
                d="M43.1,-56.2C56.5,-49.2,68.5,-37.4,71.7,-23.3C74.9,-9.2,69.4,7.1,63.4,22.3C57.4,37.6,50.9,51.9,39.7,61.2C28.5,70.4,12.7,74.6,-3.7,78.4C-20.1,82.2,-40.1,85.6,-53.4,77.4C-66.7,69.1,-73.2,49.2,-76.7,30.6C-80.3,12.1,-80.9,-5.2,-72.6,-19.5C-64.3,-33.8,-47,-45,-30.2,-50.7C-13.3,-56.3,2.9,-56.5,18.6,-57.2C34.3,-57.9,48.6,-59.1,43.1,-56.2Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          {/* Avatar */}
          <img
            src="/profile.png"
            alt="Joshua Gutierrez"
            className="w-[320px] md:w-[400px] object-contain rounded-full border-4 border-purple-500 shadow-2xl relative z-10"
          />
        </div>
      </div>

      {/* 🔗 Social Links */}
      <div className="hidden lg:flex flex-col gap-5 text-white absolute right-10 top-1/3 z-10 animate-slide-in-left">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookF className="hover:text-purple-500 hover:scale-125 transition" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram className="hover:text-pink-500 hover:scale-125 transition" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter className="hover:text-blue-400 hover:scale-125 transition" />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <FaGithub className="hover:text-gray-300 hover:scale-125 transition" />
        </a>
      </div>
    </section>
  );
}
