import styles from "./MainEachRes.module.css";
import OtherList from "./OtherList/OtherList";

export default function MainEachRes({ endRef }) {
  return (
    <div className={styles["main-each-res-component"]}>
      <OtherList />
      <p ref={endRef}></p>
    </div>
  );
}
