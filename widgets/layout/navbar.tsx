"use client";

import React from "react";
import Link from "next/link";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const routes = [
    {
      name: "home",
      path: "/home",
      url: {
        pathname: "/home",
        name: "home",
      },
    },
    {
      name: "about us",
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
    // {
    //   name: "Contact",
    //   href: "https://www.material-tailwind.com/docs/react/installation",
    //   target: "_blank",
    // },
  ];

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 -ml-6 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="black"
          className="capitalize"
        >
          <Link
            href={{
              pathname: path,
            }}
            className="flex items-center gap-1 p-1 font-semibold"
          >
            {name}
          </Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <MTNavbar color="transparent" className="p-3 pt-8 w-full max-w-full">
      <div className="flex items-center justify-between text-white mx-4 mr-8">
        <Link href="/">
          <img alt="Card Image" src="/FFLogoText.svg" width={350} />
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden gap-2 lg:flex">
          <a
            href="https://www.material-tailwind.com/blocks?ref=mtkr"
            target="_blank"
          >
            <Button
              variant="outlined"
              size="sm"
              fullWidth
              className="border-black text-black rounded-2xl"
            >
              Client Login
            </Button>
          </a>
        </div>
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <MobileNav
        className="rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900"
        open={openNav}
      >
        <div className="container mx-auto">
          {navList}
          <a
            href="https://www.material-tailwind.com/blocks/react?ref=mtkr"
            target="_blank"
            className="mb-2 block"
          >
            <Button variant="text" size="sm" fullWidth>
              pro version
            </Button>
          </a>
          {/* {React.cloneElement(action, {
            className: "w-full block",
          })} */}
        </div>
      </MobileNav>
    </MTNavbar>
  );
};

export default Navbar;
