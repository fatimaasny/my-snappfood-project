import styles from "./MenuOfRes.module.css";

import { TbGift } from "react-icons/tb";

export default function MenuOfRes({ listOfTitles }) {
  return (
    <div className={styles["menu-of-res-components"]}>
      {listOfTitles.map((item, index) => {
        return item === "کوپن‌ها" ? (
          <div className={styles.kopen} key={index}>
            <button>
              <TbGift fontSize="1.2rem" color="#444" />
            </button>
            <p>{item}</p>
          </div>
        ) : (
          <div key={index}>{item}</div>
        );
      })}
    </div>
  );
}
