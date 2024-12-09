import styles from "./ModalComments.module.css";
import { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { useParams } from "react-router-dom";

import Card from "../../Card/Card";
import Details from "../../EachRestaurant/ContentEachRes/SideRightEachRes/Details/Details";
import Comment from "../../EachRestaurant/ContentEachRes/SideRightEachRes/Comment/Comment";
import Lineer from "../../EachRestaurant/ContentEachRes/SideRightEachRes/Lineer/Lineer";

import imgmap from "../../../Images/Modal/map11.jpg";

import { IoClose } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { LiaHandLizard } from "react-icons/lia";
import { SlBasketLoaded } from "react-icons/sl";
import { IoMdStar } from "react-icons/io";

import Error from "../../Error/Error";
import Loading from "../../Loading/Loading";

// api
import { detailsDynamic1 } from "../../../CallApi/CallApi";
import { VendorComment } from "../../../CallApi/CallApi";

// custom hooks
import { useFetch2 } from "../../../hooks/useFetch";

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
        <img
          src={props.listData.logo}
          alt="image-res"
          className={styles.imgres}
        />
      </Card>
      <div className={styles.info}>
        <h4>{props.listData.title}</h4>
        {console.log("tagNames: ", props.listData.tagNames)}

        {props.listData.tagNames && (
          <p className={styles.content}>
            {props.listData.tagNames.map((item, index) => (
              <span key={index}>
                {item} {" , "}
              </span>
            ))}
          </p>
        )}

        <p className={styles.address}>
          <FaLocationDot fontSize="1rem" color="#aaa" />
          {props.listData.address}
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
        list={props.listData.paymentTypesToShow}
      />
      <Details
        icon={<SlBasketLoaded color="#666" fontSize="1.3rem" />}
        title={"حداقل سبد خرید"}
        text={props.listData.minOrder}
      />
    </div>
  );
}
function Header(props) {
  return (
    <div className={styles.header}>
      <ButtonClose hideModalComments={props.hideModalComments} />
      {props.isLoading ? (
        <Loading />
      ) : (
        <>
          <MiddleInHeader
            showModalSpecialMap={props.showModalSpecialMap}
            listData={props.listData}
          />
          <DetailsInHeader listData={props.listData} />
        </>
      )}
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
        <span>{props.listData.commentCount}</span>
        امتیاز و<span>{props.listData.textCommentCount}</span>
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
      <RightInScores listData={props.listData} />
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
          starscore={i.rating}
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
      <ScoresInScrolled listData={props.listData} />
      {props.isLoadingComment ? (
        <Loading />
      ) : (
        <>
          <TitleInScores
            isToggleBtn={props.isToggleBtn}
            ToggleHandler={props.ToggleHandler}
            sortParams={props.sortParams}
          />
          <CommentsInScores listComment={props.listComment} />
        </>
      )}
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
        isLoading={props.isLoading}
        listData={props.listData}
        error={props.error}
      />
      <Scrolled
        isLoadingComment={props.isLoadingComment}
        listComment={props.listComment}
        sortParams={props.sortParams}
        isToggleBtn={props.isToggleBtn}
        ToggleHandler={props.ToggleHandler}
        listData={props.listData}
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
        isLoadingComment={props.isLoadingComment}
        listComment={props.listComment}
        sortParams={props.sortParams}
        isToggleBtn={props.isToggleBtn}
        ToggleHandler={props.ToggleHandler}
        isLoading={props.isLoading}
        listData={props.listData}
        error={props.error}
      />
    </>
  );
}

function ModalComments(props) {
  const params = useParams();

  // ********************************************** data *************
  const { isLoading, data, error, fetchData } = useFetch2(
    detailsDynamic1,
    (data) => data.data.vendor
  );

  useEffect(() => {
    const process = async () => {
      await fetchData(params.code);
    };
    process();
  }, [params]);

  const [isToggleBtn, setIsToggleBtn] = useState("new");
  const ToggleHandler = (value) => {
    setIsToggleBtn(value);
  };

  // ******************************************* comments **************
  const {
    isLoading: isLoadingComment,
    data: listComment,
    error: errorComment,
    fetchData: fetchDataComments,
  } = useFetch2(VendorComment, (data) => data.data.comments);

  useEffect(() => {
    const process = async () => {
      await fetchDataComments(params.code);
    };
    process();
  }, [isToggleBtn]);

  // *********************************** sortParams **************
  const {
    isLoading: isLoadingsortParams,
    data: listsortParams,
    error: errorsortParams,
    fetchData: fetchDatasortParams,
  } = useFetch2(VendorComment, (data) => data.data.sort.params);

  useEffect(() => {
    const process = async () => {
      await fetchDatasortParams(params.code);
    };
    process();
  }, [isToggleBtn]);

  if (error || errorComment || errorsortParams) {
    return <Error title={error || errorComment || errorsortParams} />;
  }

  return (
    <>
      {ReactDom.createPortal(
        <FinalModal
          hideModalComments={props.hideModalComments}
          showModalSpecialMap={props.showModalSpecialMap}
          isLoadingComment={isLoadingComment}
          listComment={listComment}
          sortParams={listsortParams}
          isToggleBtn={isToggleBtn}
          ToggleHandler={ToggleHandler}
          isLoading={isLoading}
          listData={data}
          error={error || errorComment || errorsortParams}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default ModalComments;
