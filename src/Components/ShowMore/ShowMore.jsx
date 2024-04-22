import styles from "./ShowMore.module.css";
import leftangel from "../../Images/public/angelleft.svg";
export default function ShowMore() {
  return (
    <div className={styles["show-more"]}>
      <p>مشاهده همه</p>
      <img src={leftangel} alt="leftangel.svg" />
    </div>
  );
}
