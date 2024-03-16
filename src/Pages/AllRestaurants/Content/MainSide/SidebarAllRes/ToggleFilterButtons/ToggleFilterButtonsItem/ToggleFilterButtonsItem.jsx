import "./ToggleFilterButtonsItem.css";
export default function ToggleFilterButtonsItem({ title }) {
  return (
    <div className="toggle-filter-buttons-item-component">
      <p>{title}</p>
      <div className="toggle-btn">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}
