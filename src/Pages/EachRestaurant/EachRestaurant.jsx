import styles from "./EachRestaurant.module.css";
import PathText from "../../Components/PathText/PathText";
import ContentEachRes from "../../Components/EachRestaurant/ContentEachRes/ContentEachRes";
export default function EachRestaurant() {
  return (
    <div className="each-restaurant-component">
      <PathText />
      <ContentEachRes />
    </div>
  );
}
