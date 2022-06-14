import { GridLayout } from "components";
import { faykusServices } from "data/faykus-financial";
import Head from "next/head";
import { useEffect, useState } from "react";
import {
  PrimaryHeading,
  SecondaryHeading,
  SectionLayout,
  TypewriterHeading,
} from "styled-components";
import Typewriter from "typewriter-effect";

function HomePage() {
  const [startTypewriter, setStartTypewriter] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTypewriter(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Faykus Financial, LLC</title>
      </Head>

      <SectionLayout>
        <div className="container mx-auto">
          <div className="flex justify-center items-center flex-col h-screen">
            <TypewriterHeading>
              <Typewriter
                options={{
                  strings: ["Authentic,", "Intentional,", "Tailored,"],
                  autoStart: startTypewriter,
                  loop: true,
                }}
              />
              <span>Wealth Building.</span> <br />
              <span className={`border-b-4 border-b-sun-yellow`}>
                For Life.
              </span>
            </TypewriterHeading>
          </div>
        </div>
      </SectionLayout>

      <SectionLayout light>
        <div className="container mx-auto py-16 px-8 sm:px-0">
          <div className="text-left">
            <PrimaryHeading>Our Services</PrimaryHeading>
            <SecondaryHeading>{`We're here to help you grow`}</SecondaryHeading>
          </div>

          <GridLayout items={faykusServices}></GridLayout>
        </div>
      </SectionLayout>
    </>
  );
}

export default HomePage;
