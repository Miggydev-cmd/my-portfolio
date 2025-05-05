import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function About() {
  const [showMore, setShowMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const shortText = `
    My journey as a Computer Engineering student at PHINMA University of Pangasinan has been filled with growth, learning, and unforgettable moments. 
    From debugging code late at night to building projects and joining competitions, I've developed both technical skills and strong determination.
  `;

  const fullText = `
    I started out curious and excited, yet unsure of what was ahead. Subjects like programming, electronics, and logic became both my passions and challenges.
    Thanks to the support of my professors and classmates, I learned to be patient and persistent.

    In my second and third years, I dove into projects, research, and teamwork. I joined conventions, built systems, and discovered how fun it is to collaborate. 
    One memorable experience was winning a dance contest with my team during a regional event—it showed me that being an engineer also means being confident and adaptable.

    I attended seminars on AI, IoT, and cybersecurity, which sparked my interest in future tech. Now in my final year, I’m working on SignSpeak, our capstone project that translates sign language to text and speech.
    It's the most meaningful work I’ve done, combining my tech skills with a real-world impact.

    College has taught me more than just technical knowledge—I've learned time management, resilience, and the power of staying curious. 
    Events like BSCpE Week and Project Exhibitions gave me the chance to grow, connect, and celebrate this amazing journey.
  `;

  return (
    <section
      id="about"
      className="min-h-screen px-6 md:px-20 py-32 bg-gradient-to-br from-black via-[#0f002f] to-[#190040] text-white relative overflow-hidden flex items-center justify-center"
    >
      {/* 🌈 Enhanced Light Beams */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] rotate-[25deg] bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse opacity-15"></div>
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] rotate-[50deg] bg-gradient-to-r from-transparent via-fuchsia-400/10 to-transparent animate-pulse opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-white/10 via-purple-500/5 to-transparent rounded-full blur-3xl opacity-20 animate-slow-move"></div>
      </div>

      {/* 🔮 Orb Lights */}
      <div className="absolute w-[250px] h-[250px] bg-purple-700 blur-[180px] opacity-25 top-[-100px] left-[-80px] animate-pulse z-0"></div>
      <div className="absolute w-[120px] h-[120px] bg-fuchsia-600 blur-[100px] opacity-30 top-[12%] right-[20%] animate-ping z-0"></div>
      <div className="absolute w-[380px] h-[380px] bg-pink-500 blur-[180px] opacity-25 bottom-[-120px] right-[-100px] animate-fade-in-up z-0"></div>
      <div className="absolute w-[90px] h-[90px] bg-indigo-500 rounded-full blur-3xl top-[58%] left-[10%] opacity-20 animate-bounce z-0"></div>
      <div className="absolute w-[70px] h-[70px] bg-sky-500 rounded-full blur-2xl top-[32%] left-[45%] opacity-15 animate-ping z-0"></div>
      <div className="absolute w-[100px] h-[100px] bg-rose-500 rounded-full blur-2xl top-[72%] right-[25%] opacity-10 animate-fade-in-down z-0"></div>

      {/* 🌠 Twinkling Stars */}
      <div className="absolute inset-0 bg-[url('/twinkle.svg')] bg-repeat opacity-5 pointer-events-none z-0 animate-slow-move"></div>

      {/* 💠 Rhombus Light Rays */}
      <div className="absolute w-[200px] h-[200px] rotate-45 bg-white/5 blur-2xl opacity-10 z-0 top-[30%] left-[50%] animate-spin-slow"></div>
      <div className="absolute w-[220px] h-[220px] rotate-[30deg] bg-white/5 blur-2xl opacity-10 z-0 top-[50%] left-[30%] animate-spin-slower"></div>
      <div className="absolute w-[180px] h-[180px] rotate-[60deg] bg-white/5 blur-2xl opacity-5 z-0 bottom-[10%] right-[20%] animate-spin-slower"></div>

      {/* 👤 Profile + Bio */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16 relative z-10">
        <div className="flex justify-center">
          <div className="relative animate-fade-in-up">
            <div className="absolute w-[320px] h-[320px] bg-gradient-to-br from-purple-700 via-transparent to-pink-500 rounded-full blur-[100px] opacity-30 z-0"></div>
            <img
              src="/about-illustration.png"
              alt="About me"
              className="w-[320px] md:w-[400px] object-contain relative z-10"
            />
          </div>
        </div>

        <div className="space-y-6 animate-fade-in-up">
          <div className="flex items-center gap-3">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-none">
              About <br />
              <span className="text-purple-400">me</span>
            </h2>
            <FaArrowRight className="text-pink-500 text-4xl animate-bounce" />
          </div>

          <div className="text-white/80 leading-relaxed text-justify space-y-4">
            <p>{shortText}</p>
            {showMore && <p>{fullText}</p>}
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-purple-400 underline hover:text-pink-400 transition text-sm"
            >
              {showMore ? "See less" : "See more"}
            </button>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300 shadow-lg"
          >
            Know more about me
          </button>
        </div>
      </div>

      {/* 🧾 Modal Details */}
      {showModal && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-20">
          <div className="bg-[#140c1c] border border-white/10 rounded-xl max-w-md w-full p-6 animate-fade-in-up shadow-xl">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Personal Details</h3>
            <ul className="text-white/80 space-y-2 text-sm">
              <li><strong>👶 Date of Birth:</strong> December 2, 2002</li>
              <li><strong>📍 Place of Birth:</strong> Quezon City, Philippines</li>
              <li><strong>🎂 Age:</strong> 22</li>
              <li><strong>🧬 Status:</strong> Single</li>
              <li><strong>📚 Religion:</strong> Roman Catholic</li>
              <li><strong>🎓 Nationality:</strong> Filipino</li>
            </ul>

            {expanded && (
              <div className="mt-4 text-white/80 text-sm leading-relaxed space-y-2">
                <p>I’m passionate about embedded systems, web development, and UI/UX design.</p>
                <p>I love solving real-world problems with code and building helpful tech.</p>
                <p>Outside tech, I enjoy music, road trips, and creating meaningful experiences.</p>
              </div>
            )}

            <button
              className="mt-3 text-purple-400 underline text-sm hover:text-purple-300"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "See less" : "See more"}
            </button>

            <button
              onClick={() => {
                setShowModal(false);
                setExpanded(false);
              }}
              className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
