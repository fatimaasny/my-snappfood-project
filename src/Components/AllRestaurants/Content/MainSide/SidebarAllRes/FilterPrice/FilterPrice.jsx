import styles from "./FilterPrice.module.css";
import { useState } from "react";

export default function FilterPrice() {
  const [filterPrice, setFilterPrice] = useState("همه");
  const filterHandler = (value) => {
    setFilterPrice(value);
  };
  return (
    <div className={styles["filter-price-component"]}>
      <p>کلاس قیمتی</p>
      <div className={styles["list"]}>
        <button
          className={`${styles.item} ${
            filterPrice === "همه" ? styles.filter : ""
          }`}
          onClick={() => filterHandler("همه")}
        >
          همه
        </button>
        <button
          className={`${styles.item} ${
            filterPrice === "اقتصادی" ? styles.filter : ""
          }`}
          onClick={() => filterHandler("اقتصادی")}
        >
          اقتصادی
        </button>
        <button
          className={`${styles.item} ${
            filterPrice === "متوسط" ? styles.filter : ""
          }`}
          onClick={() => filterHandler("متوسط")}
        >
          متوسط
        </button>
        <button
          className={`${styles.item} ${
            filterPrice === "گران" ? styles.filter : ""
          }`}
          onClick={() => filterHandler("گران")}
        >
          گران
        </button>
      </div>
    </div>
  );
}
