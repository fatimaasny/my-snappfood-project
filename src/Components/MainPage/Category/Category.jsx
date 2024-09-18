import styles from "./Category.module.css";

import irani from "../../../Images/Main/Category/irani.jpg";
import fastFood from "../../../Images/Main/Category/fastFood.jpg";
import kabab from "../../../Images/Main/Category/kabab.jpg";
import pizza from "../../../Images/Main/Category/pizza.jpg";
import burgur from "../../../Images/Main/Category/burger.jpg";
import sandwich from "../../../Images/Main/Category/sandwich.jpg";
import sokhari from "../../../Images/Main/Category/sokhari.jpg";
import pasta from "../../../Images/Main/Category/pasta.jpg";
import salad from "../../../Images/Main/Category/salad.jpg";
import seaFood from "../../../Images/Main/Category/seafood.jpg";
import asian from "../../../Images/Main/Category/asian.jpg";
import gilani from "../../../Images/Main/Category/gilani.jpg";
import CategoryItem from "./CategoryItem/CategoryItem";
import { useEffect, useState } from "react";

function Title(props) {
  return <h3>{props.title}</h3>;
}
function List(props) {
  return (
    <div className={styles.list}>
      {props.foodList.map((item) => (
        <CategoryItem
          key={item.id}
          source={item.icon}
          title={item.title}
          // alt={item.alt}
        />
      ))}
    </div>
  );
}

export default function Category({ title }) {
  const foodList = [
    {
      source: irani,
      title: "ایرانی",
      alt: "irani.jpg",
    },
    {
      source: fastFood,
      title: "فست فود",
      alt: "fastfood.jpg",
    },
    {
      source: kabab,
      title: "کباب",
      alt: "kabab.jpg",
    },
    {
      source: pizza,
      title: "پیتزا",
      alt: "pizza.jpg",
    },
    {
      source: burgur,
      title: "برگر",
      alt: "butgur.jpg",
    },
    {
      source: sandwich,
      title: "ساندویچ",
      alt: "sandwich.jpg",
    },
    {
      source: sokhari,
      title: "سوخاری",
      alt: "sokhari.jpg",
    },
    {
      source: pasta,
      title: "پاستا",
      alt: "pasta.jpg",
    },
    {
      source: salad,
      title: "سالاد",
      alt: "salad.jpg",
    },
    {
      source: seaFood,
      title: "دریایی",
      alt: "seaFood.jpg",
    },
    {
      source: asian,
      title: "بین الملل",
      alt: "asian.jpg",
    },
    {
      source: gilani,
      title: "گیلانی",
      alt: "gilani.jpg",
    },
  ];
  const [listCategory, setListCategory] = useState([]);
  useEffect(() => {
    fetch(
      "https://snappfood.ir/search/api/v1/desktop/new-home?lat=35.715&long=51.404&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=062e72f3-53b7-45ef-a801-b7bfb5d0f6e0&locale=fa"
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setListCategory(res.data.result[0]["data"]["cuisines"]);
      });
  }, []);
  return (
    <section className={styles.category}>
      <Title title={title} />
      <List foodList={listCategory} />
      {/* {listCategory.map((item) => (
        <p>{item.title}</p>
      ))} */}
    </section>
  );
}
