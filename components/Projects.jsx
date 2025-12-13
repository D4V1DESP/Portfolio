import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

export default function Projects(){

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
            demo : "https://muevetic-30961.web.app/"       
        }
    ]


    return (
        <section class="px-5 py-5 pt-20">
            <div>
                <h2 class="font-semibold text-3xl text-text-primary">Projects</h2>
                    {projects.map((project) => {
                        return (
                            <div class="border border-gray-200/20 mt-4 rounded-xl overflow-hidden max-w-3xl hover:border-text-primary/80 transition-colors duration-300 ease-in-out">
                                <div class="overflow-hidden">
                                    <img class="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-110" src={project.img} alt="MueveTIC Logo" />
                                </div>
                                <div class="p-4">
                                    <h4 class="font-medium text-xl text-text-primary">{project.name}</h4>
                                    <p class="font-extralight text-sm text-text-secondary">{project.description}</p>
                                    <div class="flex flex-wrap items-center gap-2 mt-2">
                                        {project.categories.map((category) => {
                                            return(
                                                <span class="flex items-center gap-1 bg-back border border-gray-200/20 text-text-primary/80 text-xs sm:text-sm lg:text-xs font-light sm:font-normal lg:font-medium px-2 py-0.5 rounded-lg">
                                                    <i class={`${category.icon} text-xs`}></i>
                                                    {category.name}
                                                </span>
                                            )
                                        })}
                                    </div>
                                    <div class="flex items-center gap-2 mt-2">
                                        <a class="group border border-gray-200/20 p-2 rounded-lg text-text-secondary text-xs font-light hover:text-text-primary hover:bg-black/30 transition-colors duration-300 ease-in-out" href={project.github} target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faGithub} className="text-sm mr-1" />
                                            Github Repo
                                            <FontAwesomeIcon icon={faAngleDoubleRight} className="ml-1 group-hover:motion-preset-wobble motion-duration-600" />
                                        </a>
                                        <a class="group border border-gray-200/20 p-2 rounded-lg text-text-secondary text-xs font-light hover:text-text-primary hover:bg-black/30 transition-colors duration-300 ease-in-out" href={project.demo} target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faGlobe} className="text-sm mr-1" />
                                            Live Demo
                                            <FontAwesomeIcon icon={faAngleDoubleRight} className="ml-1 group-hover:motion-preset-wobble motion-duration-600" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </section>
    )
}