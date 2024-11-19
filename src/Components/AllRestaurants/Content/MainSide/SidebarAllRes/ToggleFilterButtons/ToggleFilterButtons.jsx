import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ToggleFilterButtons.module.css";
import ToggleFilterButtonsItem from "./ToggleFilterButtonsItem/ToggleFilterButtonsItem";
import Error from "../../../../../Error/Error";

//api
import { vendorList } from "../../../../../../CallApi/CallApi";

// custom hooks
import { useFetch2 } from "../../../../../../hooks/useFetch";

export default function ToggleFilterButtons() {
  const params = useParams();

  // const [isLoading, setIsLoading] = useState(false);
  // const [list, setList] = useState([]);
  // const [error, setError] = useState();

  // useEffect(() => {
  //   const fetchFilter = async () => {
  //     setIsLoading(true);
  //     try {
  //       const res = await vendorList(params.alias, params.catId);
  //       const allArray = res.data.extra_sections.filters.sections;
  //       for (let i = 0; i < allArray.length; i++) {
  //         if (allArray[i]["section_name_fa"] === "فیلتر") {
  //           setList(allArray[i]["data"]);
  //           return;
  //         } else {
  //           setList([]);
  //         }
  //       }
  //       setError();
  //     } catch (err) {
  //       setError("خطایی رخ داده است، بعدا مجددا تلاش کنید.");
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchFilter();
  // }, [params]);

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

  // const [filter, setFilter] = useState({});
  // const HandleToggleChecked = (e, item, index) => {
  //   // TODO
  //   // فکرکن ببین به چه روشی باید دست پیدا کنی به ورودی های مورد نیازت
  //   console.log("sth");
  // };
  if (error) {
    return <Error title={error} />;
  }

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
              list={data}
              // HandleToggleChecked={HandleToggleChecked}
            />
          ))}
        </div>
      )}
    </>
  );
}
