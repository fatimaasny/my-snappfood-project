import styles from "./FilterPrice.module.css";
export default function FilterPrice() {
  return (
    <div className={styles["filter-price-component"]}>
      <h4>کلاس قیمتی</h4>
      <div className={styles["list-filter-price-component"]}>
        <div className={styles["item-filter-price-component"]}>همه</div>
        <div className={styles["item-filter-price-component"]}>اقتصادی</div>
        <div className={styles["item-filter-price-component"]}>متوسط</div>
        <div className={styles["item-filter-price-component"]}>گران</div>
      </div>
    </div>
  );
}
