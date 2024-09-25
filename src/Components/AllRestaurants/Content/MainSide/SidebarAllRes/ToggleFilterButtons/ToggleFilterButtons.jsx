import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ToggleFilterButtons.module.css";
import ToggleFilterButtonsItem from "./ToggleFilterButtonsItem/ToggleFilterButtonsItem";
import Error from "../../../../../Error/Error";

export default function ToggleFilterButtons() {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);
  const [error, setError] = useState();
  const params = useParams();

  useEffect(() => {
    const fetchFilter = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://snappfood.ir/search/api/v1/desktop/vendors-list?lat=35.715&long=51.404&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&page=0&page_size=20&filters=%7B%22filters%22:null,%22sortings%22:null%7D&query=&sp_alias=${params.alias}&city_name=tehran&superType=[${params.catId}]&extra-filter=&vendor_title=&locale=fa`
        );
        if (!response.ok) {
          throw new Error("اطلاعات به درستی از سرور دریافت نشده است.");
        }
        const res = await response.json();
        const allArray = res.data.extra_sections.filters.sections;
        for (let i = 0; i < allArray.length; i++) {
          if (allArray[i]["section_name_fa"] === "فیلتر") {
            setList(allArray[i]["data"]);
            return;
          } else {
            setList([]);
          }
        }
        setError();
      } catch (err) {
        setError("خطایی رخ داده است، بعدا مجددا تلاش کنید.");
      }
      setIsLoading(false);
    };
    fetchFilter();
  }, [params]);

  if (error) {
    return <Error title={error} />;
  }

  return (
    <>
      {list.length > 0 && !isLoading && (
        <div className={styles["toogle-filter-buttons-component"]}>
          {list.map((item, index) => (
            <ToggleFilterButtonsItem key={index} title={item.title} />
          ))}
        </div>
      )}
    </>
  );
}
