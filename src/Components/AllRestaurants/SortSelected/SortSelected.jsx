import styles from "./SortSelected.module.css";

import { GoTriangleDown } from "react-icons/go";

export default function SortSelected() {
  return (
    <div className={styles["sort-selected"]}>
      <div>
        <input type="text" placeholder="به ترتیب پیش‌فرض" />
        <button>
          <GoTriangleDown fontSize="1rem" color="#666" />
        </button>
      </div>
    </div>
  );
}
