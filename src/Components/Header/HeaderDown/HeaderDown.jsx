import { useRef, useState } from "react";

import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

import reastaurant from "../../../Images/Header/HeaderDown/restaurant.png";
import supermarket from "../../../Images/Header/HeaderDown/supermarket.png";
import cafe from "../../../Images/Header/HeaderDown/cafe.png";
import sweet from "../../../Images/Header/HeaderDown/sweet.png";
import bakery from "../../../Images/Header/HeaderDown/bakery.png";
import fruit from "../../../Images/Header/HeaderDown/fruit.png";
import meat from "../../../Images/Header/HeaderDown/meat.png";
import iceCream from "../../../Images/Header/HeaderDown/icecream.png";
import nut from "../../../Images/Header/HeaderDown/nut.png";
import other from "../../../Images/Header/HeaderDown/other.png";
import styles from "./HeaderDown.module.css";
import IconMenu from "./IconMenu/IconMenu";
const menuListIcon = [
  {
    source: reastaurant,
    alt: "reastaurant.svg",
    title: "رستوران",
  },
  {
    source: supermarket,
    alt: "supermarket.svg",
    title: "سوپرمارکت",
  },
  {
    source: cafe,
    alt: "cafe.svg",
    title: "کافه",
  },
  {
    source: sweet,
    alt: "sweet.svg",
    title: "شیرینی",
  },
  {
    source: bakery,
    alt: "bakery.svg",
    title: "نانوایی",
  },
  {
    source: fruit,
    alt: "fruit.svg",
    title: "میوه",
  },
  {
    source: meat,
    alt: "meat.svg",
    title: "پروتئین",
  },
  {
    source: iceCream,
    alt: "iceCream.svg",
    title: "آبمیوه بستنی",
  },
  {
    source: nut,
    alt: "nut.svg",
    title: "آجیل",
  },
  {
    source: iceCream,
    alt: "iceCream.svg",
    title: "آبمیوه بستنی",
  },
  {
    source: nut,
    alt: "nut.svg",
    title: "آجیل",
  },
  {
    source: other,
    alt: "other.svg",
    title: "سایر",
  },
];
const itemWidth = 240;

export default function HeaderDown(props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const contentRef = useRef();

  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
    contentRef.current.scrollLeft = newScrollPosition;
    console.log(newScrollPosition);
  };
  return (
    <header className={`${styles["header-down"]} ${styles[props.class]}`}>
      <div
        ref={contentRef}
        style={{
          width: "100%",
          overflowX: "scroll",
          scrollBehavior: "smooth",
        }}
      >
        <div className={styles.list}>
          {menuListIcon.map((i, index) => (
            <IconMenu
              key={index}
              title={i.title}
              source={i.source}
              alt={i.alt}
            />
          ))}
        </div>
      </div>
      <button
        className={styles["angel-right"]}
        onClick={() => handleScroll(itemWidth)}
        disabled={scrollPosition >= 0}
      >
        <FaAngleRight color="#ff00b3" fontSize="1.3rem" />
      </button>
      <button
        className={styles["angel-left"]}
        onClick={() => handleScroll(-itemWidth)}
        disabled={scrollPosition <= -1400}
      >
        <FaAngleLeft color="#ff00b3" fontSize="1.3rem" />
      </button>
    </header>
  );
}
