import styles from "./ContentEachRes.module.css";
import SideRightEachRes from "./SideRightEachRes/SideRightEachRes";
import MainEachRes from "./MainEachRes/MainEachRes";
import SideLeftEachRes from "./SideLeftEachRes/SideLeftEachRes";
import { useState, useEffect, useRef } from "react";

// context
import ScrollContextProvider from "../../../store/ScrollTitlesContext";

export default function ContentEachRes() {
  const [isSticky, setIsSticky] = useState(false);
  const endRef = useRef();

  // این رو واسه این نوشتم که موقع اسکرول سایت چپ و
  // ساید راست فیکس میشه دوباره وقتی رسید به آخر قسمت مین دوباره میان و عادی میشن
  useEffect(() => {
    const handleScroll = () => {
      if (endRef.current) {
        const rect = endRef.current.getBoundingClientRect();

        if (window.scrollY >= 100) {
          rect.top > window.innerHeight
            ? setIsSticky(true)
            : setIsSticky(false);
        } else {
          setIsSticky(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  return (
    <div className={styles["content-each-res-component"]}>
      <ScrollContextProvider>
        <div
          className={`${styles.bothRessponsive} ${
            isSticky ? styles.sticky : ""
          }`}
        >
          <SideRightEachRes isSticky={isSticky} />
          <MainEachRes endRef={endRef} />
        </div>
      </ScrollContextProvider>

      <SideLeftEachRes isSticky={isSticky} />
    </div>
  );
}
