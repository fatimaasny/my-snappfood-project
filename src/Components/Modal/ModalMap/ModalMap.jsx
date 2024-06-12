import styles from "./ModalMap.module.css";
import { useState } from "react";
import Card from "../../Card/Card";
import ModalCity from "../ModalCity/ModalCity";
import ModalAddressInput from "../ModalAddressInput/ModalAddressInput";

import imgMap from "../../../Images/Modal/map.png";

import { IoCloseOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

function ModalMap(props) {
  const list = [
    {
      title: "فروشگاه افق کوروش",
      address: "ملاصدرا کوچه دوازدهم",
    },
    {
      title: "شیرینی سرای میترا",
      address: "فرهنگ شهر کوجه 23 نرسیده به کتاب سرا",
    },
    {
      title: "نوشت افزار معدل",
      address: "حد فاصل کوچه های 21 و 23 معدل ",
    },
    {
      title: "قهوه تک",
      address: "تاچارا زیر پل معالی آباد",
    },
    {
      title: "کیک و شیرینی فنسی ",
      address: "خیابان معالی آباد، کوچه بهاران ",
    },
    {
      title: " طلا و جواهراتی ابراهیمی  ",
      address: "ملاصدرا نرسیده به کوچه 10",
    },
    {
      title: "پاپا بستنی",
      address: "نیایش ورودی کوچه 5 فرعی سوم ",
    },
  ];
  const [isShowModalCity, setIsShowModalCity] = useState();
  const [isShowModalAddressInput, setIsShowModalAddressInput] = useState();
  const [address, setAddress] = useState();
  const [addressList, setAddressList] = useState([]);

  const showModalCity = () => {
    setIsShowModalCity(1);
  };
  const hideModalCity = () => {
    setIsShowModalCity(0);
  };
  const addressHandler = async (value) => {
    await setAddress(value);
  };
  const showModalAddressInput = () => {
    setIsShowModalAddressInput(1);
  };
  const hideModalAddressInput = () => {
    setIsShowModalAddressInput(0);
  };
  const inputHandlre = async (value) => {
    // اینجا میخوام وقتی از لیست یک آیتم رو انتخاب کردو میاد توی اینپوت
    // نشونش میده و مودال میره، حالا میخوام وقتی توی اینپوت کلیک کرد که شروع به تایپ کنه
    // آدرسی که توی اینپوت هست پاک بشه

    if (value.length >= 1) {
      if (isShowModalAddressInput === 0) {
        console.log("delete");
        await addressHandler("");
        console.log("return");
        return;
      } else {
        showModalAddressInput();
        let nlist = list.filter(
          (i) => i.title.includes(value) || i.address.includes(value)
        );
        await setAddressList(nlist);
        await addressHandler(value);
      }
    } else {
      hideModalAddressInput();
      await addressHandler(null);
    }
  };

  return (
    <>
      {isShowModalCity===1 && (
        <ModalCity
          inputCity={props.inputCity}
          inputCityHandler={props.inputCityHandler}
          hideModalCity={hideModalCity}
          liInputHandler={props.liInputHandler}
        />
      )}
      {isShowModalAddressInput===1 && (
        <ModalAddressInput
          addressList={addressList}
          addressHandler={addressHandler}
          hideModalAddressInput={hideModalAddressInput}
        />
      )}
      <div className={styles.backdrop} />
      <Card className={styles.modalmap}>
        <div>
          <button className={styles["btn-close-icon"]}>
            <IoCloseOutline
              fontSize="1.7rem"
              color="#666"
              cursor="pointer"
              onClick={props.hideModalMapHandler}
            />
          </button>
          <h3>انتخاب آدرس</h3>
          <p className={styles.title}>
            برای مشاهده مناسب ترین پیشنهادها به شما، ابتدا موقعیتتان را مشخص
            کنید.
          </p>
        </div>

        <div
          className={styles.photomap}
          style={{ background: `url(${imgMap})`, backgroundSize: "cover" }}
        >
          <div className={styles["input-search"]}>
            <button className={styles.city} onClick={showModalCity}>
              تهران
            </button>
            <input
              type="text"
              placeholder="جست و جوی محله یا منطقه"
              value={address}
              onChange={(e) => {
                inputHandlre(e.target.value);
              }}
            />
            <button className={styles["btn-search-icon"]}>
              <FiSearch font-size="1.2rem" color="#a9a7a7" cursor="pointer" />
            </button>
          </div>
          <div className={styles.zoom}>
            <button>
              <FaPlus />
            </button>
            <button>
              <FaMinus />
            </button>
          </div>
        </div>
        <button className={styles.confirm}>تایید</button>
      </Card>
    </>
  );
}
export default ModalMap;
