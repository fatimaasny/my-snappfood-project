import styles from "./Details.module.css";

function Details(props) {
  return (
    <div className={styles.details}>
      <button>{props.icon}</button>
      <p className={styles.title}>{props.title}</p>
      <p className={styles.text}>{props.text}</p>
    </div>
  );
}

export default Details;
