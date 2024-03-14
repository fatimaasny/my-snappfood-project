import "./MainSide.css";
import SidebarAllRes from "./SidebarAllRes/SidebarAllRes";
import MainAllRes from "./MainAllRes/MainAllRes";
export default function MainSide() {
  return (
    <div className="MainSideCompAllRes">
      <SidebarAllRes />
      <MainAllRes />
    </div>
  );
}
