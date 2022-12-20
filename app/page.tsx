"use client";

import React from "react";
import { Roboto_Slab, Nunito } from "@next/font/google";
import Image from "next/image";

import HeroAustinBridge from "../public/hero_austin_bridge.png";
import HeroAustinBridgeM from "../public/hero_austin_bridge_mobile.svg";
import { Navbar } from "../widgets/layout";

const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function Home() {
  return (
    <div className={`${roboto_slab.className} `}>
      <Navbar />

      <div className="relative content-center items-center justify-center hidden lg:flex">
        <Image
          src={HeroAustinBridge}
          className="w-full bg-cover bg-center"
          alt="austin bridge 360"
        />
      </div>

      <div className="container mx-auto mb-20">
        <div className="flex flex-col text-center w-full justify-center items-center">
          <div style={{ width: 1017 }}>
            <h2
              className={`text-2xl ${nunito.className} font-normal text-dark-gray`}
            >
              WHAT WE'RE ALL ABOUT
            </h2>
            <h1 className="text-4xl font-normal text-gray mt-9 mb-14">
              We belive the responsibility to manage a client's family wealth
              represents a sacred trust they place in us.
            </h1>
            <p className={`text-2xl ${nunito.className} font-normal text-gray`}>
              We help our clients grow their wealth with intention, and magnify
              their gifts, talents and resources to impact the mission they are
              called to serve.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mb-20">
        <div className="flex flex-col text-center w-full justify-center items-center">
          <div style={{ width: 1017 }}>
            <h2
              className={`text-2xl ${nunito.className} font-normal text-dark-gray`}
            >
              WHAT WE'RE ALL ABOUT
            </h2>
            <h1 className="text-4xl font-normal text-gray mt-9 mb-14">
              We belive the responsibility to manage a client's family wealth
              represents a sacred trust they place in us.
            </h1>
            <p className={`text-2xl ${nunito.className} font-normal text-gray`}>
              We help our clients grow their wealth with intention, and magnify
              their gifts, talents and resources to impact the mission they are
              called to serve.
            </p>
          </div>
        </div>
      </div>

      {/* <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Working with us is a pleasure
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
                <br />
                <br />
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </Typography>
              <Button variant="outlined">read more</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle heading="Here are our heroes">
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                // socials={
                //   <div className="flex items-center gap-2">
                //     {socials.map(({ color, name }) => (
                //       <IconButton key={name} color={color} variant="text">
                //         <i className={`fa-brands text-lg fa-${name}`} />
                //       </IconButton>
                //     ))}
                //   </div>
                // }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Full Name" />
              <Input variant="standard" size="lg" label="Email Address" />
            </div>
            <Textarea variant="standard" size="lg" label="Message" rows={8} />
            <Button variant="gradient" size="lg" className="mt-8">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      <div className="bg-blue-gray-50/50">
        <Footer />
      </div> */}
    </div>
  );
}
