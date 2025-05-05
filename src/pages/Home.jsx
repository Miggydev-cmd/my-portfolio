import React from "react";
import {
  FaDownload,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTelegramPlane,
  FaGithub,
} from "react-icons/fa";

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-black via-[#0f002f] to-[#190040] text-white relative overflow-hidden font-sans">
      <div className="absolute w-[250px] h-[250px] bg-purple-700 blur-[180px] opacity-25 top-[-100px] left-[-80px] animate-pulse z-0"></div>
      <div className="absolute w-[120px] h-[120px] bg-fuchsia-600 blur-[100px] opacity-30 top-[12%] right-[20%] animate-ping z-0"></div>
      <div className="absolute w-[380px] h-[380px] bg-pink-500 blur-[180px] opacity-25 bottom-[-120px] right-[-100px] animate-fade-in-up z-0"></div>
      <div className="absolute w-[90px] h-[90px] bg-indigo-500 rounded-full blur-3xl top-[58%] left-[10%] opacity-20 animate-bounce z-0"></div>
      <div className="absolute w-[70px] h-[70px] bg-sky-500 rounded-full blur-2xl top-[32%] left-[45%] opacity-15 animate-ping z-0"></div>
      <div className="absolute w-[100px] h-[100px] bg-rose-500 rounded-full blur-2xl top-[72%] right-[25%] opacity-10 animate-fade-in-down z-0"></div>
      
      <div className="absolute inset-0 bg-[url('/twinkle.svg')] bg-repeat opacity-5 z-0 animate-pulse pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-14 relative z-10">
        <div className="space-y-6 animate-fade-in-up">
          <h3 className="text-gray-400 uppercase tracking-widest text-sm">
            Computer Engineering Student
          </h3>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent animate-fade-in-up">
            Joshua Miguel <span className="text-purple-500">Gutierrez</span>
          </h1>
          <p className="text-white/80 text-lg max-w-xl animate-fade-in-up delay-300">
            I'm a Computer Engineering student at PHINMA University of Pangasinan, exploring full-stack web development and accessible tech.
          </p>
          <a
            href="/CV-Joshua.pdf"
            download
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 animate-pop"
          >
            <FaDownload className="animate-pulse" />
            Download CV
          </a>
        </div>

        <div className="flex justify-center items-center relative animate-fade-in-up">
          <div
            className="absolute w-[480px] h-[480px] rounded-full z-0"
            style={{
              background: "radial-gradient(circle, #00C2FF 0%, #C500F9 50%, #FF007A 100%)",
              boxShadow: "0 0 80px rgba(255, 0, 122, 0.35), 0 0 40px rgba(0, 194, 255, 0.25)",
              opacity: 0.9,
            }}
          ></div>

          <img
            src="/profile.png"
            alt="Joshua Gutierrez"
            className="w-[320px] md:w-[400px] object-contain z-10"
          />
        </div>
      </div>

      <div className="hidden lg:flex flex-col gap-5 text-white absolute right-10 top-1/3 z-10 animate-slide-in-left">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="hover:text-purple-500 transition transform hover:scale-125" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-500 transition transform hover:scale-125" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-blue-400 transition transform hover:scale-125" />
        </a>
        <a href="https://t.me" target="_blank" rel="noopener noreferrer">
          <FaTelegramPlane className="hover:text-cyan-400 transition transform hover:scale-125" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-300 transition transform hover:scale-125" />
        </a>
      </div>
    </section>
  );
}
