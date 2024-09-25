import styles from "./MainAllRes.module.css";
import { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import RestaurantItem from "../../../../../Components/RestaurantItem/RestaurantItem";
import Error from "../../../../Error/Error";
import Loading from "../../../../Loading/Loading";

export default function MainAllRes() {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);
  const [error, setError] = useState();

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
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://snappfood.ir/search/api/v1/desktop/vendors-list?lat=35.715&long=51.404&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&page=0&page_size=20&filters=%7B%22filters%22:null,%22sortings%22:null%7D&query=&sp_alias=${params.alias}&city_name=tehran&superType=[${params.catId}]&extra-filter=&vendor_title=&locale=fa`
        );
        if (!response.ok) {
          throw new Error("اطلاعات به درستی دریافت نشده است.");
        }
        const res = await response.json();

        let allList = res.data.finalResult;
        const finalList = [];

        for (let i = 0; i < allList.length; i++) {
          finalList.push(allList[i]["data"]);
        }
        setList(finalList);
        setError();
      } catch (error) {
        setError("خطایی رخ داده است بعدا مجدد تلاش کنید.");
      }
      setIsLoading(false);
      console.log(list);
    };
    fetchData();
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
            {list.map((i) =>
            
            
            (
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
            )
            
            
            )}
            <p className={styles.end} ref={endRef}></p>
          </div>
        </main>
      )}
    </>
  );
}
