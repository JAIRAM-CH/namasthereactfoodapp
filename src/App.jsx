import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import NotFoundPage from "./components/NotFoundPage";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { Suspense } from "react";

function App() {
  const About = lazy(() => import("./components/About"));
  const Layout = lazy(() => import("./components/Layout"));
  const Contactus = lazy(() => import("./components/Contactus"));
  const NotFoundPage = lazy(() => import("./components/NotFoundPage"));
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<h1>Loading....</h1>}>
              <Layout />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<h1>Loading....</h1>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="contactus"
          element={
            <Suspense fallback={<h1>Loading....</h1>}>
              <Contactus />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<h2>Loading....</h2>}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
