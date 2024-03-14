import down from "../../../Images/AllRestaurants/down.svg";
import "./SortSelected.css";
export default function SortSelected() {
  return (
    <div className="sort-selected">
      <div>
        <input type="text" placeholder="به ترتیب پیش‌فرض" />
        <img src={down} alt="down.svg" />
      </div>
    </div>
  );
}
