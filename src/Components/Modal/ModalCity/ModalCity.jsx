import styles from "./ModalCity.module.css";
import Card from "../../Card/Card";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

function ModalCity(props) {
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
    <>
      <div className={styles.backdrop} onClick={props.hideModalCity} />
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
    </>
  );
}

export default ModalCity;
