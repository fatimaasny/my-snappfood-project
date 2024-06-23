import styles from "./ModalCity.module.css";
import Card from "../../Card/Card";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import ReactDOM from "react-dom";

const list = [
  "تهران",
  "اصفهان",
  "شیراز",
  "تبریز",
  "کاشان",
  "کرج",
  "گچساران",
  "شاهین شهر",
  "رامسر",
  "همدان",
  "اراک",
  "ری",
  "ساوه",
  "یاسوج",
  "ساری",
  "بوشهر",
  "گناوه",
  "اهواز",
  "خمین شهر",
  "آباده",
  "مرودشت",
  "کنگان",
];

function BackDrop(props) {
  return <div className={styles.backdrop} onClick={props.hideModalCity} />;
}
function Overlay(props) {
  const [listCity, setListCity] = useState([...list]);

  const filterListHandler = async (value) => {
    let nlist = [];
    if (value === "") {
      nlist = list;
    } else {
      nlist = listCity.filter((i) => i.includes(value));
    }
    await setListCity(nlist);
  };
  return (
    <Card className={styles.modalcity}>
      <input
        type="text"
        value={props.inputCity}
        onChange={(e) => {
          props.inputCityHandler(e);
          filterListHandler(e.target.value);
        }}
        placeholder="جستجوی نام شهر..."
      />

      {!!listCity.length && (
        <div>
          {listCity.map((city, index) => (
            <p
              key={index}
              onClick={() => {
                props.liInputHandler(city);
              }}
            >
              {city}
            </p>
          ))}
        </div>
      )}
    </Card>
  );
}
function FinalModal(props) {
  return (
    <>
      <BackDrop hideModalCity={props.hideModalCity} />
      <Overlay
        inputCity={props.inputCity}
        inputCityHandler={props.inputCityHandler}
        liInputHandler={props.liInputHandler}
      />
    </>
  );
}

function ModalCity(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <FinalModal
          hideModalCity={props.hideModalCity}
          inputCity={props.inputCity}
          inputCityHandler={props.inputCityHandler}
          liInputHandler={props.liInputHandler}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default ModalCity;
