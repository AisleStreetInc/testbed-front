import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./page/Home"));

const PageRouter = () => {
  const isProduction = process.env.NODE_ENV === "production";
  return (
    <BrowserRouter basename={isProduction ? process.env.PUBLIC_URL : "/"}>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default PageRouter;
