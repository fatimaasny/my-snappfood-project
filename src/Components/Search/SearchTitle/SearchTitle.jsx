import ShowMore from "../../ShowMore/ShowMore";
import styles from "./SearchTitle.module.css";

function SearchTitle(props) {
  return (
    <div className={styles["search-title"]}>
      <p>{props.title}</p>
      <ShowMore number={props.number} />
    </div>
  );
}

export default SearchTitle;
