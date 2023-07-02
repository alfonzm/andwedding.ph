import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4">
      <div className="flex space-x-4">
        <Link href="/our-story">
          Our Story
        </Link>
        <Link href="/our-story">
          Details
        </Link>
        <Link href="/our-story">
          Location
        </Link>
      </div>
      <div className="flex-grow flex justify-center">
        <h1 className="text-2xl font-bold">A&amp;D</h1>
      </div>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
          RSVP
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
