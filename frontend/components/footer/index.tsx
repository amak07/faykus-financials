import Link from "next/link";
import FaykusLogo from "public/FF.svg";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-sun-yellow-light text-gray-700">
      <div>
        <a className="w-1/3">
          <img src={FaykusLogo.src} alt="company logo" />
        </a>
        <p className="font-bold">
          Faykus Financial, LLC <br />
          Providing reliable advice since 2016.
        </p>
        <p>Copyright © 2022 - All rights reserved</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4 text-sun-yellow">
          {[
            {
              href: "https://www.linkedin.com/company/faykus-financial-llc/about",
              icon: "lni lni-linkedin-original",
            },
          ].map((item) => (
            <Link href={item.href} key={item.href}>
              <a target="_blank">
                <div className="icon text-4xl text-sun-yellow hover:text-gray-700">
                  <i className={item.icon}></i>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
