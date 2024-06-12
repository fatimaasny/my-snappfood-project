import styles from "./RestaurantItem.module.css";

import Card from "../../Components/Card/Card";
import GiftBar from "../GiftBar/GiftBar";

import { AiFillTags } from "react-icons/ai";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { BsPersonUp } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";
import { IoMdTime } from "react-icons/io";

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
      <Card className={styles.shadow}>
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
                <GiftBar
                  icon={<AiFillTags color="#26d354" fontSize="1rem" />}
                  alt={"gift.svg"}
                  title={freeSendingP}
                />
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
              <IoMdStar fontSize="1rem" color="#f8d527" />
              {scorePFirst && <p>{scorePFirst}</p>}
              {scorePLast && <p>{scorePLast}</p>}
            </div>
            {typeFoodP && <p className={styles["types-food"]}>{typeFoodP}</p>}

            {requestText && (
              <div
                className={`${styles["pre-request"]} ${
                  typeFoodP ? styles.quarter : styles.half
                }`}
              >
                <IoMdTime color="#666" fontSize="1.4rem" />
                <span>{preRequestSpan}</span>
              </div>
            )}

            {expressText && (
              <div className={styles["post-price"]}>
                <GiFullMotorcycleHelmet color="#666" fontSize="1.4rem" />
                <span>{postPriceFirstS}</span>
                <span>{postPriceLastS}</span>
                <span>تومان</span>
              </div>
            )}
            {salerText && (
              <div className={styles["post-price"]}>
                <BsPersonUp color="#666" fontSize="1.4rem" />
                <span>{postPriceFirstS}</span>
                <span>{postPriceLastS}</span>
                <span>تومان</span>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
