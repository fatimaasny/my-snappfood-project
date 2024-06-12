import styles from "./Comment.module.css";
import OrderName from "../OrderName/OrderName";

import { IoMdStar } from "react-icons/io";

function Comment(props) {
  return (
    <div className={styles.comments}>
      <div className={styles.right}>
        <h5>{props.name}</h5>
        <p>{props.date}</p>
        {props.starscore && (
          <button className={styles.starbtn}>
            <IoMdStar fontSize="0.9rem" color="#f8d527" />
            <span>{props.rate}</span>
          </button>
        )}
      </div>
      <div className={styles.left}>
        <p className={styles.description}>{props.description}</p>
        {props.extracomment && (
          <div className={styles.extra}>
            <p>نظر درباره ارسال:</p>
            <p>{props.extratext}</p>
          </div>
        )}
        <div className={styles.ordernames}>
          {props.listOrderName.map((item, index) => (
            <OrderName name={item} key={index} />
          ))}
        </div>
        {props.ressponse && (
          <div className={styles.ressponse}>
            <h5>پاسخ اسنپ‌فود</h5>
            <p>{props.ressponsetext}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Comment;
