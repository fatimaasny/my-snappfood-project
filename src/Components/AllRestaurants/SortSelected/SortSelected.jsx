import styles from "./SortSelected.module.css";

import { FaAngleDown } from "react-icons/fa6";

export default function SortSelected() {
  return (
    <div className={styles["sort-selected"]}>
      <div>
        <input type="text" placeholder="به ترتیب پیش‌فرض" />
        <button>
          <FaAngleDown fontSize="1rem" color="#444" />
        </button>
      </div>
    </div>
  );
}
