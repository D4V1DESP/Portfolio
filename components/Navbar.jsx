import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSun, faMoon, faXmark, faBriefcase, faUser, faGraduationCap, faCode, faRocket } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useState(defaultDark ? 'dark' : 'light');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <div class="flex justify-between items-center p-6">
                <div class="flex fixed items-center gap-4 top-0 left-0 w-full h-20 p-5 shadow-lg shadow-black/20 bg-primary z-10">
                    <img src="./Face_Photo.jpeg" alt="A photo of me" class="w-10 h-10 object-cover rounded-full" />
                    <div>
                        <h3 class="font-medium text-sm text-text-primary leading-none">David Gómez Escobar</h3>
                        <p class="text-sm font-medium text-text-secondary">Software Engineer</p>
                    </div>
                </div>
                <nav>
                    <ul class="fixed bottom-0 left-0 w-full h-20 bg-secondary z-10 flex items-center p-2 md:hidden">
                        <li class="flex-1">
                            <a href="#experience" class="flex flex-col items-center justify-center h-full w-full text-neutral-300 hover:text-white transition-colors p-2 rounded-lg focus:bg-neutral-600 focus:text-white">
                                <FontAwesomeIcon icon={faBriefcase} className="text-lg" />
                                <span class="text-sm mt-1">Experience</span>
                            </a>
                        </li>
                        <li class="flex-1">
                            <a href="#about" class="flex flex-col items-center justify-center h-full w-full text-neutral-300 hover:text-white transition-colors p-2 rounded-lg focus:bg-neutral-600 focus:text-white">
                                <FontAwesomeIcon icon={faUser} className="text-lg" />
                                <span class="text-sm mt-1">About</span>
                            </a>
                        </li>
                        <li class="flex-1">
                            <a href="#education" class="flex flex-col items-center justify-center h-full w-full text-neutral-300 hover:text-white transition-colors p-2 rounded-lg focus:bg-neutral-600 focus:text-white">
                                <FontAwesomeIcon icon={faGraduationCap} className="text-lg" />
                                <span class="text-sm mt-1">Education</span>
                            </a>
                        </li>
                        <li class="flex-1">
                            <a href="#skills" class="flex flex-col items-center justify-center h-full w-full text-neutral-300 hover:text-white transition-colors p-2 rounded-lg focus:bg-neutral-600 focus:text-white">
                                <FontAwesomeIcon icon={faCode} className="text-lg" />
                                <span class="text-sm mt-1">Skills</span>
                            </a>
                        </li>
                        <li class="flex-1">
                            <a href="#contact" class="flex flex-col items-center justify-center h-full w-full text-neutral-300 hover:text-white transition-colors p-2 rounded-lg focus:bg-neutral-600 focus:text-white">
                                <FontAwesomeIcon icon={faRocket} className="text-lg" />
                                <span class="text-sm mt-1">Contact</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}