import logo from "public/faykus-logo.png";
import Image from "next/image";
import NextLink from "next/link";
import { MenuAlt2Icon } from "@heroicons/react/solid";

const Nav = () => {
  return (
    <nav id="header" className="w-full z-30 text-white bg-white fixed">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <a className="toggleColour no-underline hover:no-underline">
            <Image src={logo} alt="" height={80} width={285} />
          </a>
        </div>

        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <NextLink href="/">
                <a className="inline-block py-2 px-4 text-ochre font-bold no-underline">
                  Home
                </a>
              </NextLink>
            </li>
            <li className="mr-3">
              <NextLink href="/">
                <a className="inline-block py-2 px-4 text-ochre no-underline">
                  About
                </a>
              </NextLink>
            </li>
            <li className="mr-3">
              <NextLink href="/">
                <a className="inline-block py-2 px-4 text-ochre no-underline">
                  Clients
                </a>
              </NextLink>
            </li>
            <li className="mr-3">
              <NextLink href="/">
                <a className="inline-block py-2 px-4 text-ochre no-underline">
                  Services
                </a>
              </NextLink>
            </li>
            <li className="mr-3">
              <NextLink href="/">
                <a className="inline-block py-2 px-4 text-ochre no-underline">
                  Contact Us
                </a>
              </NextLink>
            </li>
          </ul>
          <button
            id="navAction"
            className={`
              mx-auto lg:mx-0 hover:underline transparent text-cyan 
              font-bold rounded-full border-cyan-accent border-4 mt-4 lg:mt-0 py-4 px-8 shadow 
              opacity-75 focus:outline-none focus:shadow-outline 
              transform transition hover:scale-105 duration-300 ease-in-out
              `}
          >
            Client Login
          </button>
        </div>
      </div>

      <hr className="border-b border-gray-400 opacity-25 my-0 py-0" />

      <div
        className={`
          h-20 bg-white border-gray-400 
          border-b border-t border-l border-r
          flex-row flex sm:hidden
        `}
      >
        <div className="flex justify-center items-center w-1/2 border-r-2">
          <div className="dropdown">
            <div tabIndex={0} className="m-1 bg-white">
              <MenuAlt2Icon className="h-12 w-12 text-cyan"></MenuAlt2Icon>
            </div>
            <ul
              tabIndex={0}
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center w-1/2">
          <button
            id="navAction"
            className={`
            mx-auto lg:mx-0 hover:underline transparent text-cyan 
            font-bold rounded-full border-cyan-accent border-4 lg:mt-0 py-4 px-8 shadow 
            opacity-75 focus:outline-none focus:shadow-outline 
            transform transition hover:scale-105 duration-300 ease-in-out
          `}
          >
            Client Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
