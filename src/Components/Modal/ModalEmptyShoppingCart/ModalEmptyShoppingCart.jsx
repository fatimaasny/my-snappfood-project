import { createPortal } from "react-dom";
import styles from "./ModalEmptyShoppingCart.module.css";

function ModalEmptyShoppingCart({ title, actions, dialogRef }) {
  return createPortal(
    <dialog ref={dialogRef} className={styles.dialog}>
      <h2>{title}</h2>
      <form method="dialog">{actions}</form>
    </dialog>,
    document.getElementById("modal-root")
  );
}

export default ModalEmptyShoppingCart;
