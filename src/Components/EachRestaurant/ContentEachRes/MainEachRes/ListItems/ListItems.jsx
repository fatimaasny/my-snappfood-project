import Item from "../Item/Item";
import styles from "./ListItems.module.css";

function SpecialItem(props) {
  return (
    <div className={styles["list-items-kopen-component"]}>
      <h4>{props.title}</h4>
      <div className={styles["list-of-kopen"]}>
        {props.listOfKopen.map((i, index) => (
          <div key={index} className={styles["kopen-item"]}>
            <p className={styles.first}>{i[0]}</p>
            <p className={styles.second}>{i[1]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function OtherItems(props) {
  return (
    <div className={styles["list-items-component"]}>
      <h4>{props.title}</h4>
      <div className={styles.list}>
        {props.listItem.map((i, index) => (
          <Item
            key={index}
            pName={i.pName}
            spanTag={i.spanTag}
            image={i.image}
            list={props.listItemAddbtn}
            listComments={props.listComments}
          />
        ))}
      </div>
    </div>
  );
}
export default function ListItems({
  title,
  listOfKopen,
  listItem,
  listItemAddbtn,
  listComments,
}) {
  if (title === "کوپن‌ها") {
    return <SpecialItem title={title} listOfKopen={listOfKopen} />;
  }
  return (
    <OtherItems
      title={title}
      listItem={listItem}
      listItemAddbtn={listItemAddbtn}
      listComments={listComments}
    />
  );
}
