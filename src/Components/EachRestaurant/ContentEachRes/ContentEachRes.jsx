import styles from "./ContentEachRes.module.css";
import SideRightEachRes from "./SideRightEachRes/SideRightEachRes";
import MainEachRes from "./MainEachRes/MainEachRes";
import SideLeftEachRes from "./SideLeftEachRes/SideLeftEachRes";
import { useState } from "react";
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

  return (
    <div className={styles["content-each-res-component"]}>
      <div className={styles.bothRessponsive}>
        <SideRightEachRes
          listOfTitles={listOfTitles}
          listComments={listComments}
        />
        <MainEachRes listComments={listComments} listOfTitles={listOfTitles} />
      </div>

      <SideLeftEachRes />
    </div>
  );
}
