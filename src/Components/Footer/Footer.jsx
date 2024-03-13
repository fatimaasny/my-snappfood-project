import "./Footer.css";

import snappFood from "../../Images/Footer/snappfood.png";
import telegramIcon from "../../Images/Footer/telegram.svg";
import linkedInIcon from "../../Images/Footer/linkedin.svg";
import instagramIcon from "../../Images/Footer/instagram.svg";
import aparatIcon from "../../Images/Footer/aparat.svg";
import twitterIcon from "../../Images/Footer/twitter.svg";
import senfImg from "../../Images/Footer/senf.png";

export default function Footer() {
  return (
    <footer>
      <div className="first-part">
        <img src={snappFood} alt="snapp-food.png" />
        <div>
          <h4>اسنپ‌فود</h4>
          <p>تجربه سفارش غذا، از زودفود تا اسنپ‌فود</p>
          <div className="icons">
            <a href="#">
              <img src={twitterIcon} alt="twitter-icon.svg" />
            </a>
            <a href="#">
              <img src={telegramIcon} alt="telegram-icon.svg" />
            </a>{" "}
            <a href="#">
              <img src={linkedInIcon} alt="linkedin-icon.svg" />
            </a>{" "}
            <a href="#">
              <img src={instagramIcon} alt="twitter-icon.svg" />
            </a>
            <a href="#">
              <img src={aparatIcon} alt="aparat-icon.svg" />
            </a>
          </div>
        </div>
      </div>
      <div className="links">
        <a href="#">درباره اسنپ‌فود</a>
        <a href="#">فرصت های شغلی</a>
        <a href="#">وبلاگ</a>
        <a href="#">قوانین سایت</a>
        <a href="#">حریم خصوصی</a>
        <a href="#">ثبت نام فروشندگان</a>
      </div>
      <div className="links">
        <a href="#">تماس با اسنپ‌فود</a>
        <a href="#">پرسش‌های متداول</a>
        <a href="#">ثبت شکایات</a>
        <a href="#">اپلیکیشن موبایل</a>
      </div>
      <div className="image">
        <img src={senfImg} alt="senfimg.png" />
      </div>
    </footer>
  );
}
