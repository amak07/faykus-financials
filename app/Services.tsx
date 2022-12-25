import Link from "next/link";
import Image from "next/image";
import { services } from "../data/services-data";

const Services = () => (
  <section>
    <div className="container mx-auto mb-44">
      <div className="text-center mb-20">
        <h1>Our Services</h1>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        {services?.map((service) => (
          <div
            key={service.title}
            className="p-4 md:w-1/3 flex flex-col text-center items-center"
          >
            <div className="inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
              <Image
                src={service.icon}
                className="bg-cover bg-center"
                alt="wealth management icon"
              />
            </div>
            <div className="flex-grow">
              <h4>{service.title}</h4>
              <p className="text-left">{service.desc}</p>
              <div className="flex justify-start">
                <Link
                  href={service.readMoreHref}
                  className="mt-2 text-sun-yellow inline-flex items-center text-left uppercase no-underline"
                >
                  Read More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
