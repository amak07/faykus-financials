import Link from "next/link";

const ReadMoreLink = ({ href }) => {
  return (
    <Link
      href={href}
      className="mt-2 text-sun-yellow inline-flex items-center uppercase no-underline"
    >
      Read More
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-4 h-4 ml-2"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
  );
};

export default ReadMoreLink;
