import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

const API_BASE = "http://127.0.0.1:8000";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/projects/`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(() => {
        setProjects([
          {
            title: "SignSpeak: Filipino Sign Language Translator",
            description:
              "Thesis project that uses YOLOv8 and LSTM to translate Filipino sign language into text and speech.",
            image: "/images/projects/signspeak.png",
            tech: ["YOLOv8s", "LSTM", "React", "MediaPipe", "Pytorch", "OpenCV"],
            demoAvailable: false,
            code: "https://github.com/Miggydev-cmd/signspeak-ui.git",
          },
          {
            title: "Quizshow Buzzer w/ Four Buttons",
            description:
              "Arduino-based circuit designed for quiz games with button priority and feedback logic.",
            image: "/images/projects/buzzer.png",
            tech: ["Arduino", "C++", "PCB"],
            demoAvailable: false,
            code: "https://github.com/yourusername/buzzer",
          },
          {
            title: "Arduino Integration Projects",
            description:
              "Mini-projects integrating sensors and logic with Arduino, prototyping automation concepts.",
            image: "/images/projects/arduino.png",
            tech: ["Arduino", "IoT", "C++"],
            demoAvailable: false,
            code: "https://github.com/yourusername/arduino-projects",
          },
        ]);
      });
  }, []);

  const handleDemoUnavailable = () => {
    alert("Demo unavailable. The owner has not uploaded anything yet.");
  };

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-28 bg-[#0c0c1d] text-white relative overflow-hidden"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          My <span className="text-pink-500">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-pink-500 mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="rounded-3xl overflow-hidden shadow-xl bg-gradient-to-b from-[#3f3f3f]/20 to-[#1a1a1a]/50 border border-white/10 hover:shadow-pink-500/20 transition duration-300"
          >
            {proj.image && (
              <img
                src={
                  proj.image.startsWith("http")
                    ? proj.image
                    : `${API_BASE}${proj.image}`
                }
                alt={proj.title}
                className="h-48 w-full object-cover"
              />
            )}

            <div className="p-6 space-y-4">
              <h3 className="text-lg font-bold">{proj.title}</h3>
              <p className="text-sm text-white/70">{proj.description}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {(proj.tech || []).map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-white/10 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center text-sm pt-4 text-purple-400">
                <button
                  onClick={handleDemoUnavailable}
                  className="hover:underline hover:text-white transition"
                >
                  View Demo ↗
                </button>
                <a
                  href={proj.code}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl hover:text-white transition"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-full font-semibold hover:scale-105 transition text-white shadow-lg">
          View All Projects
        </button>
      </div>
    </section>
  );
}
