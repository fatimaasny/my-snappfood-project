import styles from "./AllCategoryItem.module.css";
import leftAngel from "../../../../../../../Images/public/angelleft.svg";
export default function AllCategoryItem({ source, title, icon }) {
  return (
    <div className={styles["all-category-item-component"]}>
      <div className={styles["img-title"]}>
        <img src={source} alt="" />
        <p>{title}</p>
      </div>
      {icon && <img className={styles.icon} src={leftAngel} alt="left-angel" />}
    </div>
  );
}
