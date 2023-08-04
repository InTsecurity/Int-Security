import { useState } from "react";
import Button from "../../../Components/Button";
import { Job } from "../Jobs/Jobs";

import "./../Styles/positions.css";

function Positions() {
  const jobs = Job.map((e) => {
    return (
      <NewPosition
        id={e.id}
        title={e.title}
        location={e.location}
        type={e.type}
        description={e.description}
        requirements={e.requirements}
        responsibility={e.responsibility}
        key={e.title}
        apply={<Button title="More Details" />}
      />
    );
  });
  return (
    <div className="positions">
      <div className="main">
        <div className="headlines">
          <NewPosition
            title="Positon"
            location="Location"
            type="Type"
            dis="none"
            apply={"More details"}
          />
        </div>
        {jobs}
      </div>
    </div>
  );
}

function NewPosition(props) {
  const [moreInfo, setmoreInfo] = useState("");

  function HandleClick(id) {
    if (moreInfo !== id) {
      setmoreInfo(id);
    } else {
      setmoreInfo("");
    }
  }
  let isSame = false;
  if (moreInfo === props.id) {
    isSame = true;
  }
  return (
    <>
      <div
        className="newpos"
        onClick={(e) => {
          HandleClick(props.id);
        }}
      >
        <div className="pos--element pos--name">{props.title}</div>
        <div className="pos--element pos--location">{props.location}</div>
        <div className="pos--element pos--type">{props.type}</div>
        <div className="pos--element pos--apply">{props.apply}</div>
      </div>
      <div
        className={`${
          isSame ? "more--info more--info--display" : "more--info"
        }`}
      >
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: props.description }}
        ></div>
        <br />
        <div
          className="of-d requirements"
          dangerouslySetInnerHTML={{ __html: props.requirements }}
        ></div>
        <br />
        <div
          className="of-d responsibilty"
          dangerouslySetInnerHTML={{ __html: props.responsibility }}
        ></div>
      </div>
      <br />
      <hr className="newpos" />
    </>
  );
}

export default Positions;
