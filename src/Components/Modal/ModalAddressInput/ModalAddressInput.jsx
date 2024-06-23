import styles from "./ModalAddressInput.module.css";
import ReactDOM from "react-dom";

function BackDrop(props) {
  return <div className={styles.backdrop} />;
}
function Overlay(props) {
  return (
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
  );
}

function FinalModal(props) {
  return (
    <>
      <BackDrop />
      <Overlay
        addressList={props.addressList}
        hideModalAddressInput={props.hideModalAddressInput}
        addressHandler={props.addressHandler}
      />
    </>
  );
}

function ModalAddressInput(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <FinalModal
          addressList={props.addressList}
          hideModalAddressInput={props.hideModalAddressInput}
          addressHandler={props.addressHandler}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default ModalAddressInput;
