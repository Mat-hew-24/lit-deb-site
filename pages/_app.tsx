import "@/styles/globals.css";
import Header from "./Header";
import { useState } from "react";
import Pics from "./Pics";

export default function App() {
  const [flag, setFlag] = useState<number>(1);
  return (
    <>
      <div className="relative">
        <Header setFlag={setFlag}></Header>
        {flag === 2 && <Pics></Pics>}
      </div>
    </>
  );
}  