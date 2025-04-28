import { BrowserRouter,} from "react-router-dom";
import "./App.css";
import Routing from "./Rounting";
import React from "react";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routing />
      </div>
    </BrowserRouter>
  );
};
export default App;
