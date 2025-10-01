import { Special_Elite } from "next/font/google";

const spe = Special_Elite({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

type Headerprop = {
  setFlag: (x: number) => void;
};

export default function Header({ setFlag }: Headerprop) {
  return (
    <>
      <div
        className={`absolute top-8 right-4 ${spe.className} left-4 gap-6
         sm:left-5 sm:right-5 sm:gap-12  md:left-16 md:gap-10 md:right-10 lg:left-20
          lg:right-20 lg:gap-45 py-6 shadow-[0px_25px_10px_-5px_rgba(20,20,20,1)]
           text-2xl sm:text-3xl md:text-3xl lg:text-4xl bg-[rgb(255,255,157)] flex justify-center items-center 
          `}
      >
        {/*NAVBAR...*/}
        <button
          className="transition-transform duration-150 ease-in-out hover:[transform:rotate(-24deg)] cursor-pointer"
          onClick={() => setFlag(1)}
        >
          Home
        </button>

        <button
          className="transition-transform duration-150 ease-in-out hover:[transform:rotate(-24deg)] cursor-pointer"
          onClick={() => setFlag(2)}
        >
          Pics
        </button>
        <button
          className="transition-transform duration-150 ease-in-out hover:[transform:rotate(-24deg)] cursor-pointer"
          onClick={() => setFlag(3)}
        >
          About
        </button>
      </div>
    </>
  );
}
