import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import './Layout.scss'

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}
        <div style={{height:'100vh'}}></div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
