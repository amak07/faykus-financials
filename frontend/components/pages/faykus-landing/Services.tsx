import Image from "next/image";
import { faykusServices } from "@data/faykus-financial";
import { useState } from "react";
import { XIcon } from "@heroicons/react/outline";

const Services = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  return (
    <section className="container mx-auto flex flex-wrap bg-white border-b py-8">
      <h1
        className={`
              w-full
              my-2
              text-5xl
              font-bold
              leading-tight
              text-center text-cyan
            `}
      >
        What are you looking to do?
      </h1>

      {faykusServices.map((service, index) => (
        <div
          key={service.name}
          className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink items-center"
        >
          <div
            className={`card relative ${
              selectedIndex === index ? "shadow-xl image-full" : ""
            }`}
          >
            <figure>
              <Image src={service.img} alt="" />
              <button
                onClick={() => setSelectedIndex(index)}
                className="text-ochre font-semibold text-3xl text-center underline"
              >
                {service.name}
              </button>
            </figure>
            <div
              className={`justify-end card-body ${
                selectedIndex === index ? "" : "hidden"
              }`}
            >
              <button
                className="h-8 w-8 absolute top-4 right-4 z-10"
                onClick={() => setSelectedIndex(-1)}
              >
                <XIcon className="text-white"></XIcon>
              </button>
              <h2 className="card-title text-white">{service.name}</h2>
              <p>{service.desc}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
