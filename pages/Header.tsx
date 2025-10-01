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
        className={`absolute top-7 left-10 right-10
              py-6 px-6 
              bg-[#e2d88c] 
              flex justify-center items-center space-x-60
              text-2xl text-[#3f1909]
              shadow-md ${spe.className}`}
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

