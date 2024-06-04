import styles from "./ModalAddressInput.module.css";

function ModalAddressInput(props) {
  return (
    <>
      <div className={styles.backdrop} />
      <div className={styles["modal-address-input"]}>
        {props.addressList.map((i, index) => (
          <div
            className={styles.item}
            onClick={() => {
              props.hideModalAddressInput();
              props.addressHandler(i.title + " " + i.address);
            }}
            key={index}
          >
            <h4>{i.title}</h4>
            <p>{i.address}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ModalAddressInput;
