import { faykusServices } from "@data/faykus-financial";

const Services = () => {
  return (
    <section>
      <div className="container mx-auto max-w-6xl px-8 sm:px-0">
        <h1
          className={`
              w-full
              my-2
              text-3xl
              lg:text-4xl
              font-bold
              leading-tight
              text-cyan
            `}
        >
          Wealth Management
        </h1>

        <h2 className="text-ochre-text text-lg my-4">
          You’ve worked hard to build a financial legacy that will live on
          through your family, and Faykus Financials’ Wealth Management and
          Trust division is here to help you protect it. We offer the guidance
          you need to effectively manage your investments, establish an estate
          settlement, and can even act as your Trustee. You’ve always put your
          family’s future above all: Let us help you.
        </h2>
      </div>

      <div className="container mx-auto max-w-4xl mb-32">
        <div className="flex-col justify-center items-center hidden md:flex">
          {faykusServices.map((client) => (
            <div
              key={client.name}
              className="card sm:card-side shadow-xl rounded-none my-4 max-w-5xl bg-white"
            >
              {client.position === "left" && (
                <div className="w-1/3 h-64">
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

                <div className="card-actions justify-end">
                  <a className="link text-ochre">Learn More {">"}</a>
                </div>
              </div>

              {client.position === "right" && (
                <div className="w-1/3 h-64">
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
    </section>
  );
};

export default Services;
