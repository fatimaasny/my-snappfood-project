import styles from "./Button.module.css";
export default function Button(props) {
  return (
    <button
      // className={`${styles.button} ${styles[props.class]}`}
      className={`${styles.button} ${props.className}`}
      onClick={props.onClick}
    >
      {/* {props.image && <img src={props.image} />} */}
      {props.icon}
      <span>{props.title}</span>
    </button>
  );
}
