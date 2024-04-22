import styles from "./ItemAddbtn.module.css";
export default function ItemAddbtn({ title, discount, oldPrice, newPrice }) {
  return (
    <div className={styles["item-addbtn-component"]}>
      <div className={styles["content-right"]}>
        <div className={styles["all-price"]}>
          {title && <p className={styles.title}>{title}</p>}
          <div className={styles["box-price"]}>
            {discount && (
              <div className={styles.discount}>
                <p>{discount}</p>
              </div>
            )}

            {oldPrice && newPrice && (
              <div className={styles.prices}>
                <span id="old-price">{oldPrice}</span>
                <p id="new-price">{newPrice}</p>
              </div>
            )}
            {!oldPrice && newPrice && (
              <div className={styles.prices}>
                <p id="new-price">{newPrice}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles["add-btn"]}>
        <a href="#">افزودن</a>
      </div>
    </div>
  );
}
