/* eslint-disable @next/next/no-img-element */

import TextLink from "@components/common/TextLink";
import Button from "@components/common/Button";
import blog from "public/blog.jpeg";

const OnOurBlog = () => {
  return (
    <div className="py-12 md:py-44">
      <div
        className={`
        mx-auto max-w-6xl md:grid md:grid-cols-2 text-center md:text-left
        `}
      >
        <div>
          <h2 className="text-3xl lg:text-5xl text-ochre">On Our Blog</h2>

          <p className="text-cyan text-2xl text-bold mt-8 md:mt-24 mb-4">
            Tracking wealth: Which apps to use in 2021?
          </p>

          <TextLink href="/">READ MORE</TextLink>

          <img className="md:hidden my-8" src={blog.src} alt="" />

          <div className="mt-16">
            <Button id="viewBlogs">View All</Button>
          </div>
        </div>

        <div className="hidden md:block">
          <img src={blog.src} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OnOurBlog;
