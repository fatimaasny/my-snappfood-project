import styles from "./CardRounded.module.css";

export default function CardRounded(props) {
  return <div className={styles["half-rounded"]}>{props.children}</div>;
}
