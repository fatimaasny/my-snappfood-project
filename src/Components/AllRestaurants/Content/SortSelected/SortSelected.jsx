import styles from "./SortSelected.module.css";

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import Error from "../../../Error/Error";
import OverlaySort from "./OverlaySort/OverlaySort";

// api
import { vendorList } from "../../../../CallApi/CallApi";

// custom hooks
import { useFetch2 } from "../../../../hooks/useFetch";

import { GoTriangleDown } from "react-icons/go";
import { IoIosClose } from "react-icons/io";

export default function SortSelected() {
  const [isOverlaySort, setIsOverlaySort] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");
  const params = useParams();

  const { isLoading, data, error, fetchData } = useFetch2(
    vendorList,
    (data) => data.data.extra_sections.filters.top.data
  );

  const processData = async () => {
    await fetchData(params.alias, params.catId);
  };

  useEffect(() => {
    processData();
  }, []);

  //A: به جای این رفتم توی تابعی که هر بار روی جدید ترین, ... اینا کلیک کنیم اونجا گذاشتمش
  useEffect(() => {
    processData();
    hideSortOverlay();
  }, [selectedSort]);

  if (error) {
    return <Error title={error} />;
  }

  const handleSortOverlay = () => {
    setIsOverlaySort((isOverlaySort) => !isOverlaySort);
  };
  const hideSortOverlay = () => {
    setIsOverlaySort(false);
  };
  const handleSelectedSort = (value) => {
    setSelectedSort(value);
    //A:
    // hideSortOverlay();
    // processData();
  };

  return (
    <div className={styles["sort-selected"]}>
      <div className={styles.content} onClick={handleSortOverlay}>
        <div>
          <input
            type="text"
            value={selectedSort}
            placeholder="به ترتیب پیش‌فرض"
          />
          {selectedSort.length > 0 && (
            <Link
              to={`/category/${params.catId}/${params.alias}/null/${params.catValue}/${params.subValue}/${params.filterPrice}`}
            >
              <IoIosClose
                fontSize="1.5rem"
                color="#aaa"
                onClick={() => handleSelectedSort("")}
              />
            </Link>
          )}
        </div>
        <button>
          <GoTriangleDown fontSize="1rem" color="#666" />
        </button>
      </div>
      {isOverlaySort && (
        <OverlaySort
          list={data}
          isLoading={isLoading}
          params={params}
          handleSelectedSort={handleSelectedSort}
        />
      )}
    </div>
  );
}
