import "./MenuOfRes.css";
import giftImg from "../../../../../Images/EachRestaurant/gift.svg";
export default function MenuOfRes({ isScrolled }) {
  const list = ["کوپن‌ها", "پرطرفدارها", "سوخاری"];

  return (
    <div className="menu-of-res-components">
      {/* <div className="kopen">
        <img src={giftImg} alt="gift-img" />
        <p>کوپن ها</p>
      </div>
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))} */}

      {list.map((item, index) => {
        if (item === "کوپن‌ها") {
          {
            return isScrolled ? (
              <div
                className="kopen"
                key={index}
                style={{ borderLeft: "1px solid red" }}
              >
                <img src={giftImg} alt="gift-img" />
                <p>کوپن‌ها</p>
              </div>
            ) : (
              <div className="kopen" key={index}>
                <img src={giftImg} alt="gift-img" />
                <p>کوپن‌ها</p>
              </div>
            );
          }
        } else {
          {
            return isScrolled ? (
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
