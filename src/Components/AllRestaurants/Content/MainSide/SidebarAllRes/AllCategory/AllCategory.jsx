import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./AllCategory.module.css";
// import fastFoodImg from "../../../../../../Images/AllRestaurants/AllCategory/allCategory-fastfood_1.jpg";
// import iraniImg from "../../../../../../Images/AllRestaurants/AllCategory/AllCategory_irani_1.jpg";
// import kababImg from "../../../../../../Images/AllRestaurants/AllCategory/AllCategory_kebab_1.jpg";
// import saladImg from "../../../../../../Images/AllRestaurants/AllCategory/AllCategory_salad_1.jpg";
// import seaFoodImg from "../../../../../../Images/AllRestaurants/AllCategory/AllCategory_seafood_1.jpg";
// import asianImg from "../../../../../../Images/AllRestaurants/AllCategory/AllCategory_asian_1.jpg";
import AllCategoryItem from "./AllCategoryItem/AllCategoryItem";
export default function AllCategory() {
  const [list, setList] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetch(
      `https://snappfood.ir/search/api/v1/desktop/vendors-list?lat=35.715&long=51.404&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&page=0&page_size=20&filters=%7B%22filters%22:null,%22sortings%22:null%7D&query=&sp_alias=${params.alias}&city_name=tehran&superType=[${params.catId}]&extra-filter=&vendor_title=&locale=fa`
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setList(res.data.extra_sections.categories.data);
      });
  }, [params]);

  // const list = [
  //   {
  //     image: fastFoodImg,
  //     title: "فست‌فود",
  //     icon: true,
  //   },
  //   {
  //     image: iraniImg,
  //     title: "ایرانی",
  //     icon: true,
  //   },
  //   {
  //     image: kababImg,
  //     title: "کباب",
  //     icon: true,
  //   },
  //   {
  //     image: saladImg,
  //     title: "سالاد",
  //     icon: false,
  //   },
  //   {
  //     image: seaFoodImg,
  //     title: "دریایی",
  //     icon: false,
  //   },
  //   {
  //     image: asianImg,
  //     title: "بین الملل",
  //     icon: false,
  //   },
  // ];
  return (
    <>
      {list.length > 0 && (
        <div className={styles["all-category-component"]}>
          <p className={styles.title}>همه دسته‌بندی‌ها</p>
          <div className={styles["list-of-all-category-item"]}>
            {list.map((item) => (
              <AllCategoryItem
                key={item.id}
                source={item.image}
                title={item.title}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
