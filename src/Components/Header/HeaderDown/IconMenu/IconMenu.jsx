import styles from "./IconMenu.module.css";
export default function IconMenu({ icon, title }) {
  return (
    <div className={styles.icon}>
      <img src={icon} />
      <p>{title}</p>
    </div>
  );
}
