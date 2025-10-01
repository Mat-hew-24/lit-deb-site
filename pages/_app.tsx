import "@/styles/globals.css";
import Header from "./Header";
import { useState } from "react";

export default function App() {
  const [flag, setFlag] = useState<number>(1);
  return (
    <>
      <div className="relative">
        <Header setFlag={setFlag}></Header>
      </div>
    </>
  );
}
