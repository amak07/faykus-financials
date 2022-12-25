"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import AppButton from "./button";
import FFLogoText from "../public/FFLogoText.svg";

const Navbar = () => {
  // const [openNav, setOpenNav] = React.useState(false);
  const pathname = usePathname();

  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/profile",
    },
    {
      name: "Clients",
      path: "/sign-in",
    },
    {
      name: "Services",
      path: "/sign-up",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header className="text-gray-600 body-font not-prose">
      <div className="flex flex-wrap p-5 items-center flex-row">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image
            src={FFLogoText}
            alt="faykus financial logo"
            width={317}
            height={88}
            className="hidden xl:inline"
          />

          {/* <img
            alt="Card Image"
            src="/FFLogoText_Mobile.svg"
            width={231}
            height={64}
            className="inline xl:hidden"
          /> */}
        </a>
        <nav className="md:ml-auto flex-wrap items-center text-base justify-center hidden xl:flex">
          {routes?.map((item) => (
            <Link
              key={item?.path}
              href={item?.path}
              className={`mr-11 text-gray ${
                pathname === item?.path
                  ? "font-semibold underline decoration-4 decoration-sun-yellow underline-offset-8"
                  : "font-normal hover:underline hover:decoration-sun-yellow hover:decoration-4 hover:underline-offset-8"
              }`}
              style={{ fontSize: 24 }}
            >
              {item?.name}
            </Link>
          ))}
        </nav>

        <AppButton variant="SMALL">Client Login</AppButton>

        <IconButton
          variant="text"
          size="lg"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent xl:hidden border-gray border-2"
          // onClick={() => setOpenNav(!openNav)}
        >
          {/* {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )} */}

          <Bars3Icon strokeWidth={2} className="h-6 w-6" />
        </IconButton>
      </div>
    </header>
    // <MTNavbar color="transparent" classNameName="p-3 pt-8 w-full max-w-full">
    //   <div classNameName="flex items-center justify-between text-white mx-4 mr-8">
    //     <Link href="/">
    //       <img alt="Card Image" src="/FFLogoText.svg" width={350} />
    //     </Link>
    //     <div classNameName="hidden lg:block">{navList}</div>
    //     <div classNameName="hidden gap-2 lg:flex">
    //       <a
    //         href="https://www.material-tailwind.com/blocks?ref=mtkr"
    //         target="_blank"
    //       >
    //         <Button
    //           variant="outlined"
    //           size="sm"
    //           fullWidth
    //           classNameName="border-black text-black rounded-2xl"
    //         >
    //           Client Login
    //         </Button>
    //       </a>
    //     </div>
    // <IconButton
    //   variant="text"
    //   size="sm"
    //   color="white"
    //   classNameName="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
    //   onClick={() => setOpenNav(!openNav)}
    // >
    // {openNav ? (
    //   <XMarkIcon strokeWidth={2} classNameName="h-6 w-6" />
    // ) : (
    //   <Bars3Icon strokeWidth={2} classNameName="h-6 w-6" />
    // )}
    //     </IconButton>
    //   </div>
    //   <MobileNav
    //     classNameName="rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900"
    //     open={openNav}
    //   >
    //     <div classNameName="container mx-auto">
    //       {navList}
    //       <a
    //         href="https://www.material-tailwind.com/blocks/react?ref=mtkr"
    //         target="_blank"
    //         classNameName="mb-2 block"
    //       >
    //         <Button variant="text" size="sm" fullWidth>
    //           pro version
    //         </Button>
    //       </a>
    //       {/* {React.cloneElement(action, {
    //         classNameName: "w-full block",
    //       })} */}
    //     </div>
    //   </MobileNav>
    // </MTNavbar>
  );
};

export default Navbar;
