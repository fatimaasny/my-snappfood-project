import styles from "./MultiSendingWay.module.css";
import { useState } from "react";
import ModalSendingTime from "../../../../Modal/ModalSendingTime/ModalSendingTime";

import { FaAngleUp } from "react-icons/fa6";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";

function UpContent(props) {
  return (
    <div className={styles.up}>
      <button className={styles.btntime}>
        <AiOutlineFieldTime fontSize="1.4rem" color="#666" />
      </button>
      <p>زمان دریافت سفارش</p>
      <button className={styles.btnup}>
        <FaAngleUp
          fontSize="1.3rem"
          color="#26d354"
          onClick={props.hideMultiSendingWayHandler}
        />
      </button>
    </div>
  );
}
function MiddleContent(props) {
  return (
    <div className={styles.middle}>
      <button className={styles.btncheck}>
        <FaCheck color="#fff" fontSize="1rem" />
      </button>
      <p>
        <span>سریع‌ترین زمان ممکن</span>
        <span>ارسال سریع بعد از ثبت سفارش</span>
      </p>
      <button className={styles.btntime}>
        <AiOutlineFieldTime fontSize="1.4rem" color="#666" />
      </button>
    </div>
  );
}
function DownContent(props) {
  return (
    <div className={styles.down} onClick={props.showModalSendingTime}>
      <span></span>
      <p>زمان دیگر</p>
    </div>
  );
}
function MultiSendingWay(props) {
  const [isModalSendingTime, setIsModalSendingTime] = useState(false);
  const showModalSendingTime = () => {
    setIsModalSendingTime(true);
  };
  const hideModalSendingTime = () => {
    setIsModalSendingTime(false);
  };
  return (
    <>
      {isModalSendingTime && (
        <ModalSendingTime hideModalSendingTime={hideModalSendingTime} />
      )}
      <div className={`${styles["sending-way"]} ${styles[props.class]} `}>
        <UpContent
          hideMultiSendingWayHandler={props.hideMultiSendingWayHandler}
        />
        <MiddleContent />
        <DownContent showModalSendingTime={showModalSendingTime} />
      </div>
    </>
  );
}

export default MultiSendingWay;
