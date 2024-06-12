import styles from "./CategoryItem.module.css";

import Card from "../../../Card/Card";

import { FaAngleLeft } from "react-icons/fa";

export default function CategoryItem({ source, title, alt }) {
  return (
    <Card className={styles.margin}>
      <div
        className={styles.item}
        style={{ background: `url(${source})`, backgroundSize: "cover" }}
      >
        <div className={styles.text}>
          <p>{title}</p>
          <button>
            <FaAngleLeft color="#ff00b3" fontSize="1rem" />
          </button>
        </div>
      </div>
    </Card>
  );
}
