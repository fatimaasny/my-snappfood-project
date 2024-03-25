import "./ContentEachRes.css";
import SideRightEachRes from "./SideRightEachRes/SideRightEachRes";
import MainEachRes from "./MainEachRes/MainEachRes";
import SideLeftEachRes from "./SideLeftEachRes/SideLeftEachRes";
import { useState } from "react";
export default function ContentEachRes() {
  const [isScrolled, setIsScrolled] = useState(false);
  function HandleIsScrolled() {
    setIsScrolled(true);
  }
  return (
    <div className="content-each-res-component">
      <SideRightEachRes isScrolled={isScrolled} />
      <MainEachRes HandleIsScrolled={HandleIsScrolled} />
      <SideLeftEachRes />
    </div>
  );
}
