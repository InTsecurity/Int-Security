import Button from "../../../Components/Button";
import { Job } from "../Jobs/Jobs";
import "./../Styles/head.css";

function Head() {
  const AvailableJobs = Job.length;
  let title = `Open Positions(${AvailableJobs})`;
  return (
    <div className="career--head">
      <div className="title">Careers</div>
      <div className="title--dis">
        Start working for top startup over the world. We believe that great
        talent drives exceptional results. If you're passionate, innovative, and
        eager to make a difference, we want to hear from you! Our team is always
        on the lookout for talented individuals to join us on our journey to
        empower startups and fortify the digital landscape.
        <div className="title--btn">
          <Button title={title} />
        </div>
      </div>
    </div>
  );
}

export default Head;
