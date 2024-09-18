import styles from "./Main.module.css";
import { useEffect, useState } from "react";

import HeaderDown from "../../Components/Header/HeaderDown/HeaderDown";
import Category from "../../Components/MainPage/Category/Category";
import Restaurant from "../../Components/MainPage/Reasaurant/Restaurant";
import DownloadApp from "../../Components/MainPage/DownloadApp/DownloadApp";
import OnlineRegister from "../../Components/MainPage/onlineRegister/OnlineRegister";
import HeaderUp from "../../Components/Header/HeaderUp/HeaderUp";
import Footer from "../../Components/Footer/Footer";
export default function Main() {
  const [listTazeha, setListTazeha] = useState([]);
  const [listFaghatdarSnapp, setListFaghatdarSnapp] = useState([]);

  useEffect(() => {
    fetch(
      "https://snappfood.ir/search/api/v1/desktop/new-home?lat=35.715&long=51.404&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&locale=fa"
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setListTazeha(res.data.result[3]["data"]["restaurants"]);
        setListFaghatdarSnapp(res.data.result[9]["data"]["restaurants"]);
      });
  }, []);
  return (
    <>
      <HeaderDown class="fix" />
      <HeaderUp />
      <main className={styles["main-MainPage"]}>
        <Category title={"دسته بندی ها"} />
        <Restaurant title={"تازه ها در اسنپ‌فود"} list={listTazeha} />
        <Restaurant title={"فقط در اسنپ فود"} list={listFaghatdarSnapp} />
        <DownloadApp />
        <OnlineRegister />
      </main>
      <Footer />
    </>
  );
}
