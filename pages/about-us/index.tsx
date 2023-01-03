import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import { TeamMembers } from "../../data/team-data";
import useUrlHash from "../../hooks/useURLHash";

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
          <h2>About Our Firm</h2>

          <h1 className="whitespace-pre-line">
            We are a values-driven wealth management firm in Austin, TX who take
            clients from financial success{" "}
            <mark>to magnified significance and lasting impact.</mark>
          </h1>

          <p className="whitespace-pre-line">
            We provide consultative wealth management, legacy planning and
            philanthropic strategy development as well as goals-based investment
            and risk management services. {"\n"} {"\n"} Our clients include CEOs
            of global companies, business owners, real estate developers,
            entrepreneurs, technology leaders, non-profits, family foundations
            and farmer/rancher families in Central Texas and beyond. We focus
            first on helping you clarify your values, listen to your concerns
            and understand what makes you unique. We then coordinate among a
            team of mission driven professionals to design, build and protect
            your family’s plan.
          </p>
        </div>
      </section>

      <section className="mb-32">
        <h2 className="text-center" style={{ marginBottom: 0 }}>
          Meet the Team
        </h2>
        <div className="flex justify-center w-full py-2 gap-3 mb-14 mt-16">
          {TeamMembers.map((item, index) => (
            <Link
              key={`#item${index}`}
              href={`#item${index}`}
              className={`rounded-full bg-light-yellow ${
                hash === `item${index}` ? "bg-sun-yellow" : "bg-light-yellow"
              }`}
              style={{ width: 16, height: 16 }}
            ></Link>
          ))}
        </div>
        <div className="carousel w-full">
          {TeamMembers.map((team, index) => {
            const [readMore, setReadMore] = useState(false);

            return (
              <div
                key={team.name}
                id={"item" + index}
                className="carousel-item relative w-full"
              >
                <div className="mx-32">
                  <div className="flex flex-row">
                    <div className="flex justify-end w-2/5 pr-24">
                      <Image
                        src={team.pic}
                        alt={team.name}
                        width={295}
                        height={295}
                        style={{ height: 295 }}
                      />
                    </div>
                    <div className="w-3/5">
                      <h1 className="text-about-us-name font-normal mb-0">
                        {team.name}
                      </h1>
                      <h3 className="text-about-us-title font-medium my-0">
                        {team.title}
                      </h3>
                      {team.tags.length > 0 && (
                        <mark className="text-about-us-tags uppercase py-1 font-nunito">
                          {team.tags}
                        </mark>
                      )}

                      <p className="whitespace-pre-line">{team.short_bio}</p>
                      {readMore && (
                        <p className="whitespace-pre-line">{team.bio}</p>
                      )}

                      <label className="swap font-nunito font-bold">
                        <input
                          type="checkbox"
                          onClick={() => setReadMore(!readMore)}
                        />
                        <div className="swap-on items-center flex flex-row">
                          READ MORE
                          <svg
                            width="20"
                            height="11"
                            viewBox="0 0 20 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-2"
                          >
                            <path
                              d="M0.285494 8.88116L9.04839 0.118261C9.12411 0.0425396 9.22681 0 9.3339 0L10.2216 0C10.3287 0 10.4314 0.0425396 10.5071 0.118261L19.27 8.88116C19.4277 9.03884 19.4277 9.29449 19.27 9.45218L18.0077 10.7145C17.85 10.8722 17.5944 10.8722 17.4367 10.7145L9.77776 3.05556L2.11883 10.7145C1.96115 10.8722 1.70549 10.8722 1.54781 10.7145L0.285494 9.45217C0.127811 9.29449 0.127811 9.03884 0.285494 8.88116Z"
                              fill="#3C4959"
                            />
                          </svg>
                        </div>
                        <div className="swap-off items-center flex flex-row">
                          READ MORE
                          <svg
                            width="20"
                            height="11"
                            viewBox="0 0 20 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-2"
                          >
                            <path
                              d="M19.2701 2.11884L10.5072 10.8817C10.4314 10.9575 10.3287 11 10.2216 11H9.33391C9.22683 11 9.12413 10.9575 9.04841 10.8817L0.285508 2.11884C0.127827 1.96116 0.127826 1.70551 0.285508 1.54782L1.54783 0.285508C1.70551 0.127826 1.96116 0.127826 2.11884 0.285508L9.77778 7.94444L17.4367 0.285509C17.5944 0.127827 17.8501 0.127827 18.0077 0.285509L19.2701 1.54783C19.4277 1.70551 19.4277 1.96116 19.2701 2.11884Z"
                              fill="#3C4959"
                            />
                          </svg>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-52">
                  <a
                    href={`#item${index === 0 ? 0 : index - 1}`}
                    className="btn btn-circle btn-ghost"
                    style={{ fontSize: 24 }}
                  >
                    ❮
                  </a>
                  <a
                    href={`#item${
                      index === TeamMembers.length - 1
                        ? TeamMembers.length - 1
                        : index + 1
                    }`}
                    className="btn btn-circle btn-ghost"
                    style={{ fontSize: 24 }}
                  >
                    ❯
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
