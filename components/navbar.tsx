"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import FFLogoText from "../public/FFLogoText.svg";

const Navbar = () => {
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
    <header className="not-prose bg-white">
      <div className="flex flex-wrap p-5 items-center flex-row justify-between">
        <a>
          <Image
            src={FFLogoText}
            alt="faykus financial logo"
            width={317}
            height={88}
          />
        </a>

        <nav className="items-center text-base justify-center flex-wrap">
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

          <button className="app-button">Client Login</button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
