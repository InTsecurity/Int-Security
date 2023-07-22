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
          <div className="question--id">01.</div>
          <div className="question--title">
            What types of websites do you specialize in creating?
          </div>
          <div
            className={`show--answer ${CurrentClass ? "show--answered" : ""}`}
          >
            +
          </div>
        </div>
        <div className={`answer ${CurrentClass ? "display--answered" : ""}`}>
          We specialize in creating a wide range of websites, including
          portfolio sites, e-commerce platforms, content-rich blogs, corporate
          websites, and more. Our team works closely with you to customize the
          site to your specific needs and brand identity.
        </div>
      </div>
      <hr className="split--questions" />
    </div>
  );
}

export default Question;
