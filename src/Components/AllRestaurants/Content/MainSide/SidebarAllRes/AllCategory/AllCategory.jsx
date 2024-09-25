import styles from "./AllCategory.module.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AllCategoryItem from "./AllCategoryItem/AllCategoryItem";
import Error from "../../../../../Error/Error";

export default function AllCategory() {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);
  const [error, setError] = useState();
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://snappfood.ir/search/api/v1/desktop/vendors-list?lat=35.715&long=51.404&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&page=0&page_size=20&filters=%7B%22filters%22:null,%22sortings%22:null%7D&query=&sp_alias=${params.alias}&city_name=tehran&superType=[${params.catId}]&extra-filter=&vendor_title=&locale=fa`
        );
        if (!response.ok) {
          throw new Error("اطلاعات به درستی دریافت نشده است.");
        }
        const res = await response.json();
        setList(res.data.extra_sections.categories.data);
        setError();
      } catch (error) {
        setError("خطایی رخ داده است، مجددا تلاش کنید.");
      }
      setIsLoading(false);
    };
    fetchData();
  }, [params]);

  if (error) {
    return <Error title={error} />;
  }

  return (
    <>
      {list.length > 0 && !isLoading && (
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
