import styles from "./RestaurantItem.module.css";

import Card from "../../Components/Card/Card";
import GiftBar from "../GiftBar/GiftBar";

import { AiFillTags } from "react-icons/ai";
import { BsPersonUp } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";

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
      {/* این رو زدم ون وقتی 0 بود مقدارش توی صفحه نشونش میداد props.discountP
ولی اینو زدم تا این مشکل پیش نیادش  !!props.discountP
*/}
      {!!props.discountP && (
        <div className={styles.discount}>
          <p>{props.discountP}%</p>
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
        {props.scorePLast > 0 && <p>( {props.scorePLast} )</p>}
      </div>
      {props.typeFoodP && (
        <p className={styles["types-food"]}>{props.typeFoodP}</p>
      )}

      <div
        className={`${styles["post-price"]} ${!props.typeFoodP && styles.half}`}
      >
        <BsPersonUp color="#666" fontSize="1.4rem" />
        <p>پیک فروشنده</p>

        {props.postPriceLastS > 0 ? (
          <p>
            <span>{props.postPriceLastS}</span>
            تومان
          </p>
        ) : (
          <span>رایگان</span>
        )}
      </div>
    </div>
  );
}

export default function RestaurantItem(props) {
  return (
    <Card className={`${styles.card} ${styles[props.class]}`}>
      <UpContent
        backCoverUp={props.backCoverUp}
        freeSendingP={props.freeSendingP}
        discountP={props.discountP}
        centerImage={props.centerImage}
      />
      <DownContent
        titleH={props.titleH}
        scorePFirst={props.scorePFirst}
        scorePLast={props.scorePLast}
        typeFoodP={props.typeFoodP}
        postPriceLastS={props.postPriceLastS}
      />
    </Card>
  );
}
