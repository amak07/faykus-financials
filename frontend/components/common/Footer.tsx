const Footer = () => {
  return (
    <footer className="p-4 sm:p-10 footer bg-base-200 text-base-content flex flex-col sm:flex-row justify-around">
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Clients</a>
        <a className="link link-hover">Services</a>
        <a className="link link-hover">Contact</a>
      </div>

      <div>
        <span className="footer-title">Newsletter</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="w-full pr-16 input input-bordered"
            />
            <button className="absolute top-0 right-0 rounded-l-none btn btn-primary">
              Subscribe
            </button>
          </div>
        </div>

        <div className="mt-8">
          <p>Copyright © 2021 - All right reserved by Faykus Financial, LLC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
