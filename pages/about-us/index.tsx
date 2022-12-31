import Head from "next/head";
import CallUs from "../../page-widgets/Call_Us";
import Clients from "../../page-widgets/Clients";
import ContactUsForm from "../../page-widgets/ContactUsForm";
import Hero from "../../page-widgets/Hero";
import Services from "../../page-widgets/Services";

export default function AboutUs() {
  return (
    <div className="bg-white w-full">
      <Head>
        <title>About Us | Faykus Financial</title>
      </Head>

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
    </div>
  );
}
