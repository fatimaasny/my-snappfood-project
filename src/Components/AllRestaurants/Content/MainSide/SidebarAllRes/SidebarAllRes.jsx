import styles from "./SidebarAllRes.module.css";
import AllCategory from "./AllCategory/AllCategory";
import OneCategory from "./OneCategory/OneCategory";
import FilterPrice from "./FilterPrice/FilterPrice";
import ToggleFilterButtons from "./ToggleFilterButtons/ToggleFilterButtons";
export default function SidebarAllRes() {
  return (
    <aside className={styles["sidebar-SidebarAllRes"]}>
      <AllCategory />
      {/* <OneCategory title={"همه ایرانی‌ها"} /> */}
      <FilterPrice />
      <ToggleFilterButtons />
    </aside>
  );
}
