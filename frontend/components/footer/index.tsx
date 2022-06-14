import Link from "next/link";
import FaykusLogo from "public/FF.svg";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-white text-slate-800">
      <div
        data-aos="zoom-out"
        data-aos-delay="600"
        data-aos-duration="600"
        data-aos-easing="ease-in"
        data-aos-once="true"
      >
        <a className="w-1/3">
          <img src={FaykusLogo.src} alt="company logo" />
        </a>
        <p className="font-bold">
          Faykus Financial, LLC <br />
          Providing reliable advice since 2016.
        </p>
        <p>Copyright © 2022 - All rights reserved</p>

        {[
          {
            href: "https://www.linkedin.com/company/faykus-financial-llc/about",
            icon: "lni lni-linkedin-original",
          },
        ].map((item) => (
          <Link href={item.href} key={item.href}>
            <a target="_blank" aria-label="LinkedIn profile">
              <div className="icon text-4xl text-sun-yellow">
                <i className={item.icon}></i>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
