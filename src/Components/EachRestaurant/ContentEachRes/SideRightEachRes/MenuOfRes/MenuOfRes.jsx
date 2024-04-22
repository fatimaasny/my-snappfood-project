import styles from "./MenuOfRes.module.css";
import giftImg from "../../../../../Images/EachRestaurant/gift.svg";
export default function MenuOfRes({ isScrolled, listOfTitles }) {
  // const list = ["کوپن‌ها", "پرطرفدارها", "سوخاری"];

  return (
    <div className={styles["menu-of-res-components"]}>
      {/* <div className="kopen">
        <img src={giftImg} alt="gift-img" />
        <p>کوپن ها</p>
      </div>
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))} */}

      {listOfTitles.map((item, index) => {
        if (item === "کوپن‌ها") {
          {
            return isScrolled === item ? (
              <div
                className={styles.kopen}
                key={index}
                style={{ borderLeft: "1px solid red" }}
              >
                <img src={giftImg} alt="gift-img" />
                <p>کوپن‌ها</p>
              </div>
            ) : (
              <div className={styles.kopen} key={index}>
                <img src={giftImg} alt="gift-img" />
                <p>کوپن‌ها</p>
              </div>
            );
          }
        } else {
          {
            return isScrolled === item ? (
              <div key={index} style={{ borderLeft: "1px solid red" }}>
                {item}
              </div>
            ) : (
              <div key={index}>{item}</div>
            );
          }
        }
      })}

      {/* {list.map((item, index) => {
        if (item === "کوپن ها") {
          {
            isScrolled ? (
              <div
                className="kopen"
                key={index}
                style={{ borderLeft: "1px solid red" }}
              >
                <img src={giftImg} alt="gift-img" />
                <p>کوپن ها</p>
              </div>
            ) : (
              <div className="kopen" key={index}>
                <img src={giftImg} alt="gift-img" />
                <p>کوپن ها</p>
              </div>
            );
          }
        } else {
          {
            isScrolled ? (
              <div key={index} style={{ borderLeft: "1px solid red" }}>
                {item}
              </div>
            ) : (
              <div key={index}>{item}</div>
            );
          }
        }
      })} */}
    </div>
  );
}
