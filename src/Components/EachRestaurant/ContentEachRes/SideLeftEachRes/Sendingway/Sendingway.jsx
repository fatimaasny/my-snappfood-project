import styles from "./Sendingway.module.css";

function Sendingway(props) {
  return (
    <div className={`${styles.sending} ${props.className}`}>
      <button className={styles.btn1}>{props.firstIcon}</button>
      <p className={styles.title}>{props.title}</p>
      {props.secondIcon && (
        <button
          className={styles.btn2}
          onClick={props.showMultiSendingWayHandler}
        >
          {props.secondIcon}
        </button>
      )}
    </div>
  );
}

export default Sendingway;
