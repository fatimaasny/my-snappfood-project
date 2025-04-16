// import ExtraSelected from "../../MainEachRes/ExtraSelected/ExtraSelected";
// import SelectedItem from "../../MainEachRes/SelectedItem/SelectedItem";
import ItemAddbtn from "../../MainEachRes/ItemAddbtn/ItemAddbtn";
import styles from "./BasketItem.module.css";

function Title(props) {
  return <h4>{props.name}</h4>;
}
function BasketItem(props) {
  return (
    <div className={styles["basket-item"]}>
      <Title name={props.name} />
      <ItemAddbtn
        id={props.id}
        product={props.product}
        name={props.name}
        price={props.price}
        discount={props.discount}
        discountRatio={props.discountRatio}
        disabledUntil={props.disabledUntil}
      />
    </div>
  );
}

export default BasketItem;
