import styles from "./MainAllRes.module.css";
import { useState, useRef, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

import RestaurantItem from "../../../../../Components/RestaurantItem/RestaurantItem";
import Error from "../../../../Error/Error";
import Loading from "../../../../Loading/Loading";

// api
import { vendorListInMainAllRes } from "../../../../../CallApi/CallApi";

// custom hooks

import { useFetch2 } from "../../../../../hooks/useFetch";

export default function MainAllRes() {
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    console.log("location : ", location);
  }, [location]);

  // TODO
  //  یک لیست کمکی داشته باشم که بیام 5 تا 5 تا از لیست اصلی بگیرم و بریزم توش تا نمایشش بده و هر
  //  بار ایندکس خونه اخر رو هم نگهدارم. که با اسکرول خوردن هی اضافه بشه به لیست.

  // const endRef = useRef(null);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const { top, bottom, height } = endRef.current.getBoundingClientRect();
  //     if (
  //       top < height < bottom &&
  //       bottom <= window.innerHeight &&
  //       list.length <= 30
  //     ) {
  //       // let item = {
  //       //   backCoverUp: tazeImg1,
  //       //   freeSendingP: false,
  //       //   discountP: "20%",
  //       //   centerImage: tazeImg11,
  //       //   titleH: "آش و حلیم کرمانشاهی آوین",
  //       //   scorePFirst: "جدید",
  //       //   scorePLast: "(9)",
  //       //   typeFoodP: "سنتی، آش و حلیم",
  //       //   preRequestSpan: false,
  //       //   RequestText: false,
  //       //   expressText: "اکسپرس",
  //       //   salerText: false,
  //       //   postPriceFirstS: "ارسال اکسپرس",
  //       //   postPriceLastS: "10,500",
  //       // };
  //       // setList([...list, item]);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [list]);

  const { isLoading, data, error, fetchData, setData } = useFetch2(
    vendorListInMainAllRes,
    (data) => {
      let allList = data.data.finalResult;
      const finalList = [];
      for (let i = 0; i < allList.length; i++) {
        finalList.push(allList[i]["data"]);
      }
      return finalList;
    }
  );

  useEffect(() => {
    const process = async () => {
      await fetchData(params);
    };
    process();
  }, [params]);

  if (error) {
    return <Error title={error} />;
  }
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main className={styles["main-MainAllRes"]}>
          <div className={styles.list}>
            {data.map((i) => (
              <Link to={`/item/${i.code}`}>
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
              </Link>
            ))}
            {/* <p className={styles.end} ref={endRef}></p> */}
          </div>
        </main>
      )}
    </>
  );
}
