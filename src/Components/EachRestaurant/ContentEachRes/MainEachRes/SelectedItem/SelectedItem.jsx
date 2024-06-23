import styles from "./SelectedItem.module.css";
import Discount from "../../../../Discount/Discount";

import { TbTrash } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
// import { FaMinus } from "react-icons/fa6";

function ContentRight(props) {
  return (
    <div className={styles.right}>
      {props.discount ? (
        <div className={styles.discount}>
          <Discount discount={props.discount} className={styles.bolder} />
          <p className={styles.allprices}>
            <span className={styles.oldprice}>{props.oldPrice}</span>
            <p className={styles.price}>
              <span> {props.price}</span>
              <span>تومان</span>
            </p>
          </p>
        </div>
      ) : (
        <p className={styles.price}>
          <span> {props.price}</span>
          <span>تومان</span>
        </p>
      )}
    </div>
  );
}
function ContentLeft(props) {
  return (
    <div className={styles.left}>
      {/* <button className={styles.btnplus}>
    <FaMinus color="#ff00b3" />
  </button> */}
      <button className={styles.btntrash}>
        <TbTrash color="#aaa" fontSize="1rem" />
      </button>
      <span>{props.count}</span>
      <button className={styles.btnplus}>
        <FaPlus color="#ff00b3" />
      </button>
    </div>
  );
}
function SelectedItem(props) {
  return (
    <div className={styles["selected-item"]}>
      <ContentRight
        discount={props.discount}
        allprices={props.allprices}
        oldPrice={props.oldPrice}
        price={props.oldPrice}
      />
      <ContentLeft count={props.count} />
    </div>
  );
}

export default SelectedItem;
