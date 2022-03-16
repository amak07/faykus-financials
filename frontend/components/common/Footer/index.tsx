export type NavRoute = {
  name: string;
  route: string;
};

interface Props {
  links: NavRoute[];
}

const Footer: React.FC<Props> = ({ links }) => {
  return (
    <footer className="footer footer-center p-4 text-base-content bg-ochre">
      <div>
        <p className="text-black">Copyright © 2022 - Faykus Financial, LLC</p>
      </div>
    </footer>
    // <footer className="p-4 sm:p-10 footer text-base-content flex flex-col sm:flex-row justify-around bg-ochre">
    //   <div>
    //     <span className="footer-title text-white opacity-100">Company</span>
    //     {links.map((link) => (
    //       <a key={link.name} className="link link-hover">
    //         {link.name}
    //       </a>
    //     ))}
    //   </div>

    //   <div>
    //     <span className="footer-title text-white opacity-100">Newsletter</span>
    //     <div className="form-control w-80">
    //       <label className="label">
    //         <span className="label-text">Enter your email address</span>
    //       </label>
    //       <div className="relative">
    //         <input
    //           type="text"
    //           placeholder="username@site.com"
    //           className="w-full pr-16 input  bg-white text-black"
    //         />
    //         <button className="absolute top-0 right-0 rounded-l-none btn bg-cyan border-cyan hover:bg-cyan-text">
    //           Subscribe
    //         </button>
    //       </div>
    //     </div>

    //     <div className="mt-8">
    //       <p>Copyright © 2021 - All right reserved by Faykus Financial, LLC</p>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
