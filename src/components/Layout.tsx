import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import MobileContactBar from "./MobileContactBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">{children}</main>
      <Footer />
      <MobileContactBar />
    </div>
  );
};

export default Layout;