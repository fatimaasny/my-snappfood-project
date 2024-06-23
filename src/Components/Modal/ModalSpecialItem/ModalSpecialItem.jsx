import styles from "./ModalSpecialItem.module.css";
import ReactDom from "react-dom";
import Card from "../../Card/Card";
import ItemAddbtn from "../../EachRestaurant/ContentEachRes/MainEachRes/ItemAddbtn/ItemAddbtn";
import Comment from "../../EachRestaurant/ContentEachRes/SideRightEachRes/Comment/Comment";

import { IoCloseOutline } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { useState } from "react";

function BackDrop(props) {
  return (
    <div className={styles.backdrop} onClick={props.hideModalSpecialItem} />
  );
}

function Header(props) {
  return (
    <div className={styles.header}>
      <button className={styles.btnclose} onClick={props.hideModalSpecialItem}>
        <IoCloseOutline fontSize="1.5rem" color="#666" fontWeight="700" />
      </button>
    </div>
  );
}
function RightUpScroll(props) {
  return (
    <div className={styles["right-list-image"]}>
      <Card>
        <img className={styles.img} src={props.image} alt="image" />
      </Card>
      <div className={styles.list}>
        {props.listImages.map((imge, index) => (
          <Card className={styles.card}>
            <img
              key={index}
              src={imge}
              alt="image"
              onClick={() => props.setImage(imge)}
            />
          </Card>
        ))}
      </div>
    </div>
  );
}
function LeftUpScroll(props) {
  return (
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
  );
}
function UpScroll(props) {
  return (
    <div className={styles.up}>
      <RightUpScroll
        image={props.image}
        setImage={props.setImage}
        listImages={props.listImages}
      />
      <LeftUpScroll
        pName={props.pName}
        listAddBtn={props.listAddBtn}
        spanTag={props.spanTag}
      />
    </div>
  );
}
function DownScroll(props) {
  return (
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
  );
}
function ContentScrolled(props) {
  return (
    <div className={styles["scrolled-content"]}>
      <UpScroll
        image={props.image}
        setImage={props.setImage}
        listImages={props.listImages}
        pName={props.pName}
        listAddBtn={props.listAddBtn}
        spanTag={props.spanTag}
      />
      <DownScroll listComments={props.listComments} />
    </div>
  );
}
function Overlay(props) {
  return (
    <Card className={styles["modal-special-item"]}>
      <Header hideModalSpecialItem={props.hideModalSpecialItem} />
      <ContentScrolled
        image={props.image}
        setImage={props.setImage}
        listImages={props.listImages}
        pName={props.pName}
        listAddBtn={props.listAddBtn}
        listComments={props.listComments}
      />
    </Card>
  );
}

function FinalModal(props) {
  return (
    <>
      <BackDrop hideModalSpecialItem={props.hideModalSpecialItem} />
      <Overlay
        listImages={props.listImages}
        image={props.image}
        setImage={props.setImage}
        hideModalSpecialItem={props.hideModalSpecialItem}
        pName={props.pName}
        listComments={props.listComments}
        listAddBtn={props.listAddBtn}
        spanTag={props.spanTag}
      />
    </>
  );
}
function ModalSpecialItem(props) {
  const img = props.image;
  const [image, setImage] = useState(img);
  return (
    <>
      {ReactDom.createPortal(
        <FinalModal
          hideModalSpecialItem={props.hideModalSpecialItem}
          listImages={props.listImages}
          image={image}
          setImage={setImage}
          listComments={props.listComments}
          listAddBtn={props.listAddBtn}
          pName={props.pName}
          spanTag={props.spanTag}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default ModalSpecialItem;
