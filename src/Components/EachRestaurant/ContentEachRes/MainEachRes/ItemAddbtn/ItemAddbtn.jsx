import { useState } from "react";
import styles from "./ItemAddbtn.module.css";

import ModalAddItem from "../../../../Modal/ModalAddItem/ModalAddItem";
import Discount from "../../../../Discount/Discount";
function Content(props) {
  return (
    <div className={styles["content-right"]}>
      <div className={styles["all-price"]}>
        {props.title && <p className={styles.title}>{props.title}</p>}
        <div className={styles["box-price"]}>
          {props.discount && <Discount discount={props.discount} />}

          {props.oldPrice && props.newPrice && (
            <div className={styles.prices}>
              <span id={styles["old-price"]}>{props.oldPrice}</span>
              <p id={styles["new-price"]}>{props.newPrice}</p>
            </div>
          )}
          {!props.oldPrice && props.newPrice && (
            <div className={styles.prices}>
              <p id={styles["new-price"]}>{props.newPrice}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
function ButtonAdd(props) {
  return (
    <button className={styles["add-btn"]} onClick={props.showModalAddItem}>
      افزودن
    </button>
  );
}
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
        <Content
          title={title}
          discount={discount}
          oldPrice={oldPrice}
          newPrice={newPrice}
        />
        <ButtonAdd showModalAddItem={showModalAddItem} />
      </div>
    </>
  );
}
