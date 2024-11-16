import styles from "./OverlaySort.module.css";
import Card from "../../../../Card/Card";
import { Link } from "react-router-dom";

function OverlaySort({ isLoading, list, params, handleSelectedSort }) {
  console.log("catValue: ", params.catValue, " subValue : ", params.subValue);
  return (
    <Card className={styles["overlay-sort"]}>
      {!isLoading && (
        <ul className={styles.list}>
          {list.map((i, index) => (
            <Link
              to={`/category/${params.catId}/${params.alias}/${i.value}/${params.catValue}/${params.subValue}/${params.filterPrice}`}
            >
              <li key={index} onClick={() => handleSelectedSort(i.title)}>
                {i.title}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </Card>
  );
}

export default OverlaySort;
