import tw from "twin.macro";

const Styled: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <div
    css={[tw`text-4xl font-bold leading-snug text-slate-800`]}
    data-aos="fade-up"
    data-aos-delay="600"
    data-aos-duration="600"
    data-aos-easing="ease-in"
    data-aos-once="true"
  >
    {children}
  </div>
);

export default Styled;
