import styles from "./SideRightEachRes.module.css";
import InfoOfRes from "./InfoOfRes/InfoOfRes";
import MenuOfRes from "./MenuOfRes/MenuOfRes";
import Error from "../../../Error/Error";

import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ModalComments from "../../../Modal/ModalComments/ModalComments";
import ModalSpecialMap from "../../../Modal/ModalSpecialMap/ModalSpecialMap";

function CommentInfo(props) {
  return (
    <div className={styles.comments} onClick={props.showModalComments}>
      <AiOutlineExclamationCircle color="#26d354" fontSize="1rem" />
      <p> اطلاعات و نظرات</p>
    </div>
  );
}

export default function SideRightEachRes({ scrollposition }) {
  const [isShowModalComments, setIsShowModalComments] = useState();
  const [isShowModalSpecialMap, setIsShowModalSpecialMap] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [listComment, setListComment] = useState([]);
  const [sortParams, setSortParams] = useState([]);
  const [error, setError] = useState();
  const params = useParams();
  console.log(params.code);

  const showModalComments = () => {
    setIsShowModalComments(1);
  };
  const hideModalComments = () => {
    setIsShowModalComments(0);
  };

  const showModalSpecialMap = () => {
    setIsShowModalSpecialMap(1);
  };
  const hideModalSpecialMap = () => {
    setIsShowModalSpecialMap(0);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://snappfood.ir/mobile/v1/restaurant/vendor-comment?lat=35.774&long=51.418&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&vendorCode=${params.code}&page=0&sortType=score&locale=fa`
        );
        if (!response.ok) {
          throw new Error("اطلاعات به درستی دریافت نشده است.");
        }
        const res = await response.json();
        setListComment(res.data.comments);
        setSortParams(res.data.sort.params);
      } catch (error) {
        setError("خطایی رخ داده است، مجددا تلاش کنید.");
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
      {isShowModalComments === 1 && (
        <ModalComments
          hideModalComments={hideModalComments}
          showModalSpecialMap={showModalSpecialMap}
          listComment={listComment}
          sortParams={sortParams}
        />
      )}
      {isShowModalSpecialMap === 1 && (
        <ModalSpecialMap
          title={"آش و حلیم ولیعصر"}
          hideModalSpecialMap={hideModalSpecialMap}
        />
      )}
      {!isLoading && (
        <div
          className={`${styles["side-Right-each-res-component"]} ${
            scrollposition && styles.fix
          }`}
        >
          <InfoOfRes />
          <CommentInfo showModalComments={showModalComments} />
          <MenuOfRes />
        </div>
      )}
    </>
  );
}
