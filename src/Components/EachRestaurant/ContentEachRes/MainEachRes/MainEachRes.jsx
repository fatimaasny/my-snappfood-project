import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./MainEachRes.module.css";
import Error from "../../../Error/Error";
import CouponsList from "./CouponsList/CouponsList";
import OtherList from "./OtherList/OtherList";

// api
import { detailsDynamic1 } from "../../../../CallApi/CallApi";
import { coupons } from "../../../../CallApi/CallApi";

// custom hooks
import { useMainEachResOtherList } from "../../../../hooks/useFetch";
import { useMainEachResCoupons } from "../../../../hooks/useFetch";

export default function MainEachRes() {
  const params = useParams();

  // const [isLoadingTitles, setIsLoadingTitles] = useState(false);
  // const [listTitles, setListTitles] = useState([]);
  // const [error, setError] = useState();

  // useEffect(() => {
  //   const fetchDataTitles = async () => {
  //     setIsLoadingTitles(true);
  //     try {
  //       const res = await detailsDynamic1(params.code);
  //       setListTitles(res.data.menus);
  //     } catch (error) {
  //       setError("اطلاعات سایر تایتل ها به درستی دریافت نشده است.");
  //     }
  //     setIsLoadingTitles(false);
  //   };
  //   fetchDataTitles();
  // }, [params]);

  const { isLoadingTitles, listTitles, error } = useMainEachResOtherList(
    detailsDynamic1,
    params
  );

  // const [isLoadingCoupons, setIsLoadingCoupons] = useState(false);
  // const [listCoupons, setListCoupons] = useState([]);
  // useEffect(() => {
  //   const fetchDataCoupons = async () => {
  //     setIsLoadingCoupons(true);
  //     try {
  //       const res = await coupons(params.code);
  //       setListCoupons(res.data.coupons);
  //     } catch (error) {
  //       // setError("اطلاعات کوپن ها به درستی دریافت نشده است.");
  //       setListCoupons([]);
  //     }
  //     setIsLoadingCoupons(false);
  //   };
  //   fetchDataCoupons();
  // }, [params]);

  const { isLoadingCoupons, listCoupons } = useMainEachResCoupons(
    detailsDynamic1,
    params
  );

  if (error) {
    return <Error title={error} />;
  }
  return (
    <div className={styles["main-each-res-component"]}>
      {/* {!isLoadingCoupons && listCoupons.length > 0 && (
        <CouponsList list={listCoupons} />
      )} */}
      {!isLoadingTitles && listTitles.length > 0 && (
        <OtherList list={listTitles} />
      )}
    </div>
  );
}
