import styles from "./GiftBar.module.css";

export default function GiftBar(props) {
  return (
    <div className={styles["free-sending"]}>
      {props.icon}
      <p>{props.title}</p>
    </div>
  );
}
