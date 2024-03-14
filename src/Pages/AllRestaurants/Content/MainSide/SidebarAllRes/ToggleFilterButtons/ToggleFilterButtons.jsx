import "./ToggleFilterButtons.css";
import ToggleFilterButtonsItem from "./ToggleFilterButtonsItem/ToggleFilterButtonsItem";
export default function ToggleFilterButtons() {
  const list = [
    "پیک اسنپ‌فود",
    "دارای کوپن",
    "دارای تخفیف",
    "فودپرو",
    "به‌صرفه",
    "خوش‌قیمت",
  ];
  return (
    <div className="toogle-filter-buttons-component">
      {list.map((item, index) => (
        <ToggleFilterButtonsItem key={index} title={item} />
      ))}
    </div>
  );
}
