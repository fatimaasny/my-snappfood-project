import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

import styles from "./HeaderDown.module.css";
import IconMenu from "./IconMenu/IconMenu";

const itemWidth = 240;

export default function HeaderDown(props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [listMenu, setListMenu] = useState([]);
  const contentRef = useRef();

  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
    contentRef.current.scrollLeft = newScrollPosition;
    console.log(newScrollPosition);
  };
  useEffect(() => {
    fetch(
      "https://snappfood.ir/search/api/v1/desktop/service?lat=35.774&long=51.418&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&locale=fa"
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setListMenu(res.data.items);
      });
  }, []);
  return (
    <header className={`${styles["header-down"]} ${styles[props.class]}`}>
      <div ref={contentRef} className={styles.ref}>
        <div className={styles.list}>
          {listMenu.map((category) => (
            <Link to={`/restaurants/${category.id}/${category.superTypeAlias}`}>
              <IconMenu
                key={category.id}
                title={category.title}
                icon={category.icon}
              />
            </Link>
          ))}
          {/* {listMenu.map((i) => {
            return i.title === "رستوران" ? (
              <Link to={"/restaurants"}>
                <IconMenu key={i.id} title={i.title} icon={i.icon} />
              </Link>
            ) : (
              <IconMenu key={i.id} title={i.title} icon={i.icon} />
            );

          })} */}
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
