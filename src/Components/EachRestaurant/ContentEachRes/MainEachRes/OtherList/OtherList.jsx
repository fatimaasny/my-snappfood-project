import styles from "./OtherList.module.css";
import Item from "../Item/Item";

// context
import { useContext } from "react";
import { ScrollContext } from "../../../../../store/ScrollTitlesContext";

function OtherList(props) {
  const { sectionsRef } = useContext(ScrollContext);

  return (
    <div className={styles["list-items-component"]}>
      {props.list.map((item) => (
        <div ref={(el) => (sectionsRef.current[item.category] = el)} className={styles.eachList}>
          <h4>{item.category}</h4>
          <div className={styles.list}>
            {item.products.map((p) => (
              <Item
                key={p.id}
                id={p.id}
                product={p}
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
        </div>
      ))}
    </div>
  );
}

export default OtherList;
