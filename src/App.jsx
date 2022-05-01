import React from "react";
import Home from "./pages/Home";
import Tour from "./pages/Tour";
import SearchAppBar from "./components/AppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour/:id" element={<Tour />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
