import styles from "./ToggleFilterButtonsItem.module.css";
export default function ToggleFilterButtonsItem({ title }) {
  return (
    <div className={styles["toggle-filter-buttons-item-component"]}>
      <p>{title}</p>
      <div className={styles["toggle-btn"]}>
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={styles["slider round"]}></span>
        </label>
      </div>
    </div>
  );
}
