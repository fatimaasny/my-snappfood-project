import styles from "./CouponsList.module.css";

function CouponsList(props) {
  return (
    <div className={styles["list-items-coupons-component"]}>
      <h4>کوپن ها </h4>
      <div className={styles["list-of-coupons"]}>
        {props.list.map((i) => (
          <div key={i.id} className={styles["coupons-item"]}>
            <p className={styles.first}>{i.title}</p>
            <p className={styles.second}>{i.descriptions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CouponsList;
