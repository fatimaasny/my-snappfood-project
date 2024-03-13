import "./Main.css";
import Category from "./Category/Category";
import Restaurant from "./Reasaurant/Restaurant";
import DownloadApp from "./DownloadApp/DownloadApp";
import OnlineRegister from "./onlineRegister/OnlineRegister";
export default function Main() {
  return (
    <main>
      <Category title={"دسته بندی ها"} />
      <Restaurant title={"تازه ها در اسنپ‌فود"} index={1} />
      <Restaurant title={"برترین ها"} index={2} />
      <DownloadApp />
      <OnlineRegister />
    </main>
  );
}
