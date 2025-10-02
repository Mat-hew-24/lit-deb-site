import { Cabin } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import { Typewriter } from "react-simple-typewriter";

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const ds = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function About() {
  return (
    <div className="pt-40 w-full h-screen">
      <div className="w-full flex justify-center items-center gap-4">
        <img
          src="/bookturn.gif"
          alt="Book"
          className="size-10 sm:size-10 md:size-16 lg:size-20 transform scale-x-[-1]"
        />
        <h1
          className={`${cabin.className} text-[rgb(255,255,157)] text-2xl sm:text-2xl md:text-4xl lg:text-5xl text-center`}
        >
          Literary and Debating Club NITC
        </h1>
        <img
          src="/bookturn.gif"
          alt="Book"
          className="size-10 sm:size-10 md:size-16 lg:size-20"
        />
      </div>
      <div
        className={`text-white text-4xl sm:text-4xl md:text-6xl lg:text-8xl text-center ${ds.className} mt-12 drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]`}
      >
        <Typewriter
          words={[`"Dead, yet louder than the living."`]}
          loop={1}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={30}
        />
      </div>
    </div>
  );
}
