import Navbar from "./navbar";
import Footer from "./footer";
import { MobileNavbar } from ".";

export default function Layout({ children }) {
  return (
    <>
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="block md:hidden">
        <MobileNavbar />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
}
