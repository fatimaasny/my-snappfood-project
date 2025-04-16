import styles from "./SideLeftEachRes.module.css";
import { useState } from "react";

import Sendingway from "./Sendingway/Sendingway";
import MultiSendingWay from "./MultiSendingWay/MultiSendingWay";
import MyShoppingCart from "./MyShoppingCart/MyShoppingCart";

import { AiOutlineFieldTime } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";

export default function SideLeftEachRes({ scrollposition }) {
  const [isShowMultiSendingWay, setIsShowMultiSendingWay] = useState(false);

  const showMultiSendingWayHandler = () => {
    setIsShowMultiSendingWay(true);
  };
  const hideMultiSendingWayHandler = () => {
    setIsShowMultiSendingWay(false);
  };

  return (
    <>
      <div
        className={`${styles["side-left-each-res-component"]} ${
          scrollposition ? styles.fix : ""
        }`}
      >
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
        <MyShoppingCart />
      </div>
    </>
  );
}
