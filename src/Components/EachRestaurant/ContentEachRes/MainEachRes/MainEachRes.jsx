import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./MainEachRes.module.css";
import Error from "../../../Error/Error";
import OtherList from "./OtherList/OtherList";
import Loading from "../../../Loading/Loading";

// api
import { detailsDynamic1 } from "../../../../CallApi/CallApi";

// custom hooks
import { useFetch2 } from "../../../../hooks/useFetch";

export default function MainEachRes() {
  const params = useParams();

  const { isLoading, data, error, fetchData, setData } = useFetch2(
    detailsDynamic1,
    (data) => data.data.menus
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
    <div className={styles["main-each-res-component"]}>
      {!isLoading && data.length > 0 ? <OtherList list={data} /> : <Loading />}
    </div>
  );
}
