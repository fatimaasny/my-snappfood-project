import PathText from "../../Components/PathText/PathText";
import HeaderDown from "../../Components/Header/HeaderDown/HeaderDown";
import "./AllRestaurants.css";
import Content from "./Content/Content";
export default function AllRestaurants() {
  return (
    <div className="AllRestaurant">
      <HeaderDown />
      <PathText />
      <Content />
    </div>
  );
}
