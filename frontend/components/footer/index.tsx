import Link from "next/link";
import FaykusLogo from "public/FF.svg";
import { Field, Form, Formik } from "formik";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-white text-slate-800 py-16">
      <h2
        className="text-2xl text-slate-600 tracking-wider"
        data-aos="zoom-out"
        data-aos-delay="600"
        data-aos-duration="600"
        data-aos-easing="ease-in"
        data-aos-once="true"
      >
        Sign Up for Our Newsletter
      </h2>

      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        validate={(values) => {
          let errors: Partial<{ email: string }> = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          // make call to Susan's newsletter service API.
        }}
      >
        {({ errors, touched, isSubmitting, submitForm }) => (
          <Form
            className="flex flex-col items-center sm:items-end justify-center gap-2 sm:flex-row"
            data-aos="zoom-out"
            data-aos-delay="600"
            data-aos-duration="600"
            data-aos-easing="ease-in"
            data-aos-once="true"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <Field
                type="text"
                name="firstName"
                className="input input-bordered active:border-sun-yellow focus:border-sun-yellow focus:outline-sun-yellow"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <Field
                type="text"
                name="lastName"
                className="input input-bordered active:border-sun-yellow focus:border-sun-yellow focus:outline-sun-yellow"
              />
            </div>

            <div className="form-control relative">
              <label className="label">
                <span
                  className={`label-text ${
                    errors.email && touched.email ? "text-red-600" : ""
                  }`}
                >
                  Email Address *
                </span>
              </label>
              <Field
                type="email"
                name="email"
                className="input input-bordered active:border-sun-yellow focus:border-sun-yellow focus:outline-sun-yellow"
              />
              {errors.email && touched.email && errors.email && (
                <label className="label absolute -bottom-8">
                  <span className="label-text-alt text-red-600">
                    {errors.email}.
                  </span>
                </label>
              )}
            </div>

            <div className="form-control mt-8 sm:mt-0">
              <button
                type="submit"
                onClick={submitForm}
                className={`btn btn-outline btn-ghost hover:bg-sun-yellow hover:text-black ${
                  isSubmitting ? "loading" : ""
                }`}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <div
        data-aos="zoom-out"
        data-aos-delay="600"
        data-aos-duration="600"
        data-aos-easing="ease-in"
        data-aos-once="true"
        className="mt-16"
      >
        <a className="w-1/3">
          <img src={FaykusLogo.src} alt="company logo" />
        </a>
        <p className="font-bold">
          Faykus Financial, LLC <br />
          Providing reliable advice since 2016.
        </p>
        <p>Copyright © 2022 - All rights reserved</p>

        {[
          {
            href: "https://www.linkedin.com/company/faykus-financial-llc/about",
            icon: "lni lni-linkedin-original",
          },
        ].map((item) => (
          <Link href={item.href} key={item.href}>
            <a target="_blank" aria-label="LinkedIn profile">
              <div className="icon text-4xl text-sun-yellow">
                <i className={item.icon}></i>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
