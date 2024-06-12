import styles from "./ModalSearch.module.css";
import { useState } from "react";

import Card from "../../Card/Card";
import SearchTitle from "../../Search/SearchTitle/SearchTitle";
import SearchStore from "../../Search/SearchStore/SearchStore";
import SearchProduct from "../../Search/SearchProduct/SearchProduct";

import { IoCloseCircle } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { FaAngleLeft } from "react-icons/fa6";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoStorefrontOutline } from "react-icons/io5";

import image1 from "../../../Images/EachRestaurant/image-item-1.jpg";
import image2 from "../../../Images/EachRestaurant/image-res1.jpg";

function ModalSearch(props) {
  const [searchmodal, setSearchModal] = useState("");
  const searchModalHandler = (e) => {
    setSearchModal(e.target.value);
  };
  const listStores = [
    "ساندویچ لاریتالیا",
    "ساندویج آیدا (میرزای شیرازی)",
    "پیتزا ساندویچ آویژه",
    "ساندویچ پریسکا",
    "ساندویچ ویژه ترانه",
  ];

  return (
    <>
      <div className={styles.backdrop} onClick={props.hideModalSearchHandler} />
      <Card className={styles["modal-serach-input"]}>
        {searchmodal !== "" ? (
          <button
            className={styles.btnclose}
            onClick={props.hideModalSearchHandler}
          >
            <IoCloseCircle fontSize="1.2rem" color="#aaa" />
          </button>
        ) : (
          <button className={styles.btnsearch}>
            <FiSearch fontSize="1.2rem" color="#666" />
          </button>
        )}

        <input type="text" value={searchmodal} onChange={searchModalHandler} />
      </Card>
      <Card className={styles["modal-serach-text"]}>
        {searchmodal !== "" ? (
          <div className={styles.typing}>
            <span>جستجوی</span>
            <p>{searchmodal}</p>
            <button>
              <FaAngleLeft fontSize="1rem" color="#666" />
            </button>
          </div>
        ) : (
          <p>عبارت مورد نظر خود را وارد کنید</p>
        )}
      </Card>
      <Card className={styles.category}>
        <div className={styles.header}>
          <SearchStore
            icon={<AiOutlineAppstore fontSize="1.4rem" color="#444" />}
            name={"دسته بندی"}
            search={searchmodal}
          />
        </div>
        <div className={styles.stores}>
          <SearchTitle title={"فروشگاه‌ها"} number={25} />

          {listStores.map((s, index) => (
            <SearchStore
              icon={<IoStorefrontOutline fontSize="1.1rem" color="#444" />}
              name={s}
            />
          ))}
        </div>
        <div className={styles.products}>
          <SearchTitle title={"محصولات"} number={"1,205"} />
          <SearchProduct
            image={image1}
            name={"ساندویچ دست پیچ مرغ"}
            address={"پرو کالری (سعادت آباد)"}
            sendingKind={"پیک فروشنده"}
            sendingPrice={"75,000"}
            productPrice={"180,000"}
          />
          <SearchProduct
            image={image2}
            name={"ساندویچ فلافل"}
            address={"مامان جون (شریعتی)"}
            sendingKind={"ارسال اکسپرس"}
            sendingPrice={"22,500"}
            productPrice={"50,000"}
          />
        </div>
      </Card>
    </>
  );
}

export default ModalSearch;
