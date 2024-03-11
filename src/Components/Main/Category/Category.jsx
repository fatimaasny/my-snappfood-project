import "./Category.css";
import angelLeft from "../../../Images/Main/angelleft.svg";
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

  return (
    <section className="category">
      <h3>{title}</h3>
      <div className="list">
        {foodList.map((item, index) => (
          <CategoryItem
            key={index}
            source={item.source}
            title={item.title}
            alt={item.alt}
          />
        ))}
      </div>
    </section>
  );
}
