import { useState } from "react";
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
            apply={"More details"}
          />
        </div>
        <NewPosition
          id="1"
          title="Full-Stack Developer"
          location="Remote"
          type="Part-Time"
          apply={<Button title="More details" />}
        />
        <NewPosition
          id="2"
          title="Full-Stack Developer"
          location="Remote"
          type="Part-Time"
          apply={<Button title="More details" />}
        />
        <NewPosition
          id="3"
          title="Full-Stack Developer"
          location="Remote"
          type="Part-Time"
          apply={<Button title="More details" />}
        />
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
        Job Description: We are seeking a highly motivated and skilled [Job
        Title] to join our dynamic team. The ideal candidate will be responsible
        for [brief description of the role's main responsibilities]. If you are
        passionate about [industry or specific domain], have a keen eye for
        detail, and thrive in a collaborative environment, we'd love to hear
        from you. <br />
        <br />
        Requirements: Educational Qualifications: Bachelor's degree in [relevant
        field], or equivalent practical experience. Experience: Minimum of [X]
        years of experience in [relevant field or industry]. Experience in
        [specific tools, software, or methodologies] is a plus. Technical
        Skills: Proficiency in [required programming languages or technologies].
        Familiarity with [specific software or tools] and the ability to learn
        new technologies quickly. Strong understanding of [specific domain
        knowledge]. Analytical and Problem-Solving Abilities: Excellent
        analytical skills with the ability to identify, troubleshoot, and
        resolve complex issues efficiently. Proven track record of approaching
        challenges with innovative and creative problem-solving techniques.
        <br />
        <br />
        Communication and Collaboration: Strong verbal and written communication
        skills with the ability to effectively convey technical concepts to both
        technical and non-technical stakeholders. Demonstrated ability to work
        collaboratively in a team-oriented environment. Attention to Detail:
        Meticulous attention to detail and commitment to delivering high-quality
        work. <br />
        <br />
        Time Management: Strong organizational and time management skills to
        handle multiple tasks and meet tight deadlines. Adaptability: Ability to
        adapt quickly to changing priorities and project requirements.
        Self-Motivated: Proactive and self-driven, with the ability to work
        independently and take ownership of tasks. Industry Knowledge:
        Up-to-date knowledge of industry trends, best practices, and emerging
        technologies. Additional Information: This position may require
        occasional travel. [Any specific working conditions or benefits
        associated with the role]. <br />
        <br />
      </div>
      <hr className="newpos" />
    </>
  );
}

export default Positions;
