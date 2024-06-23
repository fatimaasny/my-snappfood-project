import styles from "./SideLeftEachRes.module.css";
import Sendingway from "./Sendingway/Sendingway";
import { useState } from "react";
import BasketItem from "./BasketItem/BasketItem";

import { AiOutlineFieldTime } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { LuShoppingBag } from "react-icons/lu";
import { TbTrash } from "react-icons/tb";
import MultiSendingWay from "./MultiSendingWay/MultiSendingWay";

const list = [
  {
    name: "چلو کباب کوبیده",
    oldPrice: "",
    price: "289,000",
    count: "2",
    discount: "",
  },
  {
    name: "خوراک جوجه کباب",
    oldPrice: "500,000",
    price: "400,000",
    count: "4",
    discount: "25%",
  },
];

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
        <span>(2)</span>
      </p>
      <span className={styles.btntrash}>
        <TbTrash
          // color="red"
          fontSize="1rem"
          onMouseOver={({ target }) => (target.style.color = "red")}
          onMouseOut={({ target }) => (target.style.color = "red")}
        />
      </span>
    </div>
  );
}
function Content(props) {
  return (
    <div className={styles.content}>
      {list.map((i, index) => (
        <BasketItem
          key={index}
          name={i.name}
          oldPrice={i.oldPrice}
          price={i.price}
          count={i.count}
          discount={i.discount}
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
        <span>515,000</span>
        <span>تومان</span>
      </p>
    </div>
  );
}
function DiscountPrice() {
  return (
    <div className={styles["prices-with-discount"]}>
      <p>قابل پرداخت</p>
      <p>
        <span>515,000</span>
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
      <Title />
      <Content />
      <Price />
      <DiscountPrice />
      <TextArea />
      <ButtonUser />
    </div>
  );
}
function Basket(props) {
  return (
    <div className={styles.basket}>
      {list.length === 0 ? <EmptyBasket /> : <FullBasket />}
    </div>
  );
}

export default function SideLeftEachRes() {
  const [isShowMultiSendingWay, setIsShowMultiSendingWay] = useState(false);

  const showMultiSendingWayHandler = () => {
    setIsShowMultiSendingWay(true);
  };
  const hideMultiSendingWayHandler = () => {
    setIsShowMultiSendingWay(false);
  };

  return (
    <>
      <div className={styles["side-left-each-res-component"]}>
        <>
          <Sendingway
            firstIcon={<AiOutlineFieldTime fontSize="1.2rem" color="#666" />}
            title={"دریافت در سریع ترین زمان ممکن"}
            secondIcon={<FaAngleDown fontSize="1.1rem" color="#418a47" />}
            showMultiSendingWayHandler={showMultiSendingWayHandler}
          />
          <MultiSendingWay
            // className={isShowMultiSendingWay && styles.show}
            class={isShowMultiSendingWay ? "show" : ""}
            hideMultiSendingWayHandler={hideMultiSendingWayHandler}
          />
          <Sendingway
            firstIcon={<GrUserWorker fontSize="1.2rem" color="#666" />}
            title={"پیک فروشنده 15,000 تومان"}
          />
        </>

        <Basket />
      </div>
    </>
  );
}
