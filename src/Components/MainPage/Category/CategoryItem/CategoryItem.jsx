import styles from "./CategoryItem.module.css";

import Card from "../../../Card/Card";

import { LiaAngleLeftSolid } from "react-icons/lia";

export default function CategoryItem({ source, title }) {
  return (
    <Card className={styles.card}>
      <img src={source} className={styles.image} />
      <div className={styles.text}>
        <p>{title}</p>

        <LiaAngleLeftSolid color="#ff00b3" fontSize="0.9rem" />
      </div>
    </Card>
  );
}
