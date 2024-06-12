import styles from "./Discount.module.css";
export default function Discount(props) {
  return (
    <div className={`${styles.discount} ${props.className} `}>
      <p>{props.discount}</p>
    </div>
  );
}
