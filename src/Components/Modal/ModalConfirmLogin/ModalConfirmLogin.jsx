import styles from "./ModalConfirmLogin.module.css";
import Card from "../../Card/Card";
import ReactDom from "react-dom";

import { FaAngleRight } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";

function BackDrop(props) {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
}
function Overlay(props) {
  return (
    <Card className={styles.modalconfirm}>
      <FaAngleRight
        fontSize="1.4rem"
        color="#868686"
        cursor="pointer"
        onClick={() => {
          props.onConfirm();
          props.showModalHandler();
        }}
      />
      <h3>تایید شماره</h3>
      <p className={styles.recieve}>
        کد تایید به شماره <span>{props.mobile}</span>فرستاده شد
      </p>
      <p className={styles.edit}>
        <FaEdit
          fontSize="0.85rem"
          color="#08c208"
          enableBackground="white"
          marginLeft="10px"
        />
        <span
          onClick={async () => {
            props.onConfirm();
            props.showModalHandler();
            await props.setMobile("");
            await props.setActive(0);
          }}
        >
          اصلاح شماره
        </span>
      </p>
      <input type="text" className={styles["code-input"]} />
      <p className={styles.invalid}>
        <AiOutlineExclamationCircle fontSize="1rem" color="red" />
        <span>کد اشتباه است</span>
      </p>
      <p className={styles.waiting}>
        02:00
        <span>شکیبا باشید</span>
      </p>
      <div className={styles["send-again"]}>
        <p>کد تایید را دریافت نکردید؟</p>
        <span>ارسال دوباره</span>
      </div>
      <p className={styles.rules}>
        ثبت نام در اسنپ‌فود به منزله پذیرش همه{" "}
        <span>قوانین و شرایط استفاده </span>است.
      </p>
      <button className={styles.button}>ورود</button>
    </Card>
  );
}
function FinalModal(props) {
  return (
    <>
      <BackDrop onConfirm={props.onConfirm} />
      <Overlay
        onConfirm={props.onConfirm}
        showModalHandler={props.showModalHandler}
        mobile={props.mobile}
        setMobile={props.setMobile}
        setActive={props.setActive}
      />
    </>
  );
}

function ModalConfirmLogin(props) {
  return (
    <>
      {ReactDom.createPortal(
        <FinalModal
          onConfirm={props.onConfirm}
          showModalHandler={props.showModalHandler}
          mobile={props.mobile}
          setMobile={props.setMobile}
          setActive={props.setActive}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default ModalConfirmLogin;
