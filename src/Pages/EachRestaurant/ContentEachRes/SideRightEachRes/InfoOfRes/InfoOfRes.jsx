import "./InfoOfRes.css";
import imgageRes from "../../../../../Images/EachRestaurant/image-res1.jpg";
import starSvg from "../../../../../Images/RestaurantItem/star.svg";
export default function InfoOfRes() {
  return (
    <div className="info-of-res-component">
      <img className="image-res" src={imgageRes} alt="image-res1" />
      <div className="info">
        <div className="score">
          <img src={starSvg} alt="star.svg" />
          <span>4.4</span>
          <p>(17,632 امتیاز)</p>
        </div>
        <h4>چیکن فامیلی(یوسف آباد)</h4>
      </div>
    </div>
  );
}
