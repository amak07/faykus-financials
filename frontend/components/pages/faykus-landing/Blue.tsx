/* eslint-disable @next/next/no-img-element */
import { faykusClients } from "@data/faykus-financial";

const Blue = () => {
  return (
    <>
      <div
        className={`
        container bg-gradient-to-r from-cyan 
        via-cyan-text to-cyan-accent p-6 sm:p-32
      `}
      >
        <div className="bg-white text-black rounded-2xl p-4 sm:p-16">
          <h2 className="text-4xl text-cyan">
            {`We're the People That Puts You Above All`}
          </h2>

          <p className="text-ochre-text mt-8 sm:mb-16 text-lg hidden sm:block">
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

          <div className="collapse border border-ochre rounded-box collapse-arrow mt-16 sm:hidden">
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

          <div className="flex-col justify-center items-center hidden sm:flex">
            {faykusClients.map((client) => (
              <div
                key={client.name}
                className="card sm:card-side shadow-2xl rounded-none my-4 max-w-5xl"
              >
                {client.position === "left" && (
                  <div className="w-1/2 h-96">
                    <img
                      src={client.image.src}
                      alt=""
                      className="h-full w-full"
                    />
                  </div>
                )}

                <div className="card-body bg-ochre text-white w-1/3">
                  <h2 className="card-title">{client.name}</h2>
                  <p>{client.desc}</p>
                </div>

                {client.position === "right" && (
                  <div className="w-1/2 h-96">
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

      <div className="sm:hidden text-center">
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

export default Blue;
