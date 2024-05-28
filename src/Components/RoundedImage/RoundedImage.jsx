import styles from "./RoundedImage.module.css";
export default function RoundedImage(props) {
  // return <img src={PaymentResponse.source} alt={PaymentResponse.alt} />;
  return <img src={props.source} alt={props.alt} />;
}
