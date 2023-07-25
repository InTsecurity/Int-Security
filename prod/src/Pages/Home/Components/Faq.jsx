import Question from "../../../Components/Question";
import Button from "./../../../Components/Button";
import "./../Styles/Faq.css";

function Faq() {
  return (
    <div className="faq">
      <div className="services--title faq--title">
        Got Questions? <br />
        We've Got Answers!
        <div className="more--details">
          Have more questions or need further assistance? We're here to help!
          Contact our friendly team to inquire about our services, discuss your
          project requirements, or seek support for your existing website. We
          value your feedback and are excited to be your digital partner. Reach
          out to us today and let's start building your online success
          together!"
          <div className="faq--btn">
            <Button title="Countact Us" link="/ContactUs" />
          </div>
        </div>
      </div>
      <div className="questions">
        <Question id="1" />
        <Question id="2" />
        <Question id="3" />
        <Question id="4" />
        <Question id="5" />
      </div>
    </div>
  );
}

export default Faq;
