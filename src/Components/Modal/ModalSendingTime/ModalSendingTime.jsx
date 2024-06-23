import styles from "./ModalSendingTime.module.css";
import ReactDom from "react-dom";

import { useState } from "react";
import Card from "../../Card/Card";

import { IoCloseOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { FaPlusMinus } from "react-icons/fa6";

function BackDrop(props) {
  return (
    <div className={styles.backdrop} onClick={props.hideModalSendingTime} />
  );
}
function ButtonClose(props) {
  return (
    <button className={styles.btnclose} onClick={props.hideModalSendingTime}>
      <IoCloseOutline fontSize="1.7rem" color="#666" cursor="pointer" />
    </button>
  );
}
function Title(props) {
  return <h4>انتخاب زمان</h4>;
}
function ButtonDay(props) {
  return (
    <button className={styles.day} onClick={props.showOverlayDay}>
      <span>امروز</span>
      <FaAngleDown fontSize="1.2rem" color="#ccc" />
    </button>
  );
}
function ButtonTime(props) {
  return (
    <button className={styles.time} onClick={props.showOverlayTime}>
      <p>
        12:00
        <span>
          <FaPlusMinus color="#444" fontSize="0.6rem" />
        </span>
        15 دقیقه
      </p>
      <FaAngleDown fontSize="1.2rem" color="#ccc" />
    </button>
  );
}
function OverlayDay(props) {
  return (
    <Card
      className={`${styles["overlay-day"]} ${
        props.isOverlayDay ? styles.show : ""
      }`}
    >
      <p onClick={props.hideOverlayDay}>امروز</p>
      <p onClick={props.hideOverlayDay}>فردا</p>
    </Card>
  );
}
function OverlayTime(props) {
  return (
    <Card
      className={`${styles["overlay-time"]} ${
        props.isOverlayTime ? styles.show : ""
      }`}
    >
      <p onClick={props.hideOverlayTime}>
        12:00
        <span>
          <FaPlusMinus color="#444" fontSize="0.6rem" />
        </span>
        15 دقیقه
      </p>
      <p onClick={props.hideOverlayTime}>
        12:30
        <span>
          <FaPlusMinus color="#444" fontSize="0.6rem" />
        </span>
        15 دقیقه
      </p>
      <p onClick={props.hideOverlayTime}>
        13:00
        <span>
          <FaPlusMinus color="#444" fontSize="0.6rem" />
        </span>
        15 دقیقه
      </p>
      <p onClick={props.hideOverlayTime}>
        13:30
        <span>
          <FaPlusMinus color="#444" fontSize="0.6rem" />
        </span>
        15 دقیقه
      </p>
    </Card>
  );
}
function Item(props) {
  return (
    <div className={styles.item}>
      <ButtonDay showOverlayDay={props.showOverlayDay} />
      <OverlayDay
        isOverlayDay={props.isOverlayDay}
        hideOverlayDay={props.hideOverlayDay}
      />
      <ButtonTime showOverlayTime={props.showOverlayTime} />
      <OverlayTime
        isOverlayTime={props.isOverlayTime}
        hideOverlayTime={props.hideOverlayTime}
      />
    </div>
  );
}
function TextTime(props) {
  return (
    <p className={styles["text-timing"]}>
      سفارش حدود ساعت
      <span>11:15 تا 11:45</span>
      به دستتان خواهد رسید.
    </p>
  );
}
function ButtonConfirm(props) {
  return <button className={styles.btnconfirm}>تایید</button>;
}
function SendTime(props) {
  return (
    <div onClick={props.hideByClicking}>
      <ButtonClose hideModalSendingTime={props.hideModalSendingTime} />
      <Title />
      <Item
        isOverlayDay={props.isOverlayDay}
        showOverlayDay={props.showOverlayDay}
        hideOverlayDay={props.hideOverlayDay}
        isOverlayTime={props.isOverlayTime}
        showOverlayTime={props.showOverlayTime}
        hideOverlayTime={props.hideOverlayTime}
        hideByClicking={props.hideByClicking}
      />
      <TextTime />
      <ButtonConfirm />
    </div>
  );
}

function Overlay(props) {
  return (
    <Card className={styles["sending-time"]}>
      <SendTime
        hideModalSendingTime={props.hideModalSendingTime}
        isOverlayDay={props.isOverlayDay}
        showOverlayDay={props.showOverlayDay}
        hideOverlayDay={props.hideOverlayDay}
        isOverlayTime={props.isOverlayTime}
        showOverlayTime={props.showOverlayTime}
        hideOverlayTime={props.hideOverlayTime}
        hideByClicking={props.hideByClicking}
      />
    </Card>
  );
}

function FinalModal(props) {
  return (
    <>
      <BackDrop hideModalSendingTime={props.hideModalSendingTime} />
      <Overlay
        hideModalSendingTime={props.hideModalSendingTime}
        isOverlayDay={props.isOverlayDay}
        showOverlayDay={props.showOverlayDay}
        hideOverlayDay={props.hideOverlayDay}
        isOverlayTime={props.isOverlayTime}
        showOverlayTime={props.showOverlayTime}
        hideOverlayTime={props.hideOverlayTime}
        hideByClicking={props.hideByClicking}
      />
    </>
  );
}

function ModalSendingTime(props) {
  const [isOverlayTime, setIsOverlayTime] = useState(false);
  const [isOverlayDay, setIsOverlayDay] = useState(false);

  const showOverlayTime = () => {
    setIsOverlayTime(true);
  };
  const hideOverlayTime = () => {
    setIsOverlayTime(false);
  };

  const showOverlayDay = () => {
    setIsOverlayDay(true);
  };
  const hideOverlayDay = () => {
    setIsOverlayDay(false);
  };
  const hideByClicking = () => {
    if (isOverlayDay) {
      hideOverlayDay();
    }
    if (isOverlayTime) {
      hideOverlayTime();
    }
  };

  return (
    <>
      {ReactDom.createPortal(
        <FinalModal
          hideModalSendingTime={props.hideModalSendingTime}
          isOverlayDay={isOverlayDay}
          showOverlayDay={showOverlayDay}
          hideOverlayDay={hideOverlayDay}
          isOverlayTime={isOverlayTime}
          showOverlayTime={showOverlayTime}
          hideOverlayTime={hideOverlayTime}
          hideByClicking={hideByClicking}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default ModalSendingTime;
