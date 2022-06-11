import { faykusServices } from "@data/faykus-financial";
import Typewriter from "typewriter-effect";

function AboutUsPage() {
  return (
    <>
      <section className="w-screen bg-white pt-16">
        <div className="container mx-auto py-16 px-8 sm:px-0">
          <div className="text-left">
            <h2
              className="text-3xl text-gold tracking-wider"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="600"
              data-aos-easing="ease-in"
              data-aos-once="true"
            >
              Our Team
            </h2>
            <h2
              className="mb-6 text-2xl text-cool-gray tracking-wider"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="600"
              data-aos-easing="ease-in"
              data-aos-once="true"
            >
              Meet the Faykus Financial Team
            </h2>
          </div>
          <div className="flex flex-wrap">
            {faykusServices.map((item) => (
              <div
                key={item.name}
                className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="600"
                data-aos-easing="ease-in"
                data-aos-once="true"
              >
                <div className="m-4">
                  <div className="icon text-4xl text-gold">
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl text-gold">{item.name}</h3>
                    <p className="text-cool-gray font-GillSansMTPro-Book">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUsPage;
