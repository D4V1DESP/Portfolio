import Carousel from "./Carousel"

export default function Certifications() {

    const certifications = [
        {
            img: "./Scrimba.webp",
            title: "Full Stack Developer Path",
            date: "March 2026",
            issuer: "Scrimba",
            url: "https://scrimba.com/fullstack-path-c0fullstack;cert23wfboWopQTz9j116LTCBwFcJKnRHgZjvr6GouSMhngWgPbe"
        }
    ]



    return(
        <section class="px-5 py-5">
            <h3 class="font-semibold text-2xl text-text-primary dark:text-text-primary-dark">Certifications</h3>
            <div>
                <Carousel>
                    {certifications.map((cert) => {
                        return(
                            <a href={cert.url} target="_blank" rel="noopener noreferrer">
                                <div class="flex items-center gap-5 rounded-lg border border-black/20 dark:border-gray-200/20 p-1 mt-2 cursor-pointer transition-all duration-300 ease-in-out hover:bg-black/10 dark:hover:bg-white/10 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15)] hover:border-black/20 dark:hover:border-gray-300/20">
                                    <img class="h-10 w-auto ml-5 rounded-lg" src={cert.img} alt="Certification 1" />
                                    <div class="ml-5">
                                        <h4 class="font-medium text-md text-text-primary dark:text-text-primary-dark">{cert.title}</h4>
                                        <p class="font-light text-sm text-text-secondary dark:text-text-secondary-dark">{cert.date}</p>
                                        <p class="font-extralight text-xs text-text-secondary/70 dark:text-text-secondary-dark/70">{cert.issuer}</p>
                                    </div>
                                </div>
                            </a>
                        )
                    })}
                </Carousel>
            </div>
        </section>
    )
}