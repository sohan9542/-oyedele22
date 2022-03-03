import React from "react";

import Topbar from "./layout/Topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div className=" min-h-screen">
      <BrowserRouter>
        <Topbar />
        <Routes>
        <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
