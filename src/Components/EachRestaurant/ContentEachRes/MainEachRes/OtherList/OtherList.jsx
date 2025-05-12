import styles from "./OtherList.module.css";
import Item from "../Item/Item";
import Error from "../../../../Error/Error";
import Loading from "../../../../Loading/Loading";

import { useEffect } from "react";
import { useParams } from "react-router-dom";

// api
import { detailsDynamic1 } from "../../../../../CallApi/CallApi";

// custom hooks
import { useFetch2 } from "../../../../../hooks/useFetch";

// context
import { useContext } from "react";
import { ScrollContext } from "../../../../../store/ScrollTitlesContext";

function OtherList() {
  const { sectionsRef } = useContext(ScrollContext);

  const params = useParams();

  const { isLoading, data, error, fetchData, setData } = useFetch2(
    detailsDynamic1,
    (data) => data.data.menus
  );

  useEffect(() => {
    const process = async () => {
      await fetchData(params.code);
    };
    process();
  }, [params]);

  if (error) {
    return <Error title={error} />;
  }

  return (
    <div className={styles["list-items-component"]}>
      {!isLoading && data.length > 0 ? (
        <>
          {data.map((item, index) => (
            <div
              ref={(el) => (sectionsRef.current[item.category] = el)}
              className={styles.eachList}
              key={index}
            >
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
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default OtherList;
