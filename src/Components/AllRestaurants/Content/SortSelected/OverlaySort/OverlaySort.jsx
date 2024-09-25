import Card from "../../../../Card/Card";
import styles from "./OverlaySort.module.css";

function OverlaySort({ isLoading, list }) {
  return (
    <Card className={styles["overlay-sort"]}>
      {!isLoading && (
        <ul className={styles.list}>
          {list.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ul>
      )}
    </Card>
  );
}

export default OverlaySort;
