import Header from "../components/Header.tsx";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.tsx";

function Layout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Layout;
