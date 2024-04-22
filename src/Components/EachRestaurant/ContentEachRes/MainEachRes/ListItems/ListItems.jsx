import Item from "../Item/Item";
import styles from "./ListItems.module.css";
export default function ListItems({
  title,
  listOfKopen,
  listItem,
  listItemAddbtn,
  HandleIsScrolled,
}) {
  if (title === "کوپن‌ها") {
    return (
      <div
        className={styles["list-items-kopen-component"]}
        onScroll={HandleIsScrolled(title)}
      >
        <h4>{title}</h4>
        <div className={styles["list-of-kopen"]}>
          {listOfKopen.map((i, index) => (
            <div key={index} className={styles["kopen-item"]}>
              <p className={styles.first}>{i[0]}</p>
              <p className={styles.second}>{i[1]}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div
      className={styles["list-items-component"]}
      onScroll={HandleIsScrolled(title)}
    >
      <h4>{title}</h4>
      <div className={styles.list}>
        {
          //  { pName, spanTag, image, listofaddbtn }
          // مپ بزنیم روی ایتم و به صورت پراپس براش بفرستیم
          listItem.map((i, index) => (
            <Item
              pName={i.pName}
              spanTag={i.spanTag}
              image={i.image}
              list={listItemAddbtn}
            />
          ))
        }
      </div>
    </div>
  );
}
