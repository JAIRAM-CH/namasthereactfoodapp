import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

function App() {
  const Body = lazy(() => import("./components/Layout/Body"));
  const Home = lazy(() => import("./components/Home"));
  const Cart = lazy(() => {
    import("./components/Cart");
  });
  const About = lazy(() => import("./components/About"));
  const Contactus = lazy(() => import("./components/Contactus"));
  const NotFoundPage = lazy(() => import("./components/NotFoundPage"));
  const AuthenticationProvider = lazy(() =>
    import("./components/Authentication/AuthenticationProvider")
  );
  const AuthCallBack = lazy(() =>
    import("./components/Authentication/AuthCallBack")
  );
  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<h1>Loading....</h1>}>
                <Body Component={<Home />} />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<h1>Loading....</h1>}>
                <Body Component={<About />} />
              </Suspense>
            }
          />
          <Route
            path="contactus"
            element={
              <Suspense fallback={<h1>Loading....</h1>}>
                <Body Component={<Contactus />} />
              </Suspense>
            }
          />
          <Route
            path="/cart"
            element={
              <Suspense fallback={<h1>Loading....</h1>}>
                <Body Component={<Cart />} />
              </Suspense>
            }
          />
          <Route
            path="/callback"
            element={
              <Suspense fallback={<h1>Loading....</h1>}>
                <Body>
                  <AuthCallBack />
                </Body>
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
      </AuthenticationProvider>
    </BrowserRouter>
  );
}

export default App;
