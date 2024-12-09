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
  const params = useParams();
  const navigate = useNavigate();

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

  // TODO
  //  باید روی هر تاگل زد و سبز شد لینک بده به یک
  // api
  // میبینیم که رو هر تاگل میزنی نشون میده
  // توی
  //url
  //  و میشه همزمان چند تاگل رو بزنیم و همه رو نشون میده
  // توی
  // url
  // و روی هر کدوم زد و آف کرد دوباره برش گردونه و لینک بده به چیز دیگه ای

  const [filter, setFilter] = useState();
  const HandleToggleChecked = (e, value, index) => {
    if (e.target.checked) {
      setFilter({ ...filter, value });
    } else {
      setFilter({});
    }
    if (data.length === index) {
      navigate({
        pathname: `/category/${params.catId}/${params.alias}/${params.sorting}/${params.catValue}/${params.subValue}/${params.filterPrice}`,

        search: createSearchParams({ filter: filter }).toString(),
      });
    }
  };
  if (error) {
    return <Error title={error} />;
  }
  console.log("filter : ", filter);

  return (
    <>
      {data.length > 0 && !isLoading && (
        <div className={styles["toogle-filter-buttons-component"]}>
          {data.map((item, index) => (
            <ToggleFilterButtonsItem
              // ببین به چیا نیاز داری اینجا بفرستش که بعد بتونی به عنوان ورودی بدیش به تابع
              // مثل ایندکس و آیتم واسه فیلترش  و لیست واسه طولش
              key={index}
              title={item.title}
              value={item.value} // has-discount
              // list={data}
              HandleToggleChecked={HandleToggleChecked}
            />
          ))}
        </div>
      )}
    </>
  );
}
