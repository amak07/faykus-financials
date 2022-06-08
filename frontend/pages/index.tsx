import { faykusServices } from "@data/faykus-financial";
import Typewriter from "typewriter-effect";

function HomePage() {
  return (
    <>
      <section className="h-screen w-screen bg-sun-yellow-light">
        <div className="container mx-auto">
          <div className="flex justify-center items-center flex-col h-screen">
            <div
              className="text-4xl font-bold leading-snug text-gray-700"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="600"
              data-aos-easing="ease-in"
              data-aos-once="true"
            >
              <Typewriter
                options={{
                  strings: ["Authentic,", "Intentional,", "Tailored,"],
                  autoStart: true,
                  loop: true,
                }}
              />
              <span>Wealth Building.</span> <br />
              <span className={`border-b-4 border-b-sun-yellow`}>
                For Life.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-screen bg-white">
        <div className="container mx-auto py-16 px-8 sm:px-0">
          <div className="text-center">
            <h2
              className="mb-6 text-3xl text-gray-700 tracking-wider"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="600"
              data-aos-easing="ease-in"
              data-aos-once="true"
            >
              Our Services
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
                  <div className="icon text-4xl text-sun-yellow">
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl text-sun-yellow">{item.name}</h3>
                    <p className="text-gray-600 font-GillSansMTPro-Book">
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

export default HomePage;
