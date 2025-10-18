import "@/styles/globals.css";
import Header from "./components/Header";
import { useState } from "react";
import Pics from "./components/Pics";
import About from "./components/About";
import Homepage from "./components/Homepage";

const links: string[] = [
  "/pictures/placeholder.webp",
  "/pictures/placeholder.webp",
  "/pictures/placeholder.webp",
  "/pictures/placeholder.webp",
  "/pictures/placeholder.webp",
  "/pictures/placeholder.webp",
  "/pictures/placeholder.webp",
];

export default function App() {
  const [flag, setFlag] = useState<number>(1);
  return (
    <>
      <div className="relative">
        <Header flag={flag} setFlag={setFlag}></Header>
        {flag === 1 && <Homepage />}
        {flag === 2 && <Pics links={links} />}
        {flag === 3 && <About />}
      </div>
    </>
  );
}
