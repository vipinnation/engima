import Link from "next/link";
import { HiOutlineUserCircle } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50">
      <nav className="flex justify-between px-8 py-4 items-center bg-primary ">
        <h1 className="text-xl text-white font-bold ">
          <Link href="/">Enigma</Link>
        </h1>
        <div className="flex items-center">
          <div className="flex items-center bg-white rounded-lg mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 pt-0.5 text-gray-600 mx-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              className="ml-2 outline-none bg-transparent font-normal"
              type="text"
              name="search"
              id="search"
              autoCorrect="false"
              autoComplete="false"
              placeholder="Search..."
            />
          </div>
          <ul className="flex items-center space-x-6 text-white">
            <li className="font-normal cursor-pointer"></li>
            <li className="font-normal cursor-pointer">Articles</li>

            <li className="text-2xl  cursor-pointer">
              <HiOutlineUserCircle />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
