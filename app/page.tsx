"use client";

import React from "react";
import { Footer, Navbar } from "../components";
import Hero from "./Hero";
import Services from "./Services";
import Clients from "./Clients";
import CallUs from "./Call_Us";
import ContactUsForm from "./ContactUsForm";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />

      <Hero />

      <div className="container mx-auto my-40">
        <div className="divider before:bg-light-blue after:bg-light-blue">
          <button className="app-button">Learn more about us</button>
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
