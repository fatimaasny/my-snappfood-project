import "./Main.css";
import Category from "./Category/Category";
import Restaurant from "./Reasaurant/Restaurant";
export default function Main() {
  return (
    <main>
      <Category title={"دسته بندی ها"} />
      <Restaurant title={"تازه ها در اسنپ‌فود"} index={1} />
      <Restaurant title={"برترین ها"} index={2} />
    </main>
  );
}
