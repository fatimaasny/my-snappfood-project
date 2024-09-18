import styles from "./MainAllRes.module.css";
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";

import RestaurantItem from "../../../../../Components/RestaurantItem/RestaurantItem";

import tazeImg1 from "../../../../../Images/Main/Restaurant/tazeha/1.jpg";
import tazeImg11 from "../../../../../Images/Main/Restaurant/tazeha/1-1.jpg";
// import tazeImg2 from "../../../../../Images/Main/Restaurant/tazeha/2.jpg";
// import tazeImg3 from "../../../../../Images/Main/Restaurant/tazeha/3.jpg";
// import tazeImg31 from "../../../../../Images/Main/Restaurant/tazeha/3-1.jpg";
// import tazeImg4 from "../../../../../Images/Main/Restaurant/tazeha/4.jpg";
// import tazeImg41 from "../../../../../Images/Main/Restaurant/tazeha/4-1.png";
// const tazehaList = [
//   {
//     backCoverUp: tazeImg1,
//     freeSendingP: false,
//     discountP: "20%",
//     centerImage: tazeImg11,
//     titleH: "آش و حلیم کرمانشاهی آوین",
//     scorePFirst: "جدید",
//     scorePLast: "(9)",
//     typeFoodP: "سنتی، آش و حلیم",
//     preRequestSpan: false,
//     RequestText: false,
//     expressText: "اکسپرس",
//     salerText: false,
//     postPriceFirstS: "ارسال اکسپرس",
//     postPriceLastS: "10,500",
//   },
//   {
//     backCoverUp: tazeImg2,
//     freeSendingP: "کیک هویج 125 گرم ارسال رایگان",
//     discountP: "5%",
//     centerImage: tazeImg11,
//     titleH: "مجتمع سنگک",
//     scorePFirst: "جدید",
//     scorePLast: "(340)",
//     typeFoodP: false,
//     preRequestSpan: "پیش‌سفارش",
//     requestText: "پیش‌سفارش",
//     expressText: false,
//     salerText: false,
//     postPriceFirstS: false,
//     postPriceLastS: false,
//   },
//   {
//     backCoverUp: tazeImg3,
//     freeSendingP: "10% تخفیف مخصوص سفارش اول",
//     discountP: false,
//     centerImage: tazeImg31,
//     titleH: "آشکده چوبین (فلسطین)",
//     scorePFirst: false,
//     scorePLast: "(100)",
//     typeFoodP: "آش و حلیم، آش، حلیم",
//     preRequestSpan: false,
//     requestText: false,
//     expressText: false,
//     salerText: "فروشنده",
//     postPriceFirstS: "پیک فروشنده",
//     postPriceLastS: "19,000",
//   },
//   {
//     backCoverUp: tazeImg4,
//     freeSendingP: false,
//     discountP: "5%",
//     centerImage: tazeImg41,
//     titleH: "مجتمع سنگک",
//     scorePFirst: "جدید",
//     scorePLast: false,
//     typeFoodP: false,
//     preRequestSpan: "پیش‌سفارش",
//     requestText: "پیش‌سفارش",
//     expressText: false,
//     salerText: false,
//     postPriceFirstS: false,
//     postPriceLastS: false,
//   },
//   {
//     backCoverUp: tazeImg1,
//     freeSendingP: false,
//     discountP: "20%",
//     centerImage: tazeImg11,
//     titleH: "آش و حلیم کرمانشاهی آوین",
//     scorePFirst: "جدید",
//     scorePLast: "(9)",
//     typeFoodP: "سنتی، آش و حلیم",
//     preRequestSpan: false,
//     RequestText: false,
//     expressText: "اکسپرس",
//     salerText: false,
//     postPriceFirstS: "ارسال اکسپرس",
//     postPriceLastS: "10,500",
//   },
//   {
//     backCoverUp: tazeImg2,
//     freeSendingP: "کیک هویج 125 گرم ارسال رایگان",
//     discountP: "5%",
//     centerImage: tazeImg11,
//     titleH: "مجتمع سنگک",
//     scorePFirst: "جدید",
//     scorePLast: "(340)",
//     typeFoodP: false,
//     preRequestSpan: "پیش‌سفارش",
//     requestText: "پیش‌سفارش",
//     expressText: false,
//     salerText: false,
//     postPriceFirstS: false,
//     postPriceLastS: false,
//   },
//   {
//     backCoverUp: tazeImg3,
//     freeSendingP: "10% تخفیف مخصوص سفارش اول",
//     discountP: false,
//     centerImage: tazeImg31,
//     titleH: "آشکده چوبین (فلسطین)",
//     scorePFirst: false,
//     scorePLast: "(100)",
//     typeFoodP: "آش و حلیم، آش، حلیم",
//     preRequestSpan: false,
//     requestText: false,
//     expressText: false,
//     salerText: "فروشنده",
//     postPriceFirstS: "پیک فروشنده",
//     postPriceLastS: "19,000",
//   },
//   {
//     backCoverUp: tazeImg4,
//     freeSendingP: false,
//     discountP: "5%",
//     centerImage: tazeImg41,
//     titleH: "مجتمع سنگک",
//     scorePFirst: "جدید",
//     scorePLast: false,
//     typeFoodP: false,
//     preRequestSpan: "پیش‌سفارش",
//     requestText: "پیش‌سفارش",
//     expressText: false,
//     salerText: false,
//     postPriceFirstS: false,
//     postPriceLastS: false,
//   },
//   {
//     backCoverUp: tazeImg1,
//     freeSendingP: false,
//     discountP: "20%",
//     centerImage: tazeImg11,
//     titleH: "آش و حلیم کرمانشاهی آوین",
//     scorePFirst: "جدید",
//     scorePLast: "(9)",
//     typeFoodP: "سنتی، آش و حلیم",
//     preRequestSpan: false,
//     RequestText: false,
//     expressText: "اکسپرس",
//     salerText: false,
//     postPriceFirstS: "ارسال اکسپرس",
//     postPriceLastS: "10,500",
//   },
//   {
//     backCoverUp: tazeImg2,
//     freeSendingP: "کیک هویج 125 گرم ارسال رایگان",
//     discountP: "5%",
//     centerImage: tazeImg11,
//     titleH: "مجتمع سنگک",
//     scorePFirst: "جدید",
//     scorePLast: "(340)",
//     typeFoodP: false,
//     preRequestSpan: "پیش‌سفارش",
//     requestText: "پیش‌سفارش",
//     expressText: false,
//     salerText: false,
//     postPriceFirstS: false,
//     postPriceLastS: false,
//   },
//   {
//     backCoverUp: tazeImg3,
//     freeSendingP: "10% تخفیف مخصوص سفارش اول",
//     discountP: false,
//     centerImage: tazeImg31,
//     titleH: "آشکده چوبین (فلسطین)",
//     scorePFirst: false,
//     scorePLast: "(100)",
//     typeFoodP: "آش و حلیم، آش، حلیم",
//     preRequestSpan: false,
//     requestText: false,
//     expressText: false,
//     salerText: "فروشنده",
//     postPriceFirstS: "پیک فروشنده",
//     postPriceLastS: "19,000",
//   },
//   {
//     backCoverUp: tazeImg4,
//     freeSendingP: false,
//     discountP: "5%",
//     centerImage: tazeImg41,
//     titleH: "مجتمع سنگک",
//     scorePFirst: "جدید",
//     scorePLast: false,
//     typeFoodP: false,
//     preRequestSpan: "پیش‌سفارش",
//     requestText: "پیش‌سفارش",
//     expressText: false,
//     salerText: false,
//     postPriceFirstS: false,
//     postPriceLastS: false,
//   },
//   {
//     backCoverUp: tazeImg1,
//     freeSendingP: false,
//     discountP: "20%",
//     centerImage: tazeImg11,
//     titleH: "آش و حلیم کرمانشاهی آوین",
//     scorePFirst: "جدید",
//     scorePLast: "(9)",
//     typeFoodP: "سنتی، آش و حلیم",
//     preRequestSpan: false,
//     RequestText: false,
//     expressText: "اکسپرس",
//     salerText: false,
//     postPriceFirstS: "ارسال اکسپرس",
//     postPriceLastS: "10,500",
//   },
//   {
//     backCoverUp: tazeImg2,
//     freeSendingP: "کیک هویج 125 گرم ارسال رایگان",
//     discountP: "5%",
//     centerImage: tazeImg11,
//     titleH: "مجتمع سنگک",
//     scorePFirst: "جدید",
//     scorePLast: "(340)",
//     typeFoodP: false,
//     preRequestSpan: "پیش‌سفارش",
//     requestText: "پیش‌سفارش",
//     expressText: false,
//     salerText: false,
//     postPriceFirstS: false,
//     postPriceLastS: false,
//   },
//   {
//     backCoverUp: tazeImg3,
//     freeSendingP: "10% تخفیف مخصوص سفارش اول",
//     discountP: false,
//     centerImage: tazeImg31,
//     titleH: "آشکده چوبین (فلسطین)",
//     scorePFirst: false,
//     scorePLast: "(100)",
//     typeFoodP: "آش و حلیم، آش، حلیم",
//     preRequestSpan: false,
//     requestText: false,
//     expressText: false,
//     salerText: "فروشنده",
//     postPriceFirstS: "پیک فروشنده",
//     postPriceLastS: "19,000",
//   },
//   {
//     backCoverUp: tazeImg4,
//     freeSendingP: false,
//     discountP: "5%",
//     centerImage: tazeImg41,
//     titleH: "مجتمع سنگک",
//     scorePFirst: "جدید",
//     scorePLast: false,
//     typeFoodP: false,
//     preRequestSpan: "پیش‌سفارش",
//     requestText: "پیش‌سفارش",
//     expressText: false,
//     salerText: false,
//     postPriceFirstS: false,
//     postPriceLastS: false,
//   },
// ];
export default function MainAllRes() {
  // const [list, setList] = useState([...tazehaList]);
  const [list, setList] = useState([]);

  const endRef = useRef(null);
  const params = useParams();

  useEffect(() => {
    const handleScroll = () => {
      const { top, bottom, height } = endRef.current.getBoundingClientRect();
      if (
        top < height < bottom &&
        bottom <= window.innerHeight &&
        list.length <= 30
      ) {
        // let item = {
        //   backCoverUp: tazeImg1,
        //   freeSendingP: false,
        //   discountP: "20%",
        //   centerImage: tazeImg11,
        //   titleH: "آش و حلیم کرمانشاهی آوین",
        //   scorePFirst: "جدید",
        //   scorePLast: "(9)",
        //   typeFoodP: "سنتی، آش و حلیم",
        //   preRequestSpan: false,
        //   RequestText: false,
        //   expressText: "اکسپرس",
        //   salerText: false,
        //   postPriceFirstS: "ارسال اکسپرس",
        //   postPriceLastS: "10,500",
        // };
        // setList([...list, item]);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [list]);

  useEffect(() => {
    fetch(
      `https://snappfood.ir/search/api/v1/desktop/vendors-list?lat=35.715&long=51.404&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&page=0&page_size=20&filters=%7B%22filters%22:null,%22sortings%22:null%7D&query=&sp_alias=${params.alias}&city_name=tehran&superType=[${params.catId}]&extra-filter=&vendor_title=&locale=fa`
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        let allList = res.data.finalResult;
        const finalList = [];

        for (let i = 0; i < allList.length; i++) {
          finalList.push(allList[i]["data"]);
        }
        setList(finalList);
      });
  }, [params]);

  return (
    <main className={styles["main-MainAllRes"]}>
      <div className={styles.list}>
        {list.map((i) => (
          <RestaurantItem
            class="all"
            key={i.id}
            backCoverUp={i.backgroundImage}
            freeSendingP={i.best_coupon}
            discountP={i.discountValueForView}
            centerImage={i.featured}
            titleH={i.title}
            scorePFirst={"جدید"}
            scorePLast={i.commentCount}
            typeFoodP={i.description}
            postPriceLastS={i.deliveryFee}
          />
        ))}
        <p className={styles.end} ref={endRef}></p>
      </div>
    </main>
  );
}

// {
//   "data": {
//     "count": 1236,
//     "open_count": 893,
//     "finalResult": [
//       {
//         "type": "VENDOR",
//         "data": {
//           "id": 10791,
//           "title": "کترینگ صدرسان (فاطمی)",
//           "code": "0jxzq3",
//           "type": "VENDOR",
//           "score": 0,
//           "highlight": "کترینگ صدرسان (فاطمی)",
//           "category": "",
//           "rating": 8.7641973186662,
//           "description": "ایرانی ,چلو کباب ,کباب ,چلو پلو ایرانی ,نوشیدنی",
//           "commentCount": 58000,
//           "address": "خیابان حجاب، روبه روی خانه والیبال، پلاک ۲۱، کترینگ صدرسان (فاطمی)",
//           "vendorType": "RESTAURANT",
//           "childType": "RESTAURANT",
//           "is_open": true,
//           "is_preorder_enabled": false,
//           "preorderToday": {
//             "weekday": "",
//             "name": "",
//             "startHour": "",
//             "intervals": null
//           },
//           "is_express": false,
//           "isDeliveryFeeHasDiscount": false,
//           "deliveryFee": 0,
//           "deliveryFeeAfterDiscount": 0,
//           "featured": "https://cdn.snappfood.ir/media/cache/vendor_logo/uploads/images/vendors/logos/659e59da89811.jpg",
//           "has_coupon": true,
//           "coupon_count": 1,
//           "best_coupon": "ارسال رایگان و 5% تخفیف ویژه کاربران PRO",
//           "is_pro": true,
//           "deliver": true,
//           "backgroundImage": "https://cdn.snappfood.ir/media/cache/vendor_item_cover/uploads/images/vendors/covers/5bb9afb785e64.jpg",
//           "backgroundImageCustom": "https://cdn.snappfood.ir/w.x.h/uploads/images/vendors/covers/5bb9afb785e64.jpg",
//           "eta": -1,
//           "min_eta": -1,
//           "max_eta": -1,
//           "delay_time": 0,
//           "open_at_eta": false,
//           "action": "",
//           "has_delay": false,
//           "is_pickup": false,
//           "bid": false,
//           "cpc_campaign_hash": null,
//           "discountValueForView": 15,
//           "is_ecommerce": false,
//           "is_economical": false,
//           "is_grocery_vip": false,
//           "is_grocery_returnable": false,
//           "is_grocery_economic": false,
//           "superTypeAlias": "RESTAURANT",
//           "status_title": "ACTIVE",
//           "status_text": "",
//           "status_description": "",
//           "has_cashback": false,
//           "is_eco": false
//         }
//       },
//       {
//         "type": "VENDOR",
//         "data": {
//           "id": 79263,
//           "title": "لانچ باکس (فلسطین)",
//           "code": "0nw472",
//           "type": "VENDOR",
//           "score": 0,
//           "highlight": "لانچ باکس (فلسطین)",
//           "category": "",
//           "rating": 8.5109875562616,
//           "description": "ایرانی ,چلو کباب ,نوشیدنی ,چلو پلو ایرانی",
//           "commentCount": 18705,
//           "address": "میدان فاطمی، خیابان فلسطین، روبه روی کوچه رنجبر، پلاک 505، لانچ باکس (فلسطین)",
//           "vendorType": "RESTAURANT",
//           "childType": "RESTAURANT",
//           "is_open": true,
//           "is_preorder_enabled": false,
//           "preorderToday": {
//             "weekday": "",
//             "name": "",
//             "startHour": "",
//             "intervals": null
//           },
//           "is_express": true,
//           "isDeliveryFeeHasDiscount": false,
//           "deliveryFee": 17000,
//           "deliveryFeeAfterDiscount": 0,
//           "featured": "https://cdn.snappfood.ir/media/cache/vendor_logo/uploads/images/vendors/logos/631cbcc9ce1b2.jpg",
//           "has_coupon": true,
//           "coupon_count": 1,
//           "best_coupon": "ارسال رایگان ویژه کاربران PRO",
//           "is_pro": true,
//           "deliver": true,
//           "backgroundImage": "https://cdn.snappfood.ir/media/cache/vendor_item_cover/uploads/images/vendors/covers/644e39062c931.jpg",
//           "backgroundImageCustom": "https://cdn.snappfood.ir/w.x.h/uploads/images/vendors/covers/644e39062c931.jpg",
//           "eta": -1,
//           "min_eta": -1,
//           "max_eta": -1,
//           "delay_time": 0,
//           "open_at_eta": false,
//           "action": "",
//           "has_delay": false,
//           "is_pickup": false,
//           "bid": false,
//           "cpc_campaign_hash": null,
//           "discountValueForView": 20,
//           "is_ecommerce": false,
//           "is_economical": true,
//           "is_grocery_vip": false,
//           "is_grocery_returnable": false,
//           "is_grocery_economic": false,
//           "superTypeAlias": "RESTAURANT",
//           "status_title": "ACTIVE",
//           "status_text": "",
//           "status_description": "",
//           "has_cashback": false,
//           "is_eco": false
//         }
//       },
//       {
//         "type": "VENDOR",
//         "data": {
//           "id": 235035,
//           "title": "چیکن فامیلی (یوسف آباد)",
//           "code": "0rgm5v",
//           "type": "VENDOR",
//           "score": 0,
//           "highlight": "چیکن فامیلی (یوسف آباد)",
//           "category": "",
//           "rating": 8.7051542745999,
//           "description": "نوشیدنی شرکتی ,نوشیدنی ,سوخاری ,پیتزا",
//           "commentCount": 22442,
//           "address": "یوسف آباد، نبش فتحی شقاقی، چیکن فامیلی (یوسف آباد)",
//           "vendorType": "RESTAURANT",
//           "childType": "RESTAURANT",
//           "is_open": true,
//           "is_preorder_enabled": false,
//           "preorderToday": {
//             "weekday": "",
//             "name": "",
//             "startHour": "",
//             "intervals": null
//           },
//           "is_express": false,
//           "isDeliveryFeeHasDiscount": false,
//           "deliveryFee": 22000,
//           "deliveryFeeAfterDiscount": 0,
//           "featured": "https://cdn.snappfood.ir/media/cache/vendor_logo/uploads/images/vendors/logos/6231d0511986c.jpg",
//           "has_coupon": true,
//           "coupon_count": 2,
//           "best_coupon": "ارسال رایگان و 5% تخفیف ویژه کاربران PRO",
//           "is_pro": true,
//           "deliver": true,
//           "backgroundImage": "https://cdn.snappfood.ir/media/cache/vendor_item_cover/uploads/images/vendors/covers/6661d4f6628c6.png",
//           "backgroundImageCustom": "https://cdn.snappfood.ir/w.x.h/uploads/images/vendors/covers/6661d4f6628c6.png",
//           "eta": -1,
//           "min_eta": -1,
//           "max_eta": -1,
//           "delay_time": 0,
//           "open_at_eta": false,
//           "action": "",
//           "has_delay": false,
//           "is_pickup": false,
//           "bid": false,
//           "cpc_campaign_hash": null,
//           "discountValueForView": 10,
//           "is_ecommerce": false,
//           "is_economical": false,
//           "is_grocery_vip": false,
//           "is_grocery_returnable": false,
//           "is_grocery_economic": false,
//           "superTypeAlias": "RESTAURANT",
//           "status_title": "ACTIVE",
//           "status_text": "",
//           "status_description": "",
//           "has_cashback": false,
//           "is_eco": false
//         }
//       },
//       {
//         "type": "VENDOR",
//         "data": {
//           "id": 86309,
//           "title": "لوکال رژیمی (فلسطین)",
//           "code": "0qedmd",
//           "type": "VENDOR",
//           "score": 0,
//           "highlight": "لوکال رژیمی (فلسطین)",
//           "category": "",
//           "rating": 8.6083213773314,
//           "description": "نوشیدنی شرکتی ,نوشیدنی ,سالاد ,عرقیجات و شربت ,سس",
//           "commentCount": 5396,
//           "address": "میدان فاطمی، خیابان فلسطین، روبه روی کوچه رنجبر، پلاک 505، لوکال (فلسطین)",
//           "vendorType": "RESTAURANT",
//           "childType": "RESTAURANT",
//           "is_open": true,
//           "is_preorder_enabled": false,
//           "preorderToday": {
//             "weekday": "",
//             "name": "",
//             "startHour": "",
//             "intervals": null
//           },
//           "is_express": true,
//           "isDeliveryFeeHasDiscount": false,
//           "deliveryFee": 17000,
//           "deliveryFeeAfterDiscount": 0,
//           "featured": "https://cdn.snappfood.ir/media/cache/vendor_logo/uploads/images/vendors/logos/6177fbcb7bc45.png",
//           "has_coupon": true,
//           "coupon_count": 1,
//           "best_coupon": "ارسال رایگان ویژه کاربران PRO",
//           "is_pro": true,
//           "deliver": true,
//           "backgroundImage": "https://cdn.snappfood.ir/media/cache/vendor_item_cover/uploads/images/vendors/covers/644cb49b34daa.jpg",
//           "backgroundImageCustom": "https://cdn.snappfood.ir/w.x.h/uploads/images/vendors/covers/644cb49b34daa.jpg",
//           "eta": -1,
//           "min_eta": -1,
//           "max_eta": -1,
//           "delay_time": 0,
//           "open_at_eta": false,
//           "action": "",
//           "has_delay": false,
//           "is_pickup": false,
//           "bid": false,
//           "cpc_campaign_hash": null,
//           "discountValueForView": 0,
//           "is_ecommerce": false,
//           "is_economical": false,
//           "is_grocery_vip": false,
//           "is_grocery_returnable": false,
//           "is_grocery_economic": false,
//           "superTypeAlias": "RESTAURANT",
//           "status_title": "ACTIVE",
//           "status_text": "",
//           "status_description": "",
//           "has_cashback": false,
//           "is_eco": false
//         }
//       },
//     ]
//   }
// }
