import styles from "./Category.module.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CategoryItem from "./CategoryItem/CategoryItem";
import Error from "../../Error/Error";

// api
import { categoryInMain } from "../../../CallApi/CallApi";

// custom hook
import { useFetch } from "../../../hooks/useFetch";

function Title(props) {
  return <h3>{props.title}</h3>;
}
function List({ listCategory }) {
  return (
    <div className={styles.list}>
      {listCategory.map((item) => (
        <Link to={`/category/1/RESTAURANT/null/null/null/null`}>
          <CategoryItem key={item.id} source={item.icon} title={item.title} />
        </Link>
      ))}
    </div>
  );
}

export default function Category({ title }) {
  // const [list, setList] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [listCategory, setListCategory] = useState([]);
  // const [error, setError] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const res = await categoryInMain();
  //       setListCategory(res.data.result[0]["data"]["cuisines"]);
  //       setError();
  //     } catch (error) {
  //       setError("خطایی رخ داده است، مجددا تلاش کنید.");
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, []);

  const { isLoading, data, error } = useFetch(
    categoryInMain,
    (data) => data.data.result[0]["data"]["cuisines"]
  );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await setData(data.data.result[0]["data"]["cuisines"]);
  //   };
  //   fetchData();
  // }, [data]);

  if (error) {
    return <Error title={error} />;
  }
  return (
    <>
      {!isLoading && (
        <section className={styles.category}>
          <Title title={title} />
          <List listCategory={data} />
        </section>
      )}
    </>
  );
}
