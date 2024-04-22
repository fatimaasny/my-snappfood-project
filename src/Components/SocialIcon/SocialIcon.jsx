import styles from "./SocialIcon.module.css";
export default function SocialIcon(props) {
  return (
    <a href="#" className={styles.icon}>
      <img className={styles.image} src={props.source} alt={props.alt} />
    </a>
  );
}
