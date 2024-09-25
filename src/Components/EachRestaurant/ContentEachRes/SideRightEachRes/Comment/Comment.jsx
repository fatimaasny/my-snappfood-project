import styles from "./Comment.module.css";
import OrderName from "../OrderName/OrderName";

import { IoMdStar } from "react-icons/io";

function RightContent(props) {
  return (
    <div className={styles.right}>
      <h5>{props.sender}</h5>
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
      <p className={styles.description}>{props.commentText}</p>
      {props.deliveryComment && (
        <div className={styles.extra}>
          <p>نظر درباره ارسال:</p>
          <p>{props.deliveryComment}</p>
        </div>
      )}
      <div className={styles.ordernames}>
        {props.foods.map((item, index) => (
          <OrderName name={item.title} key={index} />
        ))}
      </div>
      {props.replies.length > 0 && (
        <>
          {props.replies.map((item, index) => (
            <div className={styles.ressponse} key={index}>
              <h5>
                {item.source === "VENDOR"
                  ? "پاسخ مدیر رستوران"
                  : "پاسخ اسنپ‌فود"}
              </h5>
              <p>{item.commentText}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
function Comment(props) {
  return (
    <div className={styles.comments}>
      <RightContent
        sender={props.sender}
        date={props.date}
        starscore={props.starscore}
        rate={props.rate}
      />
      <LeftContent
        commentText={props.commentText}
        deliveryComment={props.deliveryComment}
        listOrderName={props.listOrderName}
        ressponse={props.ressponse}
        ressponsetext={props.ressponsetext}
      />
    </div>
  );
}

export default Comment;
