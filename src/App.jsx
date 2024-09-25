import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Main from "./Pages/MainPage/Main";
import AllRestaurants from "./Pages/AllRestaurants/AllRestaurants";
import EachRestaurant from "./Pages/EachRestaurant/EachRestaurant";
export default function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/category/:catId/:alias" element={<AllRestaurants />} />
          <Route path="/item/:code" element={<EachRestaurant />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
