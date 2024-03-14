import store from "../../../../Images/Main/OnlineRegister/store.svg";
import salerRegister from "../../../../Images/Main/OnlineRegister/salerRegister.png";
import "./OnlineRegister.css";
export default function OnlineRegister() {
  return (
    <div className="onlineReg">
      <div className="content">
        <h3>صاحب کسب و کار هستید؟</h3>
        <p>با اسنپ‌فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید.</p>
        <a className="link">
          <img src={store} alt="store.svg" />
          <p>ثبت‌نام فروشندگان</p>
        </a>
      </div>
      <div className="image">
        <img src={salerRegister} alt="salerRegister.svg" />
      </div>
    </div>
  );
}
