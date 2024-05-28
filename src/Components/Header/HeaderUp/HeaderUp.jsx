import snaplogo from "../../../Images/Header/HeaderUp/snappfood.svg";
import location from "../../../Images/Header/HeaderUp/location.svg";
import searchicon from "../../../Images/Header/HeaderUp/search.svg";
import store from "../../../Images/Header/HeaderUp/store.svg";

import styles from "./HeaderUp.module.css";
import Button from "../../Button/Button";
import { useState } from "react";
import ModalLogin from "../../../Modal/ModalLogin";

export default function HeaderUp() {
  const [isShowModal, setIsShowModal] = useState(0);
  const showModalHandler = () => {
    setIsShowModal(1);
  };
  const hideModalHandler = () => {
    setIsShowModal(0);
  };
  return (
    <>
      {isShowModal && <ModalLogin onConfirm={hideModalHandler} />}
      <header className={styles["header-up"]}>
        <div className={styles.right}>
          <a href="#" className={styles["logo-snapp"]}>
            <img src={snaplogo} alt="snapfood-logo" />
          </a>
          <div className={styles.map}>
            <img src={location} alt="location.svg" />
            <div>
              <p>آدرس انتخابی</p>
              <p id="address-map">
                {" "}
                گچساران، پانصد دستگاه سمت راست خیابان ششم{" "}
              </p>
            </div>
          </div>
          <div className={styles["search-box"]}>
            <img src={searchicon} alt="searchicon" />
            <input type="text" placeholder="جست‌و‌جو در اسنپ‌فود" />
          </div>
        </div>
        <div className={styles.left}>
          <Button
            title={"ثبت‌نام فروشندگان"}
            image={store}
            class={"noBackground"}
          />
          {/* <a href="#" className={styles["costumers-register"]}>
          <img src={store} alt="store.svg" />
          <p>ثبت‌نام فروشندگان</p>
        </a> */}
          {/* <button className={styles["login-button"]}>
          <span>ورود</span>
          <span className={styles["second-span"]}>یا</span>
          <span>عضویت</span>
        </button> */}
          <Button title={"ورود یا عضویت"} onClick={showModalHandler} />
        </div>

        {/* حالت وقتی هست که طرف وارد شده  */}
        {/* <div className="left">
        <div className="search">
          <img src={searchicon} alt="" />
        </div>
        <a href="#" className="profile-icon">
          <img src={profileicon} alt="" />
        </a>
        <a href="#" className="order-icon">
          <img src={orderlist} alt="" />
          <p>سفارش ها</p>
        </a>
      </div> */}
      </header>
    </>
  );
}
