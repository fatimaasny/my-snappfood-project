import styles from "./ShowMore.module.css";
import { FaAngleLeft } from "react-icons/fa6";

export default function ShowMore(props) {
  return (
    <div className={`${styles["show-more"]} ${styles[props.class]}`}>
      <p className={styles.text}>مشاهده همه</p>
      {props.number && <span>({props.number})</span>}
      <FaAngleLeft fontSize={props.class ? "1.4rem" : "1rem"} color="#26d354" />
    </div>
  );
}
