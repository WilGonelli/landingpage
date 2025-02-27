import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { Routes, BrowserRouter, Route } from "react-router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  </BrowserRouter>
);
