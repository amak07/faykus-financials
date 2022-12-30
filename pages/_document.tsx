import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head></Head>
      <body
        className={`
      prose max-w-none
      prose-h1:text-heading1_M md:prose-h1:text-heading1 prose-h1:font-normal prose-h1:text-gray prose-h1:font-roboto_slab
      prose-h2:text-heading2_M md:prose-h2:text-heading2 prose-h2:font-normal prose-h2:text-dark-gray prose-h2:font-nunito prose-h2:uppercase prose-h2:tracking-h2 prose-h2:mb-7 md:prose-h2:mb-9
      prose-h3:text-heading3_M md:prose-h3:text-heading3 prose-h3:font-normal prose-h3:text-gray prose-h3:font-roboto_slab
      prose-p:text-paragraph_M md:prose-p:text-paragraph prose-p:font-normal prose-p:text-gray prose-p:font-nunito
      prose-li:text-dark-gray prose-li:text-left prose-li:list-none prose-li:flex prose-li:items-center prose-ul:w-full prose-ul:mb-0
      prose-h4:text-heading4_M md:prose-h4:text-heading4 prose-h4:text-gray prose-h4:font-roboto_slab prose-h4:font-normal
      md:prose-img:my-0
      `}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
