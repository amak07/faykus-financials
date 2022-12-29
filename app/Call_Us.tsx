import Image from "next/image";
import SunburstYellow from "../public/icons/SunburstPattern-Yellow.svg";
import PhoneCall from "../public/icons/phone.svg";

const CallUs = () => (
  <section className="bg-light-yellow mb-24 md:mb-32">
    <div className="container mx-auto  hidden md:block">
      <div className="flex flex-row justify-around items-center h-80">
        <div className="relative">
          <Image
            src={SunburstYellow}
            alt="call faykus icon"
            className="absolute"
            style={{ top: -22, left: -147 }}
          />
          <h2>Get in Touch</h2>
          <h1 className="whitespace-pre-line">
            Schedule a consultation {`\n`} with an advisor
          </h1>
        </div>

        <button className="app-icon-button">
          <Image src={PhoneCall} alt="call us" className="m-0" />
          <span
            className="font-roboto_slab font-bold text-icon-btn-heading"
            style={{ marginTop: -4 }}
          >
            (512) 522-1826
          </span>
        </button>
      </div>
    </div>

    <div className="flex flex-col md:hidden relative h-96 justify-start items-center">
      <Image
        src={SunburstYellow}
        alt="call faykus icon"
        className="absolute top-0"
      />
      <h2 className="mt-28" style={{ marginBottom: 8 }}>
        Get in Touch
      </h2>
      <h1 className="whitespace-pre-line text-center mt-0">
        Schedule a consultation {`\n`} with an advisor
      </h1>

      <button className="app-icon-button mt-16">
        <Image src={PhoneCall} alt="call us" className="m-0" />
        <span className="font-roboto_slab font-bold text-icon-btn-heading_M">
          (512) 522-1826
        </span>
      </button>
    </div>
  </section>
);

export default CallUs;
