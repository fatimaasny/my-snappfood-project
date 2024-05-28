import styles from "./Button.module.css";
export default function Button(props) {
  return (
    <button
      className={`${styles.button} ${styles[props.class]}`}
      onClick={props.onClick}
    >
      {props.image && <img src={props.image} />}
      <span>{props.title}</span>
    </button>
  );
}
