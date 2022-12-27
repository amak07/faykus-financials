import Image from "next/image";
import ClientGroup from "../public/client_group.svg";

const Clients = () => (
  <section>
    <div className="container mx-auto mb-44">
      <div className="grid grid-cols-2">
        <div>
          <h2>Our Clients</h2>

          <h1>
            We work with successful families who desire to make the transition
            from great financial success to significance & lasting impact.
          </h1>

          <button className="app-button">Learn more about our clients</button>
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
