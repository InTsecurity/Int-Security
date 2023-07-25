import Button from "../../../Components/Button";
import "./../Styles/positions.css";

function Positions() {
  return (
    <div className="positions">
      <div className="main">
        <div className="headlines">
          <NewPosition
            title="Positon"
            location="Location"
            type="Type"
            dis="none"
            apply={"Apply"}
          />
        </div>
        <NewPosition
          title="Full-Stack Developer"
          location="Remote"
          type="Part-Time"
          apply={<Button title="Apply" />}
        />
        <NewPosition
          title="Full-Stack Developer"
          location="Remote"
          type="Part-Time"
          apply={<Button title="Apply" />}
        />
        <NewPosition
          title="Full-Stack Developer"
          location="Remote"
          type="Part-Time"
          apply={<Button title="Apply" />}
        />
      </div>
    </div>
  );
}

function NewPosition(props) {
  return (
    <div className="newpos">
      <div className="pos--element pos--name">{props.title}</div>
      <div className="pos--element pos--location">{props.location}</div>
      <div className="pos--element pos--type">{props.type}</div>
      <div className="pos--element pos--apply">{props.apply}</div>
    </div>
  );
}

export default Positions;
