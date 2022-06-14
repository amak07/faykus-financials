import tw, { styled } from "twin.macro";

const Heading = styled.h3`
  ${tw`mb-6 text-2xl text-slate-600 tracking-wider`};
`;

export default ({ children }: { children: React.ReactNode }) => (
  <Heading
    data-aos="fade-up"
    data-aos-delay="600"
    data-aos-duration="600"
    data-aos-easing="ease-in"
    data-aos-once="true"
  >
    {children}
  </Heading>
);
