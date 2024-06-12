import Item from "../Item/Item";
import styles from "./ListItems.module.css";
export default function ListItems({
  title,
  listOfKopen,
  listItem,
  listItemAddbtn,
  listComments,
}) {
  if (title === "کوپن‌ها") {
    return (
      <div className={styles["list-items-kopen-component"]}>
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
    <div className={styles["list-items-component"]}>
      <h4>{title}</h4>
      <div className={styles.list}>
        {listItem.map((i, index) => (
          <Item
            key={index}
            pName={i.pName}
            spanTag={i.spanTag}
            image={i.image}
            list={listItemAddbtn}
            listComments={listComments}
          />
        ))}
      </div>
    </div>
  );
}
