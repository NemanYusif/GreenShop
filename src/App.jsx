import { BrowserRouter, Route, Routes,} from "react-router-dom";
import "./App.css";
import Routing from "./Rounting";
import React from "react";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Map from "./Components/Map";
import ScrollTop from "./Components/ScrollTop";
import SelectedProducts from "./Pages/SelectedProducts";

const App = () => {
  return (
    <BrowserRouter>
    <ScrollTop/>
      <div>
        <Navbar/>
        <Routing />
        <Routes>
        <Route path="/selectedProducts/:category" element={<SelectedProducts/>}/> 
        </Routes>
        <Contact/>
        <Map/>
      </div>
    </BrowserRouter>
  );
};
export default App;
