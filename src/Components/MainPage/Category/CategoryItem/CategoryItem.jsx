import styles from "./CategoryItem.module.css";
import angelLeft from "../../../../Images/public/angelleft.svg";
import Card from "../../../Card/Card";
export default function CategoryItem({ source, title, alt }) {
  return (
    <Card className={styles.margin}>
      <div
        className={styles.item}
        style={{ background: `url(${source})`, backgroundSize: "cover" }}
      >
        <div>
          <p>{title}</p>
          <img src={angelLeft} alt="angelLeft.svg" />
        </div>
      </div>
    </Card>
  );
}
