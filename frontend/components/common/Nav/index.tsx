import NavLoginButton from "./NavLoginButton";
import NavDesktopBar from "./NavDesktopBar";
import NavMobileBar from "./NavMobileBar";

import logo from "public/faykus-logo.png";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";

export type NavRoute = {
  name: string;
  route: string;
};

interface Props {
  links: NavRoute[];
  cta: NavRoute;
}

const Nav: React.FC<Props> = ({ links, cta }) => {
  const router = useRouter();

  return (
    <nav id="header" className="w-full z-30 text-white bg-white fixed">
      <NavDesktopBar
        renderLogo={() => (
          <NextLink href="/">
            <a className="toggleColour no-underline hover:no-underline">
              <Image src={logo} alt="" height={80} width={285} />
            </a>
          </NextLink>
        )}
        renderLinks={() => {
          return (
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              {links.map((link) => (
                <li className="mr-3" key={link.name}>
                  <NextLink href={link.route}>
                    <a
                      className={`
                        inline-block py-2 px-4 text-ochre no-underline
                        ${router.pathname === link.route ? "font-bold" : ""} 
                      `}
                    >
                      {link.name}
                    </a>
                  </NextLink>
                </li>
              ))}
            </ul>
          );
        }}
        renderCTA={() => (
          <NavLoginButton name={cta.name} id="desktop nav cta" />
        )}
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
                    <a
                      className={`
                      inline-block py-2 px-4 text-ochre no-underline
                      `}
                    >
                      {link.name}
                    </a>
                  </NextLink>
                </li>
              ))}
            </ul>
          );
        }}
        renderCTA={() => <NavLoginButton name={cta.name} id="mobile nav cta" />}
      />
    </nav>
  );
};

export default Nav;
