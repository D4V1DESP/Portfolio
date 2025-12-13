import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function About() {
    return(
        <section class="px-5 py-20 pb-5">
            <div>
                <div class="flex items-center gap-2 text-text-secondary">
                    <FontAwesomeIcon icon={faLocationDot} className="text-sm" />
                    <span class="font-normal">Madrid</span>
                </div>
                <h2 class="font-semibold text-3xl text-text-primary">About Me</h2>
                <p class="font-light text-base text-text-secondary">Graduated in Computer Science with a mention in Software Engineering, I have a strong foundation in modern software practices and a mindset focused on continuous learning. I’m particularly interested in applying best practices in security, clean architecture, and data management to create reliable and impactful applications. Driven by creativity and a results-oriented approach, I aim to contribute to projects that generate meaningful value and improve people’s lives. My goal is to keep expanding my skills, exploring new areas of software development, and growing as a professional while delivering solutions that make a difference.</p>
                <div class="flex justify-center py-5">
                    <img class="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-cover rounded-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:brightness-105 focus:scale-105 focus:shadow-xl focus:brightness-105 focus:outline-none" src="./Face_Photo.jpeg" alt="A photo of me" />
                </div>
            </div>
        </section>
    );
}