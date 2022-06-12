import { SectionLayout } from "components";
import { faykusServices } from "data/faykus-financial";
import Head from "next/head";
import { PrimaryHeading, SecondaryHeading } from "styled-components";
import Typewriter from "typewriter-effect";

function HomePage() {
  return (
    <>
      <Head>
        <title>Faykus Financial, LLC</title>
      </Head>

      <section className="h-screen w-screen bg-sun-yellow-light">
        <div className="container mx-auto">
          <div className="flex justify-center items-center flex-col h-screen">
            <div
              className="text-4xl font-bold leading-snug text-slate-800"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="600"
              data-aos-easing="ease-in"
              data-aos-once="true"
            >
              <Typewriter
                options={{
                  strings: ["Authentic,", "Intentional,", "Tailored,"],
                  autoStart: true,
                  loop: true,
                }}
              />
              <span>Wealth Building.</span> <br />
              <span className={`border-b-4 border-b-sun-yellow`}>
                For Life.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-screen bg-white">
        <div className="container mx-auto py-16 px-8 sm:px-0">
          <div className="text-left">
            <PrimaryHeading>Our Services</PrimaryHeading>
            <SecondaryHeading>{`We're here to help you grow`}</SecondaryHeading>
          </div>

          <SectionLayout items={faykusServices}></SectionLayout>
        </div>
      </section>
    </>
  );
}

export default HomePage;
