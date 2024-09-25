import styles from "./Main.module.css";
import { useEffect, useState } from "react";

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
  const [isLoading, setIsLoading] = useState(false);
  const [listFirst, setListFirst] = useState([]);
  const [titleFirst, setTitleFirst] = useState();
  const [listSecond, setListSecond] = useState([]);
  const [titleSecond, setTitleSecond] = useState();

  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://snappfood.ir/search/api/v1/desktop/new-home?lat=35.715&long=51.404&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&locale=fa"
        );
        if (!response.ok) {
          throw new Error("اطلاعات به درستی دریافت نشده است.");
        }
        const res = await response.json();
        setListFirst(res.data.result[3]["data"]["restaurants"]);
        setTitleFirst(res.data.result[3]["title"]);
        setListSecond(res.data.result[4]["data"]["restaurants"]);
        setTitleSecond(res.data.result[4]["title"]);
        setError();
      } catch (error) {
        setError("خطایی رخ داده است، لطفا مجددا تلاش کنید.");
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (error) {
    return <Error title={error} />;
  }

  return (
    <>
      <HeaderDown class="fix" />
      <HeaderUp />
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
