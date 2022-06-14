import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import FaykusLogo from "public/FF-text.svg";

const Navbar = () => {
  const router = useRouter();
  const [animateHeader, setAnimateHeader] = useState(false);
  const [showMenu, setShowMenu] = useState<boolean>();
  const menuRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const listener = () =>
      window.scrollY > 20 ? setAnimateHeader(true) : setAnimateHeader(false);

    window.scrollY > 20 ? setAnimateHeader(true) : setAnimateHeader(false);

    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  const renderLinks = (classes?: string) => {
    return (
      <ul className={classes}>
        {[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "About Us",
            href: "/about-us",
          },
          {
            label: "Our Services",
            href: "/services",
          },
        ].map((item) => (
          <li className="mx-2 my-4" key={item.label}>
            <Link href={item.href}>
              <a
                aria-label={item.label}
                className={`hover:border-b-4 hover:border-b-sun-yellow tracking-wider ${
                  item.href === router.pathname
                    ? "border-b-4 border-b-sun-yellow"
                    : ""
                }`}
                onClick={() => {
                  if (showMenu && menuRef) {
                    menuRef.current?.click();
                  }
                }}
              >
                {item.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <header id="header-wrap" className="relative">
        <div
          className={`navigation w-full z-30 fixed  ${
            animateHeader ? "shadow-md bg-white" : ""
          }`}
        >
          <nav className="navbar py-2 flex justify-between items-center relative pr-4">
            <div>
              <Link href="/">
                <a
                  aria-label="go home"
                  className="w-2/3"
                  onClick={() => {
                    if (showMenu && menuRef) {
                      menuRef.current?.click();
                    }
                  }}
                >
                  <img src={FaykusLogo.src} alt="company logo" />
                </a>
              </Link>
            </div>

            <div className="flex-grow justify-end">
              {renderLinks("justify-center items-center hidden lg:flex")}

              <label className="btn btn-circle swap swap-rotate lg:hidden btn-ghost text-slate-800">
                <input
                  type="checkbox"
                  onClick={() => {
                    setShowMenu(!showMenu);
                  }}
                  ref={menuRef}
                  id="menu"
                  aria-label="menu button"
                />

                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                <svg
                  className="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
            </div>
          </nav>
        </div>
      </header>

      <div className="w-full bg-transparent fixed top-20 md:top-32 z-10">
        <div
          className={`bg-sun-yellow-light mx-4 py-4 px-2 shadow-lg lg:hidden  ${
            showMenu ? "" : "hidden"
          }`}
        >
          {renderLinks()}
        </div>
      </div>
    </>
  );
};

export default Navbar;
