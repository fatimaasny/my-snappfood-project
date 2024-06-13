import styles from "./AllCategoryItem.module.css";

import { FaAngleLeft } from "react-icons/fa6";

export default function AllCategoryItem({ source, title, icon }) {
  return (
    <div className={styles["all-category-item-component"]}>
      <div className={styles["img-title"]}>
        <img src={source} alt="" />
        <p>{title}</p>
      </div>
      {icon && (
        <button>
          <FaAngleLeft fontSize="1rem" color="#eee" />
        </button>
      )}
    </div>
  );
}
