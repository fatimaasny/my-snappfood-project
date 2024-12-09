import styles from "./MenuOfRes.module.css";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { TbGift } from "react-icons/tb";
import Error from "../../../../Error/Error";

// api
import { detailsDynamic1 } from "../../../../../CallApi/CallApi";

// custom hook
import { useFetch2 } from "../../../../../hooks/useFetch";

export default function MenuOfRes() {
  const params = useParams();

  // const [isLoading, setIsLoading] = useState(false);
  // const [listTitles, setListTitles] = useState([]);
  // const [error, setError] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const res = await detailsDynamic1(params.code);

  //       const oldArray = res.data.menus;
  //       const finalArray = [];

  //       for (let i = 0; i < oldArray.length; i++) {
  //         finalArray.push(oldArray[i]["category"]);
  //       }
  //       setListTitles(finalArray);

  //       setError();
  //     } catch (error) {
  //       setError("خطایی رخ داده است، مجددا تلاش کنید.");
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, []);

  const { isLoading, data, error, fetchData, setData } = useFetch2(
    detailsDynamic1,
    (data) => {
      const oldArray = data.data.menus;
      const finalArray = [];

      for (let i = 0; i < oldArray.length; i++) {
        finalArray.push(oldArray[i]["category"]);
      }
      return finalArray;
    }
  );

  useEffect(() => {
    const process = async () => {
      await fetchData(params.code);
    };
    process();
  }, [params]);
  if (error) {
    return <Error title={error} />;
  }

  return (
    <>
      {!isLoading && (
        <div className={styles["menu-of-res-components"]}>
          {data.map((title, index) => (
            <div key={index}>{title}</div>
          ))}
        </div>
      )}
    </>
  );
}
