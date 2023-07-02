import "./globals.css";
import { Baskervville } from "next/font/google";
import Navbar from "./components/navbar";
import coverImg2 from "./images/cover2.jpg";

const inter = Baskervville({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "A&D 09.16.23",
  description:
    "On the 16th of September 2023, all roads lead to Lord of the Holy Cross Parish for the wedding of Alfonz Montelibano & Danica Impang.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${coverImg2.src})` }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
