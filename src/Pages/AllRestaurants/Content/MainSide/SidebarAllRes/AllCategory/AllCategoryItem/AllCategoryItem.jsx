import "./AllCategoryItem.css";
import leftAngel from "../../../../../../../Images/Main/angelleft.svg";
export default function AllCategoryItem({ source, title, icon }) {
  return (
    <div className="all-category-item-component">
      <div className="img-title">
        <img src={source} alt="" />
        <p>{title}</p>
      </div>
      {icon && <img className="icon" src={leftAngel} alt="left-angel" />}
    </div>
  );
}
