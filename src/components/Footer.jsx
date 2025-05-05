import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 py-8 text-center text-sm text-gray-400 border-t border-white/10">
      <p>&copy; {new Date().getFullYear()} Joshua Miguel Gutierrez. All rights reserved.</p>
      <p className="mt-1">Built with Passion using React + Vite and TailwindCSS</p>
    </footer>
  );
}
