import "./ToggleFilterButtonsItem.css";
export default function ToggleFilterButtonsItem({ title }) {
  return (
    <div className="toggle-filter-buttons-item-component">
      <p>{title}</p>
      <div className="toggle-btn">btn</div>
    </div>
  );
}
