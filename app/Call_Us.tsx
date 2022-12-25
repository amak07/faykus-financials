import Image from "next/image";
import SunburstYellow from "../public/icons/SunburstPattern-Yellow.svg";

const CallUs = () => (
  <section className="bg-light-yellow mb-32">
    <div className="container mx-auto">
      <div className="flex flex-row justify-around items-center h-80">
        <div className="relative">
          <Image
            src={SunburstYellow}
            alt="call faykus icon"
            className="absolute"
            style={{ top: -22, left: -147 }}
          />
          <h2>Get in Touch</h2>
          <h1 className="whitespace-pre-line">
            Schedule a consultation {`\n`} with an advisor
          </h1>
        </div>

        <button className="btn btn-lg gap-2 rounded-full bg-sun-yellow text-white border-sun-yellow outline-sun-yellow">
          <svg
            width={36}
            height={36}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#a)">
              <path
                d="M34.977 27.005c-1.31-2.48-5.864-5.167-6.065-5.285-.585-.333-1.196-.51-1.767-.51-.85 0-1.545.39-1.966 1.098-.666.797-1.492 1.728-1.693 1.872-1.552 1.053-2.766.933-4.11-.41l-7.5-7.502c-1.336-1.335-1.46-2.565-.414-4.108.147-.202 1.078-1.029 1.875-1.695a2.171 2.171 0 0 0 1.01-1.303c.202-.734.053-1.596-.427-2.437-.113-.193-2.802-4.747-5.28-6.058A3.23 3.23 0 0 0 7.136.293c-.86 0-1.67.336-2.28.944L3.199 2.893C.578 5.514-.372 8.485.377 11.723 1 14.42 2.82 17.291 5.785 20.255l9.603 9.603c3.752 3.752 7.33 5.655 10.632 5.655h.001c2.43 0 4.694-1.032 6.73-3.068l1.656-1.656a3.205 3.205 0 0 0 .57-3.785Z"
                fill="#fff"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path
                  fill="#fff"
                  transform="translate(.13 .29)"
                  d="M0 0h35.226v35.226H0z"
                />
              </clipPath>
            </defs>
          </svg>
          <span
            className="font-roboto_slab font-bold"
            style={{ fontSize: 38, marginTop: -4 }}
          >
            (512) 522-1826
          </span>
        </button>
      </div>
    </div>
  </section>
);

export default CallUs;
