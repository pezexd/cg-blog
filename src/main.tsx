import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.tsx";
import Layout from "./components/base/layout.tsx";
import MarkdownPage from "./pages/MarkdownPage.tsx";
import ElipsePage from "./pages/posts/elipse.tsx";

const root = document.getElementById("root");

ReactDom.createRoot(root!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/posts/elipse" element={<ElipsePage />} />
        <Route path="/:filename" element={<MarkdownPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
