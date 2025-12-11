import Navbar from '../components/Navbar'
import Experience from '../components/Experience'
import About from '../components/About'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import './App.css'


export default function App() {
  


  return (
    <>
      <Navbar />
      <main class="py-16 px-6">
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
              href="https://github.com/davidgomezescobar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="text-sm" />
              <span>GitHub</span>
            </a>
            <a 
              class="py-1 px-2.5 bg-[#BB001B] rounded-lg hover:bg-[#BB001B]/90 hover:scale-105 transition-all duration-200 flex items-center gap-1.5"
              href="mailto:davidgoes77@gmail.com"
            >
              <FontAwesomeIcon icon={faCopy} className="text-sm" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </main>
      <Experience />
      <About />
    </>
  )
}
