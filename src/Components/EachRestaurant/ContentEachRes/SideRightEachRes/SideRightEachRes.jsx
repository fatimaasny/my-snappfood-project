import styles from "./SideRightEachRes.module.css";
import InfoOfRes from "./InfoOfRes/InfoOfRes";
import MenuOfRes from "./MenuOfRes/MenuOfRes";

import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useState } from "react";
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

export default function SideRightEachRes({ listOfTitles, listComments }) {
  const [isShowModalComments, setIsShowModalComments] = useState();
  const [isShowModalSpecialMap, setIsShowModalSpecialMap] = useState();

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
  return (
    <>
      {isShowModalComments === 1 && (
        <ModalComments
          hideModalComments={hideModalComments}
          showModalSpecialMap={showModalSpecialMap}
          listComments={listComments}
        />
      )}
      {isShowModalSpecialMap === 1 && (
        <ModalSpecialMap
          title={"آش و حلیم ولیعصر"}
          hideModalSpecialMap={hideModalSpecialMap}
        />
      )}
      <div className={styles["side-Right-each-res-component"]}>
        <InfoOfRes />
        <CommentInfo showModalComments={showModalComments} />
        <MenuOfRes listOfTitles={listOfTitles} />
      </div>
    </>
  );
}
