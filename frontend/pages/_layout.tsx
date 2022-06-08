import { Footer, Navbar } from "components";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
