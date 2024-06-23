import styles from "./Item.module.css";
import ItemAddbtn from "../ItemAddbtn/ItemAddbtn";
import Card from "../../../../Card/Card";
import ModalSpecialItem from "../../../../Modal/ModalSpecialItem/ModalSpecialItem";
import { useState } from "react";
import img1 from "../../../../../Images/EachRestaurant/image-item-1.jpg";
import img2 from "../../../../../Images/EachRestaurant/image-item-2.jpg";
import img3 from "../../../../../Images/EachRestaurant/image-item-3.jpg";
import img4 from "../../../../../Images/EachRestaurant/image-item-4.jpg";

function UpContent(props) {
  return (
    <div
      className={styles["up-content"]}
      onClick={() => {
        props.showModalSpecialItem();
      }}
    >
      <div>
        <p className={styles.name}>{props.pName}</p>
        <span>{props.spanTag}</span>
      </div>
      <Card>
        <img src={props.image} alt="image.png" />
      </Card>
    </div>
  );
}
function DownContent(props) {
  return (
    <div className={styles["down-content"]}>
      {props.list.map((i, index) => (
        <ItemAddbtn
          key={index}
          title={i.title}
          discount={i.discount}
          oldPrice={i.oldPrice}
          newPrice={i.newPrice}
          name={props.pName}
        />
      ))}
    </div>
  );
}

export default function Item({ pName, spanTag, image, list, listComments }) {
  const [isModalSpecialItem, setIsModalSpecialItem] = useState(false);
  const listImages = [img1, img2, img3, img4];

  const showModalSpecialItem = () => {
    setIsModalSpecialItem(true);
  };
  const hideModalSpecialItem = () => {
    setIsModalSpecialItem(false);
  };

  return (
    <>
      {isModalSpecialItem && (
        <ModalSpecialItem
          hideModalSpecialItem={hideModalSpecialItem}
          image={image}
          pName={pName}
          spanTag={spanTag}
          listImages={listImages}
          listAddBtn={list}
          listComments={listComments}
        />
      )}
      <div className={styles["item-component"]}>
        <UpContent
          showModalSpecialItem={showModalSpecialItem}
          pName={pName}
          spanTag={spanTag}
          image={image}
        />
        <DownContent list={list} pName={pName} />
        {/* <div
          className={styles["up-content"]}
          onClick={() => {
            showModalSpecialItem();
          }}
        >
          <div>
            <p className={styles.name}>{pName}</p>
            <span>{spanTag}</span>
          </div>
          <Card>
            <img src={image} alt="image.png" />
          </Card>
        </div> */}
        {/* <div className={styles["down-content"]}>
          {list.map((i, index) => (
            <ItemAddbtn
              key={index}
              title={i.title}
              discount={i.discount}
              oldPrice={i.oldPrice}
              newPrice={i.newPrice}
              name={pName}
            />
          ))}
        </div> */}
      </div>
    </>
  );
}
