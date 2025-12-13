import { useState, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Skills() {

    const [isTechOpen, setIsTechOpen] = useState(false);
    const [isFrameworksOpen, setIsFrameworksOpen] = useState(false);
    const [isToolsOpen, setIsToolsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const technologies = [
        {
            icon: 'devicon-python-plain colored',
            name: "Python",
            description: "Versatile language for web, data, AI, and automation with excellent readability.",
            category: ["Backend", "Data Science", "Automation"],
            url : "https://www.python.org/"
        },
        {
            icon: 'devicon-java-plain colored',
            name: "Java",
            description: "Versatile language for web, data, AI, and automation with excellent readability.",
            category: ["Backend", "Data Science", "Automation"],
            url : "https://www.java.com/"
        },
        {
            icon: 'devicon-nodejs-plain colored',
            name: "Node",
            description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows you to run JavaScript on the server-side.",
            category: ["Backend"],
            url : "https://nodejs.org/"
        }
    ]

    const frameworks = [
        {
            icon: 'devicon-react-original colored',
            name: "React",
            description: "A JavaScript library for building user interfaces, developed by Facebook. It's used for building single-page applications with efficient UI rendering and component-based architecture.",
            category: ["Frontend"],       
            url : "https://reactjs.org/"
        },
        {
            icon: 'devicon-angularjs-plain colored',
            name: "Angular",
            description: "Angular is a platform for building mobile and desktop web applications. It is developed by Google and is open source. It is written in TypeScript, a typed superset of JavaScript, and uses MVW (Model-View-Whatever) architecture.",
            category: ["Frontend"],
            url : "https://angular.io/"     
        }
    ]

    const tools = [
        {
            icon: 'devicon-git-plain colored',
            name: "Git",
            description: "Git is a distributed version control system for source code management that facilitates collaboration among programmers.",
            category: ["Version Control"],
            url : "https://git-scm.com/"
        },
        {
            icon: 'devicon-jira-plain colored',
            name: "Jira",
            description: "Jira is a proprietary issue tracking product developed by Atlassian that is used by companies all over the world for agile project management.",
            category: ["Project Management"],
            url : "https://www.atlassian.com/jira"
        }
    ]

    return (
        <section class="px-5 py-5 pt-20 mb-100">
            <div>
                <h2 class="font-semibold text-3xl text-text-primary">Skills</h2>
                <p class="font-light text-md text-text-tertiary mb-5">Technologies, frameworks and tools I have worked with</p>
                <div class="relative" ref={dropdownRef}>
                    <button 
                        onClick={() => setIsTechOpen(!isTechOpen)}
                        class={`flex justify-between items-center group relative border border-gray-200/20 text-text-primary/80 w-full max-w-[968px] text-start font-light py-4 px-4 rounded-lg text-md transition-all duration-300 ease-in-out hover:bg-white/10 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15)] hover:border-gray-300/20 cursor-pointer
                                ${isTechOpen ? 'rounded-bl-none rounded-br-none border-b-0 bg-white/10' : 'rounded-lg'}`}
                    >
                        Technologies
                        <FontAwesomeIcon icon={faAngleDown} className={`w-4 h-4 transition-transform duration-200 ${isTechOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div 
                        class={`flex flex-col rounded-lg rounded-tl-none rounded-tr-none p-3 shadow-md origin-top duration-200 w-full max-w-[968px] border border-t-0 border-gray-200/20 ${
                            isTechOpen ? 'block mb-4' : 'hidden'
                        }`}
                        style={{
                            backgroundColor: 'var(--bg-secondary)'
                        }}
                    >
                        {technologies.map((tech) => {
                            return(
                                <a class="rounded-lg border border-gray-200/20 p-4 hover:bg-white/5 flex gap-4 mb-5" href={tech.url} target="_blank" rel="noopener noreferrer">
                            <i class={`${tech.icon} text-4xl`}></i>
                            <div class="space-y-1">
                                <h4 class="text-l sm:text-l lg:text-xl font-semibold text-text-primary">{tech.name}</h4>
                                <p class="text-sm sm:text-sm lg:text-sm mt-1 font-extralight text-text-secondary leading-relaxed">{tech.description}</p>
                                <div class="flex flex-wrap gap-1.5 mt-1.5">
                                    {tech.category.map((category) => {
                                        return(
                                            <span class="bg-back border border-gray-200/20 text-text-primary/80 text-xs sm:text-sm lg:text-xs font-light sm:font-normal lg:font-medium px-2 py-0.5 rounded-lg">{category}</span>
                                        )
                                    })}
                                </div>
                            </div>
                        </a>
                            )
                        })}
                    </div>
                </div>

                <div class="relative" ref={dropdownRef}>
                    <button 
                        onClick={() => setIsFrameworksOpen(!isFrameworksOpen)}
                        class={`mt-4 flex justify-between items-center group relative border border-gray-200/20 text-text-primary/80 w-full max-w-[968px] text-start font-light py-4 px-4 rounded-lg text-md transition-all duration-300 ease-in-out hover:bg-white/10 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15)] hover:border-gray-300/20 cursor-pointer
                                ${isFrameworksOpen ? 'rounded-bl-none rounded-br-none border-b-0 bg-white/10' : 'rounded-lg'}`}
                    >
                        Frameworks
                        <FontAwesomeIcon icon={faAngleDown} className={`w-4 h-4 transition-transform duration-200 ${isFrameworksOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div 
                        class={`flex flex-col rounded-lg rounded-tl-none rounded-tr-none p-3 shadow-md w-full max-w-[968px] border border-t-0 border-gray-200/20 ${
                            isFrameworksOpen ? 'block' : 'hidden'
                        }`}
                        style={{
                            backgroundColor: 'var(--bg-secondary)'
                        }}
                    >
                        {frameworks.map((fram) => {
                            return(
                                <a class="rounded-lg border border-gray-200/20 p-4 hover:bg-white/5 flex gap-4 mb-5" href={fram.url} target="_blank" rel="noopener noreferrer">
                            <i class={`${fram.icon} text-4xl`}></i>
                            <div class="space-y-1">
                                <h4 class="text-l sm:text-l lg:text-xl font-semibold text-text-primary">{fram.name}</h4>
                                <p class="text-sm sm:text-sm lg:text-sm mt-1 font-extralight text-text-secondary leading-relaxed">{fram.description}</p>
                                <div class="flex flex-wrap gap-1.5 mt-1.5">
                                    {fram.category.map((category) => {
                                        return(
                                            <span class="bg-back border border-gray-200/20 text-text-primary/80 text-xs sm:text-sm lg:text-xs font-light sm:font-normal lg:font-medium px-2 py-0.5 rounded-lg">{category}</span>
                                        )
                                    })}
                                </div>
                            </div>
                        </a>
                            )
                        })}
                    </div>
                </div>

                <div class="relative" ref={dropdownRef}>
                    <button 
                        onClick={() => setIsToolsOpen(!isToolsOpen)}
                        class={`mt-4 flex justify-between items-center group relative border border-gray-200/20 text-text-primary/80 w-full max-w-[968px] text-start font-light py-4 px-4 rounded-lg text-md transition-all duration-300 ease-in-out hover:bg-white/10 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15)] hover:border-gray-300/20 cursor-pointer
                                ${isToolsOpen ? 'rounded-bl-none rounded-br-none border-b-0 bg-white/10' : 'rounded-lg'}`}
                    >
                        Tools
                        <FontAwesomeIcon icon={faAngleDown} className={`w-4 h-4 transition-transform duration-200 ${isToolsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div 
                        class={`flex flex-col rounded-lg rounded-tl-none rounded-tr-none p-3 shadow-md w-full max-w-[968px] border border-t-0 border-gray-200/20 ${
                            isToolsOpen ? 'block' : 'hidden'
                        }`}
                        style={{
                            backgroundColor: 'var(--bg-secondary)'
                        }}
                    >
                        {tools.map((tool) => {
                            return(
                                <a class="rounded-lg border border-gray-200/20 p-4 hover:bg-white/5 flex gap-4 mb-5" href={tool.url} target="_blank" rel="noopener noreferrer">
                            <i class={`${tool.icon} text-4xl`}></i>
                            <div class="space-y-1">
                                <h4 class="text-l sm:text-l lg:text-xl font-semibold text-text-primary">{tool.name}</h4>
                                <p class="text-sm sm:text-sm lg:text-sm mt-1 font-extralight text-text-secondary leading-relaxed">{tool.description}</p>
                                <div class="flex flex-wrap gap-1.5 mt-1.5">
                                    {tool.category.map((category) => {
                                        return(
                                            <span class="bg-back border border-gray-200/20 text-text-primary/80 text-xs sm:text-sm lg:text-xs font-light sm:font-normal lg:font-medium px-2 py-0.5 rounded-lg">{category}</span>
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
        </section>
    )
}