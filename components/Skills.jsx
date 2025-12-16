import { useState, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { technologies, frameworks, tools } from '../data/skillsData';

export default function Skills() {
    const [isTechOpen, setIsTechOpen] = useState(false);
    const [isFrameworksOpen, setIsFrameworksOpen] = useState(false);
    const [isToolsOpen, setIsToolsOpen] = useState(false);
    const dropdownRef = useRef(null);

    return (
        <section class="px-5 py-5 pt-20">
            <div>
                <h2 class="font-semibold text-3xl text-text-primary dark:text-text-primary-dark lg:text-4xl">Skills</h2>
                <p class="font-light text-md text-text-tertiary dark:text-text-tertiary-dark mb-5 lg:text-lg">Technologies, frameworks and tools I have worked with</p>
                <div class="relative" ref={dropdownRef}>
                    <button 
                        onClick={() => setIsTechOpen(!isTechOpen)}
                        class={`flex justify-between items-center group relative border border-black/20 dark:border-gray-200/20 text-text-primary/80 dark:text-text-primary-dark w-full max-w-[968px] text-start font-light py-4 px-4 rounded-lg text-md transition-all duration-300 ease-in-out hover:bg-black/10 dark:hover:bg-white/10 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15)] hover:border-black/20 dark:hover:border-gray-300/20 cursor-pointer
                                ${isTechOpen ? 'rounded-bl-none rounded-br-none border-b-0 bg-black/10 dark:bg-white/10' : 'rounded-lg'}`}
                    >
                        <span class="lg:text-lg">Technologies</span>
                        <FontAwesomeIcon icon={faAngleDown} className={`w-4 h-4 transition-transform duration-200 ${isTechOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div 
                        class={`flex flex-col rounded-lg rounded-tl-none rounded-tr-none p-3 shadow-md origin-top duration-200 w-full max-w-[968px] border border-t-0 border-black/20 dark:border-gray-200/20 ${
                            isTechOpen ? 'block mb-4' : 'hidden'
                        }`}
                        style={{
                            backgroundColor: 'var(--bg-secondary)'
                        }}
                    >
                        <div class ="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                        {technologies.map((tech) => {
                            return(
                                <a class="rounded-lg border border-black/20 dark:border-gray-200/20 p-4 hover:bg-black/10 dark:hover:bg-white/10 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15)] hover:border-black/20 dark:hover:border-gray-300/20 flex gap-4 mb-5" href={tech.url} target="_blank" rel="noopener noreferrer">
                                    <i class={`${tech.icon} text-4xl lg:text-5xl`}></i>
                                    <div class="space-y-1">
                                        <h4 class="text-l sm:text-l lg:text-xl font-semibold text-text-primary dark:text-text-primary-dark">{tech.name}</h4>
                                        <p class="text-sm sm:text-sm lg:text-base mt-1 font-extralight text-text-secondary dark:text-text-secondary-dark leading-relaxed">{tech.description}</p>
                                        <div class="flex flex-wrap gap-1.5 mt-1.5">
                                            {tech.category.map((category) => {
                                                return(
                                                    <span class="bg-back border border-black/20 dark:border-gray-200/20 text-text-primary/80 dark:text-text-primary-dark text-xs sm:text-sm lg:text-xs font-light sm:font-normal lg:font-medium px-2 py-0.5 rounded-lg">{category}</span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                        </div>
                    </div>
                </div>

                <div class="relative" ref={dropdownRef}>
                    <button 
                        onClick={() => setIsFrameworksOpen(!isFrameworksOpen)}
                        class={`mt-4 flex justify-between items-center group relative border border-black/20 dark:border-gray-200/20 text-text-primary/80 dark:text-text-primary-dark w-full max-w-[968px] text-start font-light py-4 px-4 rounded-lg text-md transition-all duration-300 ease-in-out hover:bg-black/10 dark:hover:bg-white/10 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15)] hover:border-black/20 dark:hover:border-gray-300/20 cursor-pointer
                                ${isFrameworksOpen ? 'rounded-bl-none rounded-br-none border-b-0 bg-black/10 dark:bg-white/10' : 'rounded-lg'}`}
                    >
                        <span class="lg:text-lg">Frameworks</span>
                        <FontAwesomeIcon icon={faAngleDown} className={`w-4 h-4 transition-transform duration-200 ${isFrameworksOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div 
                        class={`flex flex-col rounded-lg rounded-tl-none rounded-tr-none p-3 shadow-md w-full max-w-[968px] border border-t-0 border-black/20 dark:border-gray-200/20 ${
                            isFrameworksOpen ? 'block' : 'hidden'
                        }`}
                        style={{
                            backgroundColor: 'var(--bg-secondary)'
                        }}
                    >
                        <div class ="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                        {frameworks.map((fram) => {
                            return(
                                <a class="rounded-lg border border-black/20 dark:border-gray-200/20 p-4 hover:bg-black/10 dark:hover:bg-white/10 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15)] hover:border-black/20 dark:hover:border-gray-300/20 flex gap-4 mb-5" href={fram.url} target="_blank" rel="noopener noreferrer">
                                    <i class={`${fram.icon} text-4xl lg:text-4xl`}></i>
                                    <div class="space-y-1">
                                        <h4 class="text-l sm:text-l lg:text-xl font-semibold text-text-primary dark:text-text-primary-dark">{fram.name}</h4>
                                        <p class="text-sm sm:text-sm lg:text-base mt-1 font-extralight text-text-secondary dark:text-text-secondary-dark leading-relaxed">{fram.description}</p>
                                        <div class="flex flex-wrap gap-1.5 mt-1.5">
                                            {fram.category.map((category) => {
                                                return(
                                                    <span class="bg-back border border-black/20 dark:border-gray-200/20 text-text-primary/80 dark:text-text-primary-dark text-xs sm:text-sm lg:text-xs font-light sm:font-normal lg:font-medium px-2 py-0.5 rounded-lg">{category}</span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                        </div>
                    </div>
                </div>

                <div class="relative" ref={dropdownRef}>
                    <button 
                        onClick={() => setIsToolsOpen(!isToolsOpen)}
                        class={`mt-4 flex justify-between items-center group relative border border-black/20 dark:border-gray-200/20 text-text-primary/80 dark:text-text-primary-dark w-full max-w-[968px] text-start font-light py-4 px-4 rounded-lg text-md transition-all duration-300 ease-in-out hover:bg-black/10 dark:hover:bg-white/10 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15)] hover:border-black/20 dark:hover:border-gray-300/20 cursor-pointer
                                ${isToolsOpen ? 'rounded-bl-none rounded-br-none border-b-0 bg-black/10 dark:bg-white/10' : 'rounded-lg'}`}
                    >
                        <span class="lg:text-lg">Tools</span>
                        <FontAwesomeIcon icon={faAngleDown} className={`w-4 h-4 transition-transform duration-200 ${isToolsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div 
                        class={`flex flex-col rounded-lg rounded-tl-none rounded-tr-none p-3 shadow-md w-full max-w-[968px] border border-t-0 border-black/20 dark:border-gray-200/20 ${
                            isToolsOpen ? 'block' : 'hidden'
                        }`}
                        style={{
                            backgroundColor: 'var(--bg-secondary)'
                        }}
                    >
                        <div class ="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                        {tools.map((tool) => {
                            return(
                                <a class="rounded-lg border border-black/20 dark:border-gray-200/20 p-4 hover:bg-black/10 dark:hover:bg-white/10 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15)] hover:border-black/20 dark:hover:border-gray-300/20 flex gap-4 mb-5" href={tool.url} target="_blank" rel="noopener noreferrer">
                            <i class={`${tool.icon} text-4xl lg:text-5xl`}></i>
                            <div class="space-y-1">
                                <h4 class="text-l sm:text-l lg:text-xl font-semibold text-text-primary dark:text-text-primary-dark">{tool.name}</h4>
                                <p class="text-sm sm:text-sm lg:text-base mt-1 font-extralight text-text-secondary dark:text-text-secondary-dark leading-relaxed">{tool.description}</p>
                                <div class="flex flex-wrap gap-1.5 mt-1.5">
                                    {tool.category.map((category) => {
                                        return(
                                            <span class="bg-back border border-black/20 dark:border-gray-200/20 text-text-primary/80 dark:text-text-primary-dark text-xs sm:text-sm lg:text-xs font-light sm:font-normal lg:font-medium px-2 py-0.5 rounded-lg">{category}</span>
                                        )
                                    })}
                                </div>
                            </div>
                        </a>
                            )
                        })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}