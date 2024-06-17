import styles from "./ModalSelectTimeSending.module.css";

import Card from "../../Card/Card";
import { FaPlusMinus } from "react-icons/fa6";

function ModalSelectTimeSending(props) {
  return (
    <>
      <div
        className={styles.backdrop}
        onClick={props.hideModalSelectTimeSending}
      />
      <Card className={styles["select-time"]}>
        <p onClick={props.hideModalSelectTimeSending}>
          12:00
          <span>
            <FaPlusMinus color="#444" fontSize="0.6rem" />
          </span>
          15 دقیقه
        </p>
        <p onClick={props.hideModalSelectTimeSending}>
          12:30
          <span>
            <FaPlusMinus color="#444" fontSize="0.6rem" />
          </span>
          15 دقیقه
        </p>
        <p onClick={props.hideModalSelectTimeSending}>
          13:00
          <span>
            <FaPlusMinus color="#444" fontSize="0.6rem" />
          </span>
          15 دقیقه
        </p>
        <p>
          13:30
          <span>
            <FaPlusMinus color="#444" fontSize="0.6rem" />
          </span>
          15 دقیقه
        </p>
      </Card>
    </>
  );
}

export default ModalSelectTimeSending;
