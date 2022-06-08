import { faykusServices } from "@data/faykus-financial";
import MainImage from "public/sunset-beach.jpg";

function HomePage() {
  return (
    <>
      <section className="w-screen h-screen bg-sun-yellow-light p-40">
        <div className="container mx-auto">
          <div>
            <img src={MainImage.src} />
          </div>
          {["Authentic,", "Intentional,", "Wealth Building.", "For Life."].map(
            (text, index) => (
              <h2
                key={text}
                className={`text-4xl font-bold leading-snug text-gray-700`}
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="600"
                data-aos-easing="ease-in"
                data-aos-once="true"
              >
                <span
                  className={`${
                    index === 3 ? "border-b-4 border-b-sun-yellow" : ""
                  }`}
                >
                  {text}
                </span>
              </h2>
            )
          )}
        </div>
      </section>

      <section className="h-screen w-screen bg-white">
        <div className="container mx-auto py-16">
          <div className="text-center">
            <h2 className="mb-12">Our Services</h2>
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
                    <h3 className="text-2xl">{item.name}</h3>
                    <p className="text-gray-600">{item.desc}</p>
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
