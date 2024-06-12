import styles from "./Footer.module.css";

import ShowList from "../ShowList/ShowList";
import SocialIcon from "../SocialIcon/SocialIcon";

import snappFood from "../../Images/Footer/snappfood.png";
import senfImg from "../../Images/Footer/senf.png";

import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiAparat } from "react-icons/si";

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
    { icon: <FaTwitter color="#666" fontSize="1.2rem" /> },
    { icon: <FaTelegramPlane color="#666" fontSize="1.2rem" /> },
    { icon: <FaLinkedin color="#666" fontSize="1.2rem" /> },
    { icon: <FaInstagram color="#666" fontSize="1.2rem" /> },
    { icon: <SiAparat color="#666" fontSize="1.2rem" /> },
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
              <SocialIcon icon={i.icon} />
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
