import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

import styles from "./HeaderDown.module.css";
import IconMenu from "./IconMenu/IconMenu";
import Error from "../../Error/Error";

const itemWidth = 240;

export default function HeaderDown(props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [listMenu, setListMenu] = useState([]);
  const [error, setError] = useState();
  const contentRef = useRef();

  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
    contentRef.current.scrollLeft = newScrollPosition;
    // console.log(newScrollPosition);
  };
  useEffect(() => {
    const fetchMenu = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://snappfood.ir/search/api/v1/desktop/service?lat=35.774&long=51.418&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&locale=fa"
        );
        if (!response.ok) {
          throw new Error("اطلاعات به درستی دریافت نشده است.");
        }
        const res = await response.json();
        setListMenu(res.data.items);
        setError();
      } catch (error) {
        setError("خطایی رخ داده است، مجددا تلاش کنید.");
      }
      setIsLoading(false);
    };
    fetchMenu();
  }, []);
  if (error) {
    return <Error title={error} />;
  }
  return (
    <>
      {!isLoading && (
        <header className={`${styles["header-down"]} ${styles[props.class]}`}>
          <div ref={contentRef} className={styles.ref}>
            <div className={styles.list}>
              {listMenu.map((category) => (
                <Link
                  to={`/category/${category.id}/${category.superTypeAlias}`}
                >
                  <IconMenu
                    key={category.id}
                    title={category.title}
                    icon={category.icon}
                  />
                </Link>
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
      )}
    </>
  );
}
