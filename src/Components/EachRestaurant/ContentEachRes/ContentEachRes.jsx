import styles from "./ContentEachRes.module.css";
import SideRightEachRes from "./SideRightEachRes/SideRightEachRes";
import MainEachRes from "./MainEachRes/MainEachRes";
import SideLeftEachRes from "./SideLeftEachRes/SideLeftEachRes";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ContentEachRes() {
  const listOfTitles = ["کوپن‌ها", "پرطرفدارها", "سوخاری"];

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

  // const params = useParams();
  // const [isLoading, setIsLoading] = useState(false);
  // const [listComment, setListComment] = useState([]);
  // const [listTitles, setListTitles] = useState([]);
  // const [error, setError] = useState();
  const [scrollposition, setScrollPosition] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch(
  //         `https://snappfood.ir/mobile/v2/restaurant/details/dynamic?lat=35.715&long=51.404&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&vendorCode=${params.code}&locationCacheKey=lat%3D35.715%26long%3D51.404&show_party=1&fetch-static-data=1&locale=fa`
  //       );
  //       if (!response.ok) {
  //         throw new Error("اطلاعات به درستی دریافت نشده است.");
  //       }
  //       const res = await response.json();
  //       // TODO
  //       // use 2 fetch in a useEffcet search for it
  //       // بیام و اطلاعات رو در بیارم
  //       // لیست نظرات
  //       // لیست اسکرول میخوره پرطرفدار ها و دارای کوپن و اینا
  //       // لیست وسط که عنوان داره و یه سری لیست دیگه رو نشون میده
  //     } catch (error) {
  //       setError("خطایی رخ داده است، مجددا تلاش کنید.");
  //     }
  //   };
  //   fetchData();
  // }, [params]);

  // این رو واسه این نوشتم که موقع اسکرول سایت چپ و
  // ساید راست فیکس میشه دوباره وقتی رسید به آخر قسمت مین دوباره میان و عادی میشن
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setScrollPosition(true);
      } else {
        setScrollPosition(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollposition]);

  return (
    <div className={styles["content-each-res-component"]}>
      <div
        className={`${styles.bothRessponsive} ${scrollposition && styles.end}`}
      >
        <SideRightEachRes
          listComments={listComments}
          scrollposition={scrollposition}
        />
        <MainEachRes listComments={listComments} listOfTitles={listOfTitles} />
      </div>
      <SideLeftEachRes scrollposition={scrollposition} />
    </div>
  );
}
