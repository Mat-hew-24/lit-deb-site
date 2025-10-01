import React from "react";
import { Special_Elite } from "next/font/google";
import Image from "next/image";

const spe = Special_Elite({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function Pics() {
  return (
    <div
      className="flex flex-col space-y-8 pt-40 w-full max-w-3xl mx-auto items-center 
                       sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2"
    >
      <div className="w-full relative cursor-pointer [border:8px_groove_#EE0000] p-2 rounded-lg overflow-hidden transition duration-300 ease-in-out hover:scale-110 shadow-lg">
        <Image
          src="/pictures/placeholder.webp"
          alt="Photo 1"
          width={800}
          height={600}
          className="w-full h-auto rounded-lg z-2"
        />
      </div>

      <div className="w-full cursor-pointer [border:8px_groove_#EE0000] p-2 rounded-lg overflow-hidden transition duration-300 ease-in-out hover:scale-110 shadow-lg">
        <Image
          src="/pictures/placeholder.webp"
          alt="Photo 1"
          width={800}
          height={600}
          className="w-full h-auto rounded-lg"
        />
      </div>

      <div className="w-full cursor-pointer [border:8px_groove_#EE0000] p-2 rounded-lg overflow-hidden transition duration-300 ease-in-out hover:scale-110 shadow-lg">
        <Image
          src="/pictures/placeholder.webp"
          alt="Photo 1"
          width={800}
          height={600}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
}
