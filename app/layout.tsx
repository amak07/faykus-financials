import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={`
      prose max-w-none
      prose-h1:text-heading1 prose-h1:font-normal prose-h1:text-gray prose-h1:font-roboto_slab
      prose-h2:text-heading2 prose-h2:font-normal prose-h2:faykus-heading2 prose-h2:text-dark-gray prose-h2:font-nunito prose-h2:uppercase prose-h2:tracking-h2 prose-h2:mb-9
      prose-p:text-paragraph prose-p:font-normal prose-p:text-gray prose-p:font-nunito
      prose-li:text-dark-gray prose-li:text-left prose-li:list-none prose-li:flex prose-li:items-center prose-ul:w-full prose-ul:mb-0
      prose-h4:text-heading4 prose-h4:text-gray prose-h4:font-roboto_slab prose-h4:font-normal
      prose-img:my-0
      `}
      >
        {children}
      </body>
    </html>
  );
}
