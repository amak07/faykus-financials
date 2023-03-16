import Head from "next/head";
import ComingSoon from "../../components/coming-soon";
import CallUs from "../../page-widgets/Call_Us";
import Clients from "../../page-widgets/Clients";
import ContactUsForm from "../../page-widgets/ContactUsForm";
import Hero from "../../page-widgets/Hero";
import Services from "../../page-widgets/Services";

export default function AboutUs() {
  return (
    <div className="bg-white w-full">
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <div className="container">
          <ComingSoon />
        </div>
      </div>
    </div>
  );
}
