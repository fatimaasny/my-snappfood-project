import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/MainPage/Main";
import AllRestaurants from "./Pages/AllRestaurants/AllRestaurants";
import EachRestaurant from "./Pages/EachRestaurant/EachRestaurant";
// import CartContextProvider from "./store/ShoppingCartContext";
export default function App() {
  return (
    // <CartContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/category/:catId/:alias/:sorting/:catValue/:subValue/:filterPrice"
          element={<AllRestaurants />}
        />
        <Route path="/item/:code" element={<EachRestaurant />} />
      </Routes>
    </BrowserRouter>
    // </CartContextProvider>
  );
}
