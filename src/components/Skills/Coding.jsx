import { useState } from "react";
import "./Coding.css";
import CP from "../CP/CP";

const Coding = (props) => {
  const [participation, setParticipartions] = useState(false);

  const setParticipationHandler = () => {
    setParticipartions(true);
  };

  return (
    <div className="code">
      {participation && <CP />}
      <h1>Competitive Codiing</h1>
      <h2>Languages: {props.languages}</h2>
      <button onClick={() => setParticipationHandler()}>Participation</button>
    </div>
  );
};

export default Coding;
