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

const itemWidth = 240;

export default function HeaderDown(props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const contentRef = useRef();
  const params = useParams();

  const { isLoading, data, error } = useFetch(
    menuInHeaderDown,
    (data) => data.data.items
  );

  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
    contentRef.current.scrollLeft = newScrollPosition;
  };

  if (error) {
    return <Error title={error} />;
  }
  return (
    <>
      {!isLoading && (
        <header className={`${styles["header-down"]} ${styles[props.class]}`}>
          <div ref={contentRef} className={styles.ref}>
            <div className={styles.list}>
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
