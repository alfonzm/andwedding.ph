import "./globals.css";
import Navbar from "./components/navbar";

import { Baskervville } from "next/font/google";
import localFont from "next/font/local";
import coverMeta from "./images/cover-meta.jpg";
import Head from "next/head";

// const baskervville = Baskervville({ subsets: ["latin"], weight: ["400"] });
const baskerville = localFont({
  src: [
    {
      // path: "./fonts/imfell_french_regular.ttf",
      // path: "./fonts/imfell_regular.ttf",
      path: "./fonts/baskerville_normal.ttf",
      // path: "./fonts/imfell_great_primer.ttf",
      // path: "./fonts/caslon.otf",
      weight: "400",
      style: "normal",
    },
    {
      // path: "./fonts/imfell_french_italic.ttf",
      // path: "./fonts/imfell_italic.ttf",
      path: "./fonts/baskerville_italic.ttf",
      // path: "./fonts/imfell_great_primer_italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
});

export const metadata = {
  title: "A&D · 09-16-23",
  siteName: "A&D · 09-16-23",
  url: "https://andwedding.ph",
  description:
    "On the 16th of September 2023, all roads lead to Lord of the Holy Cross Parish for the wedding of Alfonz Montelibano & Danica Impang.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content={coverMeta} />
      </Head>
      {/*<Navbar />*/}
      <body className={`${baskerville.className} leading-tight tracking-tight`}>
        {children}
      </body>
    </html>
  );
}
