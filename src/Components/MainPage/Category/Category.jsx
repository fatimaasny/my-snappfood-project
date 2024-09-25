import styles from "./Category.module.css";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import CategoryItem from "./CategoryItem/CategoryItem";
import Error from "../../Error/Error";

function Title(props) {
  return <h3>{props.title}</h3>;
}
function List(props) {
  return (
    <div className={styles.list}>
      {props.listCategory.map((item) => (
        <Link to={`/category/1/RESTAURANT`}>
          <CategoryItem key={item.id} source={item.icon} title={item.title} />
        </Link>
      ))}
    </div>
  );
}

export default function Category({ title }) {
  const [isLoading, setIsLoading] = useState(false);
  const [listCategory, setListCategory] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://snappfood.ir/search/api/v1/desktop/new-home?lat=35.715&long=51.404&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&locale=fa"
        );
        if (!response.ok) {
          throw new Error("اطلاعات به درستی دریافت نشده است.");
        }

        const res = await response.json();
        setListCategory(res.data.result[0]["data"]["cuisines"]);
        setError();
      } catch (error) {
        setError("خطایی رخ داده است، مجددا تلاش کنید.");
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  if (error) {
    return <Error title={error} />;
  }
  return (
    <>
      {!isLoading && (
        <section className={styles.category}>
          <Title title={title} />
          <List listCategory={listCategory} />
        </section>
      )}
    </>
  );
}
