import Nav from "@components/common/Nav";
import Footer from "@components/common/Footer";

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

      <Nav />

      <main className="flex flex-col justify-start pt-36 sm:pt-20 w-full">
        {children}
      </main>

      <Footer />
    </>
  );
};

export default Layout;
