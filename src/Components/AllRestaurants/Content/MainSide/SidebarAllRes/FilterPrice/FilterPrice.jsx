import styles from "./FilterPrice.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function FilterPrice() {
  const [filterPrice, setFilterPrice] = useState("همه");
  const [listPricing, setListPricing] = useState([]);
  const filterHandler = (value) => {
    setFilterPrice(value);
  };

  const params = useParams();
  useEffect(() => {
    fetch(
      `https://snappfood.ir/search/api/v1/desktop/vendors-list?lat=35.715&long=51.404&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&page=0&page_size=20&filters=%7B%22filters%22:null,%22sortings%22:null%7D&query=&sp_alias=${params.alias}&city_name=tehran&superType=[${params.catId}]&extra-filter=&vendor_title=&locale=fa`
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        const allArray = res.data.extra_sections.filters.sections;
        for (let i = 0; i < allArray.length; i++) {
          if (allArray[i]["section_name_fa"] === "کلاس قیمتی") {
            setListPricing(allArray[i]["data"]);
          }
        }
      });
  }, [params]);

  return (
    <>
      {listPricing.length > 0 && (
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
