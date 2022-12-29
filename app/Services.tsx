import Link from "next/link";
import Image from "next/image";
import { services } from "../data/services-data";

const Services = () => (
  <section>
    <div className="container mx-auto mb-36 md:mb-44">
      <div className="text-center mb-14 md:mb-20">
        <h1 className="hidden md:block">
          Our services fall into three categories:
        </h1>
        <h1 className="md:hidden block whitespace-pre-line">
          Our services fall into {"\n"} three categories:
        </h1>
      </div>
      <div className="flex flex-wrap">
        {services?.map((service) => (
          <div
            key={service.title}
            className="p-4 md:w-1/3 flex flex-col text-center items-center"
          >
            <div className="inline-flex items-center justify-center rounded-full flex-shrink-0">
              <Image
                src={service.icon}
                className="bg-cover bg-center md:block hidden"
                alt="wealth management icon"
                height={141}
                width={141}
              />
              <Image
                src={service.icon}
                className="bg-cover bg-center block md:hidden"
                alt="wealth management icon"
                height={100}
                width={100}
              />
            </div>
            <div className="flex-grow">
              <h4 className="mt-0 md:mt-11">{service.title}</h4>
              <p className="text-center md:text-left mx-2">{service.desc}</p>
              <div className="text-center md:text-left">
                <Link
                  href={service.readMoreHref}
                  className="mt-2 text-sun-yellow inline-flex items-center uppercase no-underline"
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
