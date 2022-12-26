import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";

const PostShare = () => {
  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input type="text" placeholder="What's happening?" />
        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo)" }}>
            <UilScenery></UilScenery>
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle></UilPlayCircle>
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint></UilLocationPoint>
            Location
          </div>
          <div className="option" style={{ color: "var(--schedule)" }}>
            <UilSchedule></UilSchedule>
            Schedule
          </div>
          <button className="button ps-button">Share</button>
        </div>
      </div>
    </div>
  );
};

export default PostShare;
