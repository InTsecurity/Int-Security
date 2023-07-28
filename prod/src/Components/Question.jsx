import "./styles/Questions.css";
import { useState } from "react";

function Question(props) {
  const [ActiveAnswer, setActiveAnswer] = useState(false);
  let CurrentClass = false;
  if (ActiveAnswer === "answer" + props.id) {
    CurrentClass = true;
  }

  const HandelClick = (id) => {
    let ClassName = "answer" + id;
    if (ActiveAnswer !== ClassName) {
      setActiveAnswer(ClassName);
    } else {
      setActiveAnswer("");
    }
  };

  return (
    <div>
      <div className="question">
        <div
          className="question--wrapper"
          onClick={(e) => {
            HandelClick(props.id);
          }}
        >
          <div className="question--id">{props.id}.</div>
          <div className="question--title">{props.question}</div>
          <div
            className={`show--answer ${CurrentClass ? "show--answered" : ""}`}
          >
            +
          </div>
        </div>
        <div className={`answer ${CurrentClass ? "display--answered" : ""}`}>
          {props.answer}
        </div>
      </div>
      <hr className="split--questions" />
    </div>
  );
}

export default Question;
