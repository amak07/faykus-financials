import Image from "next/image";
import SunburstYellow from "../public/icons/SunburstPattern-Yellow.svg";
import PhoneCall from "../public/icons/phone.svg";

const CallUs = () => (
  <section className="bg-light-yellow mb-32">
    <div className="container mx-auto">
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
          <Image src={PhoneCall} alt="call us" />
          <span
            className="font-roboto_slab font-bold"
            style={{ fontSize: 38, marginTop: -4 }}
          >
            (512) 522-1826
          </span>
        </button>
      </div>
    </div>
  </section>
);

export default CallUs;
