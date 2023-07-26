import Apply from "./Components/Apply";
import Head from "./Components/Head";
import Positions from "./Components/Positions";

function Career() {
  return (
    <div className="career">
      <Head />
      <hr className="divider" />
      <Positions />
      <Apply />
    </div>
  );
}

export default Career;
