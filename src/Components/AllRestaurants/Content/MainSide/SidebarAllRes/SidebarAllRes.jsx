import styles from "./SidebarAllRes.module.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// api
import { vendorList } from "../../../../../CallApi/CallApi";

// hooks
import { useFetch2 } from "../../../../../hooks/useFetch";

import AllCategory from "./AllCategory/AllCategory";
import OneCategory from "./OneCategory/OneCategory";
import FilterPrice from "./FilterPrice/FilterPrice";
import ToggleFilterButtons from "./ToggleFilterButtons/ToggleFilterButtons";

export default function SidebarAllRes() {
  const [isOverlayBack, setIsOverlayBack] = useState(false);
  const [listOverlayBack, setListOverlayBack] = useState([]);
  const [titleBack, setTitleBack] = useState("");
  const params = useParams();

  const { isLoading, data, error, fetchData } = useFetch2(
    vendorList,
    (data) => data.data.extra_sections.categories.data
  );

  useEffect(() => {
    const process = async () => {
      await fetchData(params.alias, params.catId);
    };
    process();
  }, [params]);

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
          list={data}
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
