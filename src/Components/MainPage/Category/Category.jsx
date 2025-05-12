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
  const { isLoading, data, error } = useFetch(
    categoryInMain,
    (data) => data.data.result[0]["data"]["cuisines"]
  );

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
