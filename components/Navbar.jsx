import { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUser, faGraduationCap, faCode, faRocket, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const navItems = [
  { id: 'experience', icon: faBriefcase, label: 'Experience' },
  { id: 'about', icon: faUser, label: 'About' },
  { id: 'education', icon: faGraduationCap, label: 'Education' },
  { id: 'skills', icon: faCode, label: 'Skills' },
  { id: 'projects', icon: faRocket, label: 'Projects' }
];

export default function Navbar({handleSidebar}) {

    const [isCollapsed, setIsCollapsed] = useState(false);

    

    return (
        <header>
            <aside class={`hidden lg:block fixed top-0 left-0 z-10 h-full bg-secondary transition-[width] duration-500 ease-in-out ${isCollapsed ? 'w-16' : 'w-55'}`}>
                <div class="p-4 h-full">
                    <div class="flex items-center relative">
                        <img src="./Face_Photo.jpeg" alt="A photo of me" class={`object-cover rounded-full ${isCollapsed ? 'w-8 h-8 me-0 ml-0.5 shrink-0' : 'w-10 h-10'}`} />
                        <div class="flex flex-col ml-2">
                            <h3 class={`font-medium text-sm text-text-primary leading-none ${isCollapsed ? 'hidden' : ''}`}>David Gómez</h3>
                            <p class={`text-sm font-medium text-text-secondary ${isCollapsed ? 'hidden' : ''}`}>Software Engineer</p>
                        </div>
                        <button class="m-0 p-0 w-6 h-6 absolute right-0 translate-x-7 flex items-center justify-center rounded-full bg-secondary border border-gray-200/20 text-text-secondary cursor-pointer"
                            onClick={() => {setIsCollapsed(!isCollapsed); handleSidebar()}}
                        >
                            <FontAwesomeIcon icon={faAngleLeft} className={`w-4 h-4 ${isCollapsed ? 'rotate-180' : ''}`} />
                        </button>
                    </div>
                    <ul class="mt-6 space-y-2 text-text-secondary content-center">
                        {navItems.map((item) => {
                            return(
                                <li>
                                    <a href={`#${item.id}`} 
                                        class="flex items-center gap-2 p-2 text-md font-light hover:text-white transition-colors rounded-lg focus:bg-neutral-600 focus:text-white"
                                        onClick={(e) => {
                                        e.preventDefault();
                                        const targetElement = document.getElementById(item.id);
                                        if (targetElement) {
                                            targetElement.scrollIntoView({ behavior: 'smooth' });
                                        }
                                        }}
                                    >
                                        <FontAwesomeIcon icon={item.icon} />
                                        <span class={`text-sm ${isCollapsed ? 'hidden' : ''}`}>{item.label}</span>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <hr class="my-4 text-gray-200/20"/>
                    <ul class="space-y-2 text-text-secondary">
                        <li>
                            <a class="flex items-center gap-2 p-2 text-md font-light hover:text-linkedin/90 transition-colors rounded-lg focus:bg-neutral-600 focus:text-white"
                                href="https://www.linkedin.com/in/david-gomez-escobar/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                                <span class={`text-sm ${isCollapsed ? 'hidden' : ''}`}>LinkedIn</span>
                            </a>
                        </li>   
                        <li>
                            <a class="flex items-center gap-2 p-2 text-md font-light hover:text-[#2b3137]/90 transition-colors rounded-lg focus:bg-neutral-600 focus:text-white"
                                href="https://github.com/DavidGomezEscobar" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                                <span class={`text-sm ${isCollapsed ? 'hidden' : ''}`}>Github</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            <div class="flex justify-between items-center p-6 lg:hidden">
                <div class="flex fixed items-center gap-4 top-0 left-0 w-full h-20 p-5 shadow-lg shadow-black/20 bg-primary z-10">
                    <img src="./Face_Photo.jpeg" alt="A photo of me" class="w-10 h-10 object-cover rounded-full" />
                    <div>
                        <h3 class="font-medium text-sm text-text-primary leading-none">David Gómez Escobar</h3>
                        <p class="text-sm font-medium text-text-secondary">Software Engineer</p>
                    </div>
                </div>
                <nav>
                    <ul class="fixed bottom-0 left-0 w-full h-20 bg-secondary z-10 flex items-center p-2 md:hidden" style={{ scrollBehavior: 'smooth' }}>
                        {navItems.map((item) => (
                            <li key={item.id} class="flex-1">
                                <a 
                                    href={`#${item.id}`} 
                                    class="flex flex-col items-center justify-center h-full w-full text-neutral-300 hover:text-white transition-colors p-2 rounded-lg focus:bg-neutral-600 focus:text-white" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const targetElement = document.getElementById(item.id);
                                        if (targetElement) {
                                            targetElement.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                >
                                    <FontAwesomeIcon icon={item.icon} className="text-lg" />
                                    <span class="text-sm mt-1">{item.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}