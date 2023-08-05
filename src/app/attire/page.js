import { redirect } from "next/navigation";
import Head from "next/head";

export const metadata = {
  title: "Attire Guide — A&D 09.16.23",
  url: "https://andwedding.ph/attire",
  description:
    "On the 16th of September 2023, all roads lead to Lord of the Holy Cross Parish for the wedding of Alfonz Montelibano & Danica Impang.",
};

export default function Attire() {
  // return (
  //   <Head>
  //     <meta
  //       http-equiv="refresh"
  //       content="1; url=https://drive.google.com/file/d/1QavAGKeL_Pg0ISI-csEhP3qNzV5oZJgy/view?usp=share_link"
  //     />
  //   </Head>
  // );
  redirect('https://drive.google.com/file/d/1QavAGKeL_Pg0ISI-csEhP3qNzV5oZJgy/view?usp=share_link')
}
