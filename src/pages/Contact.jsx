import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  const recaptchaRef = useRef(null);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert("Please verify that you are not a robot.");
      return;
    }
    alert("Message submitted! (Simulated)");
  };

  return (
    <section className="min-h-screen px-6 py-24 bg-gradient-to-br from-[#0b0025] via-[#11002d] to-[#180034] text-white relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/twinkle.svg')] bg-repeat opacity-[0.04] animate-stars pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/5 via-purple-700/5 to-transparent opacity-30 blur-3xl z-0" />

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-pink-500">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-pink-500 mb-8 rounded-full"></div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                required
                className="w-full p-4 rounded-md bg-white/5 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="Your email"
                required
                className="w-full p-4 rounded-md bg-white/5 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Your message"
                required
                className="w-full p-4 rounded-md bg-white/5 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>

            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LfhKjsrAAAAAMulK41YE3fbK6PuzJMP4SMZO4g3" // 🔁 Replace this with your actual site key
              onChange={handleCaptchaChange}
              className="mt-4"
            />

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-xl">
          <h3 className="text-xl font-bold mb-6">Contact Information</h3>
          <div className="space-y-4 text-white/80 text-sm">
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-pink-500 text-lg mt-1" />
              <div>
                <p className="text-white font-medium">Email</p>
                <p>joga.gutierrez.up@phinmaed.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaPhone className="text-pink-500 text-lg mt-1" />
              <div>
                <p className="text-white font-medium">Phone</p>
                <p>+63 915 925 0806</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-pink-500 text-lg mt-1" />
              <div>
                <p className="text-white font-medium">Location</p>
                <p>Bayambang, Pangasinan</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm font-medium mb-3 text-white">Follow Me</p>
            <div className="flex gap-4 text-lg">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-pink-400"><FaGithub /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-pink-400"><FaLinkedin /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-pink-400"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
