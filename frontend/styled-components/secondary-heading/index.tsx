import tw, { TwStyle } from "twin.macro";

const Styled: React.FC<{
  className?: TwStyle;
  children: React.ReactNode;
}> = ({ className, children }) => (
  <h3
    css={[tw`mb-6 text-2xl text-slate-600 tracking-wider`, className]}
    data-aos="fade-up"
    data-aos-delay="600"
    data-aos-duration="600"
    data-aos-easing="ease-in"
    data-aos-once="true"
  >
    {children}
  </h3>
);

export default Styled;
