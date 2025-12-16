import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function About() {
    return(
        <section class="px-5 py-20 pb-5">
            <div>
                <div class="flex items-center gap-2 text-text-secondary dark:text-text-secondary-dark">
                    <FontAwesomeIcon icon={faLocationDot} className="text-sm" />
                    <span class="font-normal lg:text-lg">Madrid</span>
                </div>
                <h2 class="font-semibold text-3xl text-text-primary dark:text-text-primary-dark lg:text-4xl">About Me</h2>
                <div class="flex flex-wrap flex-col lg:flex-row items-center justify-between gap-6">
                    <div class="flex-1 flex-col">
                        <p class="font-light text-base text-text-secondary dark:text-text-secondary-dark lg:text-xl">Graduated in Computer Science with a mention in Software Engineering, I have a strong foundation in modern software practices and a mindset focused on continuous learning. I’m particularly interested in applying best practices in security, clean architecture, and data management to create reliable and impactful applications. Driven by creativity and a results-oriented approach, I aim to contribute to projects that generate meaningful value and improve people’s lives. My goal is to keep expanding my skills, exploring new areas of software development, and growing as a professional while delivering solutions that make a difference.</p>
                    </div>
                    <div class="flex shrink-0 justify-center py-5">
                        <img class="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-cover rounded-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:brightness-105 focus:scale-105 focus:shadow-xl focus:brightness-105 focus:outline-none" src="./Face_Photo.jpeg" alt="A photo of me" />
                    </div>
                </div>
            </div>
        </section>
    );
}