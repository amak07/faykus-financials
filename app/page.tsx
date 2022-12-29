"use client";

import React from "react";
import { Footer, MobileNavbar, Navbar } from "../components";
import Hero from "./Hero";
import Services from "./Services";
import Clients from "./Clients";
import CallUs from "./Call_Us";
import ContactUsForm from "./ContactUsForm";

export default function Home() {
  return (
    <div className="bg-white w-full">
      <div className="hidden md:block">
        <Navbar />
      </div>

      <div className="block md:hidden">
        <MobileNavbar />
      </div>

      <Hero />

      <div className="container mx-auto my-32 md:my-40">
        <div className="divider before:bg-light-blue after:bg-light-blue">
          <button className="app-button">
            <span className="text-paragraph_M md:text-paragraph font-roboto_slab font-normal">
              Learn more about us
            </span>
          </button>
        </div>
      </div>

      <Services />

      <Clients />

      <CallUs />

      <ContactUsForm />

      <Footer />
    </div>
  );
}
