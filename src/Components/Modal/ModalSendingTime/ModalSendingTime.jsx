import styles from "./ModalSendingTime.module.css";

import { useState } from "react";
import Card from "../../Card/Card";
import ModalSelectDaySending from "../ModalSelectDaySending/ModalSelectDaySending";
import ModalSelectTimeSending from "../ModalSelectTimeSending/ModalSelectTimeSending";

import { IoCloseOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { FaPlusMinus } from "react-icons/fa6";

function ModalSendingTime(props) {
  const [isModalSelectTimeSending, setIsModalSelectTimeSending] =
    useState(false);
  const [isModalSelectDaySending, setIsModalSelectDaySending] = useState(false);

  const showModalSelectTimeSending = () => {
    setIsModalSelectTimeSending(true);
  };
  const hideModalSelectTimeSending = () => {
    setIsModalSelectTimeSending(false);
  };

  const showModalSelectDaySending = () => {
    setIsModalSelectDaySending(true);
  };
  const hideModalSelectDaySending = () => {
    setIsModalSelectDaySending(false);
  };

  return (
    <>
      {isModalSelectDaySending && (
        <ModalSelectDaySending
          hideModalSelectDaySending={hideModalSelectDaySending}
        />
      )}
      {isModalSelectTimeSending && (
        <ModalSelectTimeSending
          hideModalSelectTimeSending={hideModalSelectTimeSending}
        />
      )}
      <div className={styles.backdrop} onClick={props.hideModalSendingTime} />
      <Card className={styles["sending-time"]}>
        <button
          className={styles.btnclose}
          onClick={props.hideModalSendingTime}
        >
          <IoCloseOutline fontSize="1.7rem" color="#666" cursor="pointer" />
        </button>
        <h4>انتخاب زمان</h4>
        <div className={styles.item}>
          <button className={styles.day} onClick={showModalSelectDaySending}>
            <span>امروز</span>
            <FaAngleDown fontSize="1.2rem" color="#ccc" />
          </button>
          <button className={styles.time} onClick={showModalSelectTimeSending}>
            <p>
              12:00
              <span>
                <FaPlusMinus color="#444" fontSize="0.6rem" />
              </span>
              15 دقیقه
            </p>
            <FaAngleDown fontSize="1.2rem" color="#ccc" />
          </button>
        </div>
        <p className={styles["text-timing"]}>
          سفارش حدود ساعت
          <span>11:15 تا 11:45</span>
          به دستتان خواهد رسید.
        </p>
        <button className={styles.btnconfirm}>تایید</button>
      </Card>
    </>
  );
}

export default ModalSendingTime;
