import { Outlet } from "react-router-dom";
import { Footer, Header, Navbar, PreFooter, UserBar } from "../components";

const Layout = () => {
  return <>
    <UserBar />
    <Header />
    <Navbar />
    <Outlet />
    <PreFooter />
    <Footer />
  </>
}

export default Layout;