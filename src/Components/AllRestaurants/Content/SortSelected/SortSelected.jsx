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
  // const [list, setList] = useState([]);
  const [isOverlaySort, setIsOverlaySort] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");
  const params = useParams();

  const handleSortOverlay = () => {
    setIsOverlaySort((isOverlaySort) => !isOverlaySort);
  };
  const hideSortOverlay = () => {
    setIsOverlaySort(false);
  };
  const handleSelectedSort = (value) => {
    setSelectedSort(value);
  };
  // const [isLoading, setIsLoading] = useState(false);
  // const [list, setList] = useState([]);
  // const [error, setError] = useState();

  // useEffect(() => {
  //   hideSortOverlay();
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const res = await vendorList(params.alias, params.catId);
  //       setList(res.data.extra_sections.filters.top.data);

  //       setError();
  //     } catch (error) {
  //       setError("خطایی رخ داده است، مجددا تلاش کنید.");
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, [params]);

  const { isLoading, data, setData, error, fetchData } = useFetch2(vendorList);

  const processData = async () => {
    await fetchData(params.alias, params.catId);
    await setData(data.data.extra_sections.filters.top.data);
  };

  useEffect(() => {
    hideSortOverlay();
    processData();
  }, [selectedSort]);

  if (error) {
    return <Error title={error} />;
  }

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
