import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Carousel({children : certs}){

    const [currentIndex, setCurrentIndex] = useState(0);


    const next = () => {
        setCurrentIndex((curr) => curr === certs.length - 1 ? 0 : curr + 1);
    };

    const prev = () => {
        setCurrentIndex((curr) => curr === 0 ? certs.length - 1 : curr - 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            next()
        }, 3000)

        return () => clearInterval(interval)
    }, [currentIndex])



    return (
        <div class="relative w-full max-w-3xl mx-auto">
            <div class="flex items-center gap-4">
                <button 
                    onClick={prev}
                    class="w-8 h-8 shrink-0 flex items-center justify-center border border-gray-200/20 rounded-full p-2 cursor-pointer hover:border-text-primary hover:bg-white/5 transition-all duration-200 ease-in-out"
                >
                    <FontAwesomeIcon icon={faAngleLeft} className="w-4 h-4" />
                </button>
                
                <div class="flex-1 overflow-hidden">
                    <div 
                        class="flex transition-transform duration-500 ease-out"
                        style={{
                            transform: `translateX(-${currentIndex * 100 / certs.length}%)`,
                            width: `${certs.length * 100}%`
                        }}
                    >
                        {certs.map((cert, index) => (
                            <div key={index} class="flex-1 overflow-hidden">
                                {cert}
                            </div>
                        ))}
                    </div>
                </div>
                
                <button 
                    onClick={next}
                    class="w-8 h-8 shrink-0 flex items-center justify-center border border-gray-200/20 rounded-full p-2 cursor-pointer hover:border-text-primary hover:bg-white/5 transition-all duration-200 ease-in-out"
                >
                    <FontAwesomeIcon icon={faAngleRight} className="w-4 h-4" />
                </button>
            </div>
            <div class="absolute -bottom-6 right-0 left-0">
                <div class="flex items-center justify-center gap-2">
                    {certs.map((_, index) => (
                        <div 
                            onClick={() => setCurrentIndex(index)}
                            class={`transition-all rounded-full cursor-pointer ${currentIndex === index ? "w-3 h-3 bg-white" : "w-2 h-2 bg-[#3A3A3C]"} hover:bg-white`}>   
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}