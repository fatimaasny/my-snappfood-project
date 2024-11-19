import styles from "./MainAllRes.module.css";
import { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import RestaurantItem from "../../../../../Components/RestaurantItem/RestaurantItem";
import Error from "../../../../Error/Error";
import Loading from "../../../../Loading/Loading";

// api
import { vendorList } from "../../../../../CallApi/CallApi";
import { categoryVendorList } from "../../../../../CallApi/CallApi";
import { subCategoryVendorList } from "../../../../../CallApi/CallApi";
import { sortingVendorList } from "../../../../../CallApi/CallApi";
import { sortingCategoryVendorList } from "../../../../../CallApi/CallApi";
import { sortingSubofCategoryVendorList } from "../../../../../CallApi/CallApi";

import { filterPriceVendorList } from "../../../../../CallApi/CallApi";
import { filterPriceSortingVendorList } from "../../../../../CallApi/CallApi";
import { filterPriceSubOrCatValueVendorList } from "../../../../../CallApi/CallApi";
import { filterPriceSortingSubOrCatValueVendorList } from "../../../../../CallApi/CallApi";

// custom hooks

import { useFetch2 } from "../../../../../hooks/useFetch";

export default function MainAllRes() {
  const params = useParams();
  // let res = [];

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

  // const [isLoading, setIsLoading] = useState(false);
  // const [list, setList] = useState([]);
  // const [error, setError] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       // **********************   filterPriceVendorList ****************
  //       if (
  //         params.filterPrice !== "null" &&
  //         params.sorting === "null" &&
  //         params.catValue === "null" &&
  //         params.subValue === "null"
  //       ) {
  //         res = await filterPriceVendorList(
  //           params.alias,
  //           params.id,
  //           params.filterPrice
  //         );
  //       }
  //       // **********************   filterPriceSortingVendorList ****************
  //       else if (
  //         params.filterPrice !== "null" &&
  //         params.sorting !== "null" &&
  //         params.catValue === "null" &&
  //         params.subValue === "null"
  //       ) {
  //         res = await filterPriceSortingVendorList(
  //           params.alias,
  //           params.id,
  //           params.filterPrice,
  //           params.sorting
  //         );
  //       }
  //       // **********************   filterPriceSubOrCatValueVendorList ****************
  //       else if (
  //         params.filterPrice !== "null" &&
  //         params.sorting === "null" &&
  //         params.catValue !== "null"
  //       ) {
  //         res = await filterPriceSubOrCatValueVendorList(
  //           params.alias,
  //           params.id,
  //           params.filterPrice,
  //           params.catValue,
  //           params.subValue
  //         );
  //       }
  //       // **********************   filterPriceSortingSubOrCatValueVendorList ****************
  //       else if (
  //         params.filterPrice !== "null" &&
  //         params.sorting !== "null" &&
  //         params.catValue !== "null"
  //       ) {
  //         res = await filterPriceSortingSubOrCatValueVendorList(
  //           params.alias,
  //           params.id,
  //           params.sorting,
  //           params.filterPrice,
  //           params.catValue,
  //           params.subValue
  //         );
  //       }

  //       //

  //       // **********************   sortingSubofCategoryVendorList ****************
  //       else if (
  //         params.filterPrice === "null" &&
  //         params.sorting !== "null" &&
  //         params.catValue !== "null" &&
  //         params.subValue !== "null"
  //       ) {
  //         res = await sortingSubofCategoryVendorList(
  //           params.alias,
  //           params.catId,
  //           params.sorting,
  //           params.catValue,
  //           params.subValue
  //         );
  //       }
  //       // **********************   sortingCategoryVendorList ****************
  //       else if (
  //         params.filterPrice === "null" &&
  //         params.sorting !== "null" &&
  //         params.catValue !== "null" &&
  //         params.subValue === "null"
  //       ) {
  //         res = await sortingCategoryVendorList(
  //           params.alias,
  //           params.catId,
  //           params.sorting,
  //           params.catValue
  //         );
  //       }
  //       // **********************   sortingVendorList ****************
  //       else if (
  //         params.filterPrice === "null" &&
  //         params.sorting !== "null" &&
  //         params.catValue === "null" &&
  //         params.subValue === "null"
  //       ) {
  //         res = await sortingVendorList(
  //           params.alias,
  //           params.catId,
  //           params.sorting
  //         );
  //       }
  //       // **********************   categoryVendorList ****************
  //       else if (
  //         params.filterPrice === "null" &&
  //         params.sorting === "null" &&
  //         params.catValue !== "null" &&
  //         params.subValue === "null"
  //       ) {
  //         res = await categoryVendorList(
  //           params.alias,
  //           params.catId,
  //           params.catValue
  //         );
  //       }
  //       // **********************   subCategoryVendorList ****************
  //       else if (
  //         params.filterPrice === "null" &&
  //         params.sorting === "null" &&
  //         params.catValue !== "null" &&
  //         params.subValue !== "null"
  //       ) {
  //         res = await subCategoryVendorList(
  //           params.alias,
  //           params.catId,
  //           params.catValue,
  //           params.subValue
  //         );
  //       }
  //       // **********************   vendorList ****************
  //       else if (
  //         params.filterPrice === "null" &&
  //         params.sorting === "null" &&
  //         params.catValue === "null" &&
  //         params.subValue === "null"
  //       ) {
  //         res = await vendorList(params.alias, params.catId);
  //       }

  //       let allList = res.data.finalResult;
  //       const finalList = [];

  //       for (let i = 0; i < allList.length; i++) {
  //         finalList.push(allList[i]["data"]);
  //       }
  //       setList(finalList);
  //       setError();
  //     } catch (error) {
  //       setError("خطایی رخ داده است بعدا مجدد تلاش کنید.");
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, [params]);

  const [apiCase, setApiCase] = useState(10);
  const [calledApi, setCalledApi] = useState(() => vendorList);

  useEffect(() => {
    const apiFunction = async () => {
      //       // **********************   filterPriceVendorList ****************

      if (
        params.filterPrice !== "null" &&
        params.sorting === "null" &&
        params.catValue === "null" &&
        params.subValue === "null"
      ) {
        setApiCase(1);
        setCalledApi(() => filterPriceVendorList);
      }
      //       // **********************   filterPriceSortingVendorList ****************
      else if (
        params.filterPrice !== "null" &&
        params.sorting !== "null" &&
        params.catValue === "null" &&
        params.subValue === "null"
      ) {
        setApiCase(2);
        setCalledApi(() => filterPriceSortingVendorList);
      }
      //       // **********************   filterPriceSubOrCatValueVendorList ****************
      else if (
        params.filterPrice !== "null" &&
        params.sorting === "null" &&
        params.catValue !== "null"
      ) {
        setApiCase(3);
        setCalledApi(() => filterPriceSubOrCatValueVendorList);
      }
      //       // **********************   filterPriceSortingSubOrCatValueVendorList ****************
      else if (
        params.filterPrice !== "null" &&
        params.sorting !== "null" &&
        params.catValue !== "null"
      ) {
        setApiCase(4);
        setCalledApi(() => filterPriceSortingSubOrCatValueVendorList);
      }

      //       // **********************   sortingSubofCategoryVendorList ****************
      else if (
        params.filterPrice === "null" &&
        params.sorting !== "null" &&
        params.catValue !== "null" &&
        params.subValue !== "null"
      ) {
        setApiCase(5);
        setCalledApi(() => sortingSubofCategoryVendorList);
      }
      //       // **********************   sortingCategoryVendorList ****************
      else if (
        params.filterPrice === "null" &&
        params.sorting !== "null" &&
        params.catValue !== "null" &&
        params.subValue === "null"
      ) {
        setApiCase(6);
        setCalledApi(() => sortingCategoryVendorList);
      }
      //       // **********************   sortingVendorList ****************
      else if (
        params.filterPrice === "null" &&
        params.sorting !== "null" &&
        params.catValue === "null" &&
        params.subValue === "null"
      ) {
        setApiCase(7);
        setCalledApi(() => sortingVendorList);
      }
      //       // **********************   categoryVendorList ****************
      else if (
        params.filterPrice === "null" &&
        params.sorting === "null" &&
        params.catValue !== "null" &&
        params.subValue === "null"
      ) {
        setApiCase(8);
        setCalledApi(() => categoryVendorList);
      }
      //       // **********************   subCategoryVendorList ****************
      else if (
        params.filterPrice === "null" &&
        params.sorting === "null" &&
        params.catValue !== "null" &&
        params.subValue !== "null"
      ) {
        setApiCase(9);
        setCalledApi(() => subCategoryVendorList);
      }
      //       // **********************   vendorList ****************
      else if (
        params.filterPrice === "null" &&
        params.sorting === "null" &&
        params.catValue === "null" &&
        params.subValue === "null"
      ) {
        setApiCase(10);
        setCalledApi(() => vendorList);
      }
    };
    apiFunction();
    console.log("calledApi: ", calledApi);
  }, [params]);

  const { isLoading, data, error, fetchData, setData } = useFetch2(
    calledApi,
    (data) => {
      // TODO
      // اینجا رو چک کنم ببینم چی میده خروجی
      let allList = data.data.finalResult;
      console.log("allList in MainAllRes: ", allList);
      const finalList = [];
      for (let i = 0; i < allList.length; i++) {
        finalList.push(allList[i]["data"]);
      }
      return finalList;
    }
  );

  useEffect(() => {
    const process = async () => {
      console.log("case: ", apiCase);
      switch (apiCase) {
        case 1:
          await fetchData(params.alias, params.catId, params.filterPrice);

        case 2:
          await fetchData(
            params.alias,
            params.catId,
            params.filterPrice,
            params.sorting
          );

        case 3:
          await fetchData(
            params.alias,
            params.catId,
            params.filterPrice,
            params.catValue,
            params.subValue
          );

        case 4:
          await fetchData(
            params.alias,
            params.catId,
            params.sorting,
            params.filterPrice,
            params.catValue,
            params.subValue
          );

        case 5:
          await fetchData(
            params.alias,
            params.catId,
            params.sorting,
            params.catValue,
            params.subValue
          );

        case 6:
          await fetchData(
            params.alias,
            params.catId,
            params.sorting,
            params.catValue
          );

        case 7:
          await fetchData(params.alias, params.catId, params.sorting);

        case 8:
          await fetchData(params.alias, params.catId, params.catValue);

        case 9:
          await fetchData(
            params.alias,
            params.catId,
            params.catValue,
            params.subValue
          );

        case 10:
          await fetchData(params.alias, params.catId);
      }
    };
    process();
  }, [params]);

  // console.log("*********** end ***********");
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
