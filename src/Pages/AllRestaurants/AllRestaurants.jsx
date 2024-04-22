import PathText from "../../Components/PathText/PathText";
import HeaderDown from "../../Components/Header/HeaderDown/HeaderDown";
import styles from "./AllRestaurants.module.css";
import Content from "../../Components/AllRestaurants/Content/Content";
export default function AllRestaurants() {
  return (
    <div className="AllRestaurant">
      <HeaderDown />
      <PathText />
      <Content />
    </div>
  );
}
