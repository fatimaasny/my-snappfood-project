import "./RestaurantItem.css";
import gift from "../../../../Images/Main/Restaurant/RestaurantItem/gift.svg";
import expressPost from "../../../../Images/Main/Restaurant/RestaurantItem/express.svg";
import userPost from "../../../../Images/Main/Restaurant/RestaurantItem/userPost.svg";
import star from "../../../../Images/Main/Restaurant/RestaurantItem/star.svg";
import timePost from "../../../../Images/Main/Restaurant/RestaurantItem/time-post.svg";

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
    <div className="Ritem">
      <div
        className="up"
        style={{ background: `url(${backCoverUp})`, backgroundSize: "cover" }}
      >
        {freeSendingP && (
          <div className="free-sending">
            <img src={gift} alt="gift.svg" />
            <p>{freeSendingP}</p>
          </div>
        )}

        {discountP && (
          <div className="discount">
            <p>{discountP}</p>
          </div>
        )}

        <div className="center-image">
          <img src={centerImage} alt="image.jpg" />
        </div>
      </div>
      <div className="down">
        <h4>{titleH}</h4>
        <div className="score">
          <img src={star} alt="start.svg" />
          {scorePFirst && <p>{scorePFirst}</p>}
          {scorePLast && <p>{scorePLast}</p>}
        </div>
        {typeFoodP && <p className="types-food">{typeFoodP}</p>}

        {requestText && (
          <div className="pre-request">
            <img src={timePost} alt="time-post.svg" />
            <span>{preRequestSpan}</span>
          </div>
        )}

        {expressText && (
          <div class="post-price">
            <img src={expressPost} alt="postman.svg" />
            <span>{postPriceFirstS}</span>
            <span>{postPriceLastS}</span>
          </div>
        )}
        {salerText && (
          <div class="post-price">
            <img src={userPost} alt="postman.svg" />
            <span>{postPriceFirstS}</span>
            <span>{postPriceLastS}</span>
          </div>
        )}
      </div>
    </div>
  );
}
