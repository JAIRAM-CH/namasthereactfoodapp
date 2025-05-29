import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Suspense } from "react";
import AuthenticationProvider from "./components/Authentication/AuthenticationProvider";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

function App() {
  const Body = lazy(() => import("./components/Layout/Body"));
  const Home = lazy(() => import("./components/Home"));
  const Cart = lazy(() => import("./components/Cart"));
  const About = lazy(() => import("./components/About"));
  const Contactus = lazy(() => import("./components/Contactus"));
  const Restaurant = lazy(() => import("./components/Restaurant"));
  const NotFoundPage = lazy(() => import("./components/common/NotFoundPage"));
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
                <Body component={Home} />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<h1>Loading....</h1>}>
                <Body component={About} />
              </Suspense>
            }
          />
          <Route
            path="contactus"
            element={
              <Suspense fallback={<h1>Loading....</h1>}>
                <Body component={Contactus} />
              </Suspense>
            }
          />
          <Route
            path="/cart"
            element={
              <Suspense fallback={<h1>Loading....</h1>}>
                <Body component={Cart} />
              </Suspense>
            }
          />
          <Route
            path="/callback"
            element={
              <Suspense fallback={<h1>Loading....</h1>}>
                <Body component={AuthCallBack} />
              </Suspense>
            }
          />
          <Route
            path="restaurant/:resId/:resName"
            element={
              <Suspense fallback={<h1>Loading....</h1>}>
                <Body component={Restaurant} />
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
