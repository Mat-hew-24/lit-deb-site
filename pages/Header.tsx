import Link from "next/dist/client/link";
import { Special_Elite } from "next/font/google";

const spe = Special_Elite({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function Header() {
  return (
    <>
      <div
        className={`absolute top-0 right-0 ${spe.className} left-0 gap-6 sm:gap-8 md:gap-10 lg:gap-22 shadow-[0px_5px_8px_-5px_rgba(0,0,0,1)] text-2xl sm:text-3xl md:text-3xl lg:text-4xl bg-[rgb(255,255,157)] flex justify-center items-center shadow-amber-200 rounded-b-3xl`}
      >
        <button className="text-black">Home</button>
        <Link href="/pics" className="text-black hover:text-gray-700 transition-colors">
          Pics
        </Link>
          <button className="text-black">About</button>
      </div>
    </>
  );
}
