import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function About() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      id="about"
      className="relative min-h-screen px-6 md:px-20 py-32 bg-[#0c0c1d] text-white flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12 z-10">

        <div className="flex justify-center">
          <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-600 via-purple-700 to-blue-600 blur-3xl opacity-30 animate-pulse z-0"></div>
            <img
              src="/profile2.png"
              alt="Profile2"
              className="relative z-10 rounded-full w-full h-full object-cover shadow-lg border-4 border-[#1e1e2f]"
            />
          </div>
        </div>

        <div className="space-y-6 text-white">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            About <span className="text-blue-400">Me</span>
          </h2>
          <hr className="w-24 border-blue-400 border-t-4 rounded-full" />

          <p className="text-gray-300 leading-relaxed">
            I’m a passionate web developer and designer currently pursuing a Bachelor of Science in Computer Engineering at PHINMA University of Pangasinan. As a student, I’ve developed a strong enthusiasm for both software and hardware technologies—especially in building responsive websites and crafting hands-on hardware projects that bring ideas to life.
          </p>
          <p className="text-gray-300 leading-relaxed">
            While my current knowledge is still growing, I’m a quick and eager learner who embraces challenges with curiosity and persistence. Whether it's learning new frameworks, debugging code, or prototyping hardware circuits, I find joy in every step of the creative and technical process.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Beyond coding, I explore UI/UX design trends and dive into side-projects that allow me to merge creativity with function. I'm driven by a desire to innovate, solve problems, and build digital solutions that are not only useful—but also engaging and accessible.
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm text-white/80 mt-4">
            <div>
              <p><strong className="text-white">Name:</strong><br />Joshua Miguel G. Gutierrez</p>
              <p className="mt-2"><strong className="text-white">From:</strong><br />Bayambang, Pangasinan</p>
            </div>
            <div>
              <p><strong className="text-white">Email:</strong><br />joga.gutierrez.up@phinmaed.com</p>
              <p className="mt-2"><strong className="text-white">Experience:</strong><br />Still studying</p>
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
            >
              Know more about me
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#1c1c2b] rounded-xl p-6 w-[90%] max-w-md text-white shadow-2xl animate-fade-in-up">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Personal Details</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li><strong>👶 Date of Birth:</strong> December 2, 2002</li>
              <li><strong>📍 Place of Birth:</strong> Quezon City, Philippines</li>
              <li><strong>🎂 Age:</strong> 22</li>
              <li><strong>🧬 Status:</strong> Single</li>
              <li><strong>📚 Religion:</strong> Roman Catholic</li>
              <li><strong>🎓 Nationality:</strong> Filipino</li>
            </ul>

            <button
              onClick={() => setShowModal(false)}
              className="mt-6 w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-md transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
