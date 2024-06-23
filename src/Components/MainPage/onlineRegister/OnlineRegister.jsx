import styles from "./OnlineRegister.module.css";

import Button from "../../Button/Button";

import salerRegister from "../../../Images/Main/OnlineRegister/salerRegister.png";

import { IoStorefrontOutline } from "react-icons/io5";

function Content() {
  return (
    <div className={styles.content}>
      <h3>صاحب کسب و کار هستید؟</h3>
      <p>با اسنپ‌فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید.</p>
      <Button
        title={"ثبت‌نام فروشندگان"}
        icon={<IoStorefrontOutline fontSize="1.4rem" fontWeight="600" />}
        className={styles.background}
      />
    </div>
  );
}
function Image() {
  return (
    <div className={styles.image}>
      <img src={salerRegister} alt="salerRegister.svg" />
    </div>
  );
}

export default function OnlineRegister() {
  return (
    <div className={styles.onlineReg}>
      <Content />
      <Image />
    </div>
  );
}
