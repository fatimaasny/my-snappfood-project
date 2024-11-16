import styles from "./ContentEachRes.module.css";
import SideRightEachRes from "./SideRightEachRes/SideRightEachRes";
import MainEachRes from "./MainEachRes/MainEachRes";
import SideLeftEachRes from "./SideLeftEachRes/SideLeftEachRes";
import { useState, useEffect } from "react";

export default function ContentEachRes() {
  const [scrollposition, setScrollPosition] = useState(false);

  // این رو واسه این نوشتم که موقع اسکرول سایت چپ و
  // ساید راست فیکس میشه دوباره وقتی رسید به آخر قسمت مین دوباره میان و عادی میشن
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setScrollPosition(true);
      } else {
        setScrollPosition(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollposition]);

  return (
    <div className={styles["content-each-res-component"]}>
      <div
        className={`${styles.bothRessponsive} ${scrollposition && styles.end}`}
      >
        <SideRightEachRes scrollposition={scrollposition} />
        <MainEachRes />
      </div>
      <SideLeftEachRes scrollposition={scrollposition} />
    </div>
  );
}
