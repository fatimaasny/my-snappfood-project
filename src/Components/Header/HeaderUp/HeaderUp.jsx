import { useState } from "react";
import styles from "./HeaderUp.module.css";

import Button from "../../Button/Button";
import ModalLogin from "../../Modal/ModalLogin/ModalLogin";
import ModalConfirmLogin from "../../Modal/ModalConfirmLogin/ModalConfirmLogin";
import ModalSearch from "../../Modal/ModalSearch/ModalSearch";
import ModalMap from "../../Modal/ModalMap/ModalMap";

import snaplogo from "../../../Images/Header/HeaderUp/snappfood.svg";

import { MdMyLocation } from "react-icons/md";
import { IoStorefrontOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import { GoPerson } from "react-icons/go";

function Logo(props) {
  return (
    <a href="#" className={styles["logo-snapp"]}>
      <img src={snaplogo} alt="snapfood-logo" />
    </a>
  );
}
function Map(props) {
  return (
    <div className={styles.map} onClick={props.showModalMapHandler}>
      <MdMyLocation fontSize="1.5rem" color="#a9a7a7" />
      <div className={styles.addresstext}>
        <p>آدرس انتخابی</p>
        <div className={styles.text}>
          <p id={styles["address-map"]}>
            گچساران، پانصد دستگاه سمت راست خیابان ششم
          </p>
          <FaAngleDown color="#ff00b3" fontSize="1rem" />
        </div>
      </div>
    </div>
  );
}
function Search(props) {
  return (
    <div
      className={styles["search-box"]}
      onClick={() => {
        props.showModalSearchHandler();
        props.setSearchBox("");
      }}
    >
      <FiSearch
        fontSize="1.2rem"
        color={props.isShowModalSearch ? "black" : "#aaa"}
      />
      <input
        type="text"
        value={props.searchBox}
        onChange={(e) => {
          props.setSearchBox(e.target.value);
        }}
      />
    </div>
  );
}
function RightContent(props) {
  return (
    <div className={styles.right}>
      <Logo />
      <Map showModalMapHandler={props.showModalMapHandler} />
      <Search
        isShowModalSearch={props.isShowModalSearch}
        showModalSearchHandler={props.showModalSearchHandler}
        searchBox={props.searchBox}
        setSearchBox={props.setSearchBox}
      />
    </div>
  );
}
function LeftContent(props) {
  return (
    <>
      <div className={styles.left}>
        <Button
          title={"ثبت‌نام فروشندگان"}
          icon={<IoStorefrontOutline fontSize="1.3rem" color="#666" />}
          className={styles["no-background"]}
        />
        <Button
          title={"ورود یا عضویت"}
          onClick={props.showModalHandler}
          className={styles.background}
        />
      </div>
      <div className={styles.lefticons}>
        <button
          // isShowModalSearch={props.isShowModalSearch}
          // showModalSearchHandler={props.showModalSearchHandler}
          // searchBox={props.searchBox}
          // setSearchBox={props.setSearchBox}
          onClick={() => {
            props.showModalSearchHandler();
            console.log("click");
          }}
        >
          <FiSearch fontSize="1.3rem" color="#666" />
        </button>
        <button onClick={props.showModalHandler}>
          <GoPerson fontSize="1.3rem" color="#666" />
        </button>
      </div>
    </>
  );
}

export default function HeaderUp() {
  const [mobile, setMobile] = useState("");
  const [searchBox, setSearchBox] = useState("جست‌و‌جو در اسنپ‌فود");
  const [isShowModal, setIsShowModal] = useState();
  const [active, setActive] = useState();
  const [isShowModalConfirm, setIsShowModalConfirm] = useState();
  const [isShowModalSearch, setIsShowModalSearch] = useState();
  const [isShowModalMap, setIsShowModalMap] = useState();
  const [inputCity, setInputCity] = useState("");

  const showModalHandler = () => {
    setIsShowModal(1);
  };
  const hideModalHandler = () => {
    setIsShowModal(0);
  };
  const mobileCheckedHandler = async (e) => {
    console.log(e.target.value);
    await setMobile(e.target.value);
    const result = await regexHandler(e.target.value);
    result ? await setActive(1) : await setActive(0);
  };
  const regexHandler = (phone) => {
    console.log("phone:", phone);
    const regex = /^0(9)\d{9}$/;
    const result = regex.test(phone);
    return result;
  };
  const showModalConfirmHandler = () => {
    setIsShowModalConfirm(1);
  };
  const hideModalConfirmHandler = () => {
    setIsShowModalConfirm(0);
  };
  const showModalSearchHandler = () => {
    setIsShowModalSearch(1);
  };
  const hideModalSearchHandler = () => {
    setIsShowModalSearch(0);
  };
  const showModalMapHandler = () => {
    setIsShowModalMap(1);
  };
  const hideModalMapHandler = () => {
    setIsShowModalMap(0);
  };

  const inputCityHandler = (e) => {
    setInputCity(e.target.value);
  };
  const liInputHandler = (value) => {
    setInputCity(value);
  };

  return (
    <>
      {isShowModal === 1 && (
        <ModalLogin
          // showModalHandler={showModalHandler}
          onConfirm={hideModalHandler}
          mobile={mobile}
          // setMobile={setMobile}
          mobileCheckedHandler={mobileCheckedHandler}
          active={active}
          // setActive={setActive}
          showModalConfirmHandler={showModalConfirmHandler}
        />
      )}
      {isShowModalConfirm === 1 && (
        <ModalConfirmLogin
          mobile={mobile}
          showModalHandler={showModalHandler}
          onConfirm={hideModalConfirmHandler}
          setMobile={setMobile}
          setActive={setActive}
        />
      )}
      {isShowModalSearch === 1 && (
        <ModalSearch hideModalSearchHandler={hideModalSearchHandler} />
      )}
      {isShowModalMap === 1 && (
        <ModalMap
          hideModalMapHandler={hideModalMapHandler}
          inputCity={inputCity}
          inputCityHandler={inputCityHandler}
          liInputHandler={liInputHandler}
        />
      )}
      <header className={styles["header-up"]}>
        <RightContent
          showModalMapHandler={showModalMapHandler}
          isShowModalSearch={isShowModalSearch}
          showModalSearchHandler={showModalSearchHandler}
          searchBox={searchBox}
          setSearchBox={setSearchBox}
        />
        <LeftContent
          showModalHandler={showModalHandler}
          showModalSearchHandler={showModalSearchHandler}
        />
      </header>
    </>
  );
}
