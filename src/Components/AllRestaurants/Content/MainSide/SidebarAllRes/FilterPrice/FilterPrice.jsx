import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./FilterPrice.module.css";
import Error from "../../../../../Error/Error";

export default function FilterPrice() {
  const [filterPrice, setFilterPrice] = useState("همه");
  const [isLoading, setIsLoading] = useState(false);
  const [listPricing, setListPricing] = useState([]);
  const [error, setError] = useState();
  const filterHandler = (value) => {
    setFilterPrice(value);
  };

  const params = useParams();
  useEffect(() => {
    const fetchPricing = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://snappfood.ir/search/api/v1/desktop/vendors-list?lat=35.715&long=51.404&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&page=0&page_size=20&filters=%7B%22filters%22:null,%22sortings%22:null%7D&query=&sp_alias=${params.alias}&city_name=tehran&superType=[${params.catId}]&extra-filter=&vendor_title=&locale=fa`
        );
        const res = await response.json();
        if (!response.ok) {
          throw new Error("اطلاعات به درستی از سرور دریافت نشده است.");
        }
        const allArray = res.data.extra_sections.filters.sections;
        for (let i = 0; i < allArray.length; i++) {
          if (allArray[i]["section_name_fa"] === "کلاس قیمتی") {
            setListPricing(allArray[i]["data"]);
            return;
          } else {
            setListPricing([]);
          }
        }
        setError();
      } catch (err) {
        setError(
          "اطلاعات به درستی از سرور دریافت نشده است، بعدا مجددا تلاش کنید."
        );
      }
      setIsLoading(false);
    };
    fetchPricing();
  }, [params]);

  if (error) {
    return <Error title={error} />;
  }

  return (
    <>
      {listPricing.length > 0 && !isLoading && (
        <div className={styles["filter-price-component"]}>
          <p>کلاس قیمتی</p>
          <div className={styles["list"]}>
            <button
              className={`${styles.item} ${
                filterPrice === "همه" ? styles.filter : ""
              }`}
              onClick={() => filterHandler("همه")}
            >
              همه
            </button>
            {listPricing.map((item, index) => (
              <button
                key={index}
                className={`${styles.item} ${
                  filterPrice === item.title ? styles.filter : ""
                }`}
                onClick={() => filterHandler(item.title)}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
