import "./SideLeftEachRes.css";
import userPost from "../../../../Images/RestaurantItem/userPost.svg";
import productBox from "../../../../Images/EachRestaurant/productBox.svg";
import downAngel from "../../../../Images/EachRestaurant/downthin.svg";
import clock from "../../../../Images/EachRestaurant/clock.svg";

export default function SideLeftEachRes() {
  return (
    <div className="side-left-each-res-component">
      <div className="select-recieve">
        <img className="time" src={clock} alt="clock.svg" />
        <p>دریافت در سریع ترین زمان ممکن</p>
        <img className="angel-down" src={downAngel} alt="down-angel.svg" />
      </div>
      <div className="send-price">
        <img src={userPost} alt="userpost.svg" />
        <p>پیک فروشنده 15,000 تومان</p>
      </div>
      <div className="product-box">
        <img src={productBox} alt="product-box.svg" />
        <p>سبد خرید شما خالی است!</p>
      </div>
    </div>
  );
}
