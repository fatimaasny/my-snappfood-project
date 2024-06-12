import styles from "./SocialIcon.module.css";
export default function SocialIcon(props) {
  return (
    <button className={styles.icon}>
     {props.icon}
    </button>
  );
}
