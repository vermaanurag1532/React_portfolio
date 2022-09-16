import "./Coding.css";
import Button from "../UI/Button";

const Coding = (props) => {
  return (
    <div className="code">
      <h1>Competitive Codiing</h1>
      <h2>Languages: {props.languages}</h2>
      <Button name="Participations" />
    </div>
  );
};

export default Coding;
