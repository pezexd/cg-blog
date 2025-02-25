import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.tsx";
import Layout from "./components/base/layout.tsx";
import MarkdownPage from "./pages/MarkdownPage.tsx";

const root = document.getElementById("root");

ReactDom.createRoot(root!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:filename" element={<MarkdownPage />} />
      </Route>
      {/* <Route path="about" element={<About />} /> */}

      {/* <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="concerts">
        <Route index element={<ConcertsHome />} />
        <Route path=":city" element={<City />} />
        <Route path="trending" element={<Trending />} />
      </Route> */}
    </Routes>
  </BrowserRouter>
);
