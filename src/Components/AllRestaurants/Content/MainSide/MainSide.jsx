import styles from "./MainSide.module.css";
import SidebarAllRes from "./SidebarAllRes/SidebarAllRes";
import MainAllRes from "./MainAllRes/MainAllRes";
export default function MainSide() {
  return (
    <div className={styles.MainSideCompAllRes}>
      <SidebarAllRes />
      <MainAllRes />
    </div>
  );
}
