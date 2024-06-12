import styles from "./ModalAddItem.module.css";
import Card from "../../Card/Card";
import AddExtraInItem from "../../EachRestaurant/ContentEachRes/MainEachRes/AddExtraInItem/AddExtraInItem";

import { IoCloseOutline } from "react-icons/io5";

function ModalAddItem(props) {
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
  return (
    <>
      <div className={styles.backdrop} onClick={props.hideModalAddItem} />
      <Card className={styles["modal-add-item"]}>
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
        {list.map((i, index) => (
          <AddExtraInItem title={i.title} item={i.item} price={i.price} />
        ))}
        <button className={styles["add-prices"]}>
          <span>افزودن به سبد خرید</span>
          <span>120,000</span>
          <span>تومان</span>
        </button>
      </Card>
    </>
  );
}

export default ModalAddItem;
