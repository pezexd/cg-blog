import { Outlet } from "react-router";
import Header from "@/components/base/header";
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
      </div>
    </>
  );
}

export default Layout;
