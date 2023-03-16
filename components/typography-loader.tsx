import { Roboto_Slab, Nunito } from "next/font/google";

const roboto_slab = Roboto_Slab({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const nunito = Nunito({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const TypographyLoader = ({ children }) => {
  return (
    <>
      <style jsx global>{`
        :root {
          --roboto_slab-font: ${roboto_slab.style.fontFamily};
          --nunito-font: ${nunito.style.fontFamily};
        }
        h1 {
          font-family: ${roboto_slab.style.fontFamily};
        }
        h2 {
          font-family: ${nunito.style.fontFamily};
        }
        h3 {
          font-family: ${roboto_slab.style.fontFamily};
        }
        h4 {
          font-family: ${roboto_slab.style.fontFamily};
        }
        p {
          font-family: ${nunito.style.fontFamily};
        }
      `}</style>

      <div
        className={`
  prose max-w-none bg-white
  prose-h1:text-heading1_M md:prose-h1:text-heading1 prose-h1:font-medium prose-h1:text-gray
  prose-h2:text-heading2_M md:prose-h2:text-heading2 prose-h2:font-normal prose-h2:text-dark-gray prose-h2:uppercase prose-h2:tracking-h2 prose-h2:mb-7 md:prose-h2:mb-9
  prose-h3:text-heading3_M md:prose-h3:text-heading3 prose-h3:font-normal prose-h3:text-gray
  prose-p:text-paragraph_M md:prose-p:text-paragraph prose-p:font-normal prose-p:text-gray
  prose-li:text-dark-gray prose-li:text-left prose-li:list-none prose-li:flex prose-li:items-center prose-ul:w-full prose-ul:mb-0
  prose-h4:text-heading4_M md:prose-h4:text-heading4 prose-h4:text-gray prose-h4:font-normal
  md:prose-img:my-0
  `}
      >
        {children}
      </div>
    </>
  );
};

export default TypographyLoader;
