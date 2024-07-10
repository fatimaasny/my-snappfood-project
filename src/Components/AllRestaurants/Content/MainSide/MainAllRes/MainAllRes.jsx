import styles from "./MainAllRes.module.css";
import { useState, useRef, useEffect } from "react";

import RestaurantItem from "../../../../../Components/RestaurantItem/RestaurantItem";

import tazeImg1 from "../../../../../Images/Main/Restaurant/tazeha/1.jpg";
import tazeImg11 from "../../../../../Images/Main/Restaurant/tazeha/1-1.jpg";
import tazeImg2 from "../../../../../Images/Main/Restaurant/tazeha/2.jpg";
import tazeImg3 from "../../../../../Images/Main/Restaurant/tazeha/3.jpg";
import tazeImg31 from "../../../../../Images/Main/Restaurant/tazeha/3-1.jpg";
import tazeImg4 from "../../../../../Images/Main/Restaurant/tazeha/4.jpg";
import tazeImg41 from "../../../../../Images/Main/Restaurant/tazeha/4-1.png";
const tazehaList = [
  {
    backCoverUp: tazeImg1,
    freeSendingP: false,
    discountP: "20%",
    centerImage: tazeImg11,
    titleH: "آش و حلیم کرمانشاهی آوین",
    scorePFirst: "جدید",
    scorePLast: "(9)",
    typeFoodP: "سنتی، آش و حلیم",
    preRequestSpan: false,
    RequestText: false,
    expressText: "اکسپرس",
    salerText: false,
    postPriceFirstS: "ارسال اکسپرس",
    postPriceLastS: "10,500",
  },
  {
    backCoverUp: tazeImg2,
    freeSendingP: "کیک هویج 125 گرم ارسال رایگان",
    discountP: "5%",
    centerImage: tazeImg11,
    titleH: "مجتمع سنگک",
    scorePFirst: "جدید",
    scorePLast: "(340)",
    typeFoodP: false,
    preRequestSpan: "پیش‌سفارش",
    requestText: "پیش‌سفارش",
    expressText: false,
    salerText: false,
    postPriceFirstS: false,
    postPriceLastS: false,
  },
  {
    backCoverUp: tazeImg3,
    freeSendingP: "10% تخفیف مخصوص سفارش اول",
    discountP: false,
    centerImage: tazeImg31,
    titleH: "آشکده چوبین (فلسطین)",
    scorePFirst: false,
    scorePLast: "(100)",
    typeFoodP: "آش و حلیم، آش، حلیم",
    preRequestSpan: false,
    requestText: false,
    expressText: false,
    salerText: "فروشنده",
    postPriceFirstS: "پیک فروشنده",
    postPriceLastS: "19,000",
  },
  {
    backCoverUp: tazeImg4,
    freeSendingP: false,
    discountP: "5%",
    centerImage: tazeImg41,
    titleH: "مجتمع سنگک",
    scorePFirst: "جدید",
    scorePLast: false,
    typeFoodP: false,
    preRequestSpan: "پیش‌سفارش",
    requestText: "پیش‌سفارش",
    expressText: false,
    salerText: false,
    postPriceFirstS: false,
    postPriceLastS: false,
  },
  {
    backCoverUp: tazeImg1,
    freeSendingP: false,
    discountP: "20%",
    centerImage: tazeImg11,
    titleH: "آش و حلیم کرمانشاهی آوین",
    scorePFirst: "جدید",
    scorePLast: "(9)",
    typeFoodP: "سنتی، آش و حلیم",
    preRequestSpan: false,
    RequestText: false,
    expressText: "اکسپرس",
    salerText: false,
    postPriceFirstS: "ارسال اکسپرس",
    postPriceLastS: "10,500",
  },
  {
    backCoverUp: tazeImg2,
    freeSendingP: "کیک هویج 125 گرم ارسال رایگان",
    discountP: "5%",
    centerImage: tazeImg11,
    titleH: "مجتمع سنگک",
    scorePFirst: "جدید",
    scorePLast: "(340)",
    typeFoodP: false,
    preRequestSpan: "پیش‌سفارش",
    requestText: "پیش‌سفارش",
    expressText: false,
    salerText: false,
    postPriceFirstS: false,
    postPriceLastS: false,
  },
  {
    backCoverUp: tazeImg3,
    freeSendingP: "10% تخفیف مخصوص سفارش اول",
    discountP: false,
    centerImage: tazeImg31,
    titleH: "آشکده چوبین (فلسطین)",
    scorePFirst: false,
    scorePLast: "(100)",
    typeFoodP: "آش و حلیم، آش، حلیم",
    preRequestSpan: false,
    requestText: false,
    expressText: false,
    salerText: "فروشنده",
    postPriceFirstS: "پیک فروشنده",
    postPriceLastS: "19,000",
  },
  {
    backCoverUp: tazeImg4,
    freeSendingP: false,
    discountP: "5%",
    centerImage: tazeImg41,
    titleH: "مجتمع سنگک",
    scorePFirst: "جدید",
    scorePLast: false,
    typeFoodP: false,
    preRequestSpan: "پیش‌سفارش",
    requestText: "پیش‌سفارش",
    expressText: false,
    salerText: false,
    postPriceFirstS: false,
    postPriceLastS: false,
  },
  {
    backCoverUp: tazeImg1,
    freeSendingP: false,
    discountP: "20%",
    centerImage: tazeImg11,
    titleH: "آش و حلیم کرمانشاهی آوین",
    scorePFirst: "جدید",
    scorePLast: "(9)",
    typeFoodP: "سنتی، آش و حلیم",
    preRequestSpan: false,
    RequestText: false,
    expressText: "اکسپرس",
    salerText: false,
    postPriceFirstS: "ارسال اکسپرس",
    postPriceLastS: "10,500",
  },
  {
    backCoverUp: tazeImg2,
    freeSendingP: "کیک هویج 125 گرم ارسال رایگان",
    discountP: "5%",
    centerImage: tazeImg11,
    titleH: "مجتمع سنگک",
    scorePFirst: "جدید",
    scorePLast: "(340)",
    typeFoodP: false,
    preRequestSpan: "پیش‌سفارش",
    requestText: "پیش‌سفارش",
    expressText: false,
    salerText: false,
    postPriceFirstS: false,
    postPriceLastS: false,
  },
  {
    backCoverUp: tazeImg3,
    freeSendingP: "10% تخفیف مخصوص سفارش اول",
    discountP: false,
    centerImage: tazeImg31,
    titleH: "آشکده چوبین (فلسطین)",
    scorePFirst: false,
    scorePLast: "(100)",
    typeFoodP: "آش و حلیم، آش، حلیم",
    preRequestSpan: false,
    requestText: false,
    expressText: false,
    salerText: "فروشنده",
    postPriceFirstS: "پیک فروشنده",
    postPriceLastS: "19,000",
  },
  {
    backCoverUp: tazeImg4,
    freeSendingP: false,
    discountP: "5%",
    centerImage: tazeImg41,
    titleH: "مجتمع سنگک",
    scorePFirst: "جدید",
    scorePLast: false,
    typeFoodP: false,
    preRequestSpan: "پیش‌سفارش",
    requestText: "پیش‌سفارش",
    expressText: false,
    salerText: false,
    postPriceFirstS: false,
    postPriceLastS: false,
  },
  {
    backCoverUp: tazeImg1,
    freeSendingP: false,
    discountP: "20%",
    centerImage: tazeImg11,
    titleH: "آش و حلیم کرمانشاهی آوین",
    scorePFirst: "جدید",
    scorePLast: "(9)",
    typeFoodP: "سنتی، آش و حلیم",
    preRequestSpan: false,
    RequestText: false,
    expressText: "اکسپرس",
    salerText: false,
    postPriceFirstS: "ارسال اکسپرس",
    postPriceLastS: "10,500",
  },
  {
    backCoverUp: tazeImg2,
    freeSendingP: "کیک هویج 125 گرم ارسال رایگان",
    discountP: "5%",
    centerImage: tazeImg11,
    titleH: "مجتمع سنگک",
    scorePFirst: "جدید",
    scorePLast: "(340)",
    typeFoodP: false,
    preRequestSpan: "پیش‌سفارش",
    requestText: "پیش‌سفارش",
    expressText: false,
    salerText: false,
    postPriceFirstS: false,
    postPriceLastS: false,
  },
  {
    backCoverUp: tazeImg3,
    freeSendingP: "10% تخفیف مخصوص سفارش اول",
    discountP: false,
    centerImage: tazeImg31,
    titleH: "آشکده چوبین (فلسطین)",
    scorePFirst: false,
    scorePLast: "(100)",
    typeFoodP: "آش و حلیم، آش، حلیم",
    preRequestSpan: false,
    requestText: false,
    expressText: false,
    salerText: "فروشنده",
    postPriceFirstS: "پیک فروشنده",
    postPriceLastS: "19,000",
  },
  {
    backCoverUp: tazeImg4,
    freeSendingP: false,
    discountP: "5%",
    centerImage: tazeImg41,
    titleH: "مجتمع سنگک",
    scorePFirst: "جدید",
    scorePLast: false,
    typeFoodP: false,
    preRequestSpan: "پیش‌سفارش",
    requestText: "پیش‌سفارش",
    expressText: false,
    salerText: false,
    postPriceFirstS: false,
    postPriceLastS: false,
  },
];
export default function MainAllRes() {
  const [list, setList] = useState([...tazehaList]);

  const endRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top, bottom, height } = endRef.current.getBoundingClientRect();
      if (
        top < height < bottom &&
        bottom <= window.innerHeight &&
        list.length <= 50
      ) {
        let item = {
          backCoverUp: tazeImg1,
          freeSendingP: false,
          discountP: "20%",
          centerImage: tazeImg11,
          titleH: "آش و حلیم کرمانشاهی آوین",
          scorePFirst: "جدید",
          scorePLast: "(9)",
          typeFoodP: "سنتی، آش و حلیم",
          preRequestSpan: false,
          RequestText: false,
          expressText: "اکسپرس",
          salerText: false,
          postPriceFirstS: "ارسال اکسپرس",
          postPriceLastS: "10,500",
        };
        setList([...list, item]);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [list]);

  return (
    <main className={styles["main-MainAllRes"]}>
      <div className={styles.list}>
        {list.map((i, index) => (
          <RestaurantItem
            key={index}
            backCoverUp={i.backCoverUp}
            freeSendingP={i.freeSendingP}
            discountP={i.discountP}
            centerImage={i.centerImage}
            titleH={i.titleH}
            scorePFirst={i.scorePFirst}
            scorePLast={i.scorePLast}
            typeFoodP={i.typeFoodP}
            preRequestSpan={i.preRequestSpan}
            requestText={i.requestText === "پیش‌سفارش"}
            expressText={i.expressText === "اکسپرس"}
            salerText={i.salerText === "فروشنده"}
            postPriceFirstS={i.postPriceFirstS}
            postPriceLastS={i.postPriceLastS}
          />
        ))}
        <p className={styles.end} ref={endRef}></p>
      </div>
    </main>
  );
}
