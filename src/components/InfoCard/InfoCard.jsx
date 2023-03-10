import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
const InfoCard = () => {
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen width="2rem" height="1.2rem" />
        </div>
      </div>
      <div className="info">
        <span>
          <b>Status</b>
        </span>
        <span> In a Relationship</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in</b>
        </span>
        <span> San Antonio</span>
      </div>
      <div className="info">
        <span>
          <b>Works At</b>
        </span>
        <span> Home</span>
      </div>
      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
