import { Cabin } from "next/font/google";
import { Oswald } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import { Typewriter } from "react-simple-typewriter";

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const osw = Oswald({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const ds = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function About() {
  return (
    <div className="pt-45 w-full h-screen flex flex-col items-center justify-center gap-36">
      <div className="w-full flex justify-center items-center gap-4">
        {/* <img
          src="/bookturn.gif"
          alt="Book"
          className="size-10 sm:size-10 md:size-16 lg:size-20 transform scale-x-[-1]"
        /> */}
        <h1
          className={`${cabin.className} text-[rgb(255,255,157)] text-2xl sm:text-2xl md:text-4xl lg:text-5xl text-center`}
        >
          Literary and Debating Club NITC
        </h1>
        {/* <img
          src="/bookturn.gif"
          alt="Book"
          className="size-10 sm:size-10 md:size-16 lg:size-20"
        /> */}
      </div>
      <div
        className={`text-white text-5xl sm:text-5xl md:text-6xl lg:text-8xl text-center ${ds.className} drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]`}
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
      {/* <div
        className={`${anek.className} text-[rgb(255,255,157)] mt-10 max-w-3xl mx-auto text-center space-y-4`}
      >
        <p>
          We are a vibrant community of thinkers, writers, and speakers at NITC.
        </p>
        <p>
          Our club nurtures creativity, critical thinking, and eloquence through
          debates, literary discussions, workshops, and competitions.
        </p>
        <p>
          We provide a platform where students can express ideas confidently,
          explore literature, and engage in meaningful dialogue.
        </p>
        <p>
          Join us to challenge your mind, sharpen your communication skills, and
          be part of a dynamic intellectual community.
        </p>
      </div> */}

      <div className="w-72 sm:w-72 md:w-96 mx-auto px-4 py-3 bg-[rgb(255,255,157)] rounded-3xl flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
        <span
          className={`text-[#351c04] ${osw.className} text-lg sm:text-xl md:text-2xl`}
        >
          Follow Us:
        </span>
        <a
          href="https://www.instagram.com/nitcarpe_diem?igsh=MW14bjJxenl1MGZoZQ=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/browninsta.svg"
            alt="Instagram"
            className="hover:scale-125 hover:[transform:rotate(-24deg)] transition size-6 sm:size-8 md:size-12"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/literary-debating-club-nitc/?originalSubdomain=in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/linkedin.svg"
            alt="LinkedIn"
            className="hover:scale-125 hover:[transform:rotate(-24deg)] transition size-4 sm:size-6 md:size-8"
          />
        </a>
        <a
          href="https://www.youtube.com/@donttellthewarden/featured"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/yt.svg"
            alt="YouTube"
            className="hover:scale-125 hover:[transform:rotate(-24deg)] transition size-6 sm:size-8 md:size-10"
          />
        </a>
      </div>
    </div>
  );
}
