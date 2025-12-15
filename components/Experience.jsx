export default function WorkExperience() {
    return (
        <section class="px-5">
            <div>
                <h2 class="font-semibold text-3xl text-text-primary lg:text-4xl">Experience</h2>
                <p class="font-light text-md text-text-tertiary lg:text-lg">Summary of my professional career</p>
            </div>
            <div class="mt-5">
                <div class="relative pl-5">
                    <div class="absolute left-0 top-2 h-[calc(100%-0.5rem)] w-px bg-text-tertiary"></div>
                    <div class="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-text-primary"></div>
                    <h4 class="font-light text-md text-text-tertiary pt-0.5 lg:text-lg">May 2025 - October 2025</h4>
                    <div class="flex items-center gap-2 py-2">
                        <img src="./Repsol.jpeg" alt="Repsol" class="h-10 w-auto rounded-lg" />
                        <h3 class="font-medium text-lg text-text-primary lg:text-xl">REPSOL Internship (Talent Energy - Digitalization Internship)</h3>
                    </div><ul class="font-light text-text-secondary list-disc ml-5 lg:text-lg">
                        <li>Management of the digital project portfolio for the Iberia Mobility department.</li>
                        <li>Digitalization of the creation and management process for Internal Digital Initiatives, enhancing tracking through a series of applications built on Power Platform.</li>
                        <li>Improvement in data governance and quality, enabling report generation from single sources of information.</li>
                    </ul>
                </div>
                <div class="relative pl-5">
                    <div class="absolute left-0 h-[calc(50%-0.5rem)] w-px bg-text-tertiary"></div>
                    <div class="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-green-400"></div>
                    <div class="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-green-400 animate-ping lg:hidden"></div>
                    <h4 class="font-light text-md text-text-tertiary pt-0.5 lg:text-lg">Now</h4>
                    <h3 class="font-medium text-lg text-text-secondary animate-pulse lg:text-xl">To be continued</h3>
                </div>
            </div>
        </section>
    );
}