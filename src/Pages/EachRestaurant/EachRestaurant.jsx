import styles from "./EachRestaurant.module.css";
import PathText from "../../Components/PathText/PathText";
import ContentEachRes from "../../Components/EachRestaurant/ContentEachRes/ContentEachRes";
import HeaderUp from "../../Components/Header/HeaderUp/HeaderUp";
import Footer from "../../Components/Footer/Footer";
export default function EachRestaurant() {
  return (
    <>
      <HeaderUp />
      <div className="each-restaurant-component">
        <PathText />
        <ContentEachRes />
      </div>
      <Footer />
    </>
  );
}
