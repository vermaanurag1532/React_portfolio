import Modal from "../UI/Modal";
import classes from "./Project.module.css";

const Project = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div>
        <h1>Projects</h1>
      </div>
    </Modal>
  );
};

export default Project;
