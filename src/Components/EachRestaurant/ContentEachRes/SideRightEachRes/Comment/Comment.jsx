import styles from "./Comment.module.css";
import OrderName from "../OrderName/OrderName";

import { IoMdStar } from "react-icons/io";

function RightContent(props) {
  return (
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
  );
}
function LeftContent(props) {
  return (
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
  );
}
function Comment(props) {
  return (
    <div className={styles.comments}>
      <RightContent
        name={props.name}
        date={props.date}
        starscore={props.starscore}
        rate={props.rate}
      />
      <LeftContent
        description={props.description}
        extracomment={props.extracomment}
        extratext={props.extratext}
        listOrderName={props.listOrderName}
        ressponse={props.ressponse}
        ressponsetext={props.ressponsetext}
      />
    </div>
  );
}

export default Comment;
