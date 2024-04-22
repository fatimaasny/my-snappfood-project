import styles from "./InfoOfRes.module.css";
import imgageRes from "../../../../../Images/EachRestaurant/image-res1.jpg";
import starSvg from "../../../../../Images/RestaurantItem/star.svg";
import Card from "../../../../Card/Card";
export default function InfoOfRes() {
  return (
    <div className={styles["info-of-res-component"]}>
      <Card>
        <img className={styles["image-res"]} src={imgageRes} alt="image-res1" />
      </Card>
      <div className={styles.info}>
        <div className={styles.score}>
          <img src={starSvg} alt="star.svg" />
          <span>4.4</span>
          <p>(17,632 امتیاز)</p>
        </div>
        <h4>چیکن فامیلی(یوسف آباد)</h4>
      </div>
    </div>
  );
}
