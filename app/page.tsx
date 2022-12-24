"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import HeroAustinBridge from "../public/hero_austin_bridge.png";
import { Navbar } from "../widgets/layout";
import AppButton from "../widgets/components/button";
import { services } from "../data/services-data";
import ClientGroup from "../public/client_group.svg";
import SunburstYellow from "../public/icons/SunburstPattern-Yellow.svg";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="relative content-center items-center justify-center hidden lg:flex">
        <Image
          src={HeroAustinBridge}
          className="w-full bg-cover bg-center"
          alt="austin bridge 360"
        />
      </div>

      <div
        className={`
        prose max-w-none
        prose-h1:text-heading1 prose-h1:font-normal prose-h1:text-gray prose-h1:font-roboto_slab
        prose-h2:text-heading2 prose-h2:font-normal prose-h2:faykus-heading2 prose-h2:text-dark-gray prose-h2:font-nunito prose-h2:uppercase prose-h2:tracking-h2 prose-h2:mb-9
        prose-p:text-paragraph prose-p:font-normal prose-p:text-gray prose-p:font-nunito
        prose-li:text-dark-gray prose-li:text-left prose-li:list-none prose-li:flex prose-li:items-center prose-ul:w-full prose-ul:mb-0
        prose-h4:text-heading4 prose-h4:text-gray prose-h4:font-roboto_slab prose-h4:font-normal
        `}
      >
        <div
          className="container mx-auto"
          style={{ width: 1017, marginBottom: 85 }}
        >
          <div className="flex flex-col text-center justify-center items-center">
            <h2 className="mt-0">What we're all about</h2>
            <h1>
              We believe the responsibility to manage a client's family wealth
              represents a sacred trust they place in us.
            </h1>
            <p>
              We help our clients grow their wealth with intention, and magnify
              their gifts, talents and resources to impact the mission they are
              called to serve.
            </p>
          </div>
        </div>

        <div className="container mx-auto" style={{ width: 785 }}>
          <div className="flex flex-col text-center justify-center items-center">
            <h2>WHAT WE VALUE</h2>
            <ul className="faykus-list grid grid-cols-2">
              <li>Servant leadership</li>
              <li>Integrity</li>
              <li>Generosity</li>
              <li>Respect</li>
              <li>Lifelong learning</li>
              <li>Positivity & fun</li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto my-40">
          <div className="divider before:bg-light-blue after:bg-light-blue">
            <AppButton variant="SMALL">Learn more about us</AppButton>
          </div>
        </div>

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

        <section>
          <div className="container mx-auto mb-44">
            <div className="grid grid-cols-2">
              <div>
                <h2>Our Clients</h2>

                <h1>
                  We work with successful families who desire to make the
                  transition from great financial success to significance &
                  lasting impact.
                </h1>

                <AppButton variant="SMALL">
                  Learn more about our clients
                </AppButton>
              </div>

              <Image
                src={ClientGroup}
                alt="faykus financial clients"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        <section className="bg-light-yellow mb-32">
          <div className="container mx-auto">
            <div className="flex flex-row justify-around items-center h-80">
              <div className="relative">
                <Image
                  src={SunburstYellow}
                  alt="call faykus icon"
                  className="absolute"
                  style={{ top: -22, left: -147 }}
                />
                <h2>Get in Touch</h2>
                <h1 className="whitespace-pre-line">
                  Schedule a consultation {`\n`} with an advisor
                </h1>
              </div>

              <button className="btn btn-lg gap-2 rounded-full bg-sun-yellow text-white border-sun-yellow outline-sun-yellow">
                <svg
                  width={36}
                  height={36}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#a)">
                    <path
                      d="M34.977 27.005c-1.31-2.48-5.864-5.167-6.065-5.285-.585-.333-1.196-.51-1.767-.51-.85 0-1.545.39-1.966 1.098-.666.797-1.492 1.728-1.693 1.872-1.552 1.053-2.766.933-4.11-.41l-7.5-7.502c-1.336-1.335-1.46-2.565-.414-4.108.147-.202 1.078-1.029 1.875-1.695a2.171 2.171 0 0 0 1.01-1.303c.202-.734.053-1.596-.427-2.437-.113-.193-2.802-4.747-5.28-6.058A3.23 3.23 0 0 0 7.136.293c-.86 0-1.67.336-2.28.944L3.199 2.893C.578 5.514-.372 8.485.377 11.723 1 14.42 2.82 17.291 5.785 20.255l9.603 9.603c3.752 3.752 7.33 5.655 10.632 5.655h.001c2.43 0 4.694-1.032 6.73-3.068l1.656-1.656a3.205 3.205 0 0 0 .57-3.785Z"
                      fill="#fff"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path
                        fill="#fff"
                        transform="translate(.13 .29)"
                        d="M0 0h35.226v35.226H0z"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span
                  className="font-roboto_slab font-bold"
                  style={{ fontSize: 38, marginTop: -4 }}
                >
                  (512) 522-1826
                </span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
