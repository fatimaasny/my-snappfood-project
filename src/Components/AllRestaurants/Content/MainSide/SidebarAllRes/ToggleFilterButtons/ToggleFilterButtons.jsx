import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ToggleFilterButtons.module.css";
import ToggleFilterButtonsItem from "./ToggleFilterButtonsItem/ToggleFilterButtonsItem";
export default function ToggleFilterButtons() {
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
        const allArray = res.data.extra_sections.filters.sections;

        for (let i = 0; i < allArray.length; i++) {
          if (allArray[i]["section_name_fa"] === "فیلتر") {
            setList(allArray[i]["data"]);
          }
        }
      });
  }, [params]);

  return (
    <>
      {list.length > 0 && (
        <div className={styles["toogle-filter-buttons-component"]}>
          {list.map((item, index) => (
            <ToggleFilterButtonsItem key={index} title={item.title} />
          ))}
        </div>
      )}
    </>
  );
}
