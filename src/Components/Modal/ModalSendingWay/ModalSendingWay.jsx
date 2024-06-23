import styles from "./ModalSendingWay.module.css";
import { useState } from "react";
import ReactDom from "react-dom";

import Card from "../../Card/Card";
import ModalSendingTime from "../../Modal/ModalSendingTime/ModalSendingTime";

import { FaAngleUp } from "react-icons/fa6";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";

function BackDrop(props) {
  return (
    <div className={styles.backdrop} onClick={props.hideModalSendingWay} />
  );
}

function SendWay(props) {
  return (
    <Card className={styles["sending-way"]}>
      <div className={styles.up}>
        <button className={styles.btntime}>
          <AiOutlineFieldTime fontSize="1.4rem" color="#666" />
        </button>
        <p>زمان دریافت سفارش</p>
        <button className={styles.btnup}>
          <FaAngleUp
            fontSize="1.3rem"
            color="#26d354"
            onClick={props.hideModalSendingWay}
          />
        </button>
      </div>
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
      <div className={styles.down} onClick={props.showModalSendingTime}>
        <span></span>
        <p>زمان دیگر</p>
      </div>
    </Card>
  );
}
function Overlay(props) {
  return (
    <SendWay
      hideModalSendingWay={props.hideModalSendingWay}
      showModalSendingTime={props.showModalSendingTime}
    />
  );
}
function FinalModal(props) {
  return (
    <>
      <BackDrop hideModalSendingWay={props.hideModalSendingWay} />
      <Overlay
        hideModalSendingWay={props.hideModalSendingWay}
        showModalSendingTime={props.showModalSendingTime}
      />
    </>
  );
}

function ModalSendingWay(props) {
  const [isModalSendingTime, setIsModalSendingTime] = useState(false);
  const showModalSendingTime = () => {
    setIsModalSendingTime(true);
  };
  const hideModalSendingTime = () => {
    setIsModalSendingTime(false);
  };

  return (
    <>
      {isModalSendingTime &&
        ReactDom.createPortal(
          <ModalSendingTime hideModalSendingTime={hideModalSendingTime} />,
          document.getElementById("modal-root")
        )}
      {ReactDom.createPortal(
        <FinalModal
          showModalSendingTime={showModalSendingTime}
          hideModalSendingTime={hideModalSendingTime}
          hideModalSendingWay={props.hideModalSendingWay}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default ModalSendingWay;
