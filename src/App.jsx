import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen font-sans bg-gradient-to-br from-black via-[#0f002f] to-[#190040] text-white overflow-hidden scroll-smooth">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="parallax-layer absolute inset-0 bg-[url('/twinkle.svg')] bg-repeat opacity-10 animate-stars animate-twinkle"></div>
        <div className="parallax-layer absolute top-[20%] left-[10%] w-40 h-40 bg-purple-600 rounded-full blur-3xl opacity-20"></div>
        <div className="parallax-layer absolute bottom-[30%] right-[5%] w-32 h-32 bg-blue-500 rounded-full blur-2xl opacity-20"></div>
      </div>

      <div className="absolute bottom-0 left-0 w-[200%] h-56 bg-[url('/wave.svg')] bg-repeat-x opacity-10 animate-wave z-0" />
      <div className="absolute bottom-0 left-0 w-[200%] h-60 bg-[url('/wave.svg')] bg-repeat-x opacity-5 animate-wave delay-1000 z-0" />

      <div className="absolute top-[-100px] left-[-80px] w-[300px] h-[300px] bg-purple-600 opacity-20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-[-100px] right-[-80px] w-[300px] h-[300px] bg-blue-700 opacity-20 rounded-full blur-2xl z-0"></div>
      <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500 opacity-10 rounded-full blur-[200px] z-0 hidden md:block"></div>

      <div className="relative z-10">
        <Header />
        <main className="px-6 md:px-12 py-10 space-y-32 animate-fade-in-up">
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="projects"><Projects /></section>
          <section id="skills"><Skills /></section>
          <section id="education"><Education /></section>
          <section id="hobbies"><Hobbies /></section>
          <section id="contact"><Contact /></section>
        </main>
        <Footer />
      </div>

      <style jsx="true">{`
        @keyframes stars {
          from { background-position: 0 0; }
          to { background-position: 100px 100px; }
        }

        .animate-stars {
          animation: stars 100s linear infinite;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-wave {
          animation: wave 30s linear infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .parallax-layer {
          will-change: transform;
          transform: translateZ(0);
        }
      `}</style>
    </div>
  );
}
