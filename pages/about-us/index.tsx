import Head from "next/head";
import Image from "next/image";

import { TeamMembers } from "../../data/team-data";
import useUrlHash from "../../hooks/useURLHash";
import ReadMoreLink from "../../components/read-more-link";

export default function AboutUs() {
  const hash = useUrlHash("item0");

  return (
    <div className="bg-white w-full">
      <Head>
        <title>About Us | Faykus Financial</title>
      </Head>

      <section className="mb-52 flex flex-row" style={{ height: 847 }}>
        <div className="bg-about_us_hero bg-no-repeat w-2/5"></div>
        <div className="flex flex-col h-full bg-white px-8 w-3/5 justify-center">
          <h2>Our Story</h2>

          <h1 className="whitespace-pre-line">
            We are a values-driven wealth management firm in Austin, TX who take
            clients from financial success{" "}
            <mark>to magnified significance and lasting impact.</mark>
          </h1>

          <p className="whitespace-pre-line">
            We provide consultative wealth management, legacy planning and
            philanthropic strategy development as well as goals-based investment
            and risk management services. {"\n"} {"\n"} Our clients include
            farmer/ranchers/land owners, CEOs of global companies, business
            owners, real estate developers, entrepreneurs, technology leaders,
            non-profits, family foundations, and beyond.
          </p>
        </div>
      </section>

      <section className="mb-32">
        <h2 className="text-center" style={{ marginBottom: 0 }}>
          Meet the Team
        </h2>

        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto flex flex-col">
            {TeamMembers.map((item) => (
              <div className="lg:w-4/6 mx-auto py-8">
                <div className="flex flex-col sm:flex-row mt-10">
                  <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                    <div className="w-36 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                      <Image src={item.pic} alt={item.name} />
                    </div>
                    <div className="flex flex-col items-center text-center justify-center">
                      <h2 className="font-medium title-font mt-4 text-gray-900 text-lg font-roboto_slab">
                        {item.name}
                      </h2>
                      <div className="w-12 h-1 bg-sun-yellow rounded mt-2 mb-4"></div>
                      {item.tags.map((tag) => (
                        <p
                          className="text-base my-2"
                          style={{ fontSize: 20, lineHeight: "29px" }}
                        >
                          {tag}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left flex flex-col justify-center ">
                    <p className="leading-relaxed text-lg mb-4 font-roboto_slab">
                      {item.short_bio}
                    </p>
                    <ReadMoreLink href="#" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
