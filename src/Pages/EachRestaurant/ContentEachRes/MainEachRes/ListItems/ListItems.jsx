import Item from "../Item/Item";
import "./ListItems.css";
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
        className="list-items-kopen-component"
        onScroll={HandleIsScrolled(title)}
      >
        <h4>{title}</h4>
        <div className="list-of-kopen">
          {listOfKopen.map((i, index) => (
            <div key={index} className="kopen-item">
              <p className="first">{i[0]}</p>
              <p className="second">{i[1]}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="list-items-component" onScroll={HandleIsScrolled(title)}>
      <h4>{title}</h4>
      <div className="list">
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
