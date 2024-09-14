import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./page/Home"));

const PageRouter = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default PageRouter;
