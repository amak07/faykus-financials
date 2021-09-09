/* eslint-disable @next/next/no-img-element */
import { faykusClients } from "@data/faykus-financial";
import bluepattern from "public/blue-pattern-bg.png";

const Clients = () => {
  return (
    <>
      <div
        className={`
         p-6 md:p-32
      `}
        style={{
          backgroundImage: `url(${bluepattern.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-white text-black rounded-2xl p-4 md:p-16 container mx-auto max-w-6xl">
          <h2 className="text-4xl text-cyan">
            {`We're the People That Puts You Above All`}
          </h2>

          <p className="text-ochre-text mt-8 md:mb-16 text-lg hidden md:block">
            Faykus Financial, LLC is a values-driven wealth management firm
            headquartered in Austin, TX. We work with successful families who
            desire to make the transition from financial success to magnified
            significance and lasting impact. We provide consultative wealth
            management, legacy planning and philanthropic strategy development
            as well as goals-based investment and risk management services. Our
            clients include CEOs of global companies, business owners, real
            estate developers, entrepreneurs, technology leaders, non-profits,
            family foundations and farmer/rancher families in Central Texas and
            beyond. We focus first on helping you clarify your values, listen to
            your concerns and understand what makes you unique. We then
            coordinate among a team of mission driven professionals to design,
            build and protect your family’s plan.
          </p>

          <div className="collapse border border-ochre rounded-box collapse-arrow mt-16 md:hidden">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-bold text-ochre-text">
              Our Mission
            </div>
            <div className="collapse-content text-ochre-text">
              <p>
                Faykus Financial, LLC is a values-driven wealth management firm
                headquartered in Austin, TX. We work with successful families
                who desire to make the transition from financial success to
                magnified significance and lasting impact. We provide
                consultative wealth management, legacy planning and
                philanthropic strategy development as well as goals-based
                investment and risk management services.
              </p>

              <p className="mt-4">
                Our clients include CEOs of global companies, business owners,
                real estate developers, entrepreneurs, technology leaders,
                non-profits, family foundations and farmer/rancher families in
                Central Texas and beyond. We focus first on helping you clarify
                your values, listen to your concerns and understand what makes
                you unique. We then coordinate among a team of mission driven
                professionals to design, build and protect your family’s plan.
              </p>
            </div>
          </div>

          <div className="flex-col justify-center items-center hidden md:flex">
            {faykusClients.map((client) => (
              <div
                key={client.name}
                className="card sm:card-side shadow-xl rounded-none my-4 max-w-5xl border-ochre border"
              >
                {client.position === "left" && (
                  <div className="w-1/2 h-80">
                    <img
                      src={client.image.src}
                      alt=""
                      className="h-full w-full"
                    />
                  </div>
                )}

                <div className="card-body w-1/3">
                  <h2 className="card-title text-ochre">{client.name}</h2>
                  <p className="text-ochre-text">{client.desc}</p>
                </div>

                {client.position === "right" && (
                  <div className="w-1/2 h-80">
                    <img
                      src={client.image.src}
                      alt=""
                      className="h-full w-full"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:hidden text-center">
        <h2 className="text-4xl text-cyan my-8">Our Clients</h2>

        {faykusClients.map((client) => (
          <div key={client.name} className="card rounded-none my-8">
            <figure>
              <img src={client.image.src} className="w-full" alt="" />
            </figure>
            <div className="card-body bg-ochre text-white">
              <h2 className="card-title">{client.name}</h2>
              <p>{client.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Clients;
