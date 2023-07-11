import "./globals.css";
import { Baskervville } from "next/font/google";
import Navbar from "./components/navbar";
import cover from "./images/cover4.jpg";
import cover2 from "./images/cover5.jpg";
import stairs from "./images/stairs.jpg";
import Image from "next/image";
import Link from "next/link";
// import cover from "./images/cover3.jpg";

const baskervville = Baskervville({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "A&D 09.16.23",
  description:
    "On the 16th of September 2023, all roads lead to Lord of the Holy Cross Parish for the wedding of Alfonz Montelibano & Danica Impang.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={baskervville.className}>
        <Navbar />

        <section
          className="p-10 text-center flex"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundImage: `url(${cover.src})`,
            height: "1200px",
          }}
        ></section>

        <section className="p-10 text-center flex" style={{ height: "80vh" }}>
          <p style={{ width: "40ch", margin: "auto", fontSize: "3rem" }}>
            On the sixteenth of September 2023, all roads lead to Iligan City
            for the wedding of Alfonz Montelibano & Danica Impang.
          </p>
        </section>

        <Image src={cover2} style={{ width: "100%" }} />

        <section className="flex items-center" style={{ height: "80vh" }}>
          <section className="flex flex-wrap w-full">
            <section className="w-full sm:w-1/2">
              <div className="p-4 flex justify-center">
                <div className="text-left">
                  <h3
                    className="uppercase font-bold"
                    style={{ letterSpacing: "2px" }}
                  >
                    Ceremony
                  </h3>
                  <p className="mt-2 text-3xl">
                    Half-past one in the afternoon
                    <br />
                    Lord of the Holy Cross Parish
                  </p>
                </div>
              </div>
            </section>
            <section className="w-full sm:w-1/2">
              <div className="p-4 flex justify-center">
                <div className="text-left">
                  <h3
                    className="uppercase font-bold"
                    style={{ letterSpacing: "2px" }}
                  >
                    Reception
                  </h3>
                  <p className="mt-2 text-3xl">
                    Five o’clock in the afternoon
                    <br />
                    The Balcony
                  </p>
                </div>
              </div>
            </section>
          </section>
        </section>

        {/*
        <section>
          <Image src={stairs} style={{ width: "100%" }} />
        </section>
        */}

        <section className="flex px-20">
          <section className="w-full sm:w-1/2">
            <Image src={stairs} style={{ width: "100%" }} />
          </section>
          <section className="w-full sm:w-1/2 flex justify-center items-center">
            <div className="text-5xl" style={{ width: "12ch" }}>
              <p className="pb-12" style={{ lineHeight: "1.2" }}>
                The thirteen year long journey that led to this day —
              </p>
              <Link
                className="text-3xl text-white bg-black px-8 py-4"
                href="/story"
              >
                Our Story
              </Link>
            </div>
          </section>
        </section>

        <section
          style={{ height: "90vh" }}
          className="flex items-center justify-center text-center "
        >
          <div>
            <p className="text-5xl leading-tight mb-10">
              We can’t wait to celebrate
              <br />
              with you.
            </p>
            <p className="text-3xl">— A&D</p>
          </div>
        </section>

        <section className="flex justify-center items-center">
          <Link
            className="text-4xl text-white bg-black inline-block text-center"
            style={{ padding: "4rem 10rem" }}
            href="/rsvp"
          >
            RSVP
          </Link>
        </section>

        {children}
      </body>
    </html>
  );
}
