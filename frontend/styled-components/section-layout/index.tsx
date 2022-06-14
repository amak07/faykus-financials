import tw, { TwStyle } from "twin.macro";

const Styled: React.FC<{
  gray?: boolean;
  cream?: boolean;
  children: React.ReactNode;
  className?: TwStyle;
}> = ({ gray, cream, children, className }) => (
  <div
    css={[
      tw`w-screen bg-white`,
      gray && tw`bg-cool-gray-light`,
      cream && tw`bg-sun-yellow-light`,
      className,
    ]}
  >
    <div className="container mx-auto py-16 px-8">{children}</div>
  </div>
);

export default Styled;
