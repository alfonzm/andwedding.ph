import cover from "./images/cover4.jpg";
import cover2 from "./images/cover5.jpg";
import stairs from "./images/stairs.jpg";
import Image from "next/image";
import Link from "next/link";
import Logo from './components/logo';

// import cover from "./images/cover3.jpg";

export default function Home() {
  return (
    <>
      <section
        className="p-10 text-center flex"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundImage: `url(${cover.src})`,
          height: "1200px",
        }}
      ></section>

      <section className="px-10 text-center flex" style={{ height: "90vh" }}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight md:leading-tight">
          On the sixteenth of September 2023, all roads lead to Iligan City for
          the wedding of Alfonz Montelibano <em>&</em> Danica Impang.
        </h1>
      </section>

      <Image src={cover2} style={{ width: "100%" }} />

      <section className="flex items-center my-10" style={{ height: "100vh" }}>
        <section className="flex flex-wrap w-full">
          <section className="w-full sm:w-1/2">
            <div className="p-8 flex justify-center my-20">
              <div className="text-left w-96">
                <h3 className="uppercase text-xs md:text-base">Ceremony</h3>
                <p className="mt-2 text-2xl md:text-3xl leading-tight">
                  Half-past one in the afternoon
                  <br />
                  Lord of the Holy Cross Parish
                </p>
              </div>
            </div>
          </section>
          <section className="w-full sm:w-1/2">
            <div className="p-8 flex justify-center my-20">
              <div className="text-left w-96">
                <h3 className="uppercase text-xs md:text-base">Reception</h3>
                <p className="mt-2 text-2xl md:text-3xl leading-tight">
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
              The thirteen year long journey that led to this
              <br />
              day —
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
        <div className="px-8">
          <p className="text-3xl md:text-5xl leading-tight mb-10">
            We can’t wait to celebrate with you.
          </p>
          <p className="text-xl md:text-3xl">— <Logo /></p>
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
    </>
  );
}
