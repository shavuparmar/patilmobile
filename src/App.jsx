import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./Common/Loding";

// Lazy load the pages
const HomePage = lazy(() => import("./Pages/HomePage"));
const Error404 = lazy(() => import("./Common/ErrorPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
