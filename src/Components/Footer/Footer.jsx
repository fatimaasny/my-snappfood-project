import styles from "./Footer.module.css";

import snappFood from "../../Images/Footer/snappfood.png";
import telegramIcon from "../../Images/Footer/telegram.svg";
import linkedInIcon from "../../Images/Footer/linkedin.svg";
import instagramIcon from "../../Images/Footer/instagram.svg";
import aparatIcon from "../../Images/Footer/aparat.svg";
import twitterIcon from "../../Images/Footer/twitter.svg";
import senfImg from "../../Images/Footer/senf.png";
import ShowList from "../ShowList/ShowList";
import SocialIcon from "../SocialIcon/SocialIcon";
// import RoundedImage from "../UI/RoundedImage/RoundedImage";

export default function Footer() {
  const LinkList1 = [
    "درباره اسنپ‌فود",
    "فرصت های شغلی",
    "وبلاگ",
    "قوانین سایت",
    "حریم خصوصی",
    "ثبت نام فروشندگان",
  ];
  const LinkList2 = [
    "تماس با اسنپ‌فود",
    "پرسش‌های متداول",
    "ثبت شکایات",
    "اپلیکیشن موبایل",
  ];
  const ListSocialIcon = [
    { source: twitterIcon, alt: "twitter-icon.svg" },
    { source: telegramIcon, alt: "telegram-icon.svg" },
    { source: linkedInIcon, alt: "linkedin-icon.svg" },
    { source: instagramIcon, alt: "instagram-icon.svg" },
    { source: aparatIcon, alt: "aparat-icon.svg" },
  ];
  return (
    <footer>
      <div className={styles["first-part"]}>
        <img src={snappFood} alt="snapp-food.png" />
        <div>
          <h4>اسنپ‌فود</h4>
          <p>تجربه سفارش غذا، از زودفود تا اسنپ‌فود</p>
          <div className={styles.icons}>
            {ListSocialIcon.map((i, index) => (
              <SocialIcon key={index} source={i.source} alt={i.alt} />
            ))}
          </div>
        </div>
      </div>
      <ShowList list={LinkList1} class={"column"} />
      <ShowList list={LinkList2} class={"column"} />

      <div className={styles.image}>
        <img src={senfImg} alt="senfimg.png" />
      </div>
    </footer>
  );
}
