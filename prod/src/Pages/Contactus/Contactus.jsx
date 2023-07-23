import { useEffect, useState } from "react";
import ContactUsForm from "./Components/Form";
import CircularOverflows from "./Components/CircularOverflows";
import "./styles/main.css";

function Contactus() {
  const [success, setsuccess] = useState();

  useEffect(() => {
    setsuccess(<ContactUsForm setsuccess={setsuccess} />);
  }, []);

  return (
    <div className="contactus">
      <div className="packageoverview contactus--form">
        <CircularOverflows />

        <div className="contactus--content">
          <div className="contactus--head">Let's Talk!</div>
          <div className="cus--quote">
            Don't leave your business vulnerable to cyber attacks. Protect it
            with our expert cyber security solutions. Contact us now.
          </div>
          {success}
        </div>
      </div>
    </div>
  );
}

export default Contactus;
