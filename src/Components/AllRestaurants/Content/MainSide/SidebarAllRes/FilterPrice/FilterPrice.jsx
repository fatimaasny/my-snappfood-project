import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./FilterPrice.module.css";
import Error from "../../../../../Error/Error";

// api
import { vendorList } from "../../../../../../CallApi/CallApi";

// custom hooks
import { useFetch2 } from "../../../../../../hooks/useFetch";

import { Link } from "react-router-dom";

export default function FilterPrice() {
  const [filterPrice, setFilterPrice] = useState("همه");
  const params = useParams();

  // const [isLoading, setIsLoading] = useState(false);
  // const [listPricing, setListPricing] = useState([]);
  // const [error, setError] = useState();

  // useEffect(() => {
  //   const fetchPricing = async () => {
  //     setIsLoading(true);
  //     try {
  //       const res = await vendorList(params.alias, params.catId);
  //       const allArray = res.data.extra_sections.filters.sections;
  //       for (let i = 0; i < allArray.length; i++) {
  //         if (allArray[i]["section_name_fa"] === "کلاس قیمتی") {
  //           setListPricing(allArray[i]["data"]);
  //           return;
  //         } else {
  //           setListPricing([]);
  //         }
  //       }
  //       setError();
  //     } catch (err) {
  //       setError(
  //         "اطلاعات به درستی از سرور دریافت نشده است، بعدا مجددا تلاش کنید."
  //       );
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchPricing();
  // }, [params]);

  const { isLoading, data, error, fetchData, setData } = useFetch2(
    vendorList,
    (data) => {
      const allArray = data.data.extra_sections.filters.sections;

      for (let i = 0; i < allArray.length; i++) {
        if (allArray[i]["section_name_fa"] === "کلاس قیمتی") {
          return allArray[i]["data"];
        }
        if (i === allArray.length - 1) {
          return [];
        }
      } // end for
    }
  );

  useEffect(() => {
    const process = async () => {
      await fetchData(params.alias, params.catId);
    };
    process();
  }, [params]);

  const filterHandler = (value) => {
    setFilterPrice(value);
  };

  if (error) {
    return <Error title={error} />;
  }

  return (
    <>
      {data.length > 0 && !isLoading && (
        <div className={styles["filter-price-component"]}>
          <p>کلاس قیمتی</p>
          <div className={styles["list"]}>
            <Link
              to={`/category/${params.catId}/${params.alias}/${params.sorting}/${params.catValue}/${params.subValue}/null`}
            >
              <button
                className={`${styles.item} ${
                  filterPrice === "همه" ? styles.filter : ""
                }`}
                onClick={() => filterHandler("همه")}
              >
                همه
              </button>
            </Link>

            {data.map((item, index) => (
              <Link
                to={`/category/${params.catId}/${params.alias}/${params.sorting}/${params.catValue}/${params.subValue}/${item.value}`}
              >
                <button
                  key={index}
                  className={`${styles.item} ${
                    filterPrice === item.title ? styles.filter : ""
                  }`}
                  onClick={() => filterHandler(item.title)}
                >
                  {item.title}
                </button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
