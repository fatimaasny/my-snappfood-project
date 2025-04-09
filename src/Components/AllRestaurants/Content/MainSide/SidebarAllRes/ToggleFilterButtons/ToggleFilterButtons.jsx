import { useEffect, useState } from "react";
import { createSearchParams, useNavigate, useParams } from "react-router-dom";
import styles from "./ToggleFilterButtons.module.css";
import ToggleFilterButtonsItem from "./ToggleFilterButtonsItem/ToggleFilterButtonsItem";
import Error from "../../../../../Error/Error";

//api
import { vendorList } from "../../../../../../CallApi/CallApi";

// custom hooks
import { useFetch2 } from "../../../../../../hooks/useFetch";

export default function ToggleFilterButtons() {
  // const [filter, setFilter] = useState();
  const params = useParams();
  // const navigate = useNavigate();

  const { isLoading, data, error, fetchData, setData } = useFetch2(
    vendorList,
    (data) => {
      const allArray = data.data.extra_sections.filters.sections;
      for (let i = 0; i < allArray.length; i++) {
        if (allArray[i]["section_name_fa"] === "فیلتر") {
          return allArray[i]["data"];
        }
        if (i === allArray.length - 1) {
          return [];
        }
      }
    }
  );

  useEffect(() => {
    const process = async () => {
      await fetchData(params.alias, params.catId);
    };
    process();
  }, [params]);

  // تاگل ها
  // useEffect(() => {
  //   navigate({
  //     pathname: `/category/${params.catId}/${params.alias}/${params.sorting}/${params.catValue}/${params.subValue}/${params.filterPrice}`,
  //     search: createSearchParams({ filter: JSON.stringify(filter) }).toString(),
  //   });
  // }, [filter]);

  // // تاگل ها
  // // روش اول
  // const HandleToggleChecked = (e, value) => {
  //   setFilter((prevFilter) => {
  //     const updatedFilter = { ...prevFilter };
  //     if (e.currentTarget.checked) {
  //       updatedFilter[value] = value;
  //     } else {
  //       delete updatedFilter[value];
  //     }
  //     return updatedFilter;
  //   });

  //   // روش دوم
  //   // if (e.currentTarget.checked) {
  //   //   setFilter((filter) => ({ ...filter, [value]: value }));
  //   // } else {
  //   //   const nFilter = { ...filter };
  //   //   delete nFilter[value];
  //   //   setFilter(nFilter);
  //   // }
  // };
  if (error) {
    return <Error title={error} />;
  }
  // console.log("filter in toggle : ", filter);

  return (
    <>
      {data.length > 0 && !isLoading && (
        <div className={styles["toogle-filter-buttons-component"]}>
          {data.map((item, index) => (
            <ToggleFilterButtonsItem
              key={index}
              title={item.title}
              value={item.value} // has-discount
              // HandleToggleChecked={HandleToggleChecked}
            />
          ))}
        </div>
      )}
    </>
  );
}
