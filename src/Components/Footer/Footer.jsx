import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

import ShowList from "../ShowList/ShowList";
import SocialIcon from "../SocialIcon/SocialIcon";

import snappFood from "../../Images/Footer/snappfood.png";
import senfImg from "../../Images/Footer/senf.png";

import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiAparat } from "react-icons/si";

function Content(props) {
  return (
    <div className={styles["first-part"]}>
      <img src={snappFood} alt="snapp-food.png" />
      <div className={styles.text}>
        <h4>اسنپ‌فود</h4>
        <p>تجربه سفارش غذا، از زودفود تا اسنپ‌فود</p>
        <div className={styles.icons}>
          {props.ListSocialIcon.map((i, index) => (
            <a href={i.link} key={index} target="_blank">
              <SocialIcon icon={i.icon} />
            </a>
            // <SocialIcon icon={i.icon} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
function ColContent(props) {
  return (
    <div className={styles.colcontent}>
      <ShowList list={props.LinkList1} class={"column"} />
      <ShowList list={props.LinkList2} class={"column"} />
      <Image />
    </div>
  );
}

function Image() {
  return (
    <div className={styles.image}>
      <img src={senfImg} alt="senfimg.png" />
    </div>
  );
}
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
    {
      icon: <FaTwitter color="#666" fontSize="1.2rem" />,
      link: "https://twitter.com/snappfood",
    },
    {
      icon: <FaTelegramPlane color="#666" fontSize="1.2rem" />,
      link: "https://t.me/snappfood",
    },
    {
      icon: <FaLinkedin color="#666" fontSize="1.2rem" />,
      link: "https://www.linkedin.com/company/snappfood/",
    },
    {
      icon: <FaInstagram color="#666" fontSize="1.2rem" />,
      link: "https://instagram.com/snappfood_ir",
    },
    {
      icon: <SiAparat color="#666" fontSize="1.2rem" />,
      link: "https://www.aparat.com/snappfood",
    },
  ];

  return (
    <footer className={styles.footer}>
      <Content ListSocialIcon={ListSocialIcon} />
      <ColContent LinkList1={LinkList1} LinkList2={LinkList2} />
    </footer>
  );
}
