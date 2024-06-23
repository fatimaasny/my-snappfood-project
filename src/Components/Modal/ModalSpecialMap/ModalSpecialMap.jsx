import styles from "./ModalSpecialMap.module.css";
import ReactDom from "react-dom";
import Card from "../../Card/Card";

import imgmap from "../../../Images/Modal/map11.jpg";

import { IoCloseOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

function BackDrop(props) {
  return (
    <div className={styles.backdrop} onClick={props.hideModalSpecialMap} />
  );
}
function Header(props) {
  return (
    <div className={styles.header}>
      <button onClick={props.hideModalSpecialMap}>
        <IoCloseOutline fontSize="1.7rem" color="#666" />
      </button>
      <h4>{props.title}</h4>
    </div>
  );
}
function Map(props) {
  return (
    <div className={styles.map} style={{ background: `url(${imgmap})` }}>
      <div className={styles.zoom}>
        <button>
          <FaPlus />
        </button>
        <button>
          <FaMinus />
        </button>
      </div>
    </div>
  );
}
function Overlay(props) {
  return (
    <>
      <Card className={styles["modal-special-map"]}>
        <Header
          hideModalSpecialMap={props.hideModalSpecialMap}
          title={props.title}
        />
        <Map />
      </Card>
    </>
  );
}
function FinalModal(props) {
  return (
    <>
      <BackDrop hideModalSpecialMap={props.hideModalSpecialMap} />
      <Overlay
        hideModalSpecialMap={props.hideModalSpecialMap}
        title={props.title}
      />
    </>
  );
}
function ModalSpecialMap(props) {
  return (
    <>
      {ReactDom.createPortal(
        <FinalModal
          hideModalSpecialMap={props.hideModalSpecialMap}
          title={props.title}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default ModalSpecialMap;
