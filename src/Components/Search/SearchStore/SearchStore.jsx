import styles from "./SearchStore.module.css";

function SearchStore(props) {
  return (
    <div className={styles["search-store"]}>
      <button>{props.icon}</button>
      <p>{props.name}</p>
      {props.search && <span>{props.search}</span>}
    </div>
  );
}

export default SearchStore;
