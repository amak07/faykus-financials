import NavCTA from "./NavCTA";
import NavDesktopBar from "./NavDesktopBar";
import NavMobileBar from "./NavMobileBar";

import logo from "public/faykus-logo.png";
import Image from "next/image";
import NextLink from "next/link";

export type NavRoute = {
  name: string;
  route: string;
};

interface Props {
  links: NavRoute[];
  cta: NavRoute;
}

const Nav: React.FC<Props> = ({ links, cta }) => {
  return (
    <nav id="header" className="w-full z-30 text-white bg-white fixed">
      <NavDesktopBar
        renderLogo={() => (
          <a className="toggleColour no-underline hover:no-underline">
            <Image src={logo} alt="" height={80} width={285} />
          </a>
        )}
        renderLinks={() => {
          return (
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              {links.map((link) => (
                <li className="mr-3" key={link.name}>
                  <NextLink href={link.route}>
                    <a className="inline-block py-2 px-4 text-ochre font-bold no-underline">
                      {link.name}
                    </a>
                  </NextLink>
                </li>
              ))}
            </ul>
          );
        }}
        renderCTA={() => <NavCTA name={cta.name} id="desktop nav cta" />}
      />

      <hr className="border-b border-gray-400 opacity-25 my-0 py-0" />

      <NavMobileBar
        renderLinks={() => {
          return (
            <ul
              tabIndex={0}
              className="p-2 shadow menu dropdown-content bg-ochre rounded-box w-52"
            >
              {links.map((link) => (
                <li className="mr-3" key={link.name}>
                  <NextLink href={link.route}>
                    <a className="inline-block py-2 px-4 text-ochre font-bold no-underline">
                      {link.name}
                    </a>
                  </NextLink>
                </li>
              ))}
            </ul>
          );
        }}
        renderCTA={() => <NavCTA name={cta.name} id="mobile nav cta" />}
      />
    </nav>
  );
};

export default Nav;
