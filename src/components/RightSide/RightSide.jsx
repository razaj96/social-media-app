import "./RightSide.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div className="navIcons">
        <img src={Home} alt="" />
        <UilSetting></UilSetting>
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>
      <TrendCard></TrendCard>
    </div>
  );
};

export default RightSide;
