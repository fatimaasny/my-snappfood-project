import styles from "./ModalAddItem.module.css";
import ReactDOM from "react-dom";
import Card from "../../Card/Card";
import AddExtraInItem from "../../EachRestaurant/ContentEachRes/MainEachRes/AddExtraInItem/AddExtraInItem";

import { IoCloseOutline } from "react-icons/io5";

const list = [
  {
    title: "قاشق چنگال",
    item: "قاشق چنگال",
    price: "2,500",
  },
  {
    title: "انتخابی",
    item: "ظرف ماکروویو",
    price: "8,000",
  },
];

function BackDrop(props) {
  return <div className={styles.backdrop} onClick={props.hideModalAddItem} />;
}
function Header(props) {
  return (
    <div className={styles.header}>
      <button className={styles.btnclose} onClick={props.hideModalAddItem}>
        <IoCloseOutline fontSize="1.5rem" color="#666" fontWeight="700" />
      </button>
      <h5>انتخاب افزودنی</h5>
      <p className={styles.name}>
        {/* {props.name} */}
        چلو کباب دیگی
      </p>
    </div>
  );
}
function ListItem(props) {
  return (
    <>
      {list.map((i, index) => (
        <AddExtraInItem title={i.title} item={i.item} price={i.price} />
      ))}
    </>
  );
}
function ButtonAddPrice(props) {
  return (
    <button className={styles["add-prices"]}>
      <span>افزودن به سبد خرید</span>
      <span>120,000</span>
      <span>تومان</span>
    </button>
  );
}

function Overlay(props) {
  return (
    <Card className={styles["modal-add-item"]}>
      <Header hideModalAddItem={props.hideModalAddItem} />
      <ListItem />
      <ButtonAddPrice />
    </Card>
  );
}
function FinalModal(props) {
  return (
    <>
      <BackDrop hideModalAddItem={props.hideModalAddItem} />
      <Overlay hideModalAddItem={props.hideModalAddItem} />
    </>
  );
}

function ModalAddItem(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <FinalModal hideModalAddItem={props.hideModalAddItem} />,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default ModalAddItem;
