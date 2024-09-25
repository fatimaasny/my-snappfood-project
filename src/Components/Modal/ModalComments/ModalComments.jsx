import styles from "./ModalComments.module.css";
import { useState } from "react";
import ReactDom from "react-dom";

import Card from "../../Card/Card";
import Details from "../../EachRestaurant/ContentEachRes/SideRightEachRes/Details/Details";
import Comment from "../../EachRestaurant/ContentEachRes/SideRightEachRes/Comment/Comment";
import Lineer from "../../EachRestaurant/ContentEachRes/SideRightEachRes/Lineer/Lineer";

import imgRes from "../../../Images/EachRestaurant/image-res1.jpg";
import imgmap from "../../../Images/Modal/map11.jpg";

import { IoClose } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { LiaHandLizard } from "react-icons/lia";
import { SlBasketLoaded } from "react-icons/sl";
import { IoMdStar } from "react-icons/io";

function BackDrop(props) {
  return <div className={styles.backdrop} onClick={props.hideModalComments} />;
}
function ButtonClose(props) {
  return (
    <button
      className={styles["btn-close-icons"]}
      onClick={props.hideModalComments}
    >
      <IoClose fontSize="1.5rem" color="#7a7a7a" />
    </button>
  );
}
function MiddleInHeader(props) {
  return (
    <div className={styles["middle-content"]}>
      <Card className={styles.shadow}>
        <img src={imgRes} alt="image-res" className={styles.imgres} />
      </Card>
      <div className={styles.info}>
        <h4>آش و حلیم ولیعصر</h4>
        <p className={styles.content}>آش و حلیم، آش، غذای سنتی، سوپ، نوشیدنی</p>
        <p className={styles.address}>
          <FaLocationDot fontSize="1rem" color="#aaa" />
          ولیعصر، بعد از انقلاب اسلامی، کوچه مدنی، سمت راست، ساختمان پنجم طبقه
          ششم
        </p>
      </div>
      <div className={styles.map} style={{ background: `url(${imgmap})` }}>
        <button onClick={props.showModalSpecialMap}>
          مشاهده روی نقشه
          <FaAngleLeft color="#26d354" />
        </button>
      </div>
    </div>
  );
}
function DetailsInHeader(props) {
  return (
    <div className={styles["details-list"]}>
      <Details
        icon={<IoMdTime color="#666" fontSize="1.3rem" />}
        title={"ساعت کاری"}
        text={"باز امروز از ساعت 7 تا 23"}
      />
      <Details
        icon={<LiaHandLizard color="#666" fontSize="1.3rem" />}
        title={"شیوه های پرداخت"}
        text={"آنلاین، اعتبار جایزه خرید"}
      />
      <Details
        icon={<SlBasketLoaded color="#666" fontSize="1.3rem" />}
        title={"حداقل سبد خرید"}
        text={"40000 تومان"}
      />
    </div>
  );
}
function Header(props) {
  return (
    <div className={styles.header}>
      <ButtonClose hideModalComments={props.hideModalComments} />
      <MiddleInHeader showModalSpecialMap={props.showModalSpecialMap} />
      <DetailsInHeader />
    </div>
  );
}
function RightInScores(props) {
  return (
    <div className={styles.right}>
      <p className={styles.star}>
        <button>
          <IoMdStar fontSize="1.5rem" color="#f8d527" />
        </button>
        <span>4.2</span>
      </p>
      <p className={styles.text}>
        از مجموع
        <span>9096</span>
        امتیاز و<span>1430</span>
        نظر
      </p>
    </div>
  );
}
function MiddleInScores(props) {
  return (
    <div className={styles.middle}>
      <div>
        <IoMdStar color="#eee" />
        <IoMdStar color="#eee" />
        <IoMdStar color="#eee" />
        <IoMdStar color="#eee" />
        <IoMdStar color="#eee" />
      </div>
      <div>
        <IoMdStar color="#eee" />
        <IoMdStar color="#eee" />
        <IoMdStar color="#eee" />
        <IoMdStar color="#eee" />
      </div>
      <div>
        <IoMdStar color="#eee" />
        <IoMdStar color="#eee" />
        <IoMdStar color="#eee" />
      </div>
      <div>
        <IoMdStar color="#eee" />
        <IoMdStar color="#eee" />
      </div>
      <div>
        <IoMdStar color="#eee" />
      </div>
    </div>
  );
}
function LineerInScores(props) {
  return (
    <div className={styles.lineer}>
      <Lineer />
    </div>
  );
}
function ScoresInScrolled(props) {
  return (
    <div className={styles.scores}>
      <RightInScores />
      <MiddleInScores />
      <LineerInScores />
    </div>
  );
}

function TitleInScores(props) {
  return (
    <div className={styles.title}>
      <h4>نظرات کاربران</h4>
      <div className={styles.leftcontent}>
        <span>به ترتیب</span>
        <div className={styles.togglebtn}>
          {props.sortParams.map((i, index) => (
            <button
              key={index}
              className={`${styles.button} ${
                props.isToggleBtn === i.key ? styles.toggle : ""
              }`}
              onClick={() => props.ToggleHandler(i.key)}
            >
              {i.title}
            </button>
          ))}
          {/* <button
            className={`${styles.button} ${
              props.isToggleBtn === "new" ? styles.toggle : ""
            }`}
            onClick={() => props.ToggleHandler("new")}
          >
            جدیدترین
          </button>
          <button
            className={`${styles.button} ${
              props.isToggleBtn === "related" ? styles.toggle : ""
            }`}
            onClick={() => props.ToggleHandler("related")}
          >
            مرتبط‌‌‌‌ ترین
          </button> */}
        </div>
      </div>
    </div>
  );
}
function CommentsInScores(props) {
  return (
    <div className={styles.comments}>
      {props.listComment.map((i) => (
        <Comment
          key={i.commentId}
          sender={i.sender}
          date={i.date}
          starscore={i.starscore}
          rate={i.rate}
          commentText={i.commentText}
          deliveryComment={i.deliveryComment}
          foods={i.foods}
          replies={i.replies}
        />
      ))}
    </div>
  );
}
function Scrolled(props) {
  return (
    <div className={styles["content-scrolled"]}>
      <ScoresInScrolled />
      <TitleInScores
        isToggleBtn={props.isToggleBtn}
        ToggleHandler={props.ToggleHandler}
        sortParams={props.sortParams}
      />
      <CommentsInScores listComment={props.listComment} />
    </div>
  );
}
function Overlay(props) {
  return (
    <Card className={styles.modalcomments}>
      <Header
        isToggleBtn={props.isToggleBtn}
        ToggleHandler={props.ToggleHandler}
        showModalSpecialMap={props.showModalSpecialMap}
        hideModalComments={props.hideModalComments}
      />
      <Scrolled
        listComment={props.listComment}
        sortParams={props.sortParams}
        isToggleBtn={props.isToggleBtn}
        ToggleHandler={props.ToggleHandler}
      />
    </Card>
  );
}

function FinalModal(props) {
  return (
    <>
      <BackDrop hideModalComments={props.hideModalComments} />
      <Overlay
        hideModalComments={props.hideModalComments}
        showModalSpecialMap={props.showModalSpecialMap}
        listComment={props.listComment}
        sortParams={props.sortParams}
        isToggleBtn={props.isToggleBtn}
        ToggleHandler={props.ToggleHandler}
      />
    </>
  );
}

function ModalComments(props) {
  const [isToggleBtn, setIsToggleBtn] = useState("new");
  const ToggleHandler = (value) => {
    setIsToggleBtn(value);
  };
  return (
    <>
      {ReactDom.createPortal(
        <FinalModal
          hideModalComments={props.hideModalComments}
          showModalSpecialMap={props.showModalSpecialMap}
          listComment={props.listComment}
          sortParams={props.sortParams}
          isToggleBtn={isToggleBtn}
          ToggleHandler={ToggleHandler}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default ModalComments;
