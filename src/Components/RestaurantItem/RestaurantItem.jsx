import styles from "./RestaurantItem.module.css";

import Card from "../../Components/Card/Card";
import GiftBar from "../GiftBar/GiftBar";

import { AiFillTags } from "react-icons/ai";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { BsPersonUp } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";
import { IoMdTime } from "react-icons/io";

function UpContent(props) {
  return (
    <div
      className={styles.up}
      style={{
        background: `url(${props.backCoverUp})`,
        backgroundSize: "cover",
      }}
    >
      {props.freeSendingP && (
        <div className={styles["free-sending"]}>
          <GiftBar
            icon={<AiFillTags color="#26d354" fontSize="1rem" />}
            alt={"gift.svg"}
            title={props.freeSendingP}
          />
        </div>
      )}

      {props.discountP && (
        <div className={styles.discount}>
          <p>{props.discountP}</p>
        </div>
      )}

      <div className={styles["center-image"]}>
        <img src={props.centerImage} alt="image.jpg" />
      </div>
    </div>
  );
}
function DownContent(props) {
  return (
    <div className={styles.down}>
      <h4>{props.titleH}</h4>
      <div className={styles.score}>
        <IoMdStar fontSize="1rem" color="#f8d527" />
        {props.scorePFirst && <p>{props.scorePFirst}</p>}
        {props.scorePLast && <p>{props.scorePLast}</p>}
      </div>
      {props.typeFoodP && (
        <p className={styles["types-food"]}>{props.typeFoodP}</p>
      )}

      {props.requestText && (
        <div
          className={`${styles["pre-request"]} ${
            props.typeFoodP ? styles.quarter : styles.half
          }`}
        >
          <IoMdTime color="#666" fontSize="1.4rem" />
          <span>{props.preRequestSpan}</span>
        </div>
      )}

      {props.expressText && (
        <div className={styles["post-price"]}>
          <GiFullMotorcycleHelmet color="#666" fontSize="1.4rem" />
          <span>{props.postPriceFirstS}</span>
          <span>{props.postPriceLastS}</span>
          <span>تومان</span>
        </div>
      )}
      {props.salerText && (
        <div className={styles["post-price"]}>
          <BsPersonUp color="#666" fontSize="1.4rem" />
          <span>{props.postPriceFirstS}</span>
          <span>{props.postPriceLastS}</span>
          <span>تومان</span>
        </div>
      )}
    </div>
  );
}

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
    <Card className={styles.card}>
      <UpContent
        freeSendingP={freeSendingP}
        discountP={discountP}
        centerImage={centerImage}
        backCoverUp={backCoverUp}
      />
      <DownContent
        titleH={titleH}
        scorePFirst={scorePFirst}
        scorePLast={scorePLast}
        typeFoodP={typeFoodP}
        preRequestSpan={preRequestSpan}
        expressText={expressText}
        requestText={requestText}
        salerText={salerText}
        postPriceFirstS={postPriceFirstS}
        postPriceLastS={postPriceLastS}
      />
    </Card>
  );
}
