import styles from "./SearchProduct.module.css";
import Card from "../../Card/Card";

function SearchProduct(props) {
  return (
    <div className={styles["search-product"]}>
      <div className={styles.up}>
        <Card>
          <img src={props.image} alt={"image"} />
        </Card>
        <div className={styles.text}>
          <p>{props.name}</p>
          <p>{props.address}</p>
        </div>
      </div>
      <div className={styles.prices}>
        <p className={styles.pfirst}>
          <span>{props.sendingKind}</span>
          <span>{props.sendingPrice}</span>
          تومان
        </p>
        <p className={styles.psecond}>
          <span>{props.productPrice}</span>
          تومان
        </p>
      </div>
    </div>
  );
}

export default SearchProduct;
