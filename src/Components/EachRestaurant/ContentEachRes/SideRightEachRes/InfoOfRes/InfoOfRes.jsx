import styles from "./InfoOfRes.module.css";
import imgageRes from "../../../../../Images/EachRestaurant/image-res1.jpg";

import Card from "../../../../Card/Card";
import Discount from "../../../../Discount/Discount";

import { IoMdStar } from "react-icons/io";
function Info(props) {
  return (
    <div className={styles.info}>
      <div className={styles.title}>
        <div className={styles.score}>
          <IoMdStar color="#f8d527" fontSize="1rem" />
          <span>4.4</span>
          <p>(17,632 امتیاز)</p>
        </div>
        <Discount discount={"12%"} className={styles.discount} />
      </div>
      <h4>چیکن فامیلی(یوسف آباد)</h4>
    </div>
  );
}

export default function InfoOfRes() {
  return (
    <div className={styles["info-of-res-component"]}>
      <Card>
        <img className={styles["image-res"]} src={imgageRes} alt="image-res1" />
      </Card>
      <Info />
    </div>
  );
}
