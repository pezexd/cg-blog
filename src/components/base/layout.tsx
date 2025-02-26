import { Outlet } from "react-router";
import Header from "@/components/base/header";
import Footer from "@/components/base/footer";
import Container from "@/components/global/container";
import "@/App.css";

function Layout() {
  return (
    <>
      <div className="relative ">
        <Header />
        <div className="pt-21">
          <Container>
            <Outlet />
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
