import styles from "./MyShoppingCart.module.css";
import BasketItem from "../BasketItem/BasketItem";

import { LuShoppingBag } from "react-icons/lu";
import { TbTrash } from "react-icons/tb";

import { CartContext } from "../../../../../store/ShoppingCartContext";
import { useContext, useRef } from "react";

import ModalEmptyShoppingCart from "../../../../Modal/ModalEmptyShoppingCart/ModalEmptyShoppingCart";

function EmptyBasket(props) {
  return (
    <div className={styles.empty}>
      <LuShoppingBag fontSize="1.4rem" color="#aaa" />
      <p>سبد خرید شما خالی است!</p>
    </div>
  );
}
function Title(props) {
  return (
    <div className={styles.title}>
      <p>
        <span>سبد خرید</span>
        <span>( {props.productsQuantity} )</span>
      </p>
      <buton className={styles.btntrash}>
        <TbTrash
          color="red"
          fontSize="1rem"
          onClick={props.handleShowModalEmptyShoppingCart}
        />
      </buton>
    </div>
  );
}
function Content(props) {
  return (
    <div className={styles.content}>
      {props.items.map((p) => (
        <BasketItem
          key={p.id}
          id={p.id}
          product={p}
          name={p.title}
          price={p.price}
          discount={p.discount}
          discountRatio={p.discountRatio}
          disabledUntil={p.disabledUntil}
        />
      ))}
    </div>
  );
}
function Price(props) {
  return (
    <div className={styles.prices}>
      <p>مجموع</p>
      <p>
        <span>{props.priceBeforeDiscount}</span>
        <span>تومان</span>
      </p>
    </div>
  );
}
function DiscountPrice(props) {
  return (
    <div className={styles["prices-with-discount"]}>
      <p>قابل پرداخت</p>
      <p>
        <span>{props.finalPrice}</span>
        <span>تومان</span>
      </p>
    </div>
  );
}
function TextArea() {
  return (
    <textarea
      style={{
        width: "100%",
        height: "100px",
        padding: "0.5rem",
        borderRadius: "5px",
        fontSize: "1rem",
        border: "1px solid #eee",
        marginBottom: "1.5rem",
      }}
      placeholder="توضیحات سفارش..."
    ></textarea>
  );
}
function ButtonUser() {
  return <button className={styles.btnuser}>ورود به حساب کاربری</button>;
}
function FullBasket(props) {
  return (
    <div className={styles.full}>
      <Title
        productsQuantity={props.productsQuantity}
        // epmtyShoppingCart={props.epmtyShoppingCart}
        handleShowModalEmptyShoppingCart={
          props.handleShowModalEmptyShoppingCart
        }
      />
      <Content items={props.items} />
      <Price priceBeforeDiscount={props.priceBeforeDiscount} />
      <DiscountPrice finalPrice={props.finalPrice} />
      <TextArea />
      <ButtonUser />
    </div>
  );
}

function MyShoppingCart() {
  const { items, epmtyShoppingCart } = useContext(CartContext);

  const productsQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
  const priceBeforeDiscount = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const finalPrice = items.reduce(
    (acc, item) => acc + item.quantity * (item.price - item.discount),
    0
  );

  const dialogRef = useRef();
  function handleShowModalEmptyShoppingCart() {
    if (dialogRef) {
      dialogRef.current.showModal();
    }
  }

  let modaActions = (
    <div className={styles.actions}>
      <button onClick={epmtyShoppingCart} className={styles.btnEmpty}>
        حذف سبد
      </button>
      <button className={styles.btnCancle}>انصراف</button>
    </div>
  );
  return (
    <>
      <ModalEmptyShoppingCart
        title="آیا از حذف سبد خرید مطمئن هستید؟"
        actions={modaActions}
        dialogRef={dialogRef}
      />
      <div className={styles.basket}>
        {items.length === 0 ? (
          <EmptyBasket />
        ) : (
          <FullBasket
            items={items}
            productsQuantity={productsQuantity}
            // epmtyShoppingCart={epmtyShoppingCart}
            handleShowModalEmptyShoppingCart={handleShowModalEmptyShoppingCart}
            priceBeforeDiscount={priceBeforeDiscount}
            finalPrice={finalPrice}
          />
        )}
      </div>
    </>
  );
}

export default MyShoppingCart;
