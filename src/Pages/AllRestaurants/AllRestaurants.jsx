import PathText from "../../Components/PathText/PathText";
import HeaderDown from "../../Components/Header/HeaderDown/HeaderDown";
import styles from "./AllRestaurants.module.css";
import Content from "../../Components/AllRestaurants/Content/Content";
import HeaderUp from "../../Components/Header/HeaderUp/HeaderUp";
import Footer from "../../Components/Footer/Footer";
export default function AllRestaurants() {
  return (
    <>
      <HeaderUp />
      <div className="AllRestaurant">
        <HeaderDown class="allrestaurants" />
        <PathText />
        <Content />
      </div>
      <Footer />
    </>
  );
}
