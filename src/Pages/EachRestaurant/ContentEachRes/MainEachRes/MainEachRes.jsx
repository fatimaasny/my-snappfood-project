import ListItems from "./ListItems/ListItems";
import "./MainEachRes.css";
import foodImg from "../../../../Images/EachRestaurant/foodiii.jpg";
export default function MainEachRes({ HandleIsScrolled, listOfTitles }) {
  // const listOfTitles = ["کوپن‌ها", "پرطرفدارها", "سوخاری"];
  const listOfKopen = [
    ["ماست موسیر خامه ای رایگان", "مخصوص سفارش اول"],
    ["نوشابه خانواده اسپرایت رایگان", "با خرید از دسته ی سینی کباب"],
    ["ماست موسیر خامه ای رایگان", "مخصوص سفارش اول"],
  ];
  const listItemAddbtn1 = [
    {
      title: "ممتاز یک سیخ 250 گرمی",
      discount: "10% ",
      oldPrice: "130,000 تومان",
      newPrice: "117,000 تومان",
    },
    {
      title: false,
      discount: false,
      oldPrice: false,
      newPrice: "50,000 تومان",
    },
    ,
    {
      title: "ممتاز یک سیخ 250 گرمی",
      discount: false,
      oldPrice: false,
      newPrice: "320,000 تومان",
    },
  ];

  const listItemAddbtn2 = [
    {
      title: "ممتاز یک سیخ 250 گرمی",
      discount: false,
      oldPrice: false,
      newPrice: "320,000 تومان",
    },

    {
      title: false,
      discount: "20% ",
      oldPrice: "200,000 تومان",
      newPrice: "160,000 تومان",
    },
  ];
  const listItem1 = [
    {
      pName: "چلو کباب دیگی",
      spanTag:
        "150 گرم گوشت گوساله ، 335 گرم برنج ساده به همراه 30 گرم برنح ایرانی",
      image: foodImg,
    },
    {
      pName: "چلو کباب دیگی",
      spanTag:
        "150 گرم گوشت گوساله ، 335 گرم برنج ساده به همراه 30 گرم برنح ایرانی",
      image: foodImg,
    },
    {
      pName: "چلو کباب دیگی",
      spanTag:
        "150 گرم گوشت گوساله ، 335 گرم برنج ساده به همراه 30 گرم برنح ایرانی",
      image: foodImg,
    },
  ];

  const listItem2 = [
    {
      pName: "چلو کباب دیگی",
      spanTag:
        "150 گرم گوشت گوساله ، 335 گرم برنج ساده به همراه 30 گرم برنح ایرانی",
      image: foodImg,
    },
    {
      pName: "چلو کباب دیگی",
      spanTag:
        "150 گرم گوشت گوساله ، 335 گرم برنج ساده به همراه 30 گرم برنح ایرانی",
      image: foodImg,
    },
  ];
  return (
    <div className="main-each-res-component">
      <ListItems
        title={listOfTitles[0]}
        listOfKopen={listOfKopen}
        listItem={listItem1}
        listItemAddbtn={false}
        HandleIsScrolled={HandleIsScrolled}
      />
      <ListItems
        title={listOfTitles[1]}
        listOfKopen={false}
        listItem={listItem1}
        listItemAddbtn={listItemAddbtn1}
        HandleIsScrolled={HandleIsScrolled}
      />
      <ListItems
        title={listOfTitles[2]}
        listOfKopen={false}
        listItem={listItem2}
        listItemAddbtn={listItemAddbtn2}
        HandleIsScrolled={HandleIsScrolled}
      />
    </div>
  );
}
