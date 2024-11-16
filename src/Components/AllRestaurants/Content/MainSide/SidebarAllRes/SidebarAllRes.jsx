import styles from "./SidebarAllRes.module.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// api
import { vendorList } from "../../../../../CallApi/CallApi";

// hooks
import { useCategoriesSidebar } from "../../../../../hooks/useFetch";

import AllCategory from "./AllCategory/AllCategory";
import OneCategory from "./OneCategory/OneCategory";
import FilterPrice from "./FilterPrice/FilterPrice";
import ToggleFilterButtons from "./ToggleFilterButtons/ToggleFilterButtons";

export default function SidebarAllRes() {
  const [isOverlayBack, setIsOverlayBack] = useState(false);
  const [listOverlayBack, setListOverlayBack] = useState([]);
  const [titleBack, setTitleBack] = useState("");
  const params = useParams();

  // const [isLoading, setIsLoading] = useState(false);
  // const [list, setList] = useState([]);
  // const [error, setError] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const res = await vendorList(params.alias, params.catId);
  //       setList(res.data.extra_sections.categories.data);
  //       setError();
  //     } catch (error) {
  //       setError("خطایی رخ داده است، مجددا تلاش کنید.");
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, [params]);

  const {
    isLoading,
    data: list,
    error,
  } = useCategoriesSidebar(vendorList, params);

  const handleShowOverlayBack = () => {
    setIsOverlayBack(true);
  };
  const handleHideOverlayBack = () => {
    setIsOverlayBack(false);
  };

  const handleListOverlayBack = (value) => {
    setListOverlayBack(value);
  };
  const handleTitleBack = (value) => {
    setTitleBack(value);
  };

  return (
    <aside className={styles["sidebar-SidebarAllRes"]}>
      {isOverlayBack ? (
        <OneCategory
          list={listOverlayBack}
          title={titleBack}
          params={params}
          handleHideOverlayBack={handleHideOverlayBack}
        />
      ) : (
        <AllCategory
          list={list}
          isLoading={isLoading}
          error={error}
          params={params}
          handleListOverlayBack={handleListOverlayBack}
          handleShowOverlayBack={handleShowOverlayBack}
          handleTitleBack={handleTitleBack}
        />
      )}
      <FilterPrice />
      <ToggleFilterButtons />
    </aside>
  );
}
