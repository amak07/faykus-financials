import Image from "next/image";
import HeroAustinBridge from "../public/hero_austin_bridge.png";
import BuildingWealthIntentionally from "../public/building_wealth_intentionally.svg";
import HeroAustinBridgeMobile from "../public/hero_austin_bridge_mobile.svg";
import BuildingWealthIntentionallyMobile from "../public/building_wealth_intentionally_mobile.svg";

export const Hero = () => (
  <>
    <div className="relative content-center items-center justify-center hidden lg:flex">
      <Image
        src={HeroAustinBridge}
        className="w-full bg-cover bg-center z-0"
        alt="austin bridge 360"
      />

      <Image
        src={BuildingWealthIntentionally}
        className="absolute z-10 right-0 lg:max-w-6xl"
        alt="building wealth intentionally"
      />
    </div>

    <div className="relative md:hidden">
      <Image
        src={HeroAustinBridgeMobile}
        className="w-full h-full bg-cover bg-center z-0 not-prose mt-1"
        alt="austin bridge 360"
      />

      <Image
        src={BuildingWealthIntentionallyMobile}
        className="absolute right-0 top-52"
        alt="building wealth intentionally"
      />
    </div>

    <div className="container mx-auto mb-20 relative -mt-72 md:-mt-0">
      <div className="flex flex-col text-center justify-center items-center">
        <h2 className="mt-0">What we're all about</h2>

        <h1 className="whitespace-pre-line hidden md:block">
          We believe the responsibility to manage a client's family {"\n"}
          wealth <mark>represents a sacred trust</mark> they place in us.
        </h1>
        <p className="whitespace-pre-line hidden md:block">
          We help our clients grow their wealth with intention, and magnify
          their gifts, {"\n"} talents and resources to impact the mission they
          are called to serve.
        </p>

        <h1 className="whitespace-pre-line md:hidden block">
          We believe the responsibility to {"\n"} manage a client's family
          wealth {"\n"} <mark>represents a sacred trust</mark> {"\n"} they place
          in us.
        </h1>
        <p className="whitespace-pre-line md:hidden block">
          We help our clients grow their wealth {"\n"} with intention, and
          magnify their gifts, {"\n"} talents and resources to impact the {"\n"}{" "}
          mission they are called to serve.
        </p>
      </div>
    </div>

    <section>
      <div className="container px-5 pl-7 mx-auto">
        <div className="text-center">
          <h2 className="prose-h2:mb-4">What we value</h2>
        </div>

        <div className="flex flex-wrap lg:w-4/5 md:mx-auto md:mb-2 -mx-2 -mt-3 md:-mt-0">
          {[
            "Servant leadership",
            "Integrity",
            "Generosity",
            "Respect",
            "Lifelong learning",
            "Positivity & fun",
          ].map((value) => (
            <div className="p-0 md:p-2 sm:w-1/2 w-full" key={value}>
              <div className="rounded flex p-4 h-full items-center">
                <svg
                  width={31}
                  height={32}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#a)" fill="#7CB9DC">
                    <g opacity={0.42}>
                      <path d="m14.27 24.727 1.097 1.755-1.866 4.707-.708-5.013 1.477-1.448ZM10.672 23.504l.288 2.049-3.62 3.541 1.393-4.867 1.94-.723ZM7.882 20.923l-.57 1.989-4.747 1.763 3.252-3.88 2.065.128ZM6.383 17.43l-1.33 1.585L0 18.695l4.55-2.222 1.833.957ZM6.435 13.63l-1.86.907L.09 12.19l5.06-.18 1.286 1.621ZM8.028 10.18l-2.068.072-3.144-3.97 4.696 1.894.516 2.003ZM10.886 7.674 8.968 6.9 7.71 1.994l3.52 3.64-.344 2.04ZM14.517 6.549 13.079 5.06l.847-4.993 1.734 4.757-1.143 1.724ZM18.29 6.997l-.708-1.944L20.386.837l-.35 5.05-1.746 1.11ZM21.556 8.942l.144-2.064 4.277-2.712-2.375 4.472-2.046.304ZM23.748 12.047l.971-1.827 5.01-.738-3.988 3.12-1.993-.555ZM24.488 15.775l1.63-1.274 4.877 1.364-4.912 1.227-1.595-1.317ZM23.647 19.481l2.008-.5 3.9 3.229-4.986-.876-.922-1.853ZM21.372 22.526l2.038.359 2.25 4.536-4.2-2.829-.088-2.066ZM18.055 24.381l1.715 1.157.21 5.06-2.685-4.293.76-1.924Z" />
                    </g>
                    <g opacity={0.42}>
                      <path d="m15.829 25.222-1.018-1.066.77-1.837 1.07 1.68-.822 1.223ZM11.896 24.649l-.495-1.389 1.45-1.364.294 1.97-1.249.783ZM8.538 22.525l.111-1.47 1.881-.656-.533 1.92-1.46.206ZM6.333 19.219l.7-1.297 1.984.165-1.267 1.537-1.417-.405ZM5.663 15.302l1.167-.9 1.746.958-1.783.888-1.13-.946ZM6.645 11.452l1.432-.348 1.205 1.585-1.99.086-.647-1.323ZM9.108 8.333l1.45.265.456 1.939-1.853-.731-.053-1.473ZM12.626 6.486l1.217.832-.372 1.956-1.395-1.42.55-1.368ZM16.592 6.23l.773 1.254L16.23 9.12l-.697-1.865 1.059-1.025ZM20.319 7.608l.196 1.46-1.703 1.034.122-1.988 1.385-.506ZM23.162 10.384l-.415 1.414-1.976.25.92-1.765 1.471.1ZM24.632 14.076l-.955 1.123-1.907-.575 1.56-1.239 1.302.69ZM24.472 18.046l-1.329.638-1.508-1.3 1.928-.498.91 1.16ZM22.712 21.609l-1.474.042-.849-1.801 1.964.33.359 1.429ZM19.654 24.147l-1.363-.56-.043-1.992 1.66 1.1-.254 1.452Z" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path
                        fill="#fff"
                        transform="translate(0 .068)"
                        d="M0 0h30.995v31.121H0z"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span className="font-roboto_slab font-normal ml-5 text-dark-gray text-li_M md:text-li">
                  {value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Hero;
