import styles from "./Item.module.css";
import ItemAddbtn from "../ItemAddbtn/ItemAddbtn";
import Card from "../../../../Card/Card";

export default function Item({ pName, spanTag, image, list }) {
  return (
    <div className={styles["item-component"]}>
      <div className={styles["up-content"]}>
        <div>
          <p className={styles.name}>{pName}</p>
          <span>{spanTag}</span>
        </div>
        <Card>
          <img src={image} alt="image.png" />
        </Card>
      </div>
      <div className={styles["down-content"]}>
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
