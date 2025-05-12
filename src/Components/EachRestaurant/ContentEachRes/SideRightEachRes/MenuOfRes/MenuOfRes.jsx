import styles from "./MenuOfRes.module.css";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { TbGift } from "react-icons/tb";
import Error from "../../../../Error/Error";

// api
import { detailsDynamic1 } from "../../../../../CallApi/CallApi";

// custom hook
import { useFetch2 } from "../../../../../hooks/useFetch";

// context
import { useContext } from "react";
import { ScrollContext } from "../../../../../store/ScrollTitlesContext";
import Loading from "../../../../Loading/Loading";

export default function MenuOfRes() {
  const params = useParams();

  const { isLoading, data, error, fetchData } = useFetch2(
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

  const { activeTitle, handleScrollTitles } = useContext(ScrollContext);

  if (error) {
    return <Error title={error} />;
  }

  return (
    <>
      {!isLoading && data.length > 0 ? (
        <div className={styles["menu-of-res-components"]}>
          {data.map((title, index) => (
            <button
              key={index}
              className={`${styles.title} ${
                activeTitle === title ? styles.activeTitle : ""
              }`}
              onClick={() => handleScrollTitles(title)}
            >
              {title}
            </button>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
