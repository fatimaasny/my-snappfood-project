import SortSelected from "../SortSelected/SortSelected";
import MainSide from "./MainSide/MainSide";
import styles from "./Content.module.css";
export default function Content() {
  return (
    <div className={styles.ContentComponent}>
      <SortSelected />
      <MainSide />
    </div>
  );
}
