import Toggle from "src/components/Toggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="nav flex flex-wrap fixed inset-x-0 items-center justify-between px-4 backdrop-filter backdrop-blur-[10px] bg-opacity-30">
        <div className="flex items-center py-3 mr-6 flex-no-shrink text-grey-darkest">
          <svg
            className="mr-2 w-8 h-8 transition duration-300 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="97"
            height="97"
            viewBox="0 0 97 97"
            fill="none"
          >
            <circle
              cx="48.5"
              cy="48.5"
              r="48.5"
              fill="#0085FF"
              fillOpacity="1"
            />
          </svg>

          <span className="font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">
            BenCinn
          </span>
          <span className="hidden mx-1 font-semibold sm:inline">
            {" "}
            |{" "}
          </span>
          <span className="font-semibold text-dark">
            Chitsanupong Rongpan
          </span>
        </div>

        <input className="hidden menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="block relative px-2 py-4 cursor-pointer select-none menu-icon md:hidden"
          htmlFor="menu-btn"
        >
          <span className="flex relative items-center navicon bg-grey-darkest"></span>
        </label>

        <ul className="hidden justify-end m-0 w-full border-b md:flex menu md:border-none list-reset md:w-auto">
          <li className="mr-3">
            <Toggle />
          </li>
          <li className="border-t md:border-none">
            <Link href="/">
              <a className="block px-4 py-3 font-bold no-underline md:inline-block text-neutral-800 hover:text-grey-darker dark:text-neutral-200">
                Home
              </a>
            </Link>
          </li>

          <li className="border-t md:border-none">
            <Link
              href="/about">
              <a className="block px-4 py-3 no-underline md:inline-block text-neutral-800 hover:text-grey-darker dark:text-neutral-200"
              >
                About Me
              </a>
            </Link>
          </li>

          <li className="border-t md:border-none">
            <Link href="/blog">
              <a className="block px-4 py-3 no-underline md:inline-block text-neutral-800 hover:text-grey-darker dark:text-neutral-200"
              >
                Blog
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
