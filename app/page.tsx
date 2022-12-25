"use client";

import React from "react";
import AppButton from "../components/button";
import { Navbar } from "../components";
import Hero from "./Hero";
import Services from "./Services";
import Clients from "./Clients";
import CallUs from "./Call_Us";
import ContactUsForm from "./ContactUsForm";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <div className="container mx-auto my-40">
        <div className="divider before:bg-light-blue after:bg-light-blue">
          <AppButton variant="SMALL">Learn more about us</AppButton>
        </div>
      </div>

      <Services />

      <Clients />

      <CallUs />

      <ContactUsForm />
    </>
  );
}
