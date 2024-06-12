import { useState } from "react";
import styles from "./ItemAddbtn.module.css";

import ModalAddItem from "../../../../Modal/ModalAddItem/ModalAddItem";
import Discount from "../../../../Discount/Discount";

export default function ItemAddbtn({
  title,
  discount,
  oldPrice,
  newPrice,
  name,
}) {
  const [isShowModalAddItem, setIsShowModalAddItem] = useState(false);

  const showModalAddItem = () => {
    setIsShowModalAddItem(true);
  };
  const hideModalAddItem = () => {
    setIsShowModalAddItem(false);
  };
  return (
    <>
      {isShowModalAddItem && (
        <ModalAddItem hideModalAddItem={hideModalAddItem} name={name} />
      )}
      <div className={styles["item-addbtn-component"]}>
        <div className={styles["content-right"]}>
          <div className={styles["all-price"]}>
            {title && <p className={styles.title}>{title}</p>}
            <div className={styles["box-price"]}>
              {discount && <Discount discount={discount} />}

              {oldPrice && newPrice && (
                <div className={styles.prices}>
                  <span id={styles["old-price"]}>{oldPrice}</span>
                  <p id={styles["new-price"]}>{newPrice}</p>
                </div>
              )}
              {!oldPrice && newPrice && (
                <div className={styles.prices}>
                  <p id={styles["new-price"]}>{newPrice}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles["add-btn"]} onClick={showModalAddItem}>
          <a href="#">افزودن</a>
        </div>
      </div>
    </>
  );
}
