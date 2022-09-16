import Modal from "../UI/Modal";
import "./CP.css";
// import classes from "./Project.module.css";

const CP = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className="participation">
        <h1>Participations</h1>
        <ul>
          <li>
            SIH 2022 Internal Hackathon :
            <a href="https://github.com/vermaanurag1532/Resturant_Meal">
              Click
            </a>
          </li>
          <li>
            Competitive Programming Hackathon :
            <a href="https://github.com/vermaanurag1532/Resturant_Meal">
              Click
            </a>
          </li>
        </ul>
      </div>
      <button>close</button>
    </Modal>
  );
};

export default CP;
