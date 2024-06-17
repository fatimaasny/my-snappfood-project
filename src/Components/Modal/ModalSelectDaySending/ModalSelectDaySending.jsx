import styles from "./ModalSelectDaySending.module.css";

import Card from "../../Card/Card";
function ModalSelectDaySending(props) {
  return (
    <>
      <div
        className={styles.backdrop}
        onClick={props.hideModalSelectDaySending}
      />
      <Card className={styles["select-day"]}>
        <p onClick={props.hideModalSelectDaySending}>امروز</p>
        <p onClick={props.hideModalSelectDaySending}>فردا</p>
      </Card>
    </>
  );
}

export default ModalSelectDaySending;
