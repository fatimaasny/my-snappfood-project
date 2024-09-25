import styles from "./SortSelected.module.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Error from "../../../Error/Error";

import { GoTriangleDown } from "react-icons/go";
import OverlaySort from "./OverlaySort/OverlaySort";

export default function SortSelected() {
  const [isOverlaySort, setIsOverlaySort] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);
  const [error, setError] = useState();

  const handleSortOverlay = () => {
    setIsOverlaySort((isOverlaySort) => !isOverlaySort);
  };
  const hideSortOverlay = () => {
    setIsOverlaySort(false);
  };
  const handleSelectedSort = (value) => {
    setSelectedSort(value);
  };

  const params = useParams();

  useEffect(() => {
    hideSortOverlay();
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
        const oldArray = res.data.extra_sections.filters.top.data;
        const finalArray = [];
        for (let i = 0; i < oldArray.length; i++) {
          finalArray.push(oldArray[i]["title"]);
        }
        setList(finalArray);
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
    <div className={styles["sort-selected"]}>
      <div onClick={handleSortOverlay}>
        <input type="text" placeholder="به ترتیب پیش‌فرض" />
        <button>
          <GoTriangleDown fontSize="1rem" color="#666" />
        </button>
      </div>
      {isOverlaySort && <OverlaySort list={list} isLoading={isLoading} />}
    </div>
  );
}
