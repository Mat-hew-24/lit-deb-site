import React from "react";
import { Special_Elite } from "next/font/google";
const spe = Special_Elite({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
    });

export default function Pics() {
  return (
    <main className="pt-20 p-8 text-white">
        <h1 className={`text-4xl sm:text-6xl md:text-8xl font-bold mb-4 text-center ${spe.className}`}>
            CICADA 3301
        </h1>
        <p className={`${spe.className} text-base sm:text-lg md:text-xl mb-12 text-center`}>
            images of cicadas
        </p>

        {/* column image layout*/}
        <div className="flex flex-col space-y-8 w-full max-w-3xl mx-auto items-center 
                        w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2">
            <div className="w-full">
            {/*glow on image on hover is given remove if not needed*/}
            <img 
                src="pictures/placeholder.webp" 
                alt="Photo 1"
                className="w-full h-auto rounded-lg transition duration-500 hover:scale-110 hover:drop-shadow-[0_0_25px_#8b5cf6]"
            />

            </div>
            <div className="w-full">
            {/*glow on image on hover is given remove if not needed*/}
            <img 
                src="pictures/placeholder.webp" 
                alt="Photo 1"
                className="w-full h-auto rounded-lg transition duration-500 hover:scale-110 hover:drop-shadow-[0_0_25px_#8b5cf6]"
            />

            </div>
           <div className="w-full">
            <img 
                src="pictures/placeholder.webp" 
                alt="Photo 1"
                className="w-full h-auto rounded-lg transition duration-500 hover:scale-110 hover:drop-shadow-[0_0_25px_#8b5cf6]"
            />
            </div>

        </div>
    </main>

  );
}