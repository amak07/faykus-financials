import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import FFLogoTextMobile from "../public/FFLogoText.svg";
import Hamburger from "../public/icons/Hamburger.svg";
import XMark from "../public/icons/X-Mark.svg";
import useScrollPosition from "../hooks/useScrollPosition";
import { routes } from "../data/navigation-data";

const Navbar = () => {
  const scrollPos = useScrollPosition();
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeStart", (url) => {
      setOpenMenu(false);
    });
  }, []);

  return (
    <header
      className="not-prose z-10 fixed top-0 w-full bg-white"
      style={{ borderBottomWidth: scrollPos > 5 ? "thin" : 0 }}
    >
      <div className="flex flex-wrap p-5 items-center flex-row justify-between">
        <a>
          <Image
            src={FFLogoTextMobile}
            alt="faykus financial logo"
            width={231}
            height={64}
          />
        </a>

        <button
          className="btn btn-outline bg-transparent border-gray"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <Image src={Hamburger} alt="open menu" />
        </button>
      </div>

      {openMenu && (
        <div
          className="w-full absolute bg-light-yellow"
          style={{ height: 844, top: 105 }}
        >
          <button
            className="btn bg-transparent btn-ghost absolute top-12 left-4 z-10"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <Image src={XMark} alt="close menu" />
          </button>

          <nav className="flex flex-col items-center justify-center text-center mt-36">
            {routes?.map((item) => (
              <Link
                key={item?.path}
                href={item?.path}
                className={`mb-12 text-gray ${
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
      )}
    </header>
  );
};

export default Navbar;
