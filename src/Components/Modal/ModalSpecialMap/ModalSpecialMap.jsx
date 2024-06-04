import styles from "./ModalSpecialMap.module.css";
import Card from "../../Card/Card";

import imgmap from "../../../Images/Modal/map11.jpg";

import { IoCloseOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

function ModalSpecialMap(props) {
  return (
    <>
      <div className={styles.backdrop} onClick={props.hideModalSpecialMap} />
      <Card className={styles["modal-special-map"]}>
        <div className={styles.header}>
          <button onClick={props.hideModalSpecialMap}>
            <IoCloseOutline fontSize="1.7rem" color="#666" />
          </button>
          <h4>{props.title}</h4>
        </div>
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
      </Card>
    </>
  );
}

export default ModalSpecialMap;
