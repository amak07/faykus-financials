import tw from "twin.macro";

const Styled: React.FC<{
  light?: boolean;
  children: React.ReactNode;
}> = ({ light, children }) => (
  <div css={[tw`w-screen bg-white`, light && tw`bg-cool-gray-light`]}>
    {children}
  </div>
);

export default Styled;
