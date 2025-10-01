import React from "react";
import Image from "next/image";

type PicsProp = {
  links: string[];
};

export default function Pics({ links }: PicsProp) {
  return (
    <div
      className="flex flex-col space-y-8 gap-10 mb-10 pt-40 w-full max-w-3xl mx-auto items-center 
                       sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2"
    >
      {links.map((i, idx) => (
        <div
          className="w-full cursor-pointer 
          [border:12px_solid_#ffff9f] 
          p-2 rounded-lg overflow-hidden 
          transition duration-250 ease-linear hover:scale-105 
          shadow-[0_25px_20px_rgba(0,0,0,1),20px_0px_20px_rgba(0,0,0,0.3)]
        "
          key={idx}
        >
          <Image
            src={i}
            alt="Photo 1"
            width={800}
            height={600}
            className="w-full h-auto rounded-md border border-gray-300"
          />
        </div>
      ))}
    </div>
  );
}
