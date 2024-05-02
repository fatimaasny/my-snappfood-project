import styles from "./OneCategoryItem.module.css";
import CardRounded from "../../../../../../CardRounded/CardRounded";
export default function OneCategoryItem({ source, title }) {
  return (
    <div className={styles["one-category-item"]}>
      <CardRounded>
        <img src={source} alt="" />
      </CardRounded>
      <p>{title}</p>
    </div>
  );
}
