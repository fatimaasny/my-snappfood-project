import ExtraSelected from "../../MainEachRes/ExtraSelected/ExtraSelected";
import SelectedItem from "../../MainEachRes/SelectedItem/SelectedItem";
import styles from "./BasketItem.module.css";

function BasketItem(props) {
  return (
    <div className={styles["basket-item"]}>
      <h4>{props.name}</h4>
      <ExtraSelected name="قاشق چنگال" price="2,500" />
      <ExtraSelected name="ظرف ماکروویو" price="8,000" />
      <SelectedItem
        oldPrice={props.oldPrice}
        price={props.price}
        count={props.count}
        discount={props.discount}
      />
    </div>
  );
}

export default BasketItem;
