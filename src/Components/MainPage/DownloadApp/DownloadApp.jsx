import styles from "./DownloadApp.module.css";

import Button from "../../Button/Button";

import myket from "../../../Images/Main/ِDownloadApp/myket.png";
import bazar from "../../../Images/Main/ِDownloadApp/bazar.jpg";
import sibUp from "../../../Images/Main/ِDownloadApp/iosSibUp.png";
import Iapp from "../../../Images/Main/ِDownloadApp/iosIapp.png";
import mobile from "../../../Images/Main/ِDownloadApp/mobile.png";

function Content(props) {
  return (
    <div className={styles.content}>
      <h3>اپلیکیشن اسنپ‌فود</h3>
      <p>
        {" "}
        با اپلیکیشن اسنپ‌فود به راحتی و با چند کلیک ساده می‌توانید رستوران‌ها،
        کافه‌ها، شیرینی‌فروشی‌ها و سوپرمارکت‌های نزدیک خودتان را جست‌وجو کرده و
        از تجربه سفارش آسان از اسنپ‌فود لذت ببرید.
      </p>
      <div className={styles["enter-phone"]}>
        <p>برای دریافت لینک دانلود اپلیکیشن، شماره موبایلتان رو وارد کنید</p>
        <div className={styles["receive-link"]}>
          <input type="text" placeholder="09*********" />
          <Button title={"دریافت لینک"} className={styles.background} />
        </div>
      </div>
      <div className={styles["list-app"]}>
        {props.images.map((image, index) => (
          <img src={image} />
        ))}
      </div>
    </div>
  );
}
function Image() {
  return (
    <div className={styles.image}>
      <img src={mobile} alt="mobile.png" />
    </div>
  );
}

export default function DownloadApp() {
  const images = [myket, bazar, sibUp, Iapp];
  return (
    <div className={styles["dlApp-content"]}>
      <Content images={images} />
      <Image />
    </div>
  );
}
