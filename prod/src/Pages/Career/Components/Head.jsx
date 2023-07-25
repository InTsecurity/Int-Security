import Button from "../../../Components/Button";
import "./../Styles/head.css";

function Head() {
  return (
    <div className="career--head">
      <div className="title">Careers</div>
      <div className="title--dis">
        Start working for top startup over the world. Ready to boost your
        career?
        <div className="title--btn">
          <Button title="Open positions (3)" />
        </div>
      </div>
    </div>
  );
}

export default Head;
