import styles from "./SideLeftEachRes.module.css";
import Sendingway from "./Sendingway/Sendingway";

import { AiOutlineFieldTime } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { LuShoppingBag } from "react-icons/lu";
import { TbTrash } from "react-icons/tb";
import BasketItem from "./BasketItem/BasketItem";
import { useState } from "react";
import ModalSendingWay from "../../../Modal/ModalSendingWay/ModalSendingWay";

export default function SideLeftEachRes() {
  const [isModalSendingWay, setIsModalSendingWay] = useState(false);

  const showModalSendingWay = () => {
    setIsModalSendingWay(true);
  };
  const hideModalSendingWay = () => {
    setIsModalSendingWay(false);
  };
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
  return (
    <>
      {isModalSendingWay && (
        <ModalSendingWay hideModalSendingWay={hideModalSendingWay} />
      )}
      <div className={styles["side-left-each-res-component"]}>
        <Sendingway
          firstIcon={<AiOutlineFieldTime fontSize="1.2rem" color="#666" />}
          title={"دریافت در سریع ترین زمان ممکن"}
          secondIcon={<FaAngleDown fontSize="1.1rem" color="#418a47" />}
          showModalSendingWay={showModalSendingWay}
        />

        <Sendingway
          firstIcon={<GrUserWorker fontSize="1.2rem" color="#666" />}
          title={"پیک فروشنده 15,000 تومان"}
        />

        <div className={styles.basket}>
          {list.length === 0 ? (
            <div className={styles.empty}>
              <LuShoppingBag fontSize="1.4rem" color="#aaa" />
              <p>سبد خرید شما خالی است!</p>
            </div>
          ) : (
            <div className={styles.full}>
              <div className={styles.title}>
                <p>
                  <span>سبد خرید</span>
                  <span>(2)</span>
                </p>
                <button className={styles.btntrash}>
                  <TbTrash color="red" fontSize="1rem" />
                </button>
              </div>
              <div className={styles.content}>
                {list.map((i, index) => (
                  <BasketItem
                    name={i.name}
                    oldPrice={i.oldPrice}
                    price={i.price}
                    count={i.count}
                    discount={i.discount}
                  />
                ))}
              </div>
              <div className={styles.prices}>
                <p>مجموع</p>
                <p>
                  <span>515,000</span>
                  <span>تومان</span>
                </p>
              </div>
              <div className={styles["prices-with-discount"]}>
                <p>قابل پرداخت</p>
                <p>
                  <span>515,000</span>
                  <span>تومان</span>
                </p>
              </div>

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
              <button className={styles.btnuser}>ورود به حساب کاربری</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
