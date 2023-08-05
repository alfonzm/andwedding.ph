'use client';

import { useEffect } from "react";

export default function RedirectAttire() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href ='https://drive.google.com/file/d/1QavAGKeL_Pg0ISI-csEhP3qNzV5oZJgy/view?usp=share_link';
    }, 500);
  }, []);

  return (
    <div></div>
  );
}
