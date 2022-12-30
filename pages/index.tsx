import Head from "next/head";
import { Footer, MobileNavbar, Navbar } from "../components";
import CallUs from "../page-widgets/Call_Us";
import Clients from "../page-widgets/Clients";
import ContactUsForm from "../page-widgets/ContactUsForm";
import Hero from "../page-widgets/Hero";
import Services from "../page-widgets/Services";

export default function Home() {
  return (
    <div className="bg-white w-full">
      <Head>
        <title>Faykus Financial</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
