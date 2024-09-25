import styles from "./MenuOfRes.module.css";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { TbGift } from "react-icons/tb";
import Error from "../../../../Error/Error";

export default function MenuOfRes() {
  const [isLoading, setIsLoading] = useState(false);
  const [listTitles, setListTitles] = useState([]);
  const [error, setError] = useState();

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // 403 status code
        // const response = await fetch(
        //   `https://snappfood.ir/mobile/v2/restaurant/details/dynamic?lat=35.715&long=51.404&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&vendorCode=${params.code}&locationCacheKey=lat%3D35.715%26long%3D51.404&show_party=1&fetch-static-data=1&locale=fa`
        // );

        const response = await fetch(
          `https://snappfood.ir/mobile/v2/restaurant/details/dynamic?vendorCode=${params.code}&optionalClient=PWA&isPickup=0&show_party=1&fetch-static-data=1&superType=protein&client=PWA&deviceType=PWA&appVersion=5.6.6&optionalVersion=5.6.6&UDID=14cf6d6f-1892-490e-bb09-de662e8563b3`
        );

        if (!response.ok) {
          throw new Error("اطلاعات به درستی دریافت نشده است.");
        }
        const res = await response.json();

        const finalArray = [];
        const oldArray = res.data.menus;
        for (let i = 0; i < oldArray.length; i++) {
          console.log(oldArray[i]["category"]);
          finalArray.push(oldArray[i]["category"]);
        }
        setListTitles(finalArray);

        setError();
      } catch (error) {
        // setError("خطایی رخ داده است، مجددا تلاش کنید.");
        setError(error.message);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (error) {
    return <Error title={error} />;
  }

  return (
    <>
      {!isLoading && (
        <div className={styles["menu-of-res-components"]}>
          {listTitles.map((item, index) => {
            return item === "کوپن‌ها" ? (
              <div className={styles.kopen} key={index}>
                <button>
                  <TbGift fontSize="1.2rem" color="#444" />
                </button>
                <p>{item}</p>
              </div>
            ) : (
              <div key={index}>{item}</div>
            );
          })}
        </div>
      )}
    </>
  );
}
