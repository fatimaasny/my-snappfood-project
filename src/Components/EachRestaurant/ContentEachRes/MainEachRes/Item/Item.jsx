import styles from "./Item.module.css";
import ItemAddbtn from "../ItemAddbtn/ItemAddbtn";
import Card from "../../../../Card/Card";
import ModalSpecialItem from "../../../../Modal/ModalSpecialItem/ModalSpecialItem";
import { useEffect, useState } from "react";

function UpContent(props) {
  return (
    <div
      className={styles["up-content"]}
      onClick={() => {
        props.showModalSpecialItem();
      }}
    >
      <div>
        <p className={styles.name}>{props.title}</p>
        <span>{props.description}</span>
      </div>
      <Card>
        <img src={props.image} alt="image.png" />
      </Card>
    </div>
  );
}

export default function Item({
  id,
  productTitle,
  description,
  images,
  productVariationTitle,
  price,
  discount,
  discountRatio,
  disabledUntil,
}) {
  const [isModalSpecialItem, setIsModalSpecialItem] = useState(false);
  const [listImages, setListImages] = useState([]);

  const showModalSpecialItem = () => {
    setIsModalSpecialItem(true);
  };
  const hideModalSpecialItem = () => {
    setIsModalSpecialItem(false);
  };
  useEffect(() => {
    const handleImages = () => {
      for (let i = 0; i < images.length; i++) {
        setListImages([...listImages, images[i].imageSrc]);
      }
    };
    handleImages();
  }, []);

  return (
    <>
      {isModalSpecialItem && (
        <ModalSpecialItem
          hideModalSpecialItem={hideModalSpecialItem}
          image={listImages[0]}
          id={id}
          title={productTitle}
          description={description}
          productVariationTitle={productVariationTitle}
          price={price}
          discount={discount}
          discountRatio={discountRatio}
        />
      )}
      <div className={styles["item-component"]}>
        <UpContent
          showModalSpecialItem={showModalSpecialItem}
          title={productTitle}
          description={description}
          image={listImages[0]}
        />

        <ItemAddbtn
          name={productTitle}
          productVariationTitle={productVariationTitle}
          price={price}
          discount={discount}
          discountRatio={discountRatio}
          disabledUntil={disabledUntil}
        />
      </div>
    </>
  );
}
