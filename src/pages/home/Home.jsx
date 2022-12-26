import "./Home.css";
import ProfileSide from "../../components/profileside/ProfileSide";

const Home = () => {
  return (
    <div className="Home">
      <ProfileSide></ProfileSide>
      <div className="postSide">Post</div>
      <div className="rightSide">Right</div>
    </div>
  );
};

export default Home;
