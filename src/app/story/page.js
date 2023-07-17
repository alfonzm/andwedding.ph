import "./story.css";
// import Navbar from "../components/navbar";
import Image from "next/image";
import camera from "../images/camera.jpg";
import camera2 from "../images/camera2.jpg";
import lean from "../images/lean.jpg";
import sunglasses from "../images/sunglasses.jpg";
import hold from "../images/hold.jpg";
import carry from "../images/carry.jpg";
import Link from "next/link";

export default function Story() {
  return (
    <main>
      <article className="text-2xl leading-normal text-neutral-800">
        <h1 className="text-4xl text-center my-10">Our Story</h1>
        <Image src={camera2} className="w-full mb-16" />

        <h2>June 2010</h2>
        <p>“Unsa gani atong assignment sa Algebra?”</p>

        <p>
          Alfonz often loved to ask schoolwork-related questions as an excuse to
          talk with Danica, if only for a brief moment.
        </p>

        <p>
          Yes, it all started way back in the corridors of a little classroom
          called III-Neon, where then high-school classmates Alfonz & Danica
          met.
        </p>

        <p>
          Unbeknownst to them at the time, these innocent and seemingly
          insignificant classroom counters would later unfold into something
          beautiful.
        </p>

        <p className="mt-10">
          <Image src={sunglasses} className="w-full" />
        </p>

        <h2>Mar 2011</h2>
        <p>
          Majority of the relationship happened while Danica was pursuing
          medicine in Iligan City while Alfonz studied then worked in Cebu, both
          only seeing each other once every few months.
        </p>

        <p>
          The relationship's long-distance phase eventually concluded in 2021
          when the pair booked one-way tickets to Cebu, as Danica embarked on
          her postgraduate internship.
        </p>

        <p>
          <Image src={hold} className="w-full" />
        </p>

        <p>
          It was a challenging decade, but their bond was tightly held by a
          single thread: their love for music and travel. So it was only
          appropriate that the road to their wedding day started at the place
          they feel happiest.
        </p>

        <h2>Mar 2023</h2>
        <p>
          Alfonz popped the question on March 2023, on a deliberately chosen
          moment at the Wanderland Music & Arts Festival.
        </p>

        <p className="my-12">
          <Image src={lean} className="w-full sm:w-9/12 m-auto" />
        </p>

        <p>
          As soon as headlining act Phoenix sang the words to Love Like a
          Sunset—a song about beginnings and endings—Alfonz dropped on one knee.
        </p>
        <p>
          Danica responded not with a “yes,” but with furious head-nodding and
          with tears on her cheeks.
        </p>

        <h2>Sept 2023</h2>

        <p>
          On the 16th of September, Danica and Alfonz will finally join hands in
          marriage.
        </p>

        <p>
          A 13-year old relationship that stood the relentless test of time; a
          testament to adages about distances making hearts grow fonder.
        </p>

        <p>If any, the knot has already long been tied.</p>

        <section className="mt-20">
          <Image src={carry} className="w-full" />
        </section>
      </article>
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
