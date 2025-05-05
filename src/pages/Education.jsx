import React from "react";

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen px-6 py-20 bg-gradient-to-r from-black via-[#0b0026] to-[#180034] text-white relative overflow-hidden flex items-center justify-center"
    >
      {/* Animated Background Effects */}
      <div className="absolute top-[-80px] left-[-80px] w-96 h-96 bg-purple-700 rounded-full blur-[120px] opacity-30 animate-ping z-0"></div>
      <div className="absolute bottom-[-60px] right-[-60px] w-80 h-80 bg-pink-500 rounded-full blur-[100px] opacity-20 animate-pulse z-0"></div>

      <div className="max-w-4xl mx-auto z-10 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-400 mb-12 tracking-wide animate-slide-in-left">
          Education
        </h2>

        <div className="space-y-8">
          {[
            {
              title: "PHINMA University of Pangasinan",
              detail: "Bachelor of Science in Computer Engineering",
              year: "2021 – Present",
            },
            {
              title: "Bayambang National High School",
              detail: "Senior High School – STEM Track (With Honors)",
              year: "2019 – 2021",
            },
            {
              title: "Bayambang National High School",
              detail: "Junior High School (With Honors)",
              year: "2015 – 2019",
            },
            {
              title: "Bayambang Central School",
              detail: "Elementary (Top 10, With Honors)",
              year: "2009 – 2015",
            },
          ].map((edu, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border-l-4 border-purple-500 pl-6 py-4 px-4 rounded-lg shadow-lg transition transform hover:scale-[1.02] hover:shadow-purple-500/30"
            >
              <h3 className="text-xl md:text-2xl font-semibold">{edu.title}</h3>
              <p className="text-white/70">{edu.detail}</p>
              <p className="text-white/50 text-sm mt-1">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
