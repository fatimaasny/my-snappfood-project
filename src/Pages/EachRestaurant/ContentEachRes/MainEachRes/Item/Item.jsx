import "./Item.css";
import ItemAddbtn from "../ItemAddbtn/ItemAddbtn";

export default function Item({ pName, spanTag, image, list }) {
  return (
    <div className="item-component">
      <div className="up-content">
        <div>
          <p className="name">{pName}</p>
          <span>{spanTag}</span>
        </div>
        <img src={image} alt="image.png" />
      </div>
      <div className="down-content">
        {list.map((i, index) => (
          <ItemAddbtn
            title={i.title}
            discount={i.discount}
            oldPrice={i.oldPrice}
            newPrice={i.newPrice}
          />
        ))}
      </div>
    </div>
  );
}
