import styles from "./RestaurantItem.module.css";
import gift from "../../Images/RestaurantItem/gift.svg";
import expressPost from "../../Images/RestaurantItem/express.svg";
import userPost from "../../Images/RestaurantItem/userPost.svg";
import star from "../../Images/RestaurantItem/star.svg";
import timePost from "../../Images/RestaurantItem/time-post.svg";
import GiftBar from "../GiftBar/GiftBar";
import Card from "../../Components/Card/Card";

export default function RestaurantItem({
  backCoverUp,
  freeSendingP,
  discountP,
  centerImage,
  titleH,
  scorePFirst,
  scorePLast,
  typeFoodP,
  preRequestSpan,
  expressText,
  requestText,
  salerText,
  postPriceFirstS,
  postPriceLastS,
}) {
  return (
    <div className={styles.container}>
      <Card className={"shadow"}>
        <div className={styles.Ritem}>
          <div
            className={styles.up}
            style={{
              background: `url(${backCoverUp})`,
              backgroundSize: "cover",
            }}
          >
            {freeSendingP && (
              <div className={styles["free-sending"]}>
                <GiftBar source={gift} alt={"gift.svg"} title={freeSendingP} />
                {/* <img src={gift} alt="gift.svg" />
            <p>{freeSendingP}</p> */}
              </div>
            )}

            {discountP && (
              <div className={styles.discount}>
                <p>{discountP}</p>
              </div>
            )}

            <div className={styles["center-image"]}>
              <img src={centerImage} alt="image.jpg" />
            </div>
          </div>
          <div className={styles.down}>
            <h4>{titleH}</h4>
            <div className={styles.score}>
              <img src={star} alt="start.svg" />
              {scorePFirst && <p>{scorePFirst}</p>}
              {scorePLast && <p>{scorePLast}</p>}
            </div>
            {typeFoodP && <p className={styles["types-food"]}>{typeFoodP}</p>}

            {requestText && (
              <div className={styles["pre-request"]}>
                <img src={timePost} alt="time-post.svg" />
                <span>{preRequestSpan}</span>
              </div>
            )}

            {expressText && (
              <div class={styles["post-price"]}>
                <img src={expressPost} alt="postman.svg" />
                <span>{postPriceFirstS}</span>
                <span>{postPriceLastS}</span>
              </div>
            )}
            {salerText && (
              <div class={styles["post-price"]}>
                <img src={userPost} alt="postman.svg" />
                <span>{postPriceFirstS}</span>
                <span>{postPriceLastS}</span>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
