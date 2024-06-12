import styles from "./OneCategory.module.css";

import { FaAngleRight } from "react-icons/fa6";

import OneCategoryItem from "./OneCategoryItem/OneCategoryItem";
import kababImg from "../../../../../../Images/AllRestaurants/OneCategory/OneCategory-kebab.png";
import sonatiImg from "../../../../../../Images/AllRestaurants/OneCategory/OneCategory-sonnati.png";
import poloIraniImg from "../../../../../../Images/AllRestaurants/OneCategory/OneCategory-polo-irani.png";
import khoreshImg from "../../../../../../Images/AllRestaurants/OneCategory/OneCategory-khoresh.png";
import morghImg from "../../../../../../Images/AllRestaurants/OneCategory/OneCategory-morgh.png";
import gilaniImg from "../../../../../../Images/AllRestaurants/OneCategory/OneCategory-guilani.png";
export default function OneCategory({ title }) {
  const list = [
    {
      image: kababImg,
      title: "کباب",
    },
    {
      image: sonatiImg,
      title: "سنتی",
    },
    {
      image: poloIraniImg,
      title: "پلوی ایرانی",
    },
    {
      image: khoreshImg,
      title: "خورشت",
    },
    {
      image: morghImg,
      title: "مرغ",
    },
    {
      image: gilaniImg,
      title: "گیلانی",
    },
  ];
  return (
    <div className={styles["onecategory-component"]}>
      <div className={styles.back}>
        <button>
          <FaAngleRight color="#444" fontSize="1rem" />
        </button>
        <p>بازگشت</p>
      </div>
      <h4>{title}</h4>
      <div className={styles["list-of-one-category"]}>
        {list.map((item, index) => (
          <OneCategoryItem key={index} source={item.image} title={item.title} />
        ))}
      </div>
    </div>
  );
}
