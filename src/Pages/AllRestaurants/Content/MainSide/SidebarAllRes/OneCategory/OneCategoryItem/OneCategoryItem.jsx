import "./OneCategoryItem.css";
export default function OneCategoryItem({ source, title }) {
  return (
    <div className="one-category-item">
      <img src={source} alt="" />
      <p>{title}</p>
    </div>
  );
}
