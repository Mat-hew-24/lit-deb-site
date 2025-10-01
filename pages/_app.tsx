import "@/styles/globals.css";
import { AppProps } from "next/app";
import Header from "./Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="relative">
        <Header></Header>
        <Component {...pageProps} />
      </div>
    </>
  );
}
