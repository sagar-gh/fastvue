import React, { Suspense, lazy } from "react";
import "./App.css";
const Brand = lazy(() => import("./config/Brands/brand"));

function App() {
  return (
    <Suspense fallback={<p>Loading ... </p>}>
      <Brand />
    </Suspense>
  );
}

export default App;
