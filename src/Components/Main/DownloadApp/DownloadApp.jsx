import "./DownloadApp.css";
import myket from "../../../Images/Main/ِDownloadApp/myket.png";
import bazar from "../../../Images/Main/ِDownloadApp/bazar.jpg";
import sibUp from "../../../Images/Main/ِDownloadApp/iosSibUp.png";
import Iapp from "../../../Images/Main/ِDownloadApp/iosIapp.png";
import mobile from "../../../Images/Main/ِDownloadApp/mobile.png";

export default function DownloadApp() {
  return (
    <div className="dlApp-content">
      <div className="content">
        <h3>اپلیکیشن اسنپ‌فود</h3>
        <p>
          {" "}
            با اپلیکیشن اسنپ‌فود به راحتی و با چند کلیک ساده می‌توانید رستوران‌ها،
          کافه‌ها، شیرینی‌فروشی‌ها و سوپرمارکت‌های نزدیک خودتان را جست‌وجو کرده
          و از تجربه سفارش آسان از اسنپ‌فود لذت ببرید.
        </p>
        <div className="enter-phone">
          <p>برای دریافت لینک دانلود اپلیکیشن، شماره موبایلتان رو وارد کنید</p>
          <div className="receive-link">
            <input type="text" placeholder="09*********" />
            <a href="#">دریافت لینک</a>
          </div>
        </div>
        <div className="list-app">
          <div>
            <img src={myket} alt="myket.png" />
          </div>
          <div>
            <img src={bazar} alt="bazar.png" />
          </div>
          <div>
            <img src={sibUp} alt="sibUp.png" />
          </div>
          <div>
            <img src={Iapp} alt="Iapp.png" />
          </div>
        </div>
      </div>
      <div className="image">
        <img src={mobile} alt="mobile.png" />
      </div>
    </div>
  );
}
