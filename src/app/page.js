import cover from "./images/cover4.jpg";
import cover2 from "./images/cover5.jpg";
import stairs from "./images/stairs.jpg";
import walk from "./images/walk.jpg";
import Image from "next/image";
import Link from "next/link";
import Logo from "./components/logo";

// import cover from "./images/cover3.jpg";

export default function Home() {
  return (
    <main className="home">
      <section
        className="p-10 text-center flex"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundImage: `url(${cover.src})`,
          height: "1200px",
        }}
      ></section>

      <section className="px-10 text-center flex" style={{ height: "80vh" }}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight md:leading-tight">
          On the sixteenth of September 2023, all roads lead to Iligan City for
          the wedding of Alfonz Montelibano <em>&</em> Danica Impang.
        </h1>
      </section>

      <Image src={cover2} style={{ width: "100%" }} />

      <section className="flex items-center my-10" style={{ height: "85vh" }}>
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

      <section className="flex flex-wrap w-full" style={{ backgroundColor: '#EEECE3' }}>
        <section className="w-full sm:w-1/2 p-0">
          <Image src={stairs} style={{ width: "100%" }} />
        </section>
        <section className="w-full sm:w-1/2 flex justify-center items-center">
          <div className="text-center sm:text-left my-28 sm:my-0 text-3xl sm:text-4xl lg:text-5xl p-10 story">
            <p className="mb-10 leading-tight">
              The thirteen year long journey that led to this
              day —
            </p>
            <Link
              className="text-2xl md:text-3xl text-white bg-black px-12 py-5 inline-block hover:underline"
              href="/story"
            >
              Our Story
            </Link>
          </div>
        </section>
      </section>

      <section className="flex flex-col-reverse md:flex-col">
        <section
          style={{ height: "80vh" }}
          className="flex items-center justify-center text-center"
        >
          <div className="px-8">
            <p className="text-3xl md:text-5xl leading-tight mb-10">
              We can’t wait to celebrate with you.
            </p>
            <p className="text-xl md:text-3xl">
              — <Logo />
            </p>
          </div>
        </section>
        <section>
          <Image src={walk} style={{ width: "100%" }} />
        </section>
      </section>

      <section className="flex justify-center items-center">
        <Link
          className="text-3xl text-white bg-black inline-block text-center w-full hover:underline"
          style={{ padding: "4rem 10rem" }}
          href="/rsvp"
        >
          RSVP
        </Link>
      </section>
    </main>
  );
}
