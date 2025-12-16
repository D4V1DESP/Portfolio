import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faAngleDoubleRight, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Projects(){
    const [showVideo, setShowVideo] = useState(null);

    const projects = [
        {
            img : "./MueveTIC.png",
            name : "MueveTIC",
            description : "App for managing electric vehicle reservations in the city of Ciudad Real. Through the app, users can check availability and book registered vehicles. The service includes battery recharging, maintenance, and a rating system to evaluate user experiences.",
            categories : [
                {
                    icon : "devicon-spring-plain colored",
                   name : "Spring"
                },
                {
                    icon : "devicon-java-plain colored",
                    name : "Java"
                },
                {
                    icon : "devicon-angularjs-plain colored",
                    name : "Angular"
                },
                {
                    icon : "devicon-postman-plain colored",
                    name : "Postman"
                },
                {
                    icon : "devicon-html5-plain colored",
                    name : "HTML5"
                },
                {
                    icon : "devicon-css3-plain colored",
                    name : "CSS3"
                },
                {
                    icon : "devicon-typescript-plain colored",
                    name : "TypeScript"
                },
                {
                    icon : "devicon-mongodb-plain colored",
                    name : "MongoDB"
                },
                {
                    icon : "devicon-sonarqube-plain colored",
                    name : "SonarQube"
                }
            ],
            github : "https://github.com/D4V1DESP/MueveTIC-E5",
            demo : "https://muevetic-30961.web.app/",
            video : ""       
        },
        {
            img : "./TFG.jpeg",
            name : "Bachelor`s Thesis",
            description : "Bachelor's Thesis on Android security. Analyzes device data (permissions, network traffic, processes) to detect threats. A lightweight tool offering security insights for users and professionals.",
            categories : [
                {
                    icon : "devicon-kotlin-plain colored",
                   name : "Kotlin"
                },
                {
                    icon : "devicon-java-plain colored",
                    name : "Java"
                },
                {
                    icon : "devicon-postman-plain colored",
                    name : "Postman"
                },
                {
                    icon : "devicon-android-plain colored",
                    name : "Android"
                },
                {
                    icon : "devicon-androidstudio-plain colored",
                    name : "Android Studio"
                },
                {
                    name : "VirusTotal"
                },
                {
                    name : "MobSF"
                }
            ],
            github : "https://github.com/D4V1DESP/TFG",
            demo : "",
            video : "./VideoAmenazasAndroid.mp4"      
        },
    ]


    return (
        <section class="px-5 py-5 pt-20">
            <div>
                <h2 class="font-semibold text-3xl text-text-primary dark:text-text-primary-dark lg:text-4xl">Projects</h2>
                <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                    {projects.map((project) => {
                        return (
                            <div class="border  bg-black/5 border-black/20 dark:border-gray-200/20 mt-4 rounded-xl overflow-hidden max-w-3xl hover:border-text-primary/80 dark:hover:border-text-primary-dark/80 transition-colors duration-300 ease-in-out">
                                <div class="overflow-hidden">
                                    <img class="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-110" src={project.img} alt="MueveTIC Logo" />
                                </div>
                                <div class="p-4">
                                    <h4 class="font-medium text-xl text-text-primary dark:text-text-primary-dark">{project.name}</h4>
                                    <p class="font-extralight text-sm text-text-secondary dark:text-text-secondary-dark">{project.description}</p>
                                    <div class="flex flex-wrap items-center gap-2 mt-2">
                                        {project.categories.map((category) => {
                                            return(
                                                <span class="flex items-center gap-1 bg-back border border-black/20 dark:border-gray-200/20 text-text-primary/80 dark:text-text-primary-dark text-xs sm:text-sm lg:text-xs font-light sm:font-normal lg:font-medium px-2 py-0.5 rounded-lg">
                                                    <i class={`${category.icon} text-xs`}></i>
                                                    {category.name}
                                                </span>
                                            )
                                        })}
                                    </div>
                                    <div class="flex items-center gap-2 mt-2">
                                        {project.github && <a class="group border border-black/20 dark:border-gray-200/20 p-2 rounded-lg text-text-secondary dark:text-text-secondary-dark text-xs font-light hover:text-text-primary dark:hover:text-text-primary-dark hover:bg-black/30 transition-colors duration-300 ease-in-out" href={project.github} target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faGithub} className="text-sm mr-1" />
                                            Github Repo
                                            <FontAwesomeIcon icon={faAngleDoubleRight} className="ml-1 group-hover:motion-preset-wobble motion-duration-600" />
                                        </a>}
                                        {project.demo && <a class="group border border-black/20 dark:border-gray-200/20 p-2 rounded-lg text-text-secondary dark:text-text-secondary-dark text-xs font-light hover:text-text-primary dark:hover:text-text-primary-dark hover:bg-black/30 transition-colors duration-300 ease-in-out" href={project.demo} target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faGlobe} className="text-sm mr-1" />
                                            Demo
                                            <FontAwesomeIcon icon={faAngleDoubleRight} className="ml-1 group-hover:motion-preset-wobble motion-duration-600" />
                                        </a>}
                                        {project.video && (
                                            <>
                                                <button 
                                                    onClick={() => setShowVideo(project.video)}
                                                    class="group border border-black/20 dark:border-gray-200/20 p-2 rounded-lg text-text-secondary dark:text-text-secondary-dark text-xs font-light hover:text-text-primary dark:hover:text-text-primary-dark hover:bg-black/30 transition-colors duration-300 ease-in-out cursor-pointer"
                                                >
                                                    <FontAwesomeIcon icon={faYoutube} className="text-sm mr-1" />
                                                    Video
                                                    <FontAwesomeIcon icon={faAngleDoubleRight} className="ml-1 group-hover:motion-preset-wobble motion-duration-600" />
                                                </button>
                                                {showVideo === project.video && (
                                                    <div class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setShowVideo(null)}>
                                                        <div class="relative w-full max-w-4xl" onClick={e => e.stopPropagation()}>
                                                            <button 
                                                                onClick={() => setShowVideo(null)}
                                                                class="absolute -top-10 right-0 text-white hover:text-gray-300"
                                                            >
                                                                <FontAwesomeIcon icon={faTimes} size="lg" />
                                                            </button>
                                                            <div class="aspect-video w-full">
                                                                <iframe 
                                                                    src={project.video.replace('watch?v=', 'embed/')}
                                                                    class="w-full h-full rounded-lg"
                                                                    frameBorder="0"
                                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                    allowFullScreen
                                                                ></iframe>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}