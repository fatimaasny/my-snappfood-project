import "./CategoryItem.css";
import angelLeft from "../../../../Images/Main/angelleft.svg";
export default function CategoryItem({ source, title, alt }) {
  return (
    <div
      className="item"
      style={{ background: `url(${source})`, backgroundSize: "cover" }}
    >
      <div>
        <p>{title}</p>
        <img src={angelLeft} alt="angelLeft.svg" />
      </div>
    </div>
  );
}
