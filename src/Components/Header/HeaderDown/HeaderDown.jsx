import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

import styles from "./HeaderDown.module.css";

// components
import IconMenu from "./IconMenu/IconMenu";
import Error from "../../Error/Error";

// api
import { menuInHeaderDown } from "../../../CallApi/CallApi";

// custom hooks
import { useFetch } from "../../../hooks/useFetch";
import { useLongpress } from "../../../hooks/useLongpress";

export default function HeaderDown(props) {
  const contentRef = useRef(null);
  const [canLeft, setCanLeft] = useState(true);
  const [canRight, setCanRight] = useState(false);

  const { isLoading, data, error } = useFetch(
    menuInHeaderDown,
    (data) => data.data.items
  );

  const { positionX, setPositionX, handlers } = useLongpress(contentRef);

  const itemWidth = 110;
  function handleScroll(direction) {
    const newPosition =
      direction === "left" ? positionX - itemWidth : positionX + itemWidth;

    if (contentRef.current) {
      contentRef.current.scrollLeft = newPosition;
      setPositionX(newPosition);
    }
  }

  useEffect(() => {
    if (!isLoading && contentRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = contentRef.current;

      setCanLeft(
        Math.abs(scrollLeft) < scrollWidth - clientWidth &&
          scrollWidth - clientWidth - Math.abs(scrollLeft) > 10
      );
      setCanRight(Math.abs(scrollLeft) > 0);
    }
  }, [isLoading, positionX]);

  if (error) {
    return <Error title={error} />;
  }
  return (
    <>
      {!isLoading && (
        <header className={`${styles["header-down"]} ${styles[props.class]}`}>
          {canRight && (
            <button
              className={styles["angel-right"]}
              onClick={() => handleScroll("right")}
            >
              <FaAngleRight color="#ff00b3" fontSize="1.3rem" />
            </button>
          )}

          <div className={styles.list} ref={contentRef} {...handlers}>
            {data.map((category) => (
              <Link
                to={`/category/${category.id}/${category.superTypeAlias}/null/null/null/null`}
                // to={`/category/${category.id}/${category.superTypeAlias}/${params.sorting}/${params.catValue}/${params.subValue}/${params.filterPrice}`}
              >
                <IconMenu
                  key={category.id}
                  title={category.title}
                  icon={category.icon}
                />
              </Link>
            ))}
          </div>

          {canLeft && (
            <button
              className={styles["angel-left"]}
              onClick={() => handleScroll("left")}
            >
              <FaAngleLeft color="#ff00b3" fontSize="1.3rem" />
            </button>
          )}
        </header>
      )}
    </>
  );
}
