import styles from "./IconMenu.module.css";
export default function IconMenu({ source, title, alt }) {
  return (
    <div className={styles.icon}>
      <img src={source} alt={alt} />
      <p>{title}</p>
    </div>
  );
}
