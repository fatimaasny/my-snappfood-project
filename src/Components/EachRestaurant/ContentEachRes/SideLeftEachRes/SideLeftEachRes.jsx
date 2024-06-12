import styles from "./SideLeftEachRes.module.css";

import { AiOutlineFieldTime } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { LuShoppingBag } from "react-icons/lu";

export default function SideLeftEachRes() {
  return (
    <div className={styles["side-left-each-res-component"]}>
      <div className={styles["select-recieve"]}>
        <AiOutlineFieldTime fontSize="1.4rem" />
        <p>دریافت در سریع ترین زمان ممکن</p>
        <FaAngleDown fontSize="1.1rem" color="#418a47" />
      </div>
      <div className={styles["send-price"]}>
        <GrUserWorker fontSize="1.4rem" />
        <p>پیک فروشنده 15,000 تومان</p>
      </div>
      <div className={styles["product-box"]}>
        <LuShoppingBag fontSize="1.4rem" color="#aaa" />
        <p>سبد خرید شما خالی است!</p>
      </div>
    </div>
  );
}
