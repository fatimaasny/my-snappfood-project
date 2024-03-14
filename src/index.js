import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HeaderUp from "./Components/Header/HeaderUp/HeaderUp";
import AllRestaurants from "./Pages/AllRestaurants/AllRestaurants";
import Footer from "./Components/Footer/Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HeaderUp />
    <AllRestaurants />
    <Footer />
  </React.StrictMode>
);
