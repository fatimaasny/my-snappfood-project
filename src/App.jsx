import styles from "./App.module.css";
import HeaderUp from "./Components/Header/HeaderUp/HeaderUp";
import Main from "./Pages/MainPage/Main";
// import AllRestaurants from "./Pages/AllRestaurants/AllRestaurants";
// import EachRestaurant from "./Pages/EachRestaurant/EachRestaurant";
import Footer from "./Components/Footer/Footer";
export default function App() {
  return (
    <>
      <HeaderUp />
      <Main />
      {/* <AllRestaurants /> */}
      {/* <EachRestaurant /> */}
      <Footer />
    </>
  );
}
