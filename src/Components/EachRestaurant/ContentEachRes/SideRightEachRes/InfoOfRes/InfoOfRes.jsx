import styles from "./InfoOfRes.module.css";
import imgageRes from "../../../../../Images/EachRestaurant/image-res1.jpg";
import Card from "../../../../Card/Card";

import { IoMdStar } from "react-icons/io";

export default function InfoOfRes() {
  return (
    <div className={styles["info-of-res-component"]}>
      <Card>
        <img className={styles["image-res"]} src={imgageRes} alt="image-res1" />
      </Card>
      <div className={styles.info}>
        <div className={styles.score}>
          <IoMdStar color="#e9e615" fontSize="1rem" />
          <span>4.4</span>
          <p>(17,632 امتیاز)</p>
        </div>
        <h4>چیکن فامیلی(یوسف آباد)</h4>
      </div>
    </div>
  );
}
