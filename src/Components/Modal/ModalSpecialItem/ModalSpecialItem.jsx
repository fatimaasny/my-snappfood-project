import Card from "../../Card/Card";
import ItemAddbtn from "../../EachRestaurant/ContentEachRes/MainEachRes/ItemAddbtn/ItemAddbtn";
import styles from "./ModalSpecialItem.module.css";
import Comment from "../../EachRestaurant/ContentEachRes/SideRightEachRes/Comment/Comment";

import { IoCloseOutline } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { useState } from "react";

function ModalSpecialItem(props) {
  const img = props.image;
  const [image, setImage] = useState(img);
  return (
    <>
      <div className={styles.backdrop} onClick={props.hideModalSpecialItem} />
      <Card className={styles["modal-special-item"]}>
        <div className={styles.header}>
          <button
            className={styles.btnclose}
            onClick={props.hideModalSpecialItem}
          >
            <IoCloseOutline fontSize="1.5rem" color="#666" fontWeight="700" />
          </button>
        </div>
        <div className={styles["scrolled-content"]}>
          <div className={styles.up}>
            <div className={styles["right-list-image"]}>
              <Card>
                <img className={styles.img} src={image} alt="image" />
              </Card>
              <div className={styles.list}>
                {props.listImages.map((imge, index) => (
                  <Card className={styles.card}>
                    <img
                      key={index}
                      src={imge}
                      alt="image"
                      onClick={() => setImage(imge)}
                    />
                  </Card>
                ))}
              </div>
            </div>
            <div className={styles.left}>
              <div className={styles.title}>
                <p>{props.pName}</p>
                <button className={styles.btnstar}>
                  <IoMdStar fontSize="0.95rem" color="#f8d527" />
                  <span>4.2</span>
                </button>
              </div>
              <p className={styles.text}>{props.spanTag}</p>
              <div className={styles.items}>
                {props.listAddBtn.map((i, index) => (
                  <ItemAddbtn
                    key={index}
                    title={i.title}
                    discount={i.discount}
                    oldPrice={i.oldPrice}
                    newPrice={i.newPrice}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.down}>
            <h3>نظرات کاربران</h3>
            <div className={styles.comments}>
              {props.listComments.map((i, index) => (
                <Comment
                  key={index}
                  name={i.name}
                  date={i.date}
                  starscore={i.starscore}
                  rate={i.rate}
                  description={i.description}
                  extracomment={i.extracomment}
                  extratext={i.extratext}
                  listOrderName={i.listOrderName}
                  ressponse={i.ressponse}
                  ressponsetext={i.ressponsetext}
                />
              ))}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

export default ModalSpecialItem;
