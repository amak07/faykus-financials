const inputClass = `input input-bordered w-full border-gray focus:outline-sun-yellow focus:border-sun-yellow`;
const areaClass = `textarea textarea-bordered w-full border-gray focus:outline-sun-yellow focus:border-sun-yellow`;

const ContactUsForm = () => (
  <section className="relative">
    <div className="container mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1>Ready to answer your calling?</h1>
        <p className="whitespace-pre-line m-0">
          Please provide some brief information using the form on this page and
          a {"\n"} member of our advisory team will be in touch with you within
          24 hours.
        </p>
      </div>
      <div className="mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <input
                id="first_name"
                name="first_name"
                type="text"
                placeholder="First name"
                className={inputClass}
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <input
                type="email"
                id="last_name"
                name="last_name"
                placeholder="Last name"
                className={inputClass}
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
                className={inputClass}
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className={areaClass}
                rows={4}
                style={{ fontSize: 16 }}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactUsForm;
