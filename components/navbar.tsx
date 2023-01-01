import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import FFLogoText from "../public/FFLogoText.svg";
import { routes } from "../data/navigation-data";

const Navbar = () => {
  const router = useRouter();

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

        <nav className="items-center text-base justify-center flex-wrap bg-white">
          {routes?.map((item) => (
            <Link
              key={item?.path}
              href={item?.path}
              className={`mr-11 text-gray ${
                router.pathname === item?.path
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
