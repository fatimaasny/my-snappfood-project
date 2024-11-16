import styles from "./OneCategoryItem.module.css";
import CardRounded from "../../../../../../CardRounded/CardRounded";

import { Link } from "react-router-dom";
export default function OneCategoryItem({
  source,
  title,
  id,
  alias,
  valueOfSub,
  catValue,
  params,
}) {
  return (
    <div className={styles["one-category-item"]}>
      <Link
        to={`/category/${id}/${alias}/${params.sorting}/${catValue}/${valueOfSub}/${params.filterPrice}`}
        className={styles.link}
      >
        <CardRounded>
          <img src={source} alt="" />
        </CardRounded>
        <p>{title}</p>
      </Link>
    </div>
  );
}
