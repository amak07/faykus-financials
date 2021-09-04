import Nav from "@components/common/Nav";
import Footer from "@components/common/Footer";
import { faykusLinks, faykusLogin } from "@data/faykus-financial";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <style jsx global>
        {`
          body {
            background: rgb(250, 246, 239);
          }
        `}
      </style>

      <Nav links={faykusLinks} cta={faykusLogin} />

      <main className="flex flex-col justify-start pt-36 sm:pt-20 w-full">
        {children}
      </main>

      <Footer />
    </>
  );
};

export default Layout;
