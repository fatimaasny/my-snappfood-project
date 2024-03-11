import snaplogo from "../../../Images/Header/HeaderUp/snappfood.svg";
import location from "../../../Images/Header/HeaderUp/location.svg";
import searchicon from "../../../Images/Header/HeaderUp/search.svg";
import store from "../../../Images/Header/HeaderUp/store.svg";

export default function HeaderUp() {
  return (
    <header className="header-up">
      <div className="right">
        <a href="#" className="logo-snapp">
          <img src={snaplogo} alt="snapfood-logo" />
        </a>
        <div className="map">
          <img src={location} alt="location.svg" />
          <div>
            <p>آدرس انتخابی</p>
            <p id="address-map"> گچساران، پانصد دستگاه سمت راست خیابان ششم </p>
          </div>
        </div>
        <div className="search-box">
          <img src={searchicon} alt="searchicon" />
          <input type="text" placeholder="جست‌و‌جو در اسنپ‌فود" />
        </div>
      </div>
      <div className="left">
        <a href="#" className="costumers-register">
          <img src={store} alt="store.svg" />
          <p>ثبت‌نام فروشندگان</p>
        </a>
        <button className="login-button">
          <span>ورود</span>
          <span className="second-span">یا</span>
          <span>عضویت</span>
        </button>
      </div>

      {/* حالت وقتی هست که طرف وارد شده  */}
      {/* <div className="left">
        <div className="search">
          <img src={searchicon} alt="" />
        </div>
        <a href="#" className="profile-icon">
          <img src={profileicon} alt="" />
        </a>
        <a href="#" className="order-icon">
          <img src={orderlist} alt="" />
          <p>سفارش ها</p>
        </a>
      </div> */}
    </header>
  );
}
