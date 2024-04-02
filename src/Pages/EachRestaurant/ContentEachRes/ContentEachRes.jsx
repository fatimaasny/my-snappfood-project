import "./ContentEachRes.css";
import SideRightEachRes from "./SideRightEachRes/SideRightEachRes";
import MainEachRes from "./MainEachRes/MainEachRes";
import SideLeftEachRes from "./SideLeftEachRes/SideLeftEachRes";
import { useState } from "react";
export default function ContentEachRes() {
  const listOfTitles = ["کوپن‌ها", "پرطرفدارها", "سوخاری"];
  const [isScrolled, setIsScrolled] = useState("");
  function HandleIsScrolled(title) {
    setIsScrolled(title);
  }
  return (
    <div className="content-each-res-component">
      <SideRightEachRes isScrolled={isScrolled} listOfTitles={listOfTitles} />
      <MainEachRes
        HandleIsScrolled={HandleIsScrolled}
        listOfTitles={listOfTitles}
      />
      <SideLeftEachRes />
    </div>
  );
}
