import ProfilePic from "../Assets/anurag.jpeg";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="content">
        <h1> I Am </h1>
        <h2> Anurag Verma </h2>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
          perferendis molestiae accusamus odio, dolores delectus a eos fugit at
          praesentium ipsum! Dicta expedita vero officiis consequatur quo
          debitis commodi doloremque.
        </h4>
      </div>
      <div className="profile-pic">
        <img src={ProfilePic} alt="Profile pic" />
      </div>
    </div>
  );
};

export default Profile;
