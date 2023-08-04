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
            Whether you're curious about our services or need expert advice,
            we're here to assist you. Reach out to us for prompt and
            personalized support. Let's connect and make your website dreams a
            reality!"
            <br />
            <br />
            <br />
            *WE RECOMMEND YOU TO CHECK OUT OUR SERVICES TAB BEFORE YOU CONTACT
            US*
          </div>
          {success}
        </div>
      </div>
    </div>
  );
}

export default Contactus;
