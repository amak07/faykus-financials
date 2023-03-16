import Image from "next/image";
import ClientGroup from "../public/client_group.svg";

const Clients = () => (
  <section>
    <div className="container mx-auto mb-32 md:mb-44">
      <div className="md:grid md:grid-cols-2 flex flex-wrap-reverse">
        <div>
          <h2 className="text-center md:text-left">Who We Serve</h2>

          <h1 className="md:text-left text-center mx-8 md:mx-0">
            We work with successful families who desire to make the transition
            from financial success to significance and impact multi-generational
            wealth.
          </h1>

          <div className="flex justify-center md:block mt-12 md:mt-0">
            <button className="app-button">
              <span className="text-paragraph_M md:text-paragraph font-roboto_slab font-normal">
                Learn more about our clients
              </span>
            </button>
          </div>
        </div>

        <Image
          src={ClientGroup}
          alt="faykus financial clients"
          className="object-cover object-center"
        />
      </div>
    </div>
  </section>
);

export default Clients;
