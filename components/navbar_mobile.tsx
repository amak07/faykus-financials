import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import FFLogoTextMobile from "../public/FFLogoText.svg";
import Hamburger from "../public/icons/Hamburger.svg";
import useScrollPosition from "../hooks/useScrollPosition";

const Navbar = () => {
  const scrollPos = useScrollPosition();
  const pathname = usePathname();

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

        <button className="btn btn-outline bg-transparent border-gray">
          <Image src={Hamburger} alt="menu" />
        </button>
        {/* <nav className="flex-wrap items-center text-base justify-center">
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
        </nav> */}
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
