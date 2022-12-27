import PostSide from "../../components/PostSide/PostSide";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft />
      <div className="ProfileCenter">
        <ProfileCard />
        <PostSide />
      </div>
      <div className="ProfileRight"></div>
    </div>
  );
};

export default Profile;
