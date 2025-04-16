import styles from "./ContentEachRes.module.css";
import SideRightEachRes from "./SideRightEachRes/SideRightEachRes";
import MainEachRes from "./MainEachRes/MainEachRes";
import SideLeftEachRes from "./SideLeftEachRes/SideLeftEachRes";
import { useState, useEffect } from "react";

// context
import CartContextProvider from "../../../store/ShoppingCartContext";
import ScrollContextProvider from "../../../store/ScrollTitlesContext";

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
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollposition]);

  return (
    <CartContextProvider>
      <div className={styles["content-each-res-component"]}>
        <ScrollContextProvider>
          <div
            className={`${styles.bothRessponsive} ${
              scrollposition && styles.end
            }`}
          >
            <SideRightEachRes scrollposition={scrollposition} />
            <MainEachRes scrollposition={scrollposition} />
          </div>
        </ScrollContextProvider>

        <SideLeftEachRes scrollposition={scrollposition} />
      </div>
    </CartContextProvider>
  );
}
