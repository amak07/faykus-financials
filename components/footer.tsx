import Image from "next/image";
import FooterCurve from "../public/icons/footer_curve.svg";
import FaykusLogoVertical from "../public/faykus-logo-vertical.svg";
import Send from "../public/icons/Send.svg";

const Footer = () => {
  return (
    <section className="relative footer-box-shadow">
      <div className="flex flex-col">
        <footer className="footer p-10 bg-white z-10">
          <div className="flex w-full h-full justify-center items-center">
            <Image src={FaykusLogoVertical} alt="faykus logo in footer" />
          </div>
          <div>
            <h3 className="mt-0">Contact Us</h3>
            <span className="text-paragraph font-nunito font-normal text-gray">
              (512) 522-1826
            </span>
            <span className="text-paragraph font-nunito font-normal text-gray">
              info@faykusfinancial.com
            </span>
            <span className="whitespace-pre-line text-paragraph font-nunito font-normal text-gray">
              13809 Research Blvd. Ste. 537 {"\n"} Austin, TX 78750
            </span>
          </div>
          <div>
            <h3 className="mt-0">Subscribe to our newsletter</h3>
            <div className="form-control w-80">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Email address"
                  className="app-input"
                />
                <button className="app-icon-button btn-sm mt-6">
                  <Image
                    src={Send}
                    alt="contact us submit form"
                    width={22}
                    height={22}
                  />
                  <span
                    className="font-roboto_slab font-medium capitalize"
                    style={{ fontSize: 24 }}
                  >
                    Submit
                  </span>
                </button>
              </div>
            </div>
          </div>
        </footer>

        <div className="bg-gray h-28 text-white flex flex-row justify-around w-full font-nunito font-normal items-center z-10">
          <div>
            <span className="text-footer-span">
              Investment Advisory services offered by Faykus Financial, LLC, a
              registered investment advisor.
            </span>
          </div>
          <div>
            <span className="text-footer-span">
              © 2023 Faykus Financial, LLC. All rights reserved
            </span>
          </div>
        </div>
      </div>

      {/* <Image
        src={FooterCurve}
        alt=""
        className="w-full absolute bottom-0 bg-white color-white z-0"
      /> */}
    </section>
  );
};

export default Footer;
