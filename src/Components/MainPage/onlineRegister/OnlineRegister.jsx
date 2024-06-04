import store from "../../../Images/Main/OnlineRegister/store.svg";
import salerRegister from "../../../Images/Main/OnlineRegister/salerRegister.png";
import Button from "../../Button/Button";
import styles from "./OnlineRegister.module.css";
import { IoStorefrontOutline } from "react-icons/io5";
export default function OnlineRegister() {
  return (
    <div className={styles.onlineReg}>
      <div className={styles.content}>
        <h3>صاحب کسب و کار هستید؟</h3>
        <p>با اسنپ‌فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید.</p>
        <Button
          title={"ثبت‌نام فروشندگان"}
          // image={store}
          icon={<IoStorefrontOutline fontSize="1.4rem" fontWeight="600" />}
          className={styles.background}
        />
      </div>
      <div className={styles.image}>
        <img src={salerRegister} alt="salerRegister.svg" />
      </div>
    </div>
  );
}
