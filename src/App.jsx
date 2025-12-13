import Navbar from '../components/Navbar'
import Experience from '../components/Experience'
import About from '../components/About'
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './App.css'


export default function App() {
  


  return (
    <>
      <Navbar />
      <main class="py-16 px-6 pb-10">
        <div>
          <div>
            <h1 class="font-semibold text-4xl">Hi, I'm David</h1>
            <p class="text-2xl font-medium text-text-secondary animate-pulse">A Software Engineer</p>
          </div>
          <div class="mt-4 text-text-primary text-sm font-medium flex gap-4">
            <a 
              class="py-1 px-2.5 bg-linkedin rounded-lg hover:bg-linkedin/90 hover:scale-105 transition-all duration-200 flex items-center gap-1.5"
              href="https://linkedin.com/in/david-gomez-escobar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-sm" />
              <span>LinkedIn</span>
            </a>
            <a 
              class="py-1 px-2.5 bg-[#2b3137] rounded-lg hover:bg-[#2b3137]/90 hover:scale-105 transition-all duration-200 flex items-center gap-1.5"
              href="https://github.com/D4V1DESP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="text-sm" />
              <span>GitHub</span>
            </a>
            <button
              id="email-button"
              class="py-1 px-2.5 bg-[#BB001B] rounded-lg hover:bg-[#BB001B]/90 hover:scale-105 transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
              onClick={async () => {
                await navigator.clipboard.writeText("davidgoes77@gmail.com");
                const button = document.getElementById("email-button");
                button.innerHTML = `<i class="fa-solid fa-copy text-sm"></i><span>Copied!</span>`;
                setTimeout(() => {
                  button.innerHTML = `<i class="fa-solid fa-copy text-sm"></i><span>Email</span>`;
                }, 1000);
              }}
            >
              <i class="fa-solid fa-copy text-sm"></i>
              <span>Email</span>
            </button>
          </div>
        </div>
      </main>
      <section id="experience" class="scroll-mt-24 animate-fade-in-up">
        <Experience />
      </section>
      <section id="about" class="animate-fade-in-up">
        <About />
      </section>
      <section id="education" class="scroll-mt-20 animate-fade-in-up">
        <Education />
      </section>
      <section id="certifications" class="hidden">
        <Certifications />
      </section>
      <section id="skills" class="animate-fade-in-up">
        <Skills />
      </section>
      <section id="projects" class="animate-fade-in-up">
        <Projects />
      </section>
      <a href="https://github.com/D4V1DESP">
        <h4 class="flex justify-center items-center gap-2 mb-25 text-text-secondary animate-pulse">
          <i class="devicon-github-plain text-sm"></i>See more projects...
        </h4>
      </a>
    </>
  )
}
