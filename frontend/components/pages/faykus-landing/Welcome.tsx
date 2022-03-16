/* eslint-disable @next/next/no-img-element */
import WelcomePhoto from "public/homepage.jpeg";

const WelcomeSection = () => {
  return (
    <div
      className={`
            flex flex-wrap flex-col 
            items-center justify-center container mx-auto max-w-8xl
          `}
    >
      <div className="relative">
        <h2
          className={`
              font-bold text-cyan text-3xl my-8
              text-center block sm:4xl lg:hidden
            `}
        >
          Building wealth intentionally.
        </h2>

        <div className="w-full h-auto">
          <img
            src={WelcomePhoto.src}
            alt=""
            className="h-56 md:w-full md:h-full"
          />
        </div>

        <h2
          className={`
              font-bold text-white
              invisible absolute top-24 left-24
              lg:visible lg:text-4xl lg:max-w-sm
              xl:text-6xl max-w-lg
            `}
        >
          Building wealth intentionally.
        </h2>
      </div>
    </div>
  );
};

export default WelcomeSection;
