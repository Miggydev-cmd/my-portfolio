import React from "react";

const technicalSkills = [
  { name: "HTML & CSS", level: 50 },
  { name: "JavaScript", level: 30 },
  { name: "React", level: 75 },
  { name: "Node.js", level: 50 },
  { name: "TypeScript", level: 5 },
];

const designSkills = [
  { name: "UI/UX Design", level: 40 },
  { name: "Figma", level: 30 },
  { name: "Adobe XD", level: 0 },
  { name: "Photoshop", level: 40 },
  { name: "Illustrator", level: 0 },
];

const tools = [
  "Git", "Tailwind CSS",
  "MongoDB", "Firebase", "Django", "Docker"
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen px-6 py-24 bg-[#0c0c1d] text-white relative overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold">My <span className="text-pink-500">Skills</span></h2>
        <div className="w-24 h-1 bg-pink-500 mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white">Technical Skills</h3>
          {technicalSkills.map((skill, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between mb-1 text-sm">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-white">Design Skills</h3>
          {designSkills.map((skill, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between mb-1 text-sm">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <h3 className="text-2xl font-bold mb-6 text-white">Tools & Technologies</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {tools.map((tool, i) => (
            <span
              key={i}
              className="bg-white/10 px-4 py-2 rounded-full text-sm text-white/80 hover:bg-white/20 transition"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
