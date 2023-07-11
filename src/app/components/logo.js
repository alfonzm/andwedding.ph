import localFont from "next/font/local";

const ampersand = localFont({
  src: [
    {
      path: "../fonts/imfell_french_regular.ttf",
      weight: "400",
      style: "italic",
    },
  ],
});

const Logo = () => {
  return (
    <span>
      A<em style={{ fontSize: '0.875em' }} className={ampersand.className}>&</em>D
    </span>
  );
}

export default Logo;
