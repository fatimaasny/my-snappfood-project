import reastaurant from "../../../Images/Header/HeaderDown/restaurant.png";
import supermarket from "../../../Images/Header/HeaderDown/supermarket.png";
import cafe from "../../../Images/Header/HeaderDown/cafe.png";
import sweet from "../../../Images/Header/HeaderDown/sweet.png";
import bakery from "../../../Images/Header/HeaderDown/bakery.png";
import fruit from "../../../Images/Header/HeaderDown/fruit.png";
import meat from "../../../Images/Header/HeaderDown/meat.png";
import iceCream from "../../../Images/Header/HeaderDown/icecream.png";
import nut from "../../../Images/Header/HeaderDown/nut.png";
import other from "../../../Images/Header/HeaderDown/other.png";
import "./HeaderDown.css";
import IconMenu from "./IconMenu/IconMenu";

export default function HeaderDown() {
  const menuListIcon = [
    {
      source: reastaurant,
      alt: "reastaurant.svg",
      title: "رستوران",
    },
    {
      source: supermarket,
      alt: "supermarket.svg",
      title: "سوپرمارکت",
    },
    {
      source: cafe,
      alt: "cafe.svg",
      title: "کافه",
    },
    {
      source: sweet,
      alt: "sweet.svg",
      title: "شیرینی",
    },
    {
      source: bakery,
      alt: "bakery.svg",
      title: "نانوایی",
    },
    {
      source: fruit,
      alt: "fruit.svg",
      title: "میوه",
    },
    {
      source: meat,
      alt: "meat.svg",
      title: "پروتئین",
    },
    {
      source: iceCream,
      alt: "iceCream.svg",
      title: "آبمیوه بستنی",
    },
    {
      source: nut,
      alt: "nut.svg",
      title: "آجیل",
    },
    {
      source: other,
      alt: "other.svg",
      title: "سایر",
    },
  ];
  return (
    <header className="header-down">
      {menuListIcon.map((i, index) => (
        <IconMenu key={index} title={i.title} source={i.source} alt={i.alt} />
      ))}
    </header>
  );
}
