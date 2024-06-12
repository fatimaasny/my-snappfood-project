import styles from "./Restaurant.module.css";

import ShowMore from "../../ShowMore/ShowMore";

import tazeImg1 from "../../../Images/Main/Restaurant/tazeha/1.jpg";
import tazeImg11 from "../../../Images/Main/Restaurant/tazeha/1-1.jpg";

import tazeImg2 from "../../../Images/Main/Restaurant/tazeha/2.jpg";

import tazeImg3 from "../../../Images/Main/Restaurant/tazeha/3.jpg";
import tazeImg31 from "../../../Images/Main/Restaurant/tazeha/3-1.jpg";

import tazeImg4 from "../../../Images/Main/Restaurant/tazeha/4.jpg";
import tazeImg41 from "../../../Images/Main/Restaurant/tazeha/4-1.png";

import bartarImg1 from "../../../Images/Main/Restaurant/bartarin ha/1.jpg";
import bartarImg11 from "../../../Images/Main/Restaurant/bartarin ha/1-1.jpg";

import bartarImg2 from "../../../Images/Main/Restaurant/bartarin ha/2.jpg";
import bartarImg21 from "../../../Images/Main/Restaurant/bartarin ha/1-1.jpg";

import bartarImg3 from "../../../Images/Main/Restaurant/bartarin ha/3.jpg";
import bartarImg31 from "../../../Images/Main/Restaurant/bartarin ha/3-1.jpg";
import RestaurantItem from "../../../Components/RestaurantItem/RestaurantItem";

export default function Restaurant({ title, index }) {
  let list = [];
  const tazehaList = [
    {
      backCoverUp: tazeImg1,
      freeSendingP: false,
      discountP: "20%",
      centerImage: tazeImg11,
      titleH: "آش و حلیم کرمانشاهی آوین",
      scorePFirst: "جدید",
      scorePLast: "(9امتیاز)",
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
      scorePLast: "(340 امتیاز)",
      typeFoodP: false,
      preRequestSpan: "پیش سفارش",
      requestText: "پیش سفارش",
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
      scorePLast: "(100امتیاز)",
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
      preRequestSpan: "پیش سفارش",
      requestText: "پیش سفارش",
      expressText: false,
      salerText: false,
      postPriceFirstS: false,
      postPriceLastS: false,
    },
  ];
  const bartarinhalist = [
    {
      backCoverUp: bartarImg1,
      freeSendingP: false,
      discountP: "12%",
      centerImage: bartarImg11,
      titleH: "طباخی سنتی نشاط",
      scorePFirst: "3.8",
      scorePLast: "(2,501 امتیاز)",
      typeFoodP: "ایرانی، سنتی، کله پاچه",
      preRequestSpan: "پیش سفارش",
      requestText: "پیش سفارش",
      expressText: false,
      salerText: false,
      postPriceFirstS: false,
      postPriceLastS: false,
    },
    {
      backCoverUp: bartarImg2,
      freeSendingP: false,
      discountP: false,
      centerImage: bartarImg21,
      titleH: "فینگل بریک رویا",
      scorePFirst: "4.4",
      scorePLast: "(5,697 امتیاز)",
      typeFoodP: "صبحانه و میان‌وعده، صبحانه، ساندویچ",
      preRequestSpan: false,
      requestText: false,
      expressText: false,
      salerText: "فروشنده",
      postPriceFirstS: "پیک فروشنده",
      postPriceLastS: "35,000",
    },
    {
      backCoverUp: bartarImg3,
      freeSendingP: false,
      discountP: false,
      centerImage: bartarImg31,
      titleH: "کافه بوفه",
      scorePFirst: "جدید",
      scorePLast: false,
      typeFoodP: "ساندویچ، فست‌فود، سنتی",
      preRequestSpan: false,
      requestText: false,
      expressText: "اکسپرس",
      salerText: false,
      postPriceFirstS: "ارسال اکسپرس",
      postPriceLastS: "41,000",
    },
  ];
  if (index === 1) {
    list = [...tazehaList];
  } else if (index === 2) {
    list = [...bartarinhalist];
  }
  return (
    <div className={styles.content}>
      <div className={styles.title}>
        <h4>{title}</h4>
        <ShowMore class="big" />
      </div>
      <div className={styles.Ritems}>
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
            requestText={i.requestText === "پیش سفارش"}
            expressText={i.expressText === "اکسپرس"}
            salerText={i.salerText === "فروشنده"}
            postPriceFirstS={i.postPriceFirstS}
            postPriceLastS={i.postPriceLastS}
          />
        ))}
      </div>
    </div>
  );
}
