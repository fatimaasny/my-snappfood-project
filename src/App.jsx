import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import HeaderUp from "./Components/Header/HeaderUp/HeaderUp";
import Main from "./Pages/MainPage/Main";
import AllRestaurants from "./Pages/AllRestaurants/AllRestaurants";
import EachRestaurant from "./Pages/EachRestaurant/EachRestaurant";
import Footer from "./Components/Footer/Footer";
export default function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/restaurants/:catId/:alias"
            element={<AllRestaurants />}
          />
          <Route path="/eachRestuarant" element={<EachRestaurant />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
