export default function Education() {
    return(
        <section class="px-5 py-5">
            <div>
                <h2 class="font-semibold text-3xl text-text-primary dark:text-text-primary-dark lg:text-4xl">Education</h2>
                <p class="font-light text-md text-text-tertiary dark:text-text-tertiary-dark lg:text-lg">Summary of academic career</p>
                <a href="https://www.uclm.es/" target="_blank" rel="noopener noreferrer" class="cursor-pointer hover:bg-text-primary transition-colors">
                    <div class="flex gap-5 rounded-xl border border-black/20 dark:border-gray-200/20 p-5 mt-2 transition-all duration-300 ease-in-out hover:bg-black/10 dark:hover:bg-white/10 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15)] hover:border-black/20 dark:hover:border-gray-300/20">
                        <div>
                            <h3 class="font-medium text-lg text-text-primary dark:text-text-primary-dark lg:text-xl">Bachelor's Degree in Computer Science</h3>
                            <h4 class="font-light text-md text-text-secondary dark:text-text-secondary-dark lg:text-lg">September 2020 - July 2025</h4>
                            <h5 class="font-normal text-md text-text-primary dark:text-text-primary-dark lg:text-lg">University of Castilla-La Mancha</h5>
                            <p class="font-extralight text-md text-text-secondary dark:text-text-secondary-dark lg:text-lg">Awarded the highest grade for an interdisciplinary capstone project that combined competencies in Database Development, Software Project Management, Software Systems Quality, and Software Systems Security.</p>
                            <span class="font-extralight text-md text-text-secondary/70 dark:text-text-secondary-dark/70 lg:text-lg">Mention in Software Engineering</span>
                        </div>
                        <img src="./LogoUCLM.webp" alt="UCLM Logo" class="h-10 w-auto rounded-sm" />
                    </div>
                </a>
            </div>
        </section>
    )
}