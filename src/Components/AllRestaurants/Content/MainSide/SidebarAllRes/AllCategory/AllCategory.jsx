import styles from "./AllCategory.module.css";
import fastFoodImg from "../../../../../../Images/AllRestaurants/AllCategory/allCategory-fastfood_1.jpg";
import iraniImg from "../../../../../../Images/AllRestaurants/AllCategory/AllCategory_irani_1.jpg";
import kababImg from "../../../../../../Images/AllRestaurants/AllCategory/AllCategory_kebab_1.jpg";
import saladImg from "../../../../../../Images/AllRestaurants/AllCategory/AllCategory_salad_1.jpg";
import seaFoodImg from "../../../../../../Images/AllRestaurants/AllCategory/AllCategory_seafood_1.jpg";
import asianImg from "../../../../../../Images/AllRestaurants/AllCategory/AllCategory_asian_1.jpg";
import AllCategoryItem from "./AllCategoryItem/AllCategoryItem";
export default function AllCategory() {
  const list = [
    {
      image: fastFoodImg,
      title: "فست‌فود",
      icon: true,
    },
    {
      image: iraniImg,
      title: "ایرانی",
      icon: true,
    },
    {
      image: kababImg,
      title: "کباب",
      icon: true,
    },
    {
      image: saladImg,
      title: "سالاد",
      icon: false,
    },
    {
      image: seaFoodImg,
      title: "دریایی",
      icon: false,
    },
    {
      image: asianImg,
      title: "بین الملل",
      icon: false,
    },
  ];
  return (
    <div className={styles["all-category-component"]}>
      <p className={styles.title}>همه دسته‌بندی‌ها</p>
      <div className={styles["list-of-all-category-item"]}>
        {list.map((item, index) => (
          <AllCategoryItem
            key={index}
            source={item.image}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}
