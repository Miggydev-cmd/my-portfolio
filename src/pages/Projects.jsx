import React, { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/projects/")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => {
        console.error("Failed to fetch backend. Using static fallback.", err);
        setProjects([
          {
            title: "SignSpeak: Filipino Sign Language Translator",
            description:
              "Thesis project that uses YOLOv8 and LSTM to translate Filipino sign language into text and speech. Supports English and Filipino output with a user-friendly web app interface for accessibility.",
            image: "/images/projects/signspeak.png",
          },
          {
            title: "Quizshow Buzzer w/ Four Buttons",
            description:
              "Arduino-based project involving circuit design, soldering, and PCB integration. Developed for team competitions, with focus on functionality, team collaboration, and iterative improvements.",
            image: "/images/projects/buzzer.png",
          },
          {
            title: "Arduino Integration Projects",
            description:
              "Hands-on work with Arduino boards to build small automated systems. Includes hardware debugging, problem-solving, and combining code with real-world logic for interactive outputs.",
            image: "/images/projects/arduino.png",
          },
        ]);
      });
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-24 bg-gradient-to-br from-black via-[#12002f] to-[#1a0034] text-white relative overflow-hidden"
    >
      <div className="absolute w-[400px] h-[400px] bg-purple-700 rounded-full blur-[160px] top-[10%] left-[10%] opacity-20 animate-pulse -z-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-fuchsia-600 rounded-full blur-[130px] top-[60%] right-[5%] opacity-20 animate-bounce -z-10"></div>
      <div className="absolute top-[20%] left-[12%] w-40 h-32 grid grid-cols-6 gap-2 opacity-10 z-0">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-white rounded-full" />
        ))}
      </div>
      <div className="absolute bottom-[1%] right-[10%] w-40 h-32 grid grid-cols-6 gap-2 opacity-10 z-0">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-white rounded-full" />
        ))}
      </div>
      <div className="absolute left-[10%] top-[40%] text-purple-500 text-6xl font-bold z-0 animate-bounce">↓</div>
      <div className="absolute left-[6%] bottom-[30%] text-white text-3xl opacity-10 z-0 rotate-45">+</div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center animate-fade-in-up">
          My <span className="text-purple-500">Projects</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, index) => (
            <div
              key={index}
              className={`bg-white/5 rounded-3xl shadow-xl transition-all duration-500 overflow-hidden cursor-pointer relative
                ${activeIndex === index ? "scale-110 z-20 shadow-purple-600/40" : "hover:scale-105"}`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <img
                src={proj.image || "/images/projects/default.png"}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">{proj.title}</h3>
                <p className="text-sm text-white/70">
                  {activeIndex === index
                    ? proj.description
                    : proj.description?.slice(0, 100) + "..."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
