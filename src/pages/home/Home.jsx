import "./Home.css";
import ProfileSide from "../../components/profileside/ProfileSide";
import PostSide from "../../components/PostSide/PostSide";

const Home = () => {
  return (
    <div className="Home">
      <ProfileSide></ProfileSide>
      <PostSide></PostSide>
      <div className="rightSide">Right</div>
    </div>
  );
};

export default Home;
