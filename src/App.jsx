import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Hobbies from './pages/Hobbies';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen font-sans bg-gradient-to-br from-black via-[#0f002f] to-[#190040] text-white overflow-hidden scroll-smooth">
      {/* Decorative Background Blurs */}
      <div className="absolute top-[-100px] left-[-80px] w-[300px] h-[300px] bg-purple-600 opacity-20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-[-100px] right-[-80px] w-[300px] h-[300px] bg-blue-700 opacity-20 rounded-full blur-2xl z-0"></div>
      <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500 opacity-10 rounded-full blur-[200px] z-0 hidden md:block"></div>

      {/* Main Layout */}
      <div className="relative z-10">
        <Header />

        <main className="px-6 md:px-12 py-10 space-y-32 animate-fade-in-up">
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="education"><Education /></section>
          <section id="skills"><Skills /></section>
          <section id="hobbies"><Hobbies /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
