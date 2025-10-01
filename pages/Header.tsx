import { Special_Elite } from "next/font/google";

const spe = Special_Elite({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const btns: string[] = ["Home", "Pics", "About"];

type Headerprop = {
  flag: number;
  setFlag: (x: number) => void;
};

export default function Header({ flag, setFlag }: Headerprop) {
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
        {btns.map((i, idx) => (
          <button
            key={idx}
            className={`transition-transform duration-150 py-2 px-5 ease-in-out hover:[transform:rotate(-24deg)] cursor-pointer ${
              idx + 1 === flag ? "bg-[#351c04] text-[rgb(255,255,157)]" : ""
            }`}
            onClick={() => {
              setFlag(idx + 1);
            }}
          >
            {i}
          </button>
        ))}
      </div>
    </>
  );
}
