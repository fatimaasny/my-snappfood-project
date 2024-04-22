import styles from "./GiftBar.module.css";
export default function GiftBar(props) {
  return (
    <div className={styles["free-sending"]}>
      <img src={props.source} alt={props.alt} />
      <p>{props.title}</p>
    </div>
  );
}
