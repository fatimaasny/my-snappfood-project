import styles from "./OneCategory.module.css";

import { FaAngleRight } from "react-icons/fa6";

import OneCategoryItem from "./OneCategoryItem/OneCategoryItem";

import { Link } from "react-router-dom";

export default function OneCategory({
  list,
  title,
  handleHideOverlayBack,
  params,
}) {
  return (
    <div className={styles["onecategory-component"]}>
      <Link
        to={`/category/${params.catId}/${params.alias}/${params.sorting}/${params.catValue}/null/${params.filterPrice}`}
      >
        <div className={styles.back} onClick={handleHideOverlayBack}>
          <button>
            <FaAngleRight color="#444" fontSize="1rem" />
          </button>
          <p>بازگشت</p>
        </div>
      </Link>

      <h4>همه {title} ها</h4>
      <div className={styles["list-of-one-category"]}>
        {list.map((item, index) => (
          <OneCategoryItem
            key={index}
            source={item.image}
            title={item.title}
            id={params.catId}
            alias={params.alias}
            params={params}
            valueOfSub={item.value}
            catValue={params.catValue}
          />
        ))}
      </div>
    </div>
  );
}
