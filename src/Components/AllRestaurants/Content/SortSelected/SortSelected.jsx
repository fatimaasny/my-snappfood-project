import { useState } from "react";
import styles from "./SortSelected.module.css";

import { GoTriangleDown } from "react-icons/go";
import OverlaySort from "./OverlaySort/OverlaySort";

export default function SortSelected() {
  const [isOverlaySort, setIsOverlaySort] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");
  const handleSortOverlay = () => {
    setIsOverlaySort((isOverlaySort) => !isOverlaySort);
  };
  const handleSelectedSort = (value) => {
    setSelectedSort(value);
  };
  return (
    <div className={styles["sort-selected"]}>
      <div onClick={handleSortOverlay}>
        <input type="text" placeholder="به ترتیب پیش‌فرض" />
        <button>
          <GoTriangleDown fontSize="1rem" color="#666" />
        </button>
      </div>
      {isOverlaySort && <OverlaySort />}
    </div>
  );
}
