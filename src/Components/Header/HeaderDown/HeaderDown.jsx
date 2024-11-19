import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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

  // const [isLoading, setIsLoading] = useState(false);
  // const [listMenu, setListMenu] = useState([]);
  // const [error, setError] = useState();

  // useEffect(() => {
  //   const fetchMenu = async () => {
  //     setIsLoading(true);
  //     try {
  //       const res = await menuInHeaderDown();
  //       setListMenu(res.data.items);
  //       setError();
  //     } catch (error) {
  //       setError("خطایی رخ داده است، مجددا تلاش کنید.");
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchMenu();
  // }, []);

  // custom hook
  // first way vali kar nakard
  // const { isLoading, data, setData, error } = useFetch(menuInHeaderDown);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await setData(data.data.items);
  //   };
  //   fetchData();
  // }, [data]);

  // second way
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
