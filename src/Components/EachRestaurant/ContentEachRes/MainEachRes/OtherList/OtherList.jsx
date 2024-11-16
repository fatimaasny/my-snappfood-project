import styles from "./OtherList.module.css";
import Item from "../Item/Item";

function OtherList(props) {
  return (
    <div className={styles["list-items-component"]}>
      {props.list.map((item) => (
        <>
          <h4>{item.category}</h4>
          <div className={styles.list}>
            {item.products.map((p) => (
              <Item
                key={p.id}
                id={p.id}
                productTitle={
                  p.productTitle || p.productVariationTitle || p.title
                }
                description={p.description}
                images={p.images}
                productVariationTitle={p.productVariationTitle}
                price={p.price}
                discount={p.discount}
                discountRatio={p.discountRatio}
                disabledUntil={p.disabledUntil}
              />
            ))}
          </div>
        </>
      ))}
    </div>
  );
}

export default OtherList;
