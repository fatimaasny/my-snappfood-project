import styles from "./ModalSearch.module.css";
import { useState } from "react";
import ReactDom from "react-dom";

import Card from "../../Card/Card";
import ShowMore from "../../ShowMore/ShowMore";
// import SearchTitle from "../../Search/SearchTitle/SearchTitle";
// import SearchStore from "../../Search/SearchStore/SearchStore";
// import SearchProduct from "../../Search/SearchProduct/SearchProduct";

import { IoCloseCircle } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { FaAngleLeft } from "react-icons/fa6";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoStorefrontOutline } from "react-icons/io5";

import image1 from "../../../Images/EachRestaurant/image-item-1.jpg";
import image2 from "../../../Images/EachRestaurant/image-res1.jpg";

const listStores = [
  "ساندویچ لاریتالیا",
  "ساندویج آیدا (میرزای شیرازی)",
  "پیتزا ساندویچ آویژه",
  "ساندویچ پریسکا",
  "ساندویچ ویژه ترانه",
];

function BackDrop(props) {
  return (
    <div className={styles.backdrop} onClick={props.hideModalSearchHandler} />
  );
}

function SearchProduct(props) {
  return (
    <div className={styles["search-product"]}>
      <div className={styles.up}>
        <Card>
          <img src={props.image} alt={"image"} />
        </Card>
        <div className={styles.text}>
          <p>{props.name}</p>
          <p>{props.address}</p>
        </div>
      </div>
      <div className={styles.prices}>
        <p className={styles.pfirst}>
          <span>{props.sendingKind}</span>
          <span>{props.sendingPrice}</span>
          تومان
        </p>
        <p className={styles.psecond}>
          <span>{props.productPrice}</span>
          تومان
        </p>
      </div>
    </div>
  );
}

function SearchStore(props) {
  return (
    <div className={styles["search-store"]}>
      <button>{props.icon}</button>
      <p>{props.name}</p>
      {props.search && <span>{props.search}</span>}
    </div>
  );
}

function SearchTitle(props) {
  return (
    <div className={styles["search-title"]}>
      <p>{props.title}</p>
      <ShowMore number={props.number} />
    </div>
  );
}

function SearchInput(props) {
  return (
    <Card className={styles["modal-serach-input"]}>
      {props.searchmodal !== "" ? (
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

      <input
        type="text"
        value={props.searchmodal}
        onChange={props.searchModalHandler}
      />
    </Card>
  );
}

function SearchText(props) {
  return (
    <Card className={styles["modal-serach-text"]}>
      {props.searchmodal !== "" ? (
        <div className={styles.typing}>
          <span>جستجوی</span>
          <p>{props.searchmodal}</p>
          <button>
            <FaAngleLeft fontSize="1rem" color="#666" />
          </button>
        </div>
      ) : (
        <p>عبارت مورد نظر خود را وارد کنید</p>
      )}
    </Card>
  );
}
function HeaderCategory(props) {
  return (
    <div className={styles.header}>
      <SearchStore
        icon={<AiOutlineAppstore fontSize="1.4rem" color="#444" />}
        name={"دسته بندی"}
        search={props.searchmodal}
      />
    </div>
  );
}
function StoreCategory(props) {
  return (
    <div className={styles.stores}>
      <SearchTitle title={"فروشگاه‌ها"} number={25} />

      {listStores.map((s, index) => (
        <SearchStore
          icon={<IoStorefrontOutline fontSize="1.1rem" color="#444" />}
          key={index}
          name={s}
        />
      ))}
    </div>
  );
}
function ProductsCategory(props) {
  return (
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
  );
}
function Category(props) {
  return (
    <Card className={styles.category}>
      <HeaderCategory searchmodal={props.searchmodal} />
      <StoreCategory />
      <ProductsCategory />
    </Card>
  );
}

function Overlay(props) {
  return (
    <>
      <SearchInput
        searchmodal={props.searchmodal}
        searchModalHandler={props.searchModalHandler}
        hideModalSearchHandler={props.hideModalSearchHandler}
      />
      <SearchText searchmodal={props.searchmodal} />
      <Category searchmodal={props.searchmodal} />
    </>
  );
}

function FinalModal(props) {
  return (
    <>
      <BackDrop hideModalSearchHandler={props.hideModalSearchHandler} />
      <Overlay
        hideModalSearchHandler={props.hideModalSearchHandler}
        searchmodal={props.searchmodal}
        searchModalHandler={props.searchModalHandler}
      />
    </>
  );
}

function ModalSearch(props) {
  const [searchmodal, setSearchModal] = useState("");
  const searchModalHandler = (e) => {
    setSearchModal(e.target.value);
  };
  return (
    <>
      {ReactDom.createPortal(
        <FinalModal
          hideModalSearchHandler={props.hideModalSearchHandler}
          searchmodal={searchmodal}
          searchModalHandler={searchModalHandler}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default ModalSearch;
