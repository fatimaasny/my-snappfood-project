import styles from "./OneCategoryItem.module.css";
export default function OneCategoryItem({ source, title }) {
  return (
    <div className={styles["one-category-item"]}>
      <img src={source} alt="" />
      <p>{title}</p>
    </div>
  );
}
