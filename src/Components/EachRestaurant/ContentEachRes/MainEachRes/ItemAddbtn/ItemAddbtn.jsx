import { useEffect, useState } from "react";
import styles from "./ItemAddbtn.module.css";

import ModalAddItem from "../../../../Modal/ModalAddItem/ModalAddItem";
import Discount from "../../../../Discount/Discount";

import { useContext } from "react";
import { CartContext } from "../../../../../store/ShoppingCartContext";

import { TbTrash } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

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
function ButtonAdd({
  id,
  product,
  items,
  addItemToCart,
  updateCartItemQuantity,
}) {
  const existingProduct = items.find((p) => p.id === id);

  console.log("items: ", items);

  return (
    <div>
      {existingProduct && existingProduct.quantity > 0 ? (
        <div className={styles.changebtns}>
          <button
            className={styles.btntrash}
            onClick={() => updateCartItemQuantity(id, -1)}
          >
            {existingProduct.quantity === 1 ? (
              <TbTrash color="#aaa" fontSize="1rem" />
            ) : (
              <FaMinus color="#ff00b3" />
            )}
          </button>
          <span> {existingProduct.quantity} </span>
          <button
            className={styles.btnplus}
            onClick={() => updateCartItemQuantity(id, 1)}
          >
            <FaPlus color="#fff" />
          </button>
        </div>
      ) : (
        <button
          onClick={() => addItemToCart(product)}
          className={styles["add-btn"]}
        >
          افزودن
        </button>
      )}
    </div>
  );
}
export default function ItemAddbtn({
  id,
  product,
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

  const { items, addItemToCart, updateCartItemQuantity } =
    useContext(CartContext);

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
            <ButtonAdd
              showModalAddItem={showModalAddItem}
              id={id}
              product={product}
              items={items}
              addItemToCart={addItemToCart}
              updateCartItemQuantity={updateCartItemQuantity}
            />
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
