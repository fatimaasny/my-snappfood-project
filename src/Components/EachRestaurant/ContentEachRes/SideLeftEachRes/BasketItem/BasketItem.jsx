import ExtraSelected from "../../MainEachRes/ExtraSelected/ExtraSelected";
import SelectedItem from "../../MainEachRes/SelectedItem/SelectedItem";
import styles from "./BasketItem.module.css";

function Title(props) {
  return <h4>{props.name}</h4>;
}
function BasketItem(props) {
  return (
    <div className={styles["basket-item"]}>
      <Title name={props.name} />
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
