import NextLink from "next/link";
import React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}
const TextLink: React.FC<Props> = ({ href = "/", children }) => {
  return (
    <NextLink href={href}>
      <a
        className={`
    hover:underline cursor-pointer
    text-cyan-text font-bold my-6 
    focus:outline-none focus:shadow-outline
  `}
      >
        <span className="flex flex-row items-center justify-center">
          {children} {">"}
        </span>
      </a>
    </NextLink>
  );
};

export default TextLink;
