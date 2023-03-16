import Navbar from "./navbar";
import Footer from "./footer";
import { MobileNavbar } from ".";
import TypographyLoader from "./typography-loader";

export default function Layout({ children }) {
  return (
    <TypographyLoader>
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="block md:hidden">
        <MobileNavbar />
      </div>
      <main>{children}</main>
      <Footer />
    </TypographyLoader>
  );
}
