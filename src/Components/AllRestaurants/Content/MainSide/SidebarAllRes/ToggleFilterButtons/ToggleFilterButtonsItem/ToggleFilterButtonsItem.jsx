import styles from "./ToggleFilterButtonsItem.module.css";

export default function ToggleFilterButtonsItem({
  title,
  HandleToggleChecked,
}) {
  return (
    <div className={styles["toggle-filter"]}>
      <p>{title}</p>
      <div className={styles["toggle-btn"]}>
        <label className={styles.switch}>
          <input
            type="checkbox"
            // onClick={(e) => {
            //   HandleToggleChecked(e);
            // }}
          />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div>
    </div>
  );
}
