import React from "react";
import {
  FaDownload,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-black via-[#0f002f] to-[#190040] text-white font-sans relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/twinkle.svg')] bg-repeat opacity-5 z-0 pointer-events-none animate-slow-move" />

      <div className="max-w-7xl mx-auto px-6 py-28 md:py-36 grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
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
            I'm a Computer Engineering student at PHINMA University of
            Pangasinan, passionate about full-stack development, UI/UX, and
            real-time responsive web apps.
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

        <div className="relative flex justify-center items-center animate-fade-in-up group">
          <div className="absolute -top-16 -left-16 w-[520px] h-[520px] z-0 filter blur-[40px] opacity-80 mix-blend-lighten pointer-events-none">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <defs>
                <radialGradient id="markerBlob1" cx="50%" cy="50%" r="75%">
                  <stop offset="0%" stopColor="#8e2de2" />
                  <stop offset="50%" stopColor="#c471ed" />
                  <stop offset="100%" stopColor="#f64f59" />
                </radialGradient>
              </defs>
              <path
                fill="url(#markerBlob1)"
                d="M48.3,-65.4C62.8,-56.4,74.2,-41.8,77.8,-26.1C81.4,-10.4,77.2,6.5,68.6,20.9C60,35.2,47,47.1,32.4,54.2C17.8,61.3,1.6,63.7,-13.8,64.4C-29.1,65.1,-43.6,64.1,-54.6,55.3C-65.6,46.5,-73.1,30,-75.3,13.1C-77.5,-3.8,-74.5,-20.9,-65.6,-33.5C-56.8,-46.1,-41.9,-54.1,-26.5,-61.5C-11.1,-68.8,4.9,-75.5,20.6,-74.8C36.4,-74.2,51.9,-66.4,48.3,-65.4Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          <div className="absolute -bottom-10 -right-20 w-[500px] h-[500px] z-0 filter blur-[40px] opacity-80 mix-blend-lighten pointer-events-none">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <defs>
                <radialGradient id="markerBlob2" cx="50%" cy="50%" r="75%">
                  <stop offset="0%" stopColor="#f64f59" />
                  <stop offset="50%" stopColor="#c471ed" />
                  <stop offset="100%" stopColor="#12c2e9" />
                </radialGradient>
              </defs>
              <path
                fill="url(#markerBlob2)"
                d="M43.1,-56.2C56.5,-49.2,68.5,-37.4,71.7,-23.3C74.9,-9.2,69.4,7.1,63.4,22.3C57.4,37.6,50.9,51.9,39.7,61.2C28.5,70.4,12.7,74.6,-3.7,78.4C-20.1,82.2,-40.1,85.6,-53.4,77.4C-66.7,69.1,-73.2,49.2,-76.7,30.6C-80.3,12.1,-80.9,-5.2,-72.6,-19.5C-64.3,-33.8,-47,-45,-30.2,-50.7C-13.3,-56.3,2.9,-56.5,18.6,-57.2C34.3,-57.9,48.6,-59.1,43.1,-56.2Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          <img
            src="/profile.png"
            alt="Joshua Gutierrez"
            className="w-[320px] md:w-[400px] object-contain rounded-full border-4 border-purple-500 shadow-2xl relative z-10"
          />
        </div>
      </div>

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
