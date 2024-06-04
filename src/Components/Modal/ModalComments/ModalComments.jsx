import Card from "../../Card/Card";
import styles from "./ModalComments.module.css";
import Details from "../../EachRestaurant/ContentEachRes/SideRightEachRes/Details/Details";
import Comment from "../../EachRestaurant/ContentEachRes/SideRightEachRes/Comment/Comment";

import imgRes from "../../../Images/EachRestaurant/image-res1.jpg";
import imgmap from "../../../Images/Modal/map11.jpg";

import { IoClose } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { LiaHandLizard } from "react-icons/lia";
import { SlBasketLoaded } from "react-icons/sl";
import { IoMdStar } from "react-icons/io";
import { useState } from "react";

function ModalComments(props) {
  const [isToggleBtn, setIsToggleBtn] = useState("new");
  const ToggleHandler = (value) => {
    setIsToggleBtn(value);
  };

  // const starsShapeHandle = () => {
  //   for (let i = 1; i <= 5; i++) {
  //     for (let j = 1; j <= i; j++) {}
  //   }
  // };

  const listComments = [
    {
      name: "رها",
      date: "2 خرداد 1403",
      starscore: true,
      rate: 3,
      description:
        "این چه وضعی هست برای خودم متاسفم جای کباب برای من دیزی آوردند.",
      extracomment: true,
      extratext:
        "بسیار بی کیفیت بود لطفا بررسی کنید تا اینقدر به مشتری توهین نشود.",
      listOrderName: ["حلیم", "آش کوچک", "غذای سنتی ایرانی"],
      ressponse: true,
      ressponsetext:
        "بسیار پوزش میطلبم ، حتما بررسی میکنیم و پیگیر هستیم. ممنون از اطلاع رسانی شما.",
    },
    {
      name: "شادان",
      date: "20 اردیبهشت 1403 ",
      starscore: true,
      rate: 4,
      description: "همه چی خوب بود و راضی بودم از کیفیت زرشک پلو",
      extracomment: false,
      extratext: "",
      listOrderName: ["زرشک پلو", "غذای ایرانی"],
      ressponse: false,
      ressponsetext: "",
    },
    {
      name: "فرهاد",
      date: "1 فروردین 1403",
      starscore: false,
      rate: "",
      description:
        "کیفیت مثل همیشه نبود، پیک هم دیر به دستم رساند و سرد شده بود.",
      extracomment: false,
      extratext: "",
      listOrderName: ["فست‌فود", "پیتزا"],
      ressponse: false,
      ressponsetext: "",
    },
  ];

  return (
    <>
      <div className={styles.backdrop} onClick={props.hideModalComments} />
      <Card className={styles.modalcomments}>
        <div className={styles.header}>
          <button
            className={styles["btn-close-icons"]}
            onClick={props.hideModalComments}
          >
            <IoClose fontSize="1.5rem" color="#7a7a7a" />
          </button>
          <div className={styles["middle-content"]}>
            <Card className={styles.shadow}>
              <img src={imgRes} alt="image-res" className={styles.imgres} />
            </Card>
            <div className={styles.info}>
              <h4>آش و حلیم ولیعصر</h4>
              <p className={styles.content}>
                آش و حلیم، آش، غذای سنتی، سوپ، نوشیدنی
              </p>
              <p className={styles.address}>
                <FaLocationDot fontSize="1rem" color="#a9a7a7" />
                ولیعصر، بعد از انقلاب اسلامی، کوچه مدنی، سمت راست، ساختمان پنجم
                طبقه ششم
              </p>
            </div>
            <div
              className={styles.map}
              style={{ background: `url(${imgmap})` }}
            >
              <button onClick={props.showModalSpecialMap}>
                مشاهده روی نقشه
                <FaAngleLeft color="#14dc14" />
              </button>
            </div>
          </div>
          <div className={styles["details-list"]}>
            <Details
              icon={<IoMdTime color="#606060" fontSize="1.3rem" />}
              title={"ساعت کاری"}
              text={"باز امروز از ساعت 7 تا 23"}
            />
            <Details
              icon={<LiaHandLizard color="#606060" fontSize="1.3rem" />}
              title={"شیوه های پرداخت"}
              text={"آنلاین، اعتبار جایزه خرید"}
            />
            <Details
              icon={<SlBasketLoaded color="#606060" fontSize="1.3rem" />}
              title={"حداقل سبد خرید"}
              text={"40000 تومان"}
            />
          </div>
        </div>
        <div className={styles["content-scrolled"]}>
          <div className={styles.scores}>
            <div className={styles.right}>
              <p className={styles.star}>
                <button>
                  <IoMdStar fontSize="1.5rem" color="#e9e615" />
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
            <div className={styles.middle}>
              * * * * * <br />
              * * * * <br />
              * * *<br />
              * *<br />
              *<br />
            </div>

            <div className={styles.left}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={styles.title}>
            <h4>نظرات کاربران</h4>
            <div className={styles.leftcontent}>
              <span>به ترتیب</span>
              <div className={styles.togglebtn}>
                <button
                  className={`${styles.button} ${
                    isToggleBtn === "new" ? styles.toggle : ""
                  }`}
                  onClick={() => ToggleHandler("new")}
                >
                  جدیدترین
                </button>
                <button
                  className={`${styles.button} ${
                    isToggleBtn === "related" ? styles.toggle : ""
                  }`}
                  onClick={() => ToggleHandler("related")}
                >
                  مرتبط‌‌‌‌ ترین
                </button>
              </div>
            </div>
          </div>
          <div className={styles.comments}>
            {listComments.map((i, index) => (
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
      </Card>
    </>
  );
}

export default ModalComments;
