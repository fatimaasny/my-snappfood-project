import Link from "../Link/Link";
import styles from "./ShowList.module.css";
export default function ShowList(props) {
  return (
    <div className={`${styles.showList} ${styles[props.class]}`}>
      {props.list.map((l) => (
        <Link>{l}</Link>
      ))}
    </div>
  );
}
