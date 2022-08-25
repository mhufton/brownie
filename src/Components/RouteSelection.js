import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from "./Home";
import ProductDesign from "./ProductDesign";
import About from "./About";
import CustomProps from "./CustomProps";

export default function RouteSelection() {
  return (
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route path="/Production_Design" element={ <ProductDesign /> } />
      <Route path="/Custom_Props" element={ <CustomProps /> } />
      <Route path="/About" element={<About />} />
    </Routes>
  )
}