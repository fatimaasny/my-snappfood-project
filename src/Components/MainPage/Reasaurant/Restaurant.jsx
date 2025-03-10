import styles from "./Restaurant.module.css";
import ShowMore from "../../ShowMore/ShowMore";
import RestaurantItem from "../../../Components/RestaurantItem/RestaurantItem";
import { Link } from "react-router-dom";
import { useLongpress } from "../../../hooks/useLongpress";
import { useRef } from "react";

function Title(props) {
  return (
    <div className={styles.title}>
      <h4>{props.title}</h4>
      <ShowMore class="big" />
    </div>
  );
}
function Items({ list, containerRef, handlers }) {
  return (
    <div
      className={styles.Ritems}
      ref={containerRef}
      style={{
        overflowX: "scroll",
      }}
      {...handlers}
    >
      {list.map((i) => (
        <Link to={`/item/${i.vendorCode}`}>
          <RestaurantItem
            key={i.id}
            backCoverUp={i.backgroundImage}
            freeSendingP={i.best_coupon}
            discountP={i.discountValueForView}
            centerImage={i.logo}
            titleH={i.title}
            scorePFirst={"جدید"}
            scorePLast={i.commentCount}
            typeFoodP={i.description}
            postPriceLastS={i.deliveryFee}
          />
        </Link>
      ))}
    </div>
  );
}

export default function Restaurant({ title, list }) {
  const containerRef = useRef(null);
  const { handlers } = useLongpress(containerRef);

  return (
    <div className={styles.content}>
      <Title title={title} />
      <Items list={list} containerRef={containerRef} handlers={handlers} />
    </div>
  );
}
