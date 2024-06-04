import styles from "./ModalLogin.module.css";
import Card from "../../Card/Card";
import snapImage from "../../../Images/Header/HeaderUp/snappfood.png";
import { IoCloseOutline } from "react-icons/io5";
function ModalLogin(props) {
  return (
    <>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <button onClick={props.onConfirm}>
            <IoCloseOutline fontSize="1.9rem" />
          </button>
          <img src={snapImage} alt="snapimage" />
        </header>
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
        <button
          className={`${styles.button} ${
            props.active === 1 ? styles.active : ""
          }`}
          disabled={props.active === 0}
          onClick={() => {
            // اول باید مودال لاگین رو ببریم بعد مودال کانفرم رو بیاریم
            props.onConfirm();
            props.showModalConfirmHandler();
          }}
        >
          ادامه
        </button>
      </Card>
    </>
  );
}

export default ModalLogin;
