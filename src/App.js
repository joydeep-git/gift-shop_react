import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// SCSS
import "./SCSS/App.scss";

// COMPONENTS
import Home from "./Components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;