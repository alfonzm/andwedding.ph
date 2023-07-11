import "./globals.css";
import Navbar from "./components/navbar";

import { Baskervville } from "next/font/google";
import localFont from "next/font/local";

// const baskervville = Baskervville({ subsets: ["latin"], weight: ["400"] });
const baskerville = localFont({
  src: [
    {
      path: "./fonts/baskerville_normal.ttf",
      // path: "./fonts/caslon.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/baskerville_italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
});

export const metadata = {
  title: "A&D 09.16.23",
  description:
    "On the 16th of September 2023, all roads lead to Lord of the Holy Cross Parish for the wedding of Alfonz Montelibano & Danica Impang.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*<Navbar />*/}
      <body className={`${baskerville.className} leading-tight tracking-tight`}>
        {children}
      </body>
    </html>
  );
}
