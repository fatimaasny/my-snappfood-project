import styles from "./ModalLogin.module.css";
import Card from "../../Card/Card";
import ReactDom from "react-dom";

import snapImage from "../../../Images/Header/HeaderUp/snappfood.png";
import { IoCloseOutline } from "react-icons/io5";

function BackDrop(props) {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
}
function Header(props) {
  return (
    <header className={styles.header}>
      <button onClick={props.onConfirm}>
        <IoCloseOutline fontSize="1.9rem" />
      </button>
      <img src={snapImage} alt="snapimage" />
    </header>
  );
}
function Content(props) {
  return (
    <div className={styles.content}>
      <h2>
        ورود <span>یا</span>عضویت
      </h2>
      <p className={styles.mobiletiltle}> شماره تلفن همراه</p>
      <input
        id="mobile"
        type="text"
        value={props.mobile}
        onChange={props.mobileCheckedHandler}
      />
      <p className={styles.mobiledescription}>شماره تلفن با 09 شروع شود</p>
    </div>
  );
}
function ButtonContinue(props) {
  return (
    <button
      className={`${styles.button} ${props.active === 1 ? styles.active : ""}`}
      disabled={props.active === 0}
      onClick={() => {
        // اول باید مودال لاگین رو ببریم بعد مودال کانفرم رو بیاریم
        props.onConfirm();
        props.showModalConfirmHandler();
      }}
    >
      ادامه
    </button>
  );
}

function Overlay(props) {
  return (
    <Card className={styles.modal}>
      <Header />
      <Content
        mobile={props.mobile}
        mobileCheckedHandler={props.mobileCheckedHandler}
      />
      <ButtonContinue
        active={props.active}
        onConfirm={props.onConfirm}
        showModalConfirmHandler={props.showModalConfirmHandler}
      />
    </Card>
  );
}
function FinalModal(props) {
  return (
    <>
      <BackDrop onConfirm={props.onConfirm} />
      <Overlay
        onConfirm={props.onConfirm}
        mobile={props.mobile}
        mobileCheckedHandler={props.mobileCheckedHandler}
        active={props.active}
        showModalConfirmHandler={props.showModalConfirmHandler}
      />
    </>
  );
}

function ModalLogin(props) {
  return (
    <>
      {ReactDom.createPortal(
        <FinalModal
          onConfirm={props.onConfirm}
          mobile={props.mobile}
          mobileCheckedHandler={props.mobileCheckedHandler}
          active={props.active}
          showModalConfirmHandler={props.showModalConfirmHandler}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default ModalLogin;
