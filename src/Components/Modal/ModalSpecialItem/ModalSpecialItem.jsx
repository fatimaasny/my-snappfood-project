import styles from "./ModalSpecialItem.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ReactDom from "react-dom";
import Card from "../../Card/Card";

import ItemAddbtn from "../../EachRestaurant/ContentEachRes/MainEachRes/ItemAddbtn/ItemAddbtn";
import Comment from "../../EachRestaurant/ContentEachRes/SideRightEachRes/Comment/Comment";

import { IoCloseOutline } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";

import Loading from "../../Loading/Loading";

// api
import { commentInSpecialItem } from "../../../CallApi/CallApi";

// custom hooks
import { useFetch2 } from "../../../hooks/useFetch";

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
      {/* <div className={styles.list}>
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
      </div> */}
    </div>
  );
}
function LeftUpScroll(props) {
  return (
    <div className={styles.left}>
      <div className={styles.title}>
        <p>{props.title}</p>
        <button className={styles.btnstar}>
          <IoMdStar fontSize="0.95rem" color="#f8d527" />
          <span>4.2</span>
        </button>
      </div>
      <p className={styles.text}>{props.description}</p>
      <div className={styles.items}>
        {/* {props.listAddBtn.map((i, index) => (
          <ItemAddbtn
            key={index}
            title={i.title}
            discount={i.discount}
            oldPrice={i.oldPrice}
            newPrice={i.newPrice}
          />
        ))} */}

        <ItemAddbtn
          name={props.title}
          productVariationTitle={props.productVariationTitle}
          price={props.price}
          discount={props.discount}
          discountRatio={props.discountRatio}
          // disabledUntil={disabledUntil}
        />
      </div>
    </div>
  );
}
function UpScroll(props) {
  return (
    <div className={styles.up}>
      <RightUpScroll
        image={props.image}
        // setImage={props.setImage}
        // listImages={props.listImages}
      />
      <LeftUpScroll
        title={props.title}
        // listAddBtn={props.listAddBtn}
        description={props.description}
        productVariationTitle={props.productVariationTitle}
        price={props.price}
        discount={props.discount}
        discountRatio={props.discountRatio}
      />
    </div>
  );
}
function DownScroll(props) {
  return (
    <>
      {props.commentListInSpecialItem.length > 0 && (
        <div className={styles.down}>
          <h3>نظرات کاربران</h3>
          {props.isLoading ? (
            <Loading />
          ) : (
            <div className={styles.comments}>
              {props.commentListInSpecialItem.map((i) => (
                <Comment
                  key={i.commentId}
                  sender={i.sender}
                  date={i.date}
                  starscore={i.rating}
                  rate={i.rate}
                  commentText={i.commentText}
                  deliveryComment={i.deliveryComment}
                  foods={i.foods}
                  replies={i.replies}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
function ContentScrolled(props) {
  return (
    <div className={styles["scrolled-content"]}>
      <UpScroll
        image={props.image}
        title={props.title}
        description={props.description}
        productVariationTitle={props.productVariationTitle}
        price={props.price}
        discount={props.discount}
        discountRatio={props.discountRatio}
      />
      <DownScroll
        commentListInSpecialItem={props.commentListInSpecialItem}
        isLoading={props.isLoading}
      />
    </div>
  );
}
function Overlay(props) {
  return (
    <Card className={styles["modal-special-item"]}>
      <Header hideModalSpecialItem={props.hideModalSpecialItem} />
      <ContentScrolled
        image={props.image}
        title={props.title}
        description={props.description}
        productVariationTitle={props.productVariationTitle}
        price={props.price}
        discount={props.discount}
        discountRatio={props.discountRatio}
        commentListInSpecialItem={props.commentListInSpecialItem}
        isLoading={props.isLoading}
      />
    </Card>
  );
}

function FinalModal(props) {
  return (
    <>
      <BackDrop hideModalSpecialItem={props.hideModalSpecialItem} />
      <Overlay
        image={props.image}
        hideModalSpecialItem={props.hideModalSpecialItem}
        title={props.title}
        description={props.description}
        productVariationTitle={props.productVariationTitle}
        price={props.price}
        discount={props.discount}
        discountRatio={props.discountRatio}
        commentListInSpecialItem={props.commentListInSpecialItem}
        isLoading={props.isLoading}
      />
    </>
  );
}
function ModalSpecialItem(props) {
  const params = useParams();

  const { isLoading, data, error, fetchData } = useFetch2(
    commentInSpecialItem,
    (data) => data.data.comments
  );

  useEffect(() => {
    const process = async () => {
      await fetchData(props.id);
    };
    process();
  }, []);

  return (
    <>
      {ReactDom.createPortal(
        <FinalModal
          hideModalSpecialItem={props.hideModalSpecialItem}
          image={props.image}
          title={props.title}
          description={props.description}
          productVariationTitle={props.productVariationTitle}
          price={props.price}
          discount={props.discount}
          discountRatio={props.discountRatio}
          commentListInSpecialItem={data}
          isLoading={isLoading}
          error={error}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default ModalSpecialItem;
