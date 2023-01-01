import Image from "next/image";
import Send from "../public/icons/Send.svg";

const ContactUsForm = () => (
  <section className="relative mb-36">
    <div className="container mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1>Ready to answer your calling?</h1>
        <p className="whitespace-pre-line m-0 hidden md:block">
          Please provide some brief information using the form on this page and
          a {"\n"} member of our advisory team will be in touch with you within
          24 hours.
        </p>

        <p className="whitespace-pre-line m-0 md:hidden block">
          Please provide some brief information {"\n"} using the form on this
          page and a {"\n"} member of our advisory team will be {"\n"} in touch
          with you within 24 hours.
        </p>
      </div>

      <div className="mx-auto mb-20">
        <div className="flex flex-wrap m-4">
          <div className="p-2 w-full md:w-1/2">
            <div className="relative">
              <input
                id="first_name"
                name="first_name"
                type="text"
                placeholder="First name"
                className="app-input"
              />
            </div>
          </div>
          <div className="p-2 w-full md:w-1/2">
            <div className="relative">
              <input
                type="email"
                id="last_name"
                name="last_name"
                placeholder="Last name"
                className="app-input"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
                className="app-input"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="app-textarea"
                rows={4}
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button className="app-icon-button">
          <Image src={Send} alt="contact us submit form" className="m-0" />
          <span className="font-roboto_slab font-medium capitalize text-icon-btn-heading_M md:text-icon-btn-heading">
            Submit
          </span>
        </button>
      </div>
    </div>
  </section>
);

export default ContactUsForm;
