import styles from "./Main.module.css";
import HeaderDown from "../../Components/Header/HeaderDown/HeaderDown";
import Category from "../../Components/MainPage/Category/Category";
import Restaurant from "../../Components/MainPage/Reasaurant/Restaurant";
import DownloadApp from "../../Components/MainPage/DownloadApp/DownloadApp";
import OnlineRegister from "../../Components/MainPage/onlineRegister/OnlineRegister";
export default function Main() {
  return (
    <>
      <HeaderDown class="fix" />
      <main className={styles["main-MainPage"]}>
        <Category title={"دسته بندی ها"} />
        <Restaurant title={"تازه ها در اسنپ‌فود"} index={1} />
        <Restaurant title={"برترین ها"} index={2} />
        <DownloadApp />
        <OnlineRegister />
      </main>
    </>
  );
}
