import styles from "./InfoOfRes.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { IoMdStar } from "react-icons/io";

import Card from "../../../../Card/Card";
import Discount from "../../../../Discount/Discount";
import Error from "../../../../Error/Error";

// api
import { detailsDynamic1 } from "../../../../../CallApi/CallApi";

// custom hook
import { useInfoOfRes } from "../../../../../hooks/useFetch";

function Info(props) {
  return (
    <div className={styles.info}>
      <div className={styles.title}>
        <div className={styles.score}>
          <IoMdStar color="#f8d527" fontSize="1rem" />
          <span>4.4</span>
          {props.commentCount > 0 && (
            <p>
              (<span>{props.commentCount}</span> امتیاز)
            </p>
          )}
        </div>
        {props.discount !== 0 && props.discount > 0 && (
          <Discount discount={props.discount} className={styles.discount} />
        )}
      </div>
      <h4>{props.title}</h4>
    </div>
  );
}

export default function InfoOfRes() {
  const params = useParams();

  // const [isLoading, setIsLoading] = useState(false);
  // const [item, setItem] = useState({ title: "", commentCount: 0, logo: "" });
  // const [error, setError] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const res = await detailsDynamic1(params.code);

  //       setItem({
  //         title: res.data.vendor.title,
  //         commentCount: res.data.vendor.commentCount,
  //         logo: res.data.vendor.logo,
  //         discount: res.data.vendor.discountValueForView,
  //       });
  //       setError();
  //     } catch (err) {
  //       setError("خطایی رخ داده است، مجددا اقدام کنید.");
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, []);

  const { isLoading, item, error } = useInfoOfRes(detailsDynamic1, params);

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
          <Info
            title={item.title}
            commentCount={item.commentCount}
            discount={item.discount}
          />
        </div>
      )}
    </>
  );
}
