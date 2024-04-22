import styles from "./SideRightEachRes.module.css";
import InfoOfRes from "./InfoOfRes/InfoOfRes";
import exclamationImg from "../../../../Images/EachRestaurant/exclamation.svg";
import MenuOfRes from "./MenuOfRes/MenuOfRes";
export default function SideRightEachRes({ isScrolled, listOfTitles }) {
  return (
    <div className={styles["side-Right-each-res-component"]}>
      <InfoOfRes />
      <a className={styles.comments}>
        <img src={exclamationImg} alt="exclamation.svg" />
        <p> اطلاعات و نظرات</p>
      </a>
      <MenuOfRes isScrolled={isScrolled} listOfTitles={listOfTitles} />
    </div>
  );
}
