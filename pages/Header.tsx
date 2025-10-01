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
        className={`absolute top-0 right-4 ${spe.className} left-4 gap-6 sm:left-5 sm:right-5 sm:gap-8  md:left-10 md:gap-10 md:right-10 lg:left-20 lg:right-20 lg:gap-22 py-4 shadow-[0px_5px_8px_-5px_rgba(0,0,0,1)] text-2xl sm:text-3xl md:text-3xl lg:text-4xl bg-[rgb(0,0,0)] flex justify-center items-center shadow-white rounded-b-4xl`}
      >
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

