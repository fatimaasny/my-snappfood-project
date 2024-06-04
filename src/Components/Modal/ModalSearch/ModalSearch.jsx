import styles from "./ModalSearch.module.css";
import Card from "../../Card/Card";

function ModalSearch(props) {
  return (
    <>
      <div className={styles.backdrop} onClick={props.hideModalSearchHandler} />
      <Card className={styles["modal-serach"]}>
        <p>عبارت مورد نظر خود را وارد کنید</p>
      </Card>
    </>
  );
}

export default ModalSearch;
