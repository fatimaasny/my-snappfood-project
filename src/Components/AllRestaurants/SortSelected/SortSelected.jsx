import down from "../../../Images/public/down.svg";
import "./SortSelected.css";
export default function SortSelected() {
  return (
    <div className={styles["sort-selected"]}>
      <div>
        <input type="text" placeholder="به ترتیب پیش‌فرض" />
        <img src={down} alt="down.svg" />
      </div>
    </div>
  );
}
