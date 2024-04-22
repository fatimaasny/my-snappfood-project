import styles from "./Link.module.css";
export default function Link(props) {
  return (
    <a href="#" className={styles.link}>
      {props.children}
    </a>
  );
}
