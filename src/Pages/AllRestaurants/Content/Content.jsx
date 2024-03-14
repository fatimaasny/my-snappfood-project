import SortSelected from "../SortSelected/SortSelected";
import MainSide from "./MainSide/MainSide";
import "./Content.css";
export default function Content() {
  return (
    <div className="ContentComponent">
      <SortSelected />
      <MainSide />
    </div>
  );
}
