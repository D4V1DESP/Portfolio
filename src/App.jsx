import { useEffect, useState } from 'react';
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
  
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);

    localStorage.setItem('theme', darkMode.toString());
  }, [darkMode]);

  const handleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const changeTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <>
    <div class="flex flex-col lg:flex-row h-dvh overflow-hidden">
      <div class={`transition-all duration-500 ease-in-out ${isCollapsed ? 'lg:w-16' : 'lg:w-60'} shrink-0`}></div>
      <Navbar handleSidebar={handleSidebar} changeTheme={changeTheme} darkMode={darkMode}/>
      <div class="flex-1 overflow-y-auto">
        <div class="max-w-[1000px] w-full mx-auto">
      <main class="py-18 px-6 pb-10">
      <button class={`absolute top-5 right-15 rounded-4xl p-2 border text-indigo-600 dark:text-amber-600 border-black/20 dark:border-gray-200/20 transition-all duration-300 ease-in-out group:-rotate-180 cursor-pointer
        ${darkMode ? 'rotate-180' : 'rotate-0'}`} 
        onClick={() => {changeTheme()}}>
        {!darkMode && <svg width="22" height="22" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5007 22.9163C18.2536 22.9163 22.9173 18.2526 22.9173 12.4997C22.9173 6.74671 18.2536 2.08301 12.5007 2.08301C6.74768 2.08301 2.08398 6.74671 2.08398 12.4997C2.08398 18.2526 6.74768 22.9163 12.5007 22.9163Z" stroke="currentColor" strokeWidth="2"></path><path d="M7.95221 3.19434C8.51519 3.31562 9.03372 3.59007 9.4506 3.9874C9.86748 4.38473 10.1665 4.8895 10.3147 5.44601C10.4628 6.00252 10.4544 6.58914 10.2902 7.14115C10.1261 7.69317 9.8127 8.18911 9.38456 8.57428C8.95641 8.95944 8.4302 9.21885 7.86396 9.32388C7.29772 9.42891 6.71347 9.37548 6.17568 9.16948C5.63789 8.96349 5.16745 8.61294 4.81627 8.15651C4.46509 7.70007 4.24682 7.1555 4.18555 6.58288M22.9178 13.5933C22.5126 13.1798 22.0146 12.8688 21.4652 12.686C20.9159 12.5032 20.3309 12.4539 19.7586 12.5421C19.1864 12.6303 18.6434 12.8535 18.1746 13.1933C17.7058 13.5331 17.3247 13.9796 17.0627 14.496C16.8008 15.0123 16.6656 15.5837 16.6684 16.1626C16.6711 16.7416 16.8117 17.3116 17.0785 17.8255C17.3453 18.3393 17.7307 18.7822 18.2027 19.1175C18.6747 19.4528 19.2198 19.6709 19.7928 19.7537" stroke="currentColor" strokeWidth="2"></path><path d="M15.1048 8.864L15.1152 8.85254M10.4173 17.7077C10.9699 17.7077 11.4998 17.4883 11.8905 17.0976C12.2812 16.7069 12.5007 16.1769 12.5007 15.6244C12.5007 15.0719 12.2812 14.542 11.8905 14.1513C11.4998 13.7606 10.9699 13.5411 10.4173 13.5411C9.86478 13.5411 9.33488 13.7606 8.94418 14.1513C8.55348 14.542 8.33398 15.0719 8.33398 15.6244C8.33398 16.1769 8.55348 16.7069 8.94418 17.0976C9.33488 17.4883 9.86478 17.7077 10.4173 17.7077Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>}
        {darkMode && <svg fill="currentColor" width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,18a6,6,0,1,0-6-6A6.006,6.006,0,0,0,12,18ZM12,8a4,4,0,1,1-4,4A4,4,0,0,1,12,8ZM11,3V2a1,1,0,0,1,2,0V3a1,1,0,0,1-2,0Zm1,17a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0V21A1,1,0,0,1,12,20ZM17.657,6.343a1,1,0,0,1,0-1.414l.707-.707a1,1,0,0,1,1.414,1.414l-.707.707a1,1,0,0,1-1.414,0ZM6.343,17.657a1,1,0,0,1,0,1.414l-.707.707a1,1,0,0,1-1.414-1.414l.707-.707A1,1,0,0,1,6.343,17.657ZM23,12a1,1,0,0,1-1,1H21a1,1,0,0,1,0-2h1A1,1,0,0,1,23,12ZM1,12a1,1,0,0,1,1-1H3a1,1,0,0,1,0,2H2A1,1,0,0,1,1,12Zm18.071,5.657.707.707a1,1,0,1,1-1.414,1.414l-.707-.707a1,1,0,0,1,1.414-1.414ZM4.222,5.636A1,1,0,0,1,5.636,4.222l.707.707A1,1,0,1,1,4.929,6.343Z"></path>
        </svg>}
      </button>

        <div>
          <div>
            <h1 class="font-semibold text-4xl lg:text-6xl">Hi, I'm David</h1>
            <p class="text-2xl font-medium text-text-secondary animate-pulse lg:text-4xl">A Software Engineer</p>
          </div>
          <div class="mt-4 text-text-primary text-sm font-medium flex gap-4">
            <a 
              class="lg:py-2 lg:px-3 py-1 px-2.5 bg-linkedin rounded-lg hover:bg-linkedin/90 text-text-primary-dark hover:scale-105 transition-all duration-200 flex items-center gap-1.5"
              href="https://linkedin.com/in/david-gomez-escobar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-sm" />
              <span>LinkedIn</span>
            </a>
            <a 
              class="lg:py-2 lg:px-3 py-1 px-2.5 bg-[#2b3137] rounded-lg hover:bg-[#2b3137]/90 text-text-primary-dark hover:scale-105 transition-all duration-200 flex items-center gap-1.5"
              href="https://github.com/D4V1DESP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="text-sm" />
              <span>GitHub</span>
            </a>
            <button
              id="email-button"
              class="lg:py-2 lg:px-3 py-1 px-2.5 bg-[#BB001B] rounded-lg hover:bg-[#BB001B]/90 text-text-primary-dark hover:scale-105 transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
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
        <h4 class="flex justify-center items-center gap-2 mb-25 lg:mb-10 text-text-secondary animate-pulse">
          <i class="devicon-github-plain text-sm"></i>See more projects...
        </h4>
      </a>
      </div>
    </div>
    </div>
    </>
  )
}
