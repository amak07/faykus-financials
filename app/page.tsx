"use client";

import React from "react";
import Image from "next/image";

import HeroAustinBridge from "../public/hero_austin_bridge.png";
import { Navbar } from "../widgets/layout";
import AppButton from "../widgets/components/button";
import { services } from "../data/services-data";
import Link from "next/link";

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
          <div className="divider">
            <AppButton variant="LARGE">Learn more about us</AppButton>
          </div>
        </div>

        <section>
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <h1>Our Services</h1>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              {services?.map((service) => (
                <div
                  key={service.title}
                  className="p-4 md:w-1/3 flex flex-col text-center items-center"
                >
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
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
      </div>
    </>
  );
}
