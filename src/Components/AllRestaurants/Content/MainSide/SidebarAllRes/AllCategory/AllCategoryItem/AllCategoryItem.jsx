// import { useEffect, useState } from "react";
import styles from "./AllCategoryItem.module.css";

import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AllCategoryItem({
  source,
  title,
  sub,
  alias,
  id,
  catValue,
  sorting,
  filterPrice,
  handleListOverlayBack,
  handleShowOverlayBack,
  handleTitleBack,
}) {
  return (
    <div className={styles["all-category-item-component"]}>
      {sub !== "nothing" ? (
        <Link
          to={`/category/${id}/${alias}/${sorting}/${catValue}/null/${filterPrice}`}
          className={styles.link}
          onClick={() => {
            handleListOverlayBack(sub);
            handleShowOverlayBack();
            handleTitleBack(title);
          }}
        >
          <div className={styles["img-title"]}>
            {source && <img src={source} alt="" />}
            <p>{title}</p>
          </div>

          <button>
            <FaAngleLeft fontSize="1rem" color="#eee" />
          </button>
        </Link>
      ) : (
        <Link
          to={`/category/${id}/${alias}/${sorting}/${catValue}/null/${filterPrice}`}
          className={styles.link}
        >
          <div className={styles["img-title"]}>
            {source && <img src={source} alt="" />}
            <p>{title}</p>
          </div>
        </Link>
      )}
    </div>
  );
}
