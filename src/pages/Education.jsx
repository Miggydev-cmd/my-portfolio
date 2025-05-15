import React from "react";

const educationData = [
  {
    title: "PHINMA University of Pangasinan",
    subtitle: "Bachelor of Science in Computer Engineering",
    year: "2021 – Present",
    description:
      "Currently pursuing a bachelor's degree with focus on electronics, embedded systems, and web development.",
  },
  {
    title: "Bayambang National High School",
    subtitle: "Senior High School – STEM Track (With Honors)",
    year: "2019 – 2021",
    description:
      "Developed foundational knowledge in science, mathematics, and computing. Graduated with honors.",
  },
  {
    title: "Bayambang National High School",
    subtitle: "Junior High School (With Honors)",
    year: "2015 – 2019",
    description:
      "Built strong academic fundamentals and received consistent academic recognition.",
  },
  {
    title: "Bayambang Central School",
    subtitle: "Elementary (Top 10, With Honors)",
    year: "2009 – 2015",
    description:
      "Early education with top performance in academics, communication, and leadership.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen px-6 py-24 bg-[#0c0c1d] text-white relative overflow-hidden"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          My <span className="text-pink-500">Education</span>
        </h2>
        <div className="w-24 h-1 bg-pink-500 mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-purple-500 z-0"></div>

        <div className="grid gap-16">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`relative flex items-center w-full ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`w-full md:w-1/2 p-6 rounded-xl bg-[#1e1e2b] border border-white/10 shadow-lg z-10 ${
                  index % 2 === 0 ? "mr-auto" : "ml-auto"
                }`}
              >
                <h3 className="text-lg font-bold text-white">
                  {edu.title}
                </h3>
                <p className="text-sm text-purple-400">{edu.subtitle}</p>
                <p className="text-xs text-white/50 mb-2">{edu.year}</p>
                <p className="text-sm text-white/80">{edu.description}</p>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-purple-500 border-4 border-[#0c0c1d] rounded-full z-20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
