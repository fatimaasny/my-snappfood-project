import { useEffect, useState } from "react";
import styles from "./ItemAddbtn.module.css";

import ModalAddItem from "../../../../Modal/ModalAddItem/ModalAddItem";
import Discount from "../../../../Discount/Discount";
function Content(props) {
  return (
    <div className={styles["content-right"]}>
      <div className={styles["all-price"]}>
        {props.productVariationTitle && (
          <p className={styles.title}>{props.productVariationTitle}</p>
        )}
        <div className={styles["box-price"]}>
          {props.discountRatio !== 0 && props.discountRatio !== 0 && (
            <Discount discount={props.discountRatio} />
          )}

          {props.discount !== 0 && props.price && (
            <div className={styles.prices}>
              <span id={styles["old-price"]}>{props.price}</span>
              <p id={styles["new-price"]}>
                {props.finalPrice}
                <span>تومان</span>
              </p>
            </div>
          )}
          {props.discount === 0 && props.price && (
            <div className={styles.prices}>
              <p id={styles["new-price"]}>
                {props.price}
                <span>تومان</span>
              </p>
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
  name,
  productVariationTitle,
  price,
  discount,
  discountRatio,
  disabledUntil,
}) {
  const [isShowModalAddItem, setIsShowModalAddItem] = useState(false);
  const [finalPrice, setFinalPrice] = useState(0);

  const showModalAddItem = () => {
    setIsShowModalAddItem(true);
  };
  const hideModalAddItem = () => {
    setIsShowModalAddItem(false);
  };
  useEffect(() => {
    setFinalPrice(price - discount);
  }, []);
  return (
    <>
      {isShowModalAddItem && (
        <ModalAddItem hideModalAddItem={hideModalAddItem} name={name} />
      )}
      <div className={styles["item-addbtn-component"]}>
        {!disabledUntil ? (
          <>
            <Content
              productVariationTitle={productVariationTitle}
              price={price}
              discount={discount}
              discountRatio={discountRatio}
              finalPrice={finalPrice}
            />
            <ButtonAdd showModalAddItem={showModalAddItem} />
          </>
        ) : (
          <>
            <button className={styles.disablebtn1} disabled>
              ناموجود
            </button>
            <button className={styles.disablebtn2} disabled>
              افزودن
            </button>
          </>
        )}
      </div>
    </>
  );
}
