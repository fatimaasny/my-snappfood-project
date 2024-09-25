import styles from "./InfoOfRes.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Card from "../../../../Card/Card";
import Discount from "../../../../Discount/Discount";
import Error from "../../../../Error/Error";

import { IoMdStar } from "react-icons/io";

function Info(props) {
  return (
    <div className={styles.info}>
      <div className={styles.title}>
        <div className={styles.score}>
          <IoMdStar color="#f8d527" fontSize="1rem" />
          <span>4.4</span>
          {props.commentCount > 0 && (
            <p>
              ( <span>{props.commentCount}</span> امتیاز)
            </p>
          )}
        </div>
        <Discount discount={"12%"} className={styles.discount} />
      </div>
      <h4>{props.title}</h4>
    </div>
  );
}

export default function InfoOfRes() {
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState({ title: "", commentCount: 0, logo: "" });
  const [error, setError] = useState();

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://snappfood.ir/mobile/v2/restaurant/details/dynamic?vendorCode=${params.code}&optionalClient=PWA&isPickup=0&show_party=1&fetch-static-data=1&superType=BAKERY&client=PWA&deviceType=PWA&appVersion=5.6.6&optionalVersion=5.6.6&UDID=14cf6d6f-1892-490e-bb09-de662e8563b3`
        );
        if (!response.ok) {
          throw new Error("اطلاعات به درستی دریافت نشده است.");
        }
        const res = await response.json();
        setItem({
          title: res.data.vendor.title,
          commentCount: res.data.vendor.commentCount,
          logo: res.data.vendor.logo,
        });
        setError();
      } catch (err) {
        setError("خطایی رخ داده است، مجددا اقدام کنید.");
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
        <div className={styles["info-of-res-component"]}>
          <Card>
            <img
              className={styles["image-res"]}
              src={item.logo}
              alt="image-res1"
            />
          </Card>
          <Info title={item.title} commentCount={item.commentCount} />
        </div>
      )}
    </>
  );
}
