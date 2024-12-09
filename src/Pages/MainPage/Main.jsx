import styles from "./Main.module.css";
import { useEffect, useState } from "react";

// api
import { titlesInMain } from "../../CallApi/CallApi";

// costum hooks
import { useFetch } from "../../hooks/useFetch";

import HeaderDown from "../../Components/Header/HeaderDown/HeaderDown";
import Category from "../../Components/MainPage/Category/Category";
import Restaurant from "../../Components/MainPage/Reasaurant/Restaurant";
import DownloadApp from "../../Components/MainPage/DownloadApp/DownloadApp";
import OnlineRegister from "../../Components/MainPage/onlineRegister/OnlineRegister";
import HeaderUp from "../../Components/Header/HeaderUp/HeaderUp";
import Footer from "../../Components/Footer/Footer";
import Error from "../../Components/Error/Error";
import Loading from "../../Components/Loading/Loading";

export default function Main() {
  // const [listFirst, setListFirst] = useState([]);
  // const [titleFirst, setTitleFirst] = useState();
  // const [listSecond, setListSecond] = useState([]);
  // const [titleSecond, setTitleSecond] = useState();

  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const res = await titlesInMain();
  //       setListFirst(res.data.result[3]["data"]["restaurants"]);
  //       setTitleFirst(res.data.result[3]["title"]);
  //       setListSecond(res.data.result[4]["data"]["restaurants"]);
  //       setTitleSecond(res.data.result[4]["title"]);
  //       setError();
  //     } catch (error) {
  //       setError("خطایی رخ داده است، لطفا مجددا تلاش کنید1.");
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, []);

  const {
    isLoading,
    data: listFirst,
    error,
  } = useFetch(
    titlesInMain,
    (listFirst) => listFirst.data.result[3]["data"]["restaurants"]
  );

  const { data: titleFirst } = useFetch(
    titlesInMain,
    (titleFirst) => titleFirst.data.result[3]["title"]
  );

  const { data: listSecond } = useFetch(
    titlesInMain,
    (listSecond) => listSecond.data.result[4]["data"]["restaurants"]
  );

  const { data: titleSecond } = useFetch(
    titlesInMain,
    (titleSecond) => titleSecond.data.result[4]["title"]
  );

  if (error) {
    return <Error title={error} />;
  }

  return (
    <>
      <HeaderUp />
      <HeaderDown class="fix" />
      <main className={styles["main-MainPage"]}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Category title={"دسته بندی ها"} />
            <Restaurant title={titleFirst} list={listFirst} />
            <Restaurant title={titleSecond} list={listSecond} />
            <DownloadApp />
            <OnlineRegister />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
