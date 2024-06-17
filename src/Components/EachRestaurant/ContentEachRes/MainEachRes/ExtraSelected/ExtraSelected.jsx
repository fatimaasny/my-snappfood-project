import styles from "./ExtraSelected.module.css";

function ExtraSelected(props) {
  return (
    <div className={styles.extra}>
      <p className={styles.name}>{props.name}</p>
      <p className={styles.price}>
        ({props.price}
        <span>تومان</span>)
      </p>
    </div>
  );
}

export default ExtraSelected;
