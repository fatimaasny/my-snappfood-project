import Card from "../../../../Card/Card";
import styles from "./OverlaySort.module.css";

const list = [
  "بالاترین امتیاز",
  "نزدیک‌ترین",
  "جدیدترین",
  "ارزان‌ترین",
  "عملکردکلی",
  "گران‌ترین",
];

function OverlaySort() {
  return (
    <Card className={styles["overlay-sort"]}>
      <ul className={styles.list}>
        {list.map((i, index) => (
          <li>
            <p>{i}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default OverlaySort;
