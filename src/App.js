import React from "react";

import Topbar from "./layout/Topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./layout/Footer";
import Opportunities from "./components/home/Opportunities";
import Works from "./Pages/Works";
import Resources from "./Pages/Resources";
import OurProcess from "./Pages/OurProcess";
import ContactUs from "./Pages/ContactUs";

const App = () => {
  return (
    <div className=" min-h-screen">
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="works" element={<Works />} />
          <Route path="resources" element={<Resources />} />
          <Route path="process" element={<OurProcess />} />
          <Route path="contact" element={<ContactUs />} />
        </Routes>
        <Opportunities />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
