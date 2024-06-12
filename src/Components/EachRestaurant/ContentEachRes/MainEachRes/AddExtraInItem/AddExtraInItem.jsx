import styles from "./AddExtraInItem.module.css";

function AddExtraInItem(props) {
  return (
    <div className={styles.content}>
      <p className={styles.title}>{props.title}</p>
      <div className={styles.order}>
        <input type="checkbox" />
        <p className={styles.item}>{props.item}</p>
        <p className={styles.price}>
          <span>{props.price}</span>
          <span>تومان</span>
        </p>
      </div>
    </div>
  );
}

export default AddExtraInItem;
