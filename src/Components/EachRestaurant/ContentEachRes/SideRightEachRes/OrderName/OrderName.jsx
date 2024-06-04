import styles from "./OrderName.module.css";

function OrderName(props) {
  return (
    <div className={styles.order}>
      <p>{props.name}</p>
    </div>
  );
}

export default OrderName;
