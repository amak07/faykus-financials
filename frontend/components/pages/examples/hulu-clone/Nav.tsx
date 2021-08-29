import { useRouter } from "next/router";
import resources from "utils/request";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="relative">
      <div
        className="flex px-10 sm:px-20 text-2xl whitespace-nowrap
      space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide"
      >
        {Object.entries(resources).map(([key, { title }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/examples/hulu-clone/?genre=${key}`)}
            className={`last:pr-24 cursor-pointer transition duration-100 
            transform hover:scale-125 hover:text-white
            active:text-red-300 ${
              router.query.genre === key
                ? "text-red-700 hover:text-red-700"
                : ""
            }
            ${router.query.genre === undefined ? "first:text-red-700" : ""}
            `}
          >
            {title}
          </h2>
        ))}
      </div>
      <div
        className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a]
      h-10 w-1/12"
      ></div>
    </nav>
  );
};

export default Nav;
