import styles from "./ModalLogin.module.css";
import Card from "../Components/Card/Card";
import { snapImage } from "../Images/Header/HeaderUp/snappfood.png";
function ModalLogin(props) {
  return (
    <>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <Card className={styles.modallogin}>
        <div className={styles.header}>
          <button onClick={props.onConfirm}>close</button>
          <img src={snapImage} alt="snapimage" />
        </div>
        <h2>
          ورود <span>یا</span>عضویت
        </h2>
        <label htmlFor="mobile">
          {" "}
          شماره تلفن همراه
          <input id="mobile" type="text" placeholder="شماره تلفن همراه" />
        </label>
        <p>شماره تلفن با 09 شروع شود</p>
        <button className={styles.continue}>ادامه</button>
      </Card>
    </>
  );
}

export default ModalLogin;
