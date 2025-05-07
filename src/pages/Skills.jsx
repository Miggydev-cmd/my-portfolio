import React from "react";

const skills = [
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Web Development",
  "Embedded Systems",
  "Hardware",
  "Microsoft Office (Word, PowerPoint, Excel)",
  "Python",
  "Git",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen px-6 py-20 bg-gradient-to-br from-[#0d001f] via-[#180034] to-black text-white flex items-center justify-center overflow-hidden"
    >
      <div className="absolute w-[300px] h-[300px] bg-purple-700 rounded-full blur-[120px] opacity-20 top-[-100px] left-[-80px] animate-ping-slow"></div>
      <div className="absolute w-[200px] h-[200px] bg-pink-400 rounded-full blur-[100px] opacity-30 top-[30%] right-[5%] animate-pulse"></div>
      <div className="absolute w-[280px] h-[280px] bg-indigo-600 rounded-full blur-[120px] opacity-25 bottom-[10%] left-[10%] animate-float"></div>

      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05] animate-stars pointer-events-none z-0"></div>

      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white rounded-full opacity-20 animate-twinkle`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto space-y-10 relative z-10 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-center text-purple-500 mb-8">
          My <span className="text-pink-500">Skills</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm p-5 rounded-xl shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-purple-400/30 animate-float-soft"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="text-white/90 font-medium tracking-wide">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes stars {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 100px 100px;
          }
        }

        .animate-stars {
          animation: stars 100s linear infinite;
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float-soft {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-float-soft {
          animation: float-soft 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
