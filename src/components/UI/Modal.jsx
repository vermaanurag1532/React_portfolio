import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.BackDrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}> {props.children} </div>
    </div>
  );
};

const Modal = (props) => {
  console.log(props.onClose);
  return (
    <div>
      <BackDrop onClose={props.onClose} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </div>
  );
};

export default Modal;
