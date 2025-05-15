import React from "react";
import { FaCamera, FaHiking, FaBook, FaMusic, FaCheckCircle } from "react-icons/fa";

export default function Hobbies() {
  return (
    <section
      id="hobbies"
      className="min-h-screen px-6 py-28 bg-[#0c0c1d] text-white relative overflow-hidden"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          My <span className="text-pink-500">Hobbies</span>
        </h2>
        <div className="w-24 h-1 bg-pink-500 mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[
          {
            icon: <FaCamera className="text-4xl text-pink-400" />,
            title: "Photography",
            desc: "Capturing moments and exploring visual storytelling through my lens.",
          },
          {
            icon: <FaHiking className="text-4xl text-pink-400" />,
            title: "Hiking",
            desc: "Exploring nature trails and enjoying the great outdoors.",
          },
          {
            icon: <FaBook className="text-4xl text-pink-400" />,
            title: "Reading",
            desc: "Diving into books about technology, design, and science fiction.",
          },
          {
            icon: <FaMusic className="text-4xl text-pink-400" />,
            title: "Music",
            desc: "Playing guitar and piano in my free time to unwind and relax.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center space-y-3 hover:shadow-pink-400/20 transition"
          >
            <div>{item.icon}</div>
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-sm text-white/70">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* What I Do Section */}
      <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl shadow-md p-8 space-y-6">
        <h3 className="text-xl md:text-2xl font-bold text-center text-white">
          What I Do In My Free Time
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-white/80">
          {[
            "Contributing to open-source projects",
            "Writing tech articles and tutorials",
            "Experimenting with new technologies",
            "Cooking international cuisines",
            "Attending tech meetups and conferences",
            "Exploring creative and diverse hobbies",
          ].map((activity, i) => (
            <p key={i} className="flex items-start gap-2">
              <FaCheckCircle className="text-purple-400 mt-1" />
              {activity}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
