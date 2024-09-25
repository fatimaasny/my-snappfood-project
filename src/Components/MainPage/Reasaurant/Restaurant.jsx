import styles from "./Restaurant.module.css";
import ShowMore from "../../ShowMore/ShowMore";
import RestaurantItem from "../../../Components/RestaurantItem/RestaurantItem";
import { Link } from "react-router-dom";

function Title(props) {
  return (
    <div className={styles.title}>
      <h4>{props.title}</h4>
      <ShowMore class="big" />
    </div>
  );
}
function Items(props) {
  return (
    <div className={styles.Ritems}>
      {props.list.map((i) => (
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
  return (
    <div className={styles.content}>
      <Title title={title} />
      <Items list={list} />
    </div>
  );
}
